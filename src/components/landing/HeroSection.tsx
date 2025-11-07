import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onContactClick: () => void;
}

const HeroSection = ({ onContactClick }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              🤖 Робот РОП 1.0 — ваш AI-помощник по анализу сделок
            </h1>
            <p className="text-xl text-muted-foreground">
              Объединяет звонки, переписки и CRM, чтобы видеть реальное состояние каждой сделки — 
              ещё до того, как вы её потеряете.
            </p>
            <div className="pt-4">
              <Button onClick={onContactClick} size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 w-full">
                <Icon name="TrendingDown" className="mr-2" size={20} />
                Узнать, где теряются продажи
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Clock" className="text-primary flex-shrink-0" size={18} />
                <span>Анализ сделок 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="AlertTriangle" className="text-primary flex-shrink-0" size={18} />
                <span>Сигналы о рисках до срыва</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="LineChart" className="text-primary flex-shrink-0" size={18} />
                <span>Прогноз на основе фактов</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="UserCheck" className="text-primary flex-shrink-0" size={18} />
                <span>Возврат клиентов без отчётов</span>
              </div>
            </div>
          </div>
          <div className="relative animate-fade-in-scale">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl blur-2xl"></div>
            <img 
              src="https://cdn.poehali.dev/projects/3050e207-1563-4b1c-bc9c-3c05557ec41b/files/7ad5b521-607e-4776-9f0a-28629d2041e4.jpg" 
              alt="AI Robot Assistant"
              className="relative rounded-3xl w-full animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;