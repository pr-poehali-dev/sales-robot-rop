import { Button } from '@/components/ui/button';

interface NavigationProps {
  onContactClick: () => void;
}

const Navigation = ({ onContactClick }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            🤖
          </div>
          <span className="text-xl font-bold">Робот РОП 1.0</span>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#who" className="text-sm hover:text-primary transition-colors">Кому полезен</a>
          <a href="#how" className="text-sm hover:text-primary transition-colors">Как работает</a>
          <a href="#results" className="text-sm hover:text-primary transition-colors">Выгода</a>
          <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакт</a>
        </div>
        <Button onClick={onContactClick} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
          Получить консультацию
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;