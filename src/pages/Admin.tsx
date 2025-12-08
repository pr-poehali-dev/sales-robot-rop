import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import AdminLogin from '@/components/AdminLogin';
import AdminSettings from '@/components/AdminSettings';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Contact {
  id: number;
  name: string;
  phone: string;
  message: string;
  created_at: string;
  site?: string;
}

const Admin = () => {
  const { toast } = useToast();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('contacts');

  const fetchContacts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://functions.poehali.dev/6d5d7d9e-8586-4149-828f-100306aecd00');
      const data = await response.json();
      
      if (response.ok && data.contacts) {
        setContacts(data.contacts);
      } else {
        toast({
          title: "Ошибка",
          description: "Не удалось загрузить заявки",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось подключиться к серверу",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const authStatus = sessionStorage.getItem('admin_authenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      fetchContacts();
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLogin = (password: string) => {
    const storedPassword = localStorage.getItem('admin_password') || 'q123456';
    if (password === storedPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_authenticated', 'true');
      toast({
        title: "Успешный вход",
        description: "Добро пожаловать в админ-панель",
      });
      fetchContacts();
    } else {
      toast({
        title: "Ошибка входа",
        description: "Неверный пароль",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_authenticated');
    toast({
      title: "Выход выполнен",
      description: "Вы вышли из админ-панели",
    });
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Админ-панель</h1>
            <p className="text-muted-foreground">Управление заявками и настройками</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            <Icon name="LogOut" className="mr-2" size={18} />
            Выйти
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="contacts" className="flex items-center gap-2">
              <Icon name="Inbox" size={18} />
              Заявки
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Icon name="Settings" size={18} />
              Настройки
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contacts">
            <div className="flex justify-end mb-4">
              <Button onClick={fetchContacts} variant="outline" disabled={isLoading}>
                <Icon name="RefreshCw" className="mr-2" size={18} />
                Обновить
              </Button>
            </div>

            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <Icon name="Loader2" className="animate-spin text-primary" size={48} />
              </div>
            ) : contacts.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Icon name="Inbox" className="mx-auto mb-4 text-muted-foreground" size={64} />
                  <h3 className="text-xl font-semibold mb-2">Заявок пока нет</h3>
                  <p className="text-muted-foreground">Здесь появятся все отправленные заявки</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground mb-4">
                  Всего заявок: <span className="font-semibold text-foreground">{contacts.length}</span>
                </div>
                
                {contacts.map((contact) => (
                  <Card key={contact.id} className="border-primary/20 hover:border-primary/40 transition-all">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-1">{contact.name}</CardTitle>
                          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Icon name="Phone" size={14} />
                                <a href={`tel:${contact.phone}`} className="hover:text-primary transition-colors">
                                  {contact.phone}
                                </a>
                              </div>
                              <div className="flex items-center gap-1">
                                <Icon name="Calendar" size={14} />
                                {formatDate(contact.created_at)}
                              </div>
                            </div>
                            {contact.site && (
                              <div className="flex items-start gap-1">
                                <Icon name="Globe" size={14} className="mt-0.5 flex-shrink-0" />
                                <a 
                                  href={contact.site} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="hover:text-primary transition-colors break-all text-xs"
                                >
                                  {contact.site}
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                          #{contact.id}
                        </div>
                      </div>
                    </CardHeader>
                    {contact.message && (
                      <CardContent>
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="text-sm text-muted-foreground mb-1 flex items-center gap-1">
                            <Icon name="MessageSquare" size={14} />
                            Сообщение:
                          </p>
                          <p className="text-foreground">{contact.message}</p>
                        </div>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="settings">
            <AdminSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;