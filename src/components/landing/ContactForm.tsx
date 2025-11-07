import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  scrollToContact: () => void;
}

const ContactForm = ({ scrollToContact }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/9fcf954b-5abe-4434-bfe4-dd2556fa8959', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        });
        setFormData({ name: '', phone: '', message: '' });
      } else {
        toast({
          title: "Ошибка",
          description: data.error || "Не удалось отправить заявку. Попробуйте позже.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Проверьте подключение к интернету.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 backdrop-blur">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">💼 Пилотный этап — «Разбор 5 сделок»</h3>
                </div>

                <div className="space-y-6 mb-8">
                  <p className="text-lg text-muted-foreground text-center">
                    Эксперты Sales ПРОГРЕСС вручную анализируют 5 ваших провальных сделок, 
                    чтобы определить ошибки и оценить потенциал внедрения Робота РОПа.
                  </p>

                  <div className="p-6 bg-card/50 rounded-lg border-2 border-primary/30 text-center">
                    <div className="text-4xl mb-2">🎯</div>
                    <p className="font-semibold text-2xl mb-2">Бесплатно</p>
                    <p className="text-muted-foreground">
                      если мы не найдём ни одной ошибки, стоившей вам выручки
                    </p>
                  </div>

                  <p className="text-center text-muted-foreground">
                    После пилота — точное техзадание для внедрения Робота РОП 1.0
                  </p>
                </div>

                <Button onClick={scrollToContact} size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
                  <Icon name="Brain" className="mr-2" size={20} />
                  Хочу разбор 5 сделок
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">🚀 Что будет дальше</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              После пилота Робот РОП 1.0 может расшириться за счёт AI-модулей
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-r from-card/80 to-card/50 backdrop-blur">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "🧠 Бизнес-тренер для обучения менеджеров",
                    "📦 SKU-разведчик (анализ прайсов конкурентов)",
                    "☎️ Оценка качества звонков",
                    "🧾 Автозаполнение CRM",
                    "📊 Продвинутая аналитика KPI",
                    "✅ Контроль задач, отчётов и планёрок"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Робот РОП 1.0</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Анализирует сделки, оценивает здоровье воронки и предупреждает о рисках до потери клиента.
              </p>
              <p className="text-lg text-muted-foreground">
                📞 Получите консультацию, чтобы оценить экономическую целесообразность и возможность внедрения
              </p>
            </div>

            <Card className="border-primary/20 bg-card/80 backdrop-blur glow-effect">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input 
                      placeholder="+7 916 363-63-91"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Сообщение</label>
                    <Textarea 
                      placeholder="Хочу Робота РОП"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-background/50 min-h-[100px]"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </form>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="Mail" size={16} />
                      <a href="mailto:a.veselov@b2bbasis.ru" className="hover:text-primary transition-colors">
                        a.veselov@b2bbasis.ru
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Phone" size={16} />
                      <a href="tel:+79163636391" className="hover:text-primary transition-colors">
                        +7 916 363-63-91
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Building2" size={16} />
                      <span>AI Sales Rocket</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border/50">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 AI Sales Rocket. Все права защищены.</p>
        </div>
      </footer>
    </>
  );
};

export default ContactForm;