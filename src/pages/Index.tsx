import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Я свяжусь с вами в ближайшее время.',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const features = [
    {
      icon: 'Camera',
      title: 'Профессиональная техника',
      description:
        'Использую камеры, объективы и свет, которые позволяют создавать кадры кинематографического качества',
    },
    {
      icon: 'Heart',
      title: 'Живые эмоции',
      description:
        'Главное для меня — естественность. Не постановка, а настоящие моменты, которые будут дороги вам',
    },
    {
      icon: 'Zap',
      title: 'Быстрая обработка',
      description:
        'Вы получите готовые фото и видео в кратчайшие сроки, без потери качества и с авторской цветокоррекцией',
    },
    {
      icon: 'Sparkles',
      title: 'Индивидуальный подход',
      description:
        'Каждый проект уникален: я учитываю ваши идеи, стиль и атмосферу, чтобы результат был именно вашим',
    },
  ];

  const reviews = [
    {
      name: 'Анна',
      avatar: '👩',
      text: 'Съёмка прошла очень легко и непринуждённо. Евгений помог с позами, а результат превзошёл ожидания!',
    },
    {
      name: 'Дмитрий',
      avatar: '👨',
      text: 'Фотографии получились живыми и атмосферными. Видно, что работает профессионал, который любит своё дело',
    },
    {
      name: 'Ольга',
      avatar: '👩‍🦰',
      text: 'Благодарим за свадебное видео! Каждый раз пересматриваем с улыбкой, как будто снова проживаем этот день',
    },
  ];

  const portfolioImages = [
    'https://cdn.poehali.dev/projects/aa373c5d-333e-4487-a701-360cb774cae5/files/fa0a644e-9f79-4c37-8b97-3dd382f24b03.jpg',
    'https://cdn.poehali.dev/projects/aa373c5d-333e-4487-a701-360cb774cae5/files/101fa8b8-f0f5-4352-8f66-17fc83a65884.jpg',
    'https://cdn.poehali.dev/projects/aa373c5d-333e-4487-a701-360cb774cae5/files/431759a5-78bf-4556-8a84-f640ec815f2b.jpg',
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Aperture" size={32} className="text-primary" />
            <span className="font-heading text-xl font-bold">Евгений Остапенко</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">
              Работы
            </a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">
              Отзывы
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          <Button>Оставить заявку</Button>
        </div>
      </header>

      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${portfolioImages[0]})`,
            filter: 'brightness(0.4)',
          }}
        />
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <Badge className="mb-4" variant="secondary">
            Фотограф и Видеограф
          </Badge>
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
            Не просто кадры,
            <br />а истории с эмоциями
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200">
            Создаю живые фотографии и кинематографичные видеоролики в Санкт-Петербурге
          </p>
          <Button size="lg" className="text-lg px-8">
            Заказать съёмку
          </Button>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">О моём подходе</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              «Я создаю живые фотографии и кинематографичные видеоролики, которые помогают сохранить
              настоящие чувства и важные моменты. В моей работе нет случайных кадров — каждый из них
              наполнен атмосферой, светом и душой».
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Со мной фотосессия становится лёгким и вдохновляющим процессом, в котором вы будете
              чувствовать себя свободно и естественно. Ведь только так рождаются настоящие и искренние
              кадры, в которых отражается ваша история.
            </p>
            <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-base font-medium">
                🎁 При заказе фотосессии вы получаете небольшой видеоролик в подарок — тот самый
                ценный бонус, который поможет прожить эти моменты снова и снова.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Почему выбирают меня</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждая съёмка — это не только результат, но и опыт, который должен быть лёгким и приятным
              для вас
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Мои работы</h2>
            <p className="text-lg text-muted-foreground">
              Примеры недавних съёмок и проектов
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {portfolioImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden group cursor-pointer">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={image}
                          alt={`Работа ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Рассчитайте стоимость съёмки
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Выберите событие и услуги — и получите точную цену онлайн
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            Открыть калькулятор
          </Button>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Отзывы наших клиентов
            </h2>
            <p className="text-lg text-muted-foreground">
              Спасибо за доверие и за то, что выбираете меня
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{review.avatar}</div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">{review.name}</h3>
                      <div className="flex text-yellow-500">
                        {'★'.repeat(5)}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Смотреть все отзывы
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Форма обратной связи
              </h2>
              <p className="text-lg text-muted-foreground">
                Давайте создадим вместе — напишите, что хотите сохранить на фото или видео
              </p>
            </div>
            <Card>
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Ваше сообщение
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Можете сразу указать желаемую дату съемки"
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-primary text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Aperture" size={32} />
              <span className="font-heading text-xl font-bold">Евгений Остапенко</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Icon name="Youtube" size={24} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm opacity-80">
            © 2025 Евгений Остапенко. Фотограф и Видеограф в Санкт-Петербурге
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
