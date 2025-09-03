import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeService, setActiveService] = useState<string>('');

  const services = [
    {
      id: 'corporate',
      title: 'Корпоративное право',
      description: 'Комплексное юридическое сопровождение бизнеса',
      details: 'Регистрация компаний, корпоративные споры, слияния и поглощения, договорное право, соблюдение требований законодательства.',
      icon: 'Building2'
    },
    {
      id: 'civil',
      title: 'Гражданское право',
      description: 'Защита прав и интересов физических лиц',
      details: 'Семейные споры, наследственное право, защита прав потребителей, возмещение ущерба, договорные отношения.',
      icon: 'Users'
    },
    {
      id: 'real-estate',
      title: 'Недвижимость',
      description: 'Сделки с недвижимостью и земельные вопросы',
      details: 'Купля-продажа недвижимости, оформление прав собственности, земельные споры, арендные отношения.',
      icon: 'Home'
    },
    {
      id: 'intellectual',
      title: 'Интеллектуальная собственность',
      description: 'Защита авторских прав и товарных знаков',
      details: 'Регистрация товарных знаков, патентование, защита авторских прав, лицензионные соглашения.',
      icon: 'Shield'
    },
    {
      id: 'litigation',
      title: 'Судебная практика',
      description: 'Представительство в судах всех инстанций',
      details: 'Арбитражные споры, гражданские дела, административные споры, исполнительное производство.',
      icon: 'Scale'
    },
    {
      id: 'tax',
      title: 'Налоговое консультирование',
      description: 'Налоговое планирование и споры с ИФНС',
      details: 'Налоговое планирование, споры с налоговыми органами, налоговые проверки, оптимизация налогообложения.',
      icon: 'FileText'
    }
  ];

  const advantages = [
    {
      title: '15+ лет опыта',
      description: 'Глубокое понимание российского права',
      icon: 'Award'
    },
    {
      title: '500+ успешных дел',
      description: 'Высокий процент выигранных споров',
      icon: 'TrendingUp'
    },
    {
      title: 'Индивидуальный подход',
      description: 'Персональные решения для каждого клиента',
      icon: 'Users'
    },
    {
      title: '24/7 поддержка',
      description: 'Круглосуточная консультационная поддержка',
      icon: 'Clock'
    }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-display font-semibold text-xl text-primary">
            LexPartners
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Услуги</a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">О нас</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Контакты</a>
            <Button size="sm">Консультация</Button>
          </div>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="outline" className="w-fit">
                Профессиональные юридические услуги
              </Badge>
              <h1 className="font-display text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Ваш надёжный 
                <span className="text-primary block">правовой партнёр</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Защищаем ваши интересы с 2008 года. Комплексные юридические услуги для бизнеса и частных лиц.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-medium">
                  Получить консультацию
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Наши услуги
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="text-center">
                  <div className="font-display font-semibold text-2xl text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">лет опыта</div>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-center">
                  <div className="font-display font-semibold text-2xl text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">успешных дел</div>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-center">
                  <div className="font-display font-semibold text-2xl text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">клиентов довольны</div>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Shield" size={24} className="text-primary" />
                    <span className="font-medium">Конфиденциальность гарантирована</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Award" size={24} className="text-primary" />
                    <span className="font-medium">Сертифицированные юристы</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" size={24} className="text-primary" />
                    <span className="font-medium">Быстрое решение вопросов</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Наши практики
            </Badge>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Комплексные юридические услуги
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Предоставляем полный спектр правовых услуг с индивидуальным подходом к каждому клиенту
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {services.map((service, index) => (
              <AccordionItem
                key={service.id}
                value={service.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <CardHeader className="p-0 flex-row items-center gap-4 space-y-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon name={service.icon} size={24} className="text-primary" />
                      </div>
                      <div className="text-left">
                        <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                        <CardDescription className="text-sm">{service.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed pl-16">
                      {service.details}
                    </p>
                    <div className="mt-4 pl-16">
                      <Button variant="outline" size="sm">
                        Подробнее
                        <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Наши преимущества
            </Badge>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-md transition-all duration-200 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon} size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="outline" className="mb-4">
              Свяжитесь с нами
            </Badge>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Получите консультацию
            </h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку и мы свяжемся с вами в течение часа
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-6 animate-fade-in">
              <CardHeader className="p-0 mb-6">
                <CardTitle>Отправить сообщение</CardTitle>
                <CardDescription>Опишите вашу ситуацию, и мы подберём оптимальное решение</CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя *</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон *</label>
                    <Input placeholder="+7 (000) 000-00-00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input placeholder="email@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение *</label>
                  <Textarea placeholder="Опишите вашу ситуацию..." rows={4} />
                </div>
                <Button className="w-full">
                  Отправить заявку
                  <Icon name="Send" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6 animate-fade-in">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Офис</h3>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Тверская, д. 15, стр. 1<br />
                      БЦ "Галерея Актёр", офис 404
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Телефон</h3>
                    <p className="text-muted-foreground">
                      +7 (495) 123-45-67<br />
                      +7 (800) 123-45-67 (бесплатно)
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      info@lexpartners.ru<br />
                      consultation@lexpartners.ru
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Время работы</h3>
                    <p className="text-muted-foreground">
                      Пн-Пт: 9:00 - 19:00<br />
                      Сб: 10:00 - 16:00<br />
                      Вс: выходной
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-display font-semibold text-xl mb-4 md:mb-0">
              LexPartners
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span>© 2024 LexPartners. Все права защищены.</span>
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;