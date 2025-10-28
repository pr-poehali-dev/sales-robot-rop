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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
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
            <a href="#features" className="text-sm hover:text-primary transition-colors">Как работает</a>
            <a href="#benefits" className="text-sm hover:text-primary transition-colors">Преимущества</a>
            <a href="#results" className="text-sm hover:text-primary transition-colors">Результаты</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Запросить демо
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
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm">
                🤖 AI-технология для продаж
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Робот РОП 1.0
              </h1>
              <p className="text-2xl text-gradient font-semibold">
                Ваш новый помощник по контролю и развитию продаж
              </p>
              <p className="text-lg text-muted-foreground">
                Интеллектуальный помощник директора и руководителя отдела продаж. 
                Автоматически анализирует каждую сделку, выявляет ошибки менеджеров 
                и подсказывает, что нужно сделать, чтобы закрыть сделку быстрее и дороже.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                  <Icon name="Rocket" className="mr-2" size={20} />
                  Начать тестирование
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-lg px-8">
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть демо
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle2" className="text-primary" size={20} />
                  <span>Работает 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" className="text-primary" size={20} />
                  <span>Полная конфиденциальность</span>
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

      <section id="features" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">⚙️ Как работает</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Робот РОП подключается к вашим каналам коммуникации и действует по двум сценариям
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="MessageSquare" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Сценарий 1</h3>
                <p className="text-lg font-semibold text-primary">Анализ после коммуникации</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Анализирует все предыдущие контакты по сделке</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Оценивает ход коммуникации и поведение менеджера</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Выдает рекомендации для продвижения сделки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="AlertTriangle" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>⚠️ Уведомляет директора о критических ошибках</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-card/50 backdrop-blur hover:border-secondary/40 transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-4">
                  <Icon name="Calendar" size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">Сценарий 2</h3>
                <p className="text-lg font-semibold text-secondary">Анализ перед коммуникацией</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Анализирует всю историю общения по сделке</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Подсказывает, с кем и о чём стоит говорить</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Дает чёткий план действий и советы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Помогает подготовиться к переговорам</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-3xl border border-primary/20 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Icon name="Zap" className="text-primary flex-shrink-0" size={32} />
              <div>
                <h4 className="text-xl font-bold mb-2">Интеграция с вашими системами</h4>
                <p className="text-muted-foreground">
                  Робот РОП подключается к вашим каналам коммуникации: CRM, телефон, Zoom, WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 relative">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">💡 Что вы получаете</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Конкретные преимущества для вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "Eye",
                title: "Прозрачность по каждой сделке",
                description: "Где слились, где шанс вернуть клиента"
              },
              {
                icon: "Clock",
                title: "Экономия времени руководителя",
                description: "Без ручного контроля и прослушивания"
              },
              {
                icon: "Lightbulb",
                title: "Рекомендации в реальном времени",
                description: "Что делать менеджеру, чтобы закрыть"
              },
              {
                icon: "AlertCircle",
                title: "Сигналы о рисках",
                description: "До того, как сделка потеряна"
              },
              {
                icon: "Brain",
                title: "Умный помощник",
                description: "Учится под ваш стиль продаж"
              },
              {
                icon: "TrendingUp",
                title: "Увеличение конверсии",
                description: "Больше закрытых сделок"
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
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
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">📊 Примеры результатов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты наших клиентов
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
                  <p className="text-xl font-semibold mb-2">Возвращённый клиент</p>
                  <p className="text-muted-foreground">Ушёл в раздумья</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="TrendingUp" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">💰 Экономическая выгода</h3>
                    <p className="text-lg text-muted-foreground mb-4">
                      Один возвращённый клиент — и внедрение окупается полностью. 
                      Дальше — чистая прибыль.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-1">+47%</div>
                    <div className="text-sm text-muted-foreground">Конверсия в сделку</div>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                    <div className="text-3xl font-bold text-secondary mb-1">-65%</div>
                    <div className="text-sm text-muted-foreground">Время на контроль</div>
                  </div>
                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Работа без остановок</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <Card className="border-primary/20 bg-gradient-to-r from-card/80 to-card/50 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>🧩</span>
                  <span>Что будет в следующих версиях</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  {[
                    "🧠 Бизнес-тренер для менеджеров",
                    "📦 SKU-разведчик конкурентов",
                    "☎️ Оценка качества звонков",
                    "🧾 Автозаполнение CRM",
                    "📊 Продвинутая аналитика",
                    "✅ Контроль исполнения задач",
                    "📋 Проверка отчётов",
                    "🧭 Проведение планёрок"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Sparkles" className="text-primary flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-card/80 backdrop-blur">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Brain" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">🧠 Почему это важно</h3>
                    <p className="text-muted-foreground">
                      CRM покажет статус, дашборд и BI — цифры, но ни одна система не скажет, 
                      где и почему вы теряете деньги.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    "Где менеджер не дожал",
                    "Где не дошёл до ЛПР или работал не с тем человеком",
                    "Где неправильно сработал с ЛПР или ЛВПР",
                    "Где клиент был готов, но его не довели до сделки"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <Icon name="AlertCircle" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                      <span className="text-muted-foreground">{point}</span>
                    </div>
                  ))}
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
                  <h3 className="text-3xl font-bold mb-4">💰 Стоимость</h3>
                  <div className="inline-block px-6 py-3 bg-primary/20 border border-primary/30 rounded-full">
                    <span className="text-xl font-semibold">Пилотный этап — "Разбор 5 сделок"</span>
                  </div>
                </div>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      💼
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        Анализ пяти провальных сделок вручную экспертами Sales ПРОГРЕСС — 
                        чтобы понять, какие ошибки должен находить Робот РОП
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border-2 border-primary/30">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      🎯
                    </div>
                    <div>
                      <p className="font-semibold text-lg mb-1">Бесплатно</p>
                      <p className="text-muted-foreground">
                        Если мы не найдём ни одной ошибки, стоившей вам выручки
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-card/50 rounded-lg border border-primary/20">
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="Shield" className="text-primary" size={24} />
                    <span>🧾 Гарантии и конфиденциальность</span>
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="text-primary" size={18} />
                      <span>Подпишем NDA по вашему шаблону или нашему</span>
                    </li>
                    <li className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="text-primary" size={18} />
                      <span>Полная анонимность и защищённая передача данных</span>
                    </li>
                  </ul>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4">🚀 Следующие шаги</h2>
              <p className="text-xl text-muted-foreground">
                Запишитесь на консультацию для оценки экономической целесообразности 
                и технической возможности внедрения
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

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
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
                  <p className="text-center text-sm text-muted-foreground">
                    📱 +7 916 363-63-91 | 📧 @veselovandrei
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 p-8 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 rounded-3xl border border-primary/30 text-center">
              <h3 className="text-2xl font-bold mb-3">⚙️ Робот РОП 1.0</h3>
              <p className="text-lg text-muted-foreground">
                Анализирует сделки, выявляет риски, спасает выручку.<br />
                А вы занимаетесь стратегией, а не микроконтролем.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© 2024 Робот РОП 1.0. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
