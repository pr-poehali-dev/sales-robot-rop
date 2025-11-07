import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const InfoSections = () => {
  return (
    <>
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

          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Полный цикл анализа</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Mic" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Собирает данные</h4>
                      <p className="text-sm text-muted-foreground">Звонки, переписки, изменения в CRM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Search" size={16} className="text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Анализирует контекст</h4>
                      <p className="text-sm text-muted-foreground">Изучает всю историю сделки и поведение клиента</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" size={16} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Выявляет проблемы</h4>
                      <p className="text-sm text-muted-foreground">Риски срыва, потери темпа, ошибки менеджера</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name="Lightbulb" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Даёт рекомендации</h4>
                      <p className="text-sm text-muted-foreground">Конкретные шаги для возврата клиента</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="results" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">📊 Результаты внедрения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Конкретные показатели роста продаж
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            <Card className="border-primary/20 bg-card/50 backdrop-blur text-center hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8 space-y-2">
                <div className="text-5xl font-bold text-primary mb-2">+30%</div>
                <p className="text-lg font-semibold">Рост конверсии</p>
                <p className="text-sm text-muted-foreground">за счёт точечных рекомендаций</p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-card/50 backdrop-blur text-center hover:border-secondary/40 transition-all duration-300">
              <CardContent className="p-8 space-y-2">
                <div className="text-5xl font-bold text-secondary mb-2">-40%</div>
                <p className="text-lg font-semibold">Потерь сделок</p>
                <p className="text-sm text-muted-foreground">благодаря раннему обнаружению рисков</p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-card/50 backdrop-blur text-center hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-8 space-y-2">
                <div className="text-5xl font-bold text-accent mb-2">20 ч</div>
                <p className="text-lg font-semibold">Экономия времени</p>
                <p className="text-sm text-muted-foreground">руководителя в неделю</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur text-center hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8 space-y-2">
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-lg font-semibold">Контроль сделок</p>
                <p className="text-sm text-muted-foreground">без потери внимания</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-primary/20 bg-gradient-to-br from-primary/10 via-card/50 to-secondary/10 backdrop-blur max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="TrendingUp" size={40} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Реальный рост продаж</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Вместо того чтобы тратить время на прослушивание звонков и анализ переписок, 
                получите готовые инсайты и точечные действия для каждой сделки
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-left">
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Экономия времени руководителя</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Рост эффективности МОПов</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                  <span>Снижение потерь клиентов</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default InfoSections;
