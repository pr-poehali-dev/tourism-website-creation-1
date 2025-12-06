import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const destinations = [
    {
      id: 1,
      name: 'Мальдивы',
      description: 'Райские острова с белоснежными пляжами',
      price: 'от 450 000 ₽',
      image: '/placeholder.svg',
      rating: 5,
    },
    {
      id: 2,
      name: 'Швейцария',
      description: 'Альпийское великолепие и роскошь',
      price: 'от 380 000 ₽',
      image: '/placeholder.svg',
      rating: 5,
    },
    {
      id: 3,
      name: 'Япония',
      description: 'Гармония традиций и современности',
      price: 'от 320 000 ₽',
      image: '/placeholder.svg',
      rating: 5,
    },
    {
      id: 4,
      name: 'Италия',
      description: 'Искусство, культура и изысканная кухня',
      price: 'от 280 000 ₽',
      image: '/placeholder.svg',
      rating: 5,
    },
  ];

  const hotels = [
    {
      id: 1,
      name: 'The Ritz-Carlton Maldives',
      location: 'Мальдивы',
      stars: 5,
      price: 'от 85 000 ₽/ночь',
      amenities: ['SPA', 'Частный пляж', 'Бассейн', 'Ресторан'],
      image: '/placeholder.svg',
    },
    {
      id: 2,
      name: 'Badrutt\'s Palace Hotel',
      location: 'Швейцария, Санкт-Мориц',
      stars: 5,
      price: 'от 95 000 ₽/ночь',
      amenities: ['Горнолыжный курорт', 'SPA', 'Гольф', 'Мишлен ресторан'],
      image: '/placeholder.svg',
    },
    {
      id: 3,
      name: 'Aman Tokyo',
      location: 'Япония, Токио',
      stars: 5,
      price: 'от 75 000 ₽/ночь',
      amenities: ['SPA', 'Фитнес', 'Панорамный вид', 'Бассейн'],
      image: '/placeholder.svg',
    },
  ];

  const tours = [
    {
      id: 1,
      title: 'Романтические Мальдивы',
      duration: '7 дней / 6 ночей',
      includes: ['Перелет бизнес-класса', 'Проживание в water villa', 'Трансфер на гидросамолете', 'Завтраки и ужины'],
      price: '520 000 ₽',
      image: '/placeholder.svg',
    },
    {
      id: 2,
      title: 'Швейцарская сказка',
      duration: '10 дней / 9 ночей',
      includes: ['Перелет', 'Отели 5*', 'Экскурсии', 'Трансферы', 'Ski-pass'],
      price: '450 000 ₽',
      image: '/placeholder.svg',
    },
    {
      id: 3,
      title: 'Императорская Япония',
      duration: '12 дней / 11 ночей',
      includes: ['Перелет', 'Отели люкс', 'JR Pass', 'Экскурсии', 'Чайная церемония'],
      price: '380 000 ₽',
      image: '/placeholder.svg',
    },
  ];

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      avatar: '/placeholder.svg',
      rating: 5,
      text: 'Незабываемый отдых на Мальдивах! Все было организовано идеально, от трансфера до последней детали. Спасибо команде за безупречный сервис!',
      tour: 'Мальдивы',
    },
    {
      id: 2,
      name: 'Михаил Соколов',
      avatar: '/placeholder.svg',
      rating: 5,
      text: 'Швейцарские Альпы превзошли все ожидания. Отель выше всяких похвал, экскурсии продуманы до мелочей. Обязательно вернемся!',
      tour: 'Швейцария',
    },
    {
      id: 3,
      name: 'Елена Волкова',
      avatar: '/placeholder.svg',
      rating: 5,
      text: 'Япония - это любовь! Благодаря профессионализму агентства мы увидели страну с самой аутентичной стороны. Каждый день - новое открытие.',
      tour: 'Япония',
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary">LUXTRAVEL</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'destinations', 'hotels', 'tours', 'reviews', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium hover:text-primary transition-colors capitalize"
                >
                  {section === 'home' ? 'Главная' : 
                   section === 'destinations' ? 'Направления' :
                   section === 'hotels' ? 'Отели' :
                   section === 'tours' ? 'Туры' :
                   section === 'reviews' ? 'Отзывы' : 'Контакты'}
                </button>
              ))}
            </div>
            <Button variant="default">
              <Icon name="Phone" size={16} className="mr-2" />
              +998 95 398 00 04
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="relative h-[600px] rounded-3xl overflow-hidden animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/50 z-10" />
            <img
              src="/placeholder.svg"
              alt="Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 animate-scale-in">
                Путешествия <span className="text-primary">премиум-класса</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
                Откройте мир роскоши и эксклюзивного сервиса с индивидуальными турами
              </p>
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                Подобрать тур
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <CardTitle>15 лет опыта</CardTitle>
                <CardDescription>Организуем незабываемые путешествия с 2009 года</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Shield" size={24} className="text-primary" />
                </div>
                <CardTitle>Гарантия качества</CardTitle>
                <CardDescription>Страховка и полная юридическая защита</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Headphones" size={24} className="text-primary" />
                </div>
                <CardTitle>24/7 поддержка</CardTitle>
                <CardDescription>Личный менеджер на связи в любое время</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="destinations" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Популярные направления</h2>
            <p className="text-xl text-muted-foreground">Выберите страну вашей мечты</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <Card key={dest.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex gap-1">
                    {[...Array(dest.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-primary fill-primary" />
                    ))}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{dest.name}</CardTitle>
                  <CardDescription>{dest.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-primary">{dest.price}</span>
                  <Button variant="outline" size="sm">
                    Подробнее
                    <Icon name="ChevronRight" size={16} className="ml-1" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="hotels" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Роскошные отели</h2>
            <p className="text-xl text-muted-foreground">Проживание в лучших отелях мира</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-72">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {hotel.stars} <Icon name="Star" size={12} className="ml-1 fill-current" />
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{hotel.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Icon name="MapPin" size={16} />
                    {hotel.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((amenity, idx) => (
                      <Badge key={idx} variant="outline">{amenity}</Badge>
                    ))}
                  </div>
                  <p className="text-2xl font-bold text-primary">{hotel.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    Забронировать
                    <Icon name="Calendar" size={16} className="ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Готовые туры</h2>
            <p className="text-xl text-muted-foreground">Все включено: перелет, отели, экскурсии</p>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="all">Все туры</TabsTrigger>
              <TabsTrigger value="beach">Пляжные</TabsTrigger>
              <TabsTrigger value="mountain">Горные</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-secondary/90 text-white px-4 py-2 rounded-full flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span className="font-medium">{tour.duration}</span>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{tour.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {tour.includes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Icon name="Check" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="text-3xl font-bold text-primary">{tour.price}</div>
                    <p className="text-sm text-muted-foreground mt-1">за двоих</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" size="lg">
                      Забронировать тур
                      <Icon name="Plane" size={16} className="ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="beach">
              <p className="text-center text-muted-foreground">Пляжные туры скоро появятся</p>
            </TabsContent>
            <TabsContent value="mountain">
              <p className="text-center text-muted-foreground">Горные туры скоро появятся</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас путешественники</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-muted overflow-hidden">
                      <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={14} className="text-primary fill-primary" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">{review.tour}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground">Наши эксперты помогут подобрать идеальный тур</p>
          </div>
          <Card className="p-8">
            <CardContent className="space-y-6 p-0">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <Input placeholder="Иван Иванов" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="example@mail.com" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Направление</label>
                <Input placeholder="Куда хотите поехать?" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Сообщение</label>
                <Textarea placeholder="Расскажите о ваших пожеланиях..." rows={5} />
              </div>
              <Button size="lg" className="w-full">
                Отправить заявку
                <Icon name="Send" size={18} className="ml-2" />
              </Button>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Телефон</h3>
              <p className="text-muted-foreground">+998 95 398 00 04</p>
              <p className="text-muted-foreground">+7 958 959 75 75</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground">Yahaabibitravel.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Офис</h3>
              <p className="text-muted-foreground">Москва, ул. Тверская, 1</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">LUXTRAVEL</h3>
              <p className="text-white/80">Путешествия премиум-класса для взыскательных клиентов</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Направления</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-primary transition-colors">Мальдивы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Швейцария</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Япония</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Италия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li><a href="#" className="hover:text-primary transition-colors">Индивидуальные туры</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Бронирование отелей</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Визовая поддержка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Трансферы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+998 95 398 00 04</li>
                <li>+7 958 959 75 75</li>
                <li>Yahaabibitravel.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 LUXTRAVEL. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
