import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const AdminSettings = () => {
  const { toast } = useToast();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const storedPassword = localStorage.getItem('admin_password') || 'q123456';

    if (currentPassword !== storedPassword) {
      toast({
        title: "Ошибка",
        description: "Текущий пароль неверный",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      toast({
        title: "Ошибка",
        description: "Новый пароль должен содержать минимум 6 символов",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: "Ошибка",
        description: "Пароли не совпадают",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    localStorage.setItem('admin_password', newPassword);
    sessionStorage.removeItem('admin_authenticated');

    toast({
      title: "Пароль изменен",
      description: "Пароль успешно обновлен. Войдите снова с новым паролем.",
    });

    setTimeout(() => {
      window.location.reload();
    }, 1500);

    setIsLoading(false);
  };

  return (
    <Card className="max-w-2xl">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon name="Settings" className="text-primary" size={24} />
          </div>
          <div>
            <CardTitle>Настройки безопасности</CardTitle>
            <CardDescription>Изменение пароля доступа к админ-панели</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleChangePassword} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current">Текущий пароль</Label>
            <Input
              id="current"
              type="password"
              placeholder="Введите текущий пароль"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>

          <div className="h-px bg-border my-6" />

          <div className="space-y-2">
            <Label htmlFor="new">Новый пароль</Label>
            <Input
              id="new"
              type="password"
              placeholder="Минимум 6 символов"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirm">Подтвердите новый пароль</Label>
            <Input
              id="confirm"
              type="password"
              placeholder="Повторите новый пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            <Icon name="Lock" size={18} className="mr-2" />
            {isLoading ? 'Сохранение...' : 'Изменить пароль'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AdminSettings;