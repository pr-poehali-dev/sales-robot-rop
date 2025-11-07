'''
Business: Save contact form submissions to database and send email notification
Args: event with httpMethod (POST, OPTIONS), body with name, phone, message
Returns: HTTP response with success status
'''
import json
import os
import psycopg2
from psycopg2.extras import RealDictCursor
from typing import Dict, Any
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    # Handle CORS OPTIONS request
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
    
    # Parse request body
    body_data = json.loads(event.get('body', '{}'))
    name: str = body_data.get('name', '').strip()
    phone: str = body_data.get('phone', '').strip()
    message: str = body_data.get('message', '').strip()
    
    # Validate required fields
    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Name and phone are required'})
        }
    
    # Connect to database
    database_url = os.environ.get('DATABASE_URL')
    conn = psycopg2.connect(database_url)
    cursor = conn.cursor(cursor_factory=RealDictCursor)
    
    # Insert contact request
    insert_query = """
        INSERT INTO contact_requests (name, phone, message)
        VALUES (%s, %s, %s)
        RETURNING id, created_at
    """
    cursor.execute(insert_query, (name, phone, message if message else None))
    result = cursor.fetchone()
    
    conn.commit()
    cursor.close()
    conn.close()
    
    # Send email notification
    try:
        send_email_notification(name, phone, message)
    except Exception as e:
        # Log error but don't fail the request
        print(f"Failed to send email: {str(e)}")
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'isBase64Encoded': False,
        'body': json.dumps({
            'success': True,
            'id': result['id'],
            'created_at': result['created_at'].isoformat()
        })
    }

def send_email_notification(name: str, phone: str, message: str) -> None:
    smtp_host = os.environ.get('SMTP_HOST')
    smtp_port = int(os.environ.get('SMTP_PORT', '587'))
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    email_to = os.environ.get('EMAIL_TO')
    
    if not all([smtp_host, smtp_user, smtp_password, email_to]):
        print("SMTP configuration incomplete")
        return
    
    # Create message
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f'Новая заявка от {name}'
    msg['From'] = smtp_user
    msg['To'] = email_to
    
    # Create HTML body
    html_body = f"""
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #4F46E5; margin-bottom: 20px;">🤖 Новая заявка с сайта Робот РОП</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 6px; margin-bottom: 15px;">
            <p style="margin: 0 0 10px 0;"><strong>👤 Имя:</strong> {name}</p>
            <p style="margin: 0 0 10px 0;"><strong>📱 Телефон:</strong> {phone}</p>
            <p style="margin: 0 0 10px 0;"><strong>💬 Сообщение:</strong><br>{message if message else '—'}</p>
            <p style="margin: 0; color: #666; font-size: 14px;"><strong>🕐 Дата:</strong> {datetime.now().strftime('%d.%m.%Y %H:%M')}</p>
          </div>
          
          <p style="color: #666; font-size: 14px; margin-top: 20px;">
            Это автоматическое уведомление с вашего сайта.
          </p>
        </div>
      </body>
    </html>
    """
    
    msg.attach(MIMEText(html_body, 'html', 'utf-8'))
    
    # Send email
    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_password)
        server.send_message(msg)