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
              <h3 className="text-2xl font-bold mb-6 text-center">🩺 Пульс продаж в реальном времени</h3>
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
        
        <div className="container mx-auto relative z-10 space-y-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">✨ Что вы получаете</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <Icon name="Eye" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Прозрачность по каждой сделке</h4>
                  <p className="text-muted-foreground">где слились, где шанс вернуть клиента</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <Icon name="Clock" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Экономию времени руководителя и РОПа</h4>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <Icon name="Zap" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Мгновенный анализ без сводок и таблиц</h4>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <Icon name="LineChart" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Прогноз на основе фактов, а не оптимизма</h4>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <Icon name="Brain" className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Умного помощника, который учится под ваш стиль продаж</h4>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12 mt-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">💰 Пример выгоды</h2>
          </div>

          <Card className="border-secondary/20 bg-gradient-to-br from-secondary/10 via-card/50 to-accent/10 backdrop-blur max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">💥</div>
                <p className="text-lg text-muted-foreground mb-6">
                  Уже на этапе тестирования Робот РОП помог клиентам вернуть:
                </p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                  <Icon name="CheckCircle" className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">сделку на <span className="font-bold text-secondary">9 млн ₽</span>, считавшуюся безнадёжной</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card/50 rounded-lg">
                  <Icon name="CheckCircle" className="text-secondary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg">и сделку на <span className="font-bold text-secondary">24 млн ₽</span>, где клиент "ушёл в раздумья"</p>
                </div>
              </div>
              <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/30">
                <p className="text-lg font-semibold">📌 Один возвращённый клиент — и проект полностью окупается.</p>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mb-12 mt-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">🎯 Почему это важно</h2>
          </div>

          <Card className="border-accent/20 bg-gradient-to-br from-accent/10 via-card/50 to-primary/10 backdrop-blur max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground mb-6 text-center">
                CRM покажет статус, дашборд и BI — цифры.<br />
                Но только Робот РОП покажет, <span className="font-semibold text-foreground">где и почему</span> вы теряете деньги:
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <Icon name="AlertCircle" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-muted-foreground">где менеджер не дошёл до ЛПР,</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="AlertCircle" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-muted-foreground">где сбился темп коммуникаций,</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="AlertCircle" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-muted-foreground">где клиент остыл после встречи,</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="AlertCircle" className="text-accent flex-shrink-0 mt-1" size={20} />
                  <p className="text-muted-foreground">где пора вмешаться руководителю.</p>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border-2 border-primary/30 text-center">
                <p className="text-xl font-semibold mb-2">⚡ Больше не нужно копаться в CRM и отчётах</p>
                <p className="text-muted-foreground">
                  Робот РОП мгновенно показывает, где падает "пульс продаж" и что требует внимания сегодня.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default InfoSections;