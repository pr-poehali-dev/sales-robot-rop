import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
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
            <a href="#results" className="text-sm hover:text-primary transition-colors">Результаты</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button onClick={scrollToContact} className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Получить консультацию
          </Button>
        </div>
      </nav>

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
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button onClick={scrollToContact} size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                  <Icon name="MessageSquare" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
                <Button onClick={scrollToContact} size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-lg px-8">
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
                  <span>Возврат клиентов</span>
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

      <section id="who" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Кому полезен Робот РОП</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Решение для каждого уровня отдела продаж
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-4xl">👔</span>
                </div>
                <h3 className="text-2xl font-bold">Для директора / собственника</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Видит реальную картину продаж, без "оптимизма" менеджеров</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Экономит часы на прослушивании звонков и отчётах</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Своевременно получает сигналы о рисках и узких местах</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Увеличивает выручку без увеличения штата</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-card/50 backdrop-blur hover:border-secondary/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-4xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold">Для РОПа</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Контролирует активность, качество и эффективность МОПов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Получает отчёт по "здоровью" сделок и точечные рекомендации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Экономит до 20 часов в неделю на ручном разборе</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Следит за ритмом коммуникаций и предупреждает об отставаниях</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-card/50 backdrop-blur hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-4xl">💬</span>
                </div>
                <h3 className="text-2xl font-bold">Для менеджера по продажам</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span>Подсказки перед и после звонка: с кем говорить, как ответить, чем аргументировать</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span>Напоминает, где клиент "завис" и когда нужно вернуться к контакту</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span>Мгновенные рекомендации — без бесконечных отчётов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span>Реальная помощь в дожиме сделок и росте конверсии</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="how" className="py-20 px-4 relative">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">⚙️ Как работает Робот РОП</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Три сценария работы для полного контроля продаж
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="MessageSquare" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Сценарий 1</h3>
                <p className="text-lg font-semibold text-primary">После коммуникации</p>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>→ Анализирует все предыдущие касания</p>
                  <p>→ Определяет ошибки и рекомендации</p>
                  <p>→ При критических проблемах уведомляет руководителя</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-card/50 backdrop-blur hover:border-secondary/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Brain" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Сценарий 2</h3>
                <p className="text-lg font-semibold text-secondary">Перед коммуникацией</p>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>→ Анализирует историю сделок</p>
                  <p>→ Подсказывает, что и как обсудить</p>
                  <p>→ Готовит менеджера к успешному звонку или встрече</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-card/50 backdrop-blur hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Activity" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Сценарий 3</h3>
                <p className="text-lg font-semibold text-accent">Анализ "здоровья сделки"</p>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <p>→ Оценивает "пульс" сделки: насколько она жива</p>
                  <p>→ Видит, где нарушен темп общения</p>
                  <p>→ Предупреждает руководителя до потери клиента</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-4">🩺</div>
                <h3 className="text-3xl font-bold mb-3">Пульс продаж в реальном времени</h3>
                <p className="text-lg text-muted-foreground">
                  Робот РОП отслеживает здоровье каждой сделки как врач следит за пульсом пациента
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">💎 Что вы получаете</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "Eye",
                title: "Прозрачность по каждой сделке",
                description: "Где слились, где шанс вернуть клиента"
              },
              {
                icon: "Clock",
                title: "Экономию времени",
                description: "Руководителя и РОПа"
              },
              {
                icon: "Zap",
                title: "Мгновенный анализ",
                description: "Без сводок и таблиц"
              },
              {
                icon: "LineChart",
                title: "Прогноз на фактах",
                description: "А не на оптимизме менеджеров"
              },
              {
                icon: "Brain",
                title: "Умного помощника",
                description: "Который учится под ваш стиль продаж"
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 space-y-3 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto">
                    <Icon name={benefit.icon} size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">💥 Пример выгоды</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Уже на этапе тестирования Робот РОП помог клиентам вернуть:
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-gradient mb-4">9 млн ₽</div>
                  <p className="text-xl font-semibold mb-2">Возвращённая сделка</p>
                  <p className="text-muted-foreground">Считалась безнадёжной</p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 bg-gradient-to-br from-secondary/10 to-accent/10 backdrop-blur">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-gradient mb-4">24 млн ₽</div>
                  <p className="text-xl font-semibold mb-2">Возвращённая сделка</p>
                  <p className="text-muted-foreground">Клиент "ушёл в раздумья"</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/20 bg-card/50 backdrop-blur mb-12">
              <CardContent className="p-8 text-center">
                <div className="text-2xl font-bold mb-4">📌 Один возвращённый клиент — и проект полностью окупается</div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Почему это важно</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  CRM покажет статус, дашборд и BI — цифры.
                  Но только Робот РОП покажет, где и почему вы теряете деньги:
                </p>
                <div className="space-y-3">
                  {[
                    "где менеджер не дошёл до ЛПР",
                    "где сбился темп коммуникаций",
                    "где клиент остыл после встречи",
                    "где пора вмешаться руководителю"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <Icon name="AlertCircle" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg">
                  <p className="text-lg font-semibold">
                    ⚡ Больше не нужно копаться в CRM и отчётах — Робот РОП мгновенно показывает, 
                    где падает "пульс продаж" и что требует внимания сегодня.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                      className="bg-background/50 min-h-[120px]"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" size="lg" className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg" disabled={isSubmitting}>
                      <Icon name="MessageSquare" className="mr-2" size={20} />
                      {isSubmitting ? 'Отправка...' : 'Получить консультацию'}
                    </Button>
                    <Button type="button" onClick={scrollToContact} size="lg" variant="outline" className="flex-1 border-primary/50 hover:bg-primary/10 text-lg">
                      <Icon name="TrendingUp" className="mr-2" size={20} />
                      Проверить мой отдел
                    </Button>
                  </div>
                </form>

                <div className="mt-8 pt-8 border-t border-border space-y-4">
                  <p className="text-center text-sm text-muted-foreground">Или свяжитесь с нами напрямую:</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://wa.me/79163636391" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                    >
                      <Icon name="MessageCircle" size={20} />
                      <span>WhatsApp</span>
                    </a>
                    <a 
                      href="https://t.me/veselovandrei" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    >
                      <Icon name="Send" size={20} />
                      <span>Telegram</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center space-y-2">
          <p className="font-semibold">Андрей Веселов, управляющий партнёр</p>
          <p className="text-sm text-muted-foreground">
            📱 +7 916 363-63-91 | 📧 @veselovandrei
          </p>
          <p className="text-sm text-muted-foreground">© 2024 Робот РОП 1.0. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;