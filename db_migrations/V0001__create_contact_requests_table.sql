CREATE TABLE IF NOT EXISTS contact_requests (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(50) DEFAULT 'new'
);

CREATE INDEX idx_contact_requests_created_at ON contact_requests(created_at DESC);
CREATE INDEX idx_contact_requests_status ON contact_requests(status);