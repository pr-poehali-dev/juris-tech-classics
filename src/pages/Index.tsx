import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import AccordionCard from '@/components/AccordionCard';

const Index = () => {
  const [activeService, setActiveService] = useState<string>('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

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

  const whyChooseUsData = [
    {
      title: 'Опыт высшего уровня',
      content: 'Наш интеллект, образование и опыт не уступают крупнейшим юридическим фирмам страны, а наши юристы обладают междисциплинарным опытом в бизнесе и праве и науке. Наши юристы уже 25 лет представляют интересы корпоративных клиентов на самом высоком уровне в делах о возмещении расходов, действиях государственных органов, уголовных делах, гражданских исках, делах о корпоративных сделках и сделках с недвижимостью, консультировании по вопросам соблюдения законодательства.'
    },
    {
      title: 'Бизнес-фокус',
      content: 'Наши юристы разбираются в разнообразных юридических, деловых и финансовых проблемах, с которыми сталкиваются наши клиенты, и мы глубоко погружаемся в их бизнес, чтобы предвидеть, контролировать и минимизировать риски и проблемы, которые могут возникнуть в будущем. Мы видим свою задачу в том, чтобы помогать компаниям и их внутренним юристам успешно ориентироваться в сложной системе регулирования, влияющей на их повседневную и долгосрочную деятельность.'
    },
    {
      title: 'Решения, ориентированные на клиента',
      content: 'Юридическая фирма АСТРА ЛЕГАЛ стремится находить оптимальные решения для задач и проблем наших клиентов. Наши юристы прекрасно разбираются в специфике бизнеса наших клиентов и сложных отраслях, в которых они работают. Мы рассматриваем проблемы с точки зрения бизнеса и разрабатываем индивидуальные планы, которые наилучшим образом соответствуют текущим и долгосрочным целям наших клиентов.'
    },
    {
      title: 'Гибкость и экономичность',
      content: 'Юридическая фирма АСТРА ЛЕГАЛ гордится своей способностью предоставлять первоклассные услуги в области права по исключительно выгодной цене. Наш богатый опыт позволяет нам оперативно и эффективно решать сложные юридические вопросы. Мы понимаем, что юридические расходы могут быть крайне важны для наших к клиентов, и предлагаем гибкие схемы оплаты и тарифы, учитывающие индивидуальные потребности каждого клиента.'
    },
    {
      title: 'Коллективный подход',
      content: 'Сотрудничество с нашими клиентами, их консультантами и союристами является нашим главным приоритетом. Независимо от того, представляем ли мы интересы клиента в судебном деле или структурируем сложную сделку, мы сотрудничаем с экспертами и клиентами для решения сложных задач и поддержания развития компании в правильном направлении. Юристы нашей фирмы работают как сплочённая команда, обеспечивая своевременное и экономичное удовлетворение потребностей клиентов'
    }
  ];

  const toggleAccordion = (index: number) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  const WhyChooseUsSection = () => (
    <div className="space-y-4">
      {whyChooseUsData.map((item, index) => (
        <AccordionCard
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openAccordion === index}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );

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
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-background via-background to-purple-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-small-gray-100 [mask-image:linear-gradient(0deg,transparent,black)] opacity-30" />
        <div className="container mx-auto max-w-6xl relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge variant="outline" className="w-fit bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200/50 text-purple-800">
                Профессиональные юридические услуги
              </Badge>
              <h1 className="font-display text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Ваш надёжный 
                <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 bg-clip-text text-transparent block">правовой партнёр</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Защищаем ваши интересы с 2008 года. Комплексные юридические услуги для бизнеса и частных лиц.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-medium bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 shadow-lg shadow-purple-500/25 transition-all duration-300" onClick={() => scrollToSection('contact')}>
                  Получить консультацию
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 transition-all duration-300" onClick={() => scrollToSection('services')}>
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
                    <span className="font-medium">Профессиональные юристы</span>
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
                <Card className="overflow-hidden transition-all duration-300 group-hover:translate-y-[-12px] group-hover:shadow-2xl group-hover:shadow-purple-500/10 border-0 bg-white/80 backdrop-blur-sm hover:bg-white cursor-pointer ring-1 ring-gray-100 hover:ring-purple-200/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-violet-100 flex items-center justify-center group-hover:from-purple-200 group-hover:to-violet-200 transition-all duration-300 shadow-sm">
                        <Icon name={service.icon} size={26} className="text-purple-600" />
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
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-gray-50/30 to-purple-50/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-6 bg-white/80 border-purple-200/50 text-purple-800">
              Наши преимущества
            </Badge>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Узнайте, что делает нас лидерами в области юридических услуг
            </p>
          </div>

          <WhyChooseUsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50/50 to-purple-50/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-6 bg-white/80 border-purple-200/50 text-purple-800">
              Свяжитесь с нами
            </Badge>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Получите консультацию
            </h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку и мы свяжемся с вами в течение часа
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 animate-fade-in bg-white/90 backdrop-blur-sm border-0 shadow-xl shadow-purple-500/5 ring-1 ring-gray-100/50">
              <CardHeader className="p-0 mb-8">
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Отправить сообщение</CardTitle>
                <CardDescription className="text-base text-gray-600">Опишите вашу ситуацию, и мы подберём оптимальное решение</CardDescription>
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
                      г. Краснодар, улица Калинина, 190, офис 3
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
                      8-918-480-01-67
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
                      astartes.lawyers@gmail.com
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
                      Сб-Вс: выходной
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