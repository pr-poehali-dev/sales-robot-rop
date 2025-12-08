import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const InfoSections = () => {
  return (
    <>
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему это нужно?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-destructive/30 bg-destructive/5 backdrop-blur">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-destructive">Без Робота РОПа</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={18} />
                    <span>250+ (&gt;95%) сделок вне контроля</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={18} />
                    <span>Риски и ошибки замечаются слишком поздно</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={18} />
                    <span>Потеря темпа и контакта с ЛПР остаётся незамеченной</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={18} />
                    <span>Директор узнаёт о проблемах, когда клиент уже потерян</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={18} />
                    <span>Разбор ошибок постфактум с минимальным влиянием на результат</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-primary/5 backdrop-blur">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">С Роботом РОПом</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>100% сделок анализируются ежедневно</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Мгновенные подсказки менеджерам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>РОП работает только с критичными ситуациями (экономия 8+ часов)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Риски выявляются заранее → спасаются крупные сделки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Встроенный отдел контроля качества 24/7 без зарплат и отпусков</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="who" className="py-20 px-4 relative">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
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
                <h3 className="text-2xl font-bold">Директору</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Рост продаж без увеличения штата</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Выявление мест потерь и ошибок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Прозрачность по всем сделкам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Поддержка отдела даже при отсутствии РОПа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Больше результатов для компании и владельцев</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-card/50 backdrop-blur hover:border-secondary/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-4xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold">Руководителю отдела продаж (РОПу)</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Экономия 8+ часов ежедневно</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Подсветка критичных ошибок менеджеров</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Точные подсказки: куда вмешаться сегодня</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Разбор только самых денежных ситуаций</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Меньше конфликтов с менеджерами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Проще давать отчёт директору</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-card/50 backdrop-blur hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-4xl">💬</span>
                </div>
                <h3 className="text-2xl font-bold">Менеджерам по продажам</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span>Что сказать на следующем звонке</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span>Подсказки после звонков и переписок</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span>Напоминания о потерянных касаниях</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span>Рост конверсии</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-accent mt-1 flex-shrink-0" size={18} />
                    <span>Снижение рутины</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="how" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как работает Робот РОП</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Три сценария работы для полного контроля продаж
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-primary/20 bg-card/50 backdrop-blur hover:border-primary/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🔍</span>
                </div>
                <h3 className="text-2xl font-bold">После коммуникации</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Разбор звонка или переписки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Выявленные ошибки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Рекомендации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">→</span>
                    <span>Сигнал РОПу при критических ошибках</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-card/50 backdrop-blur hover:border-secondary/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold">Перед коммуникацией</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">→</span>
                    <span>Анализ всей истории сделки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">→</span>
                    <span>Что спросить</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">→</span>
                    <span>Какие аргументы использовать</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary">→</span>
                    <span>Готовый план действий</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-accent/20 bg-card/50 backdrop-blur hover:border-accent/40 transition-all duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-3xl">❤️‍🩹</span>
                </div>
                <h3 className="text-2xl font-bold">Здоровье сделки</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">→</span>
                    <span>Темп</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">→</span>
                    <span>Участники</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">→</span>
                    <span>Потерянные касания</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">→</span>
                    <span>Риски потери клиента</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Пульс продаж в реальном времени</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-primary/20 bg-card/50 backdrop-blur text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Database" className="text-primary" size={24} />
                  </div>
                  <h4 className="font-bold">Собирает данные</h4>
                  <p className="text-sm text-muted-foreground">Звонки, переписки, изменения в CRM</p>
                </CardContent>
              </Card>

              <Card className="border-secondary/20 bg-card/50 backdrop-blur text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Brain" className="text-secondary" size={24} />
                  </div>
                  <h4 className="font-bold">Анализирует контекст</h4>
                  <p className="text-sm text-muted-foreground">История сделки и поведение клиента</p>
                </CardContent>
              </Card>

              <Card className="border-accent/20 bg-card/50 backdrop-blur text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="AlertTriangle" className="text-accent" size={24} />
                  </div>
                  <h4 className="font-bold">Выявляет проблемы</h4>
                  <p className="text-sm text-muted-foreground">Риски срыва, потеря темпа, ошибки менеджера</p>
                </CardContent>
              </Card>

              <Card className="border-primary/20 bg-card/50 backdrop-blur text-center">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Lightbulb" className="text-primary" size={24} />
                  </div>
                  <h4 className="font-bold">Даёт рекомендации</h4>
                  <p className="text-sm text-muted-foreground">Конкретные шаги для возврата клиента</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Пример выгоды</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">💰</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Возвращена сделка на 9 млн ₽</h3>
                    <p className="text-muted-foreground">Робот обнаружил потерю контакта с ЛПР и предложил план возврата</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-secondary/30 bg-gradient-to-r from-secondary/10 to-primary/10 backdrop-blur">
              <CardContent className="p-8">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">💎</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Возвращена сделка на 24 млн ₽</h3>
                    <p className="text-muted-foreground">Выявлена критическая ошибка менеджера до потери клиента</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-accent/30 bg-gradient-to-r from-accent/10 to-secondary/10 backdrop-blur">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Один возвращённый клиент полностью окупает внедрение</h3>
                <p className="text-lg text-muted-foreground">
                  Такие ситуации происходят регулярно — робот видит то, что менеджеры и РОПы пропускают.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Почему это выгодно директору</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Отдел продаж работает стабильнее, независимо от «звёздности» РОПа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Повышение выручки без увеличения штата</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Прозрачность по всем сделкам в реальном времени</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Снижение потерь и ошибок, которые приводят к упущенной прибыли</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Более предсказуемый и управляемый процесс продаж</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>Системность, которая сохраняется даже при смене РОПа</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold">Почему это выгодно РОПу</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Робот снимает рутину и поток мелких задач</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>РОП работает только с критичными ситуациями</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Экономия 8+ часов ежедневно</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Фокус на деньгах, а не на переписках</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Меньше конфликтов с менеджерами</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Легко показывать директору факты, а не догадки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-secondary mt-1 flex-shrink-0" size={18} />
                    <span>Поддержка отдела даже в отсутствие РОПа (командировки, отпуск, болезнь)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Какими задачами можно дополнительно нагрузить Робота РОПа</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-8">
                <div className="space-y-3">
                  {[
                    { text: "Обучение и тренировки менеджеров", mark: false },
                    { text: "SKU-разведка (прайсы клиентов и конкурентов)", mark: false },
                    { text: "Оценка качества звонков и обратная связь", mark: false },
                    { text: "Автоматическое заполнение CRM", mark: true },
                    { text: "Мониторинг рабочих чатов", mark: true },
                    { text: "Продвинутая аналитика", mark: true },
                    { text: "Контроль задач", mark: true },
                    { text: "Проверка отчётов", mark: true },
                    { text: "Проведение планёрок", mark: true },
                    { text: "Другие AI-модули AI Sales Rocket", mark: true }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg border border-primary/10">
                      <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-muted-foreground flex-1">
                        {feature.text}
                        {feature.mark && <span className="text-primary ml-1">*</span>}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-border/30">
                  <p className="text-sm text-muted-foreground">
                    <span className="text-primary">*</span> Задачи с * внедряются без интеграции с CRM и без основного функционала.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Частые вопросы</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Заменяет ли Робот РОП живого РОПа?</h3>
                <p className="text-muted-foreground">Частично. Робот анализирует всё и подсказывает, человек принимает решения.</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Сколько занимает внедрение?</h3>
                <p className="text-muted-foreground">4–8 недель пилот в ручном режиме + 1–8 недель интеграции.</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Что будет на диагностике?</h3>
                <p className="text-muted-foreground">Разбор готовности вашей системы продаж к AI и рекомендации, дающие эффект сразу.</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Это безопасно?</h3>
                <p className="text-muted-foreground">Да. Возможна работа по НДА и/или анонимизация данных.</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-2">Сможет ли работать с моей CRM?</h3>
                <p className="text-muted-foreground">Да. Пилот запускается даже без интеграции.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSections;