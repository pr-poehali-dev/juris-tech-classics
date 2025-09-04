import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeService, setActiveService] = useState<string>('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setIsServiceModalOpen(true);
  };

  const services = [
    {
      id: 'corporate',
      title: 'Корпоративное право',
      description: 'Комплексное юридическое сопровождение бизнеса',
      details: 'Регистрация компаний, корпоративные споры, слияния и поглощения, договорное право, соблюдение требований законодательства.',
      fullDescription: 'Мы предоставляем комплексные услуги корпоративного права для компаний всех размеров. Наши специалисты помогут вам с регистрацией бизнеса, структурированием корпоративного управления, проведением сделок M&A, разрешением корпоративных споров. Мы обеспечиваем правовое сопровождение на всех этапах развития вашего бизнеса.',
      services: ['Регистрация ООО и АО', 'Корпоративное управление', 'Слияния и поглощения', 'Договорное право', 'Корпоративные споры', 'Комплаенс'],
      icon: 'Building2'
    },
    {
      id: 'civil',
      title: 'Гражданское право',
      description: 'Защита прав и интересов физических лиц',
      details: 'Семейные споры, наследственное право, защита прав потребителей, возмещение ущерба, договорные отношения.',
      fullDescription: 'Предоставляем профессиональную правовую помощь физическим лицам по широкому спектру вопросов гражданского права. Наша команда поможет в решении семейных споров, оформлении наследства, защите прав потребителей и взыскании ущерба.',
      services: ['Семейные споры', 'Наследственное право', 'Защита прав потребителей', 'Договорные споры', 'Возмещение ущерба', 'Жилищные вопросы'],
      icon: 'Users'
    },
    {
      id: 'real-estate',
      title: 'Недвижимость',
      description: 'Сделки с недвижимостью и земельные вопросы',
      details: 'Купля-продажа недвижимости, оформление прав собственности, земельные споры, арендные отношения.',
      fullDescription: 'Комплексное правовое сопровождение сделок с недвижимостью. Оформление прав собственности, проверка юридической чистоты объектов, сопровождение сделок купли-продажи, разрешение земельных споров.',
      services: ['Сделки с недвижимостью', 'Оформление прав собственности', 'Земельные вопросы', 'Арендные отношения', 'Жилищные споры', 'Due diligence'],
      icon: 'Home'
    },
    {
      id: 'intellectual',
      title: 'Интеллектуальная собственность',
      description: 'Защита авторских прав и товарных знаков',
      details: 'Регистрация товарных знаков, патентование, защита авторских прав, лицензионные соглашения.',
      fullDescription: 'Профессиональная защита интеллектуальной собственности. Регистрация и защита товарных знаков, патентование изобретений, защита авторских и смежных прав, составление лицензионных договоров.',
      services: ['Товарные знаки', 'Патентование', 'Авторские права', 'Лицензирование', 'Защита от нарушений', 'IP-аудит'],
      icon: 'Shield'
    },
    {
      id: 'litigation',
      title: 'Судебная практика',
      description: 'Представительство в судах всех инстанций',
      details: 'Арбитражные споры, гражданские дела, административные споры, исполнительное производство.',
      fullDescription: 'Профессиональное представительство в судах всех инстанций. Ведение арбитражных и гражданских дел, защита в административных спорах, сопровождение исполнительного производства.',
      services: ['Арбитражные споры', 'Гражданские дела', 'Административные споры', 'Исполнительное производство', 'Апелляционное обжалование', 'Кассационные жалобы'],
      icon: 'Scale'
    },
    {
      id: 'tax',
      title: 'Налоговое консультирование',
      description: 'Налоговое планирование и споры с ИФНС',
      details: 'Налоговое планирование, споры с налоговыми органами, налоговые проверки, оптимизация налогообложения.',
      fullDescription: 'Комплексные услуги в области налогового права. Налоговое планирование и оптимизация, представительство при налоговых проверках, разрешение споров с налоговыми органами.',
      services: ['Налоговое планирование', 'Налоговые споры', 'Сопровождение проверок', 'Налоговая оптимизация', 'Административная ответственность', 'Трансфертное ценообразование'],
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
          <div className="flex items-center gap-3">
            <div className="text-center">
              <div className="font-display font-bold text-3xl text-primary leading-none">AL</div>
              <div className="text-sm font-medium text-foreground/70 tracking-wide mt-1">АСТРА ЛЕГАЛ</div>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              О нас
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Контакты
            </button>
            <Button size="sm" onClick={() => scrollToSection('contact')}>Консультация</Button>
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
                <Button size="lg" className="font-medium" onClick={() => scrollToSection('contact')}>
                  Получить консультацию
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('services')}>
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

          <div className="relative max-w-2xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="relative group animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  zIndex: services.length - index,
                  marginTop: index === 0 ? 0 : '-12px'
                }}
              >
                <Card className="overflow-hidden transition-all duration-300 group-hover:translate-y-[-8px] group-hover:shadow-xl border-2 hover:border-primary/20 cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon name={service.icon} size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">{service.title}</CardTitle>
                        <CardDescription className="text-sm mt-1">{service.description}</CardDescription>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Icon name="ChevronDown" size={20} className="text-primary" />
                      </div>
                    </div>
                  </CardHeader>
                  
                  {/* Expandable content that shows on hover */}
                  <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-64">
                    <CardContent className="pt-0 pb-6 px-6">
                      <div className="border-t border-border pt-4">
                        <p className="text-muted-foreground leading-relaxed text-sm mb-4">
                          {service.details}
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          onClick={() => openServiceModal(service)}
                        >
                          Подробнее
                          <Icon name="ArrowRight" size={16} className="ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
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
            <div className="mb-4 md:mb-0 text-center">
              <div className="font-display font-bold text-2xl text-background leading-none">AL</div>
              <div className="text-sm font-medium text-background/70 tracking-wide mt-1">АСТРА ЛЕГАЛ</div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span>© 2024 Astra Legal. Все права защищены.</span>
              <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Service Details Modal */}
      <Dialog open={isServiceModalOpen} onOpenChange={setIsServiceModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon name={selectedService?.icon || 'FileText'} size={20} className="text-primary" />
              </div>
              <DialogTitle className="text-xl">{selectedService?.title}</DialogTitle>
            </div>
            <DialogDescription>{selectedService?.description}</DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Описание услуги</h4>
              <p className="text-muted-foreground leading-relaxed">
                {selectedService?.fullDescription}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Что входит в услугу</h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedService?.services?.map((item: string, index: number) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button className="flex-1" onClick={() => {
                setIsServiceModalOpen(false);
                scrollToSection('contact');
              }}>
                Получить консультацию
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
              <Button variant="outline" onClick={() => setIsServiceModalOpen(false)}>
                Закрыть
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;