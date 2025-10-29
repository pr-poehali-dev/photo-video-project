import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import Calculator from '@/components/Calculator';

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
      title: 'Профессиональная техника',
      description:
        'Использую камеры, объективы и свет, которые позволяют создавать кадры кинематографического качества',
      image: 'https://cdn.poehali.dev/projects/aa373c5d-333e-4487-a701-360cb774cae5/files/fa0a644e-9f79-4c37-8b97-3dd382f24b03.jpg',
    },
    {
      title: 'Живые эмоции',
      description:
        'Главное для меня — естественность. Не постановка, а настоящие моменты, которые будут дороги вам',
      image: 'https://cdn.poehali.dev/projects/aa373c5d-333e-4487-a701-360cb774cae5/files/101fa8b8-f0f5-4352-8f66-17fc83a65884.jpg',
    },
    {
      title: 'Быстрая обработка',
      description:
        'Вы получите готовые фото и видео в кратчайшие сроки, без потери качества и с авторской цветокоррекцией',
      image: 'https://cdn.poehali.dev/projects/aa373c5d-333e-4487-a701-360cb774cae5/files/431759a5-78bf-4556-8a84-f640ec815f2b.jpg',
    },
    {
      title: 'Индивидуальный подход',
      description:
        'Каждый проект уникален: я учитываю ваши идеи, стиль и атмосферу, чтобы результат был именно вашим',
      image: 'https://cdn.poehali.dev/projects/aa373c5d-333e-4487-a701-360cb774cae5/files/fa0a644e-9f79-4c37-8b97-3dd382f24b03.jpg',
    },
  ];

  const reviews = [
    {
      name: 'Анна',
      text: 'Съёмка прошла очень легко и непринуждённо. Евгений помог с позами, а результат превзошёл ожидания!',
    },
    {
      name: 'Дмитрий',
      text: 'Фотографии получились живыми и атмосферными. Видно, что работает профессионал, который любит своё дело',
    },
    {
      name: 'Ольга',
      text: 'Благодарим за свадебное видео! Каждый раз пересматриваем с улыбкой, как будто снова проживаем этот день',
    },
  ];

  const heroImage = 'https://cdn.poehali.dev/projects/aa373c5d-333e-4487-a701-360cb774cae5/files/fa0a644e-9f79-4c37-8b97-3dd382f24b03.jpg';

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-[#2526311a]">
        <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 h-20 flex items-center justify-between">
          <div className="flex flex-col items-center gap-1">
            <div className="h-px w-24 bg-foreground/20"></div>
            <div className="text-sm font-medium tracking-[0.3em] uppercase">Евгений Остапенко</div>
            <div className="h-px w-16 bg-foreground/20"></div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#about"
              className="text-[10px] font-medium tracking-[0.03em] uppercase px-2 py-1 border-b border-foreground hover:opacity-60 transition-opacity"
            >
              Главная
            </a>
            <a
              href="#portfolio"
              className="text-[10px] font-medium tracking-[0.03em] uppercase px-2 py-1 hover:border-b hover:border-foreground transition-all"
            >
              Работы
            </a>
            <a
              href="#reviews"
              className="text-[10px] font-medium tracking-[0.03em] uppercase px-2 py-1 hover:border-b hover:border-foreground transition-all"
            >
              Отзывы
            </a>
            <a
              href="#contact"
              className="text-[10px] font-medium tracking-[0.03em] uppercase px-2 py-1 hover:border-b hover:border-foreground transition-all"
            >
              Контакты
            </a>
          </nav>

          <button className="lg:hidden">
            <Icon name="Menu" size={24} />
          </button>

          <button className="hidden lg:block px-6 py-2 text-xs tracking-[0.03em] uppercase border border-foreground rounded-full hover:bg-foreground hover:text-white transition-all">
            Оставить заявку
          </button>
        </div>
      </header>

      <section
        className="relative h-[90vh] mt-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f5f5f5]/80"></div>
      </section>

      <section id="about" className="max-w-[1000px] mx-auto px-5 md:px-10 py-20">
        <h1 className="text-4xl md:text-5xl lg:text-[62px] font-medium text-center leading-tight tracking-[-0.05em] mb-5">
          Не просто кадры, а истории с эмоциями
        </h1>
        <p className="text-base md:text-lg text-center mb-5">
          Создаю живые фотографии и кинематографичные видеоролики в Санкт-Петербурге
        </p>
        <p className="text-sm md:text-base text-muted-foreground text-center">
          Со мной фотосессия становится лёгким и вдохновляющим процессом, в котором вы будете чувствовать себя
          свободно и естественно
        </p>
        <div className="mt-10 p-8 bg-gradient-to-br from-[#eaeaea] to-white rounded-[30px] text-center">
          <p className="text-sm md:text-base font-medium">
            🎁 При заказе фотосессии вы получаете небольшой видеоролик в подарок — тот самый ценный бонус, который
            поможет прожить эти моменты снова и снова.
          </p>
        </div>
      </section>

      <section className="max-w-[1000px] mx-auto px-5 md:px-10 py-20">
        <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium text-center leading-tight tracking-[-0.05em] mb-12">
          Почему выбирают меня
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative h-64 rounded-[20px] md:rounded-[30px] overflow-hidden bg-gradient-to-br from-[#eaeaea] to-white p-8"
            >
              <div className="relative z-10">
                <h3 className="text-lg md:text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground max-w-[60%]">{feature.description}</p>
              </div>
              <img
                src={feature.image}
                alt={feature.title}
                className="absolute right-0 bottom-0 h-40 md:h-44 w-auto object-cover opacity-60"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="max-w-[1000px] mx-auto px-5 md:px-10 py-20">
        <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium text-center leading-tight tracking-[-0.05em] mb-12">
          Мои работы
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="rounded-[20px] overflow-hidden h-64 bg-gray-200"></div>
          <div className="rounded-[20px] overflow-hidden h-64 bg-gray-300"></div>
          <div className="rounded-[20px] overflow-hidden h-64 bg-gray-200"></div>
          <div className="rounded-[20px] overflow-hidden h-64 bg-gray-300"></div>
          <div className="rounded-[20px] overflow-hidden h-64 bg-gray-200"></div>
          <div className="rounded-[20px] overflow-hidden h-64 bg-gray-300"></div>
        </div>
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2.5 h-2.5 rounded-full bg-foreground"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-foreground/20"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-foreground/20"></div>
        </div>
      </section>

      <Calculator />

      <section id="reviews" className="max-w-[1100px] mx-auto px-5 md:px-10 py-20">
        <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium text-center leading-tight tracking-[-0.05em] mb-12">
          Отзывы наших клиентов
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-28 md:w-36 h-28 md:h-36 rounded-full bg-gray-300 mb-8"></div>
              <h3 className="text-lg md:text-xl font-medium mb-2">{review.name}</h3>
              <p className="text-sm md:text-base text-muted-foreground">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-10 py-3 md:px-12 md:py-4 text-sm md:text-base tracking-[0.03em] uppercase bg-foreground text-white rounded-full hover:opacity-90 transition-opacity">
            Смотреть все отзывы
          </button>
        </div>
      </section>

      <section id="contact" className="max-w-[685px] mx-auto px-5 md:px-10 py-20">
        <h2 className="text-3xl md:text-4xl lg:text-[52px] font-medium text-center leading-tight tracking-[-0.05em] mb-12">
          Форма обратной связи
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative">
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ваше имя"
              required
              className="border-0 border-b border-muted-foreground/30 rounded-none bg-transparent px-0 py-5 text-sm placeholder:opacity-50 focus-visible:ring-0 focus-visible:border-foreground"
            />
          </div>
          <div className="relative">
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="E-mail"
              required
              className="border-0 border-b border-muted-foreground/30 rounded-none bg-transparent px-0 py-5 text-sm placeholder:opacity-50 focus-visible:ring-0 focus-visible:border-foreground"
            />
          </div>
          <div className="relative">
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Можете сразу указать желаемую дату съемки"
              rows={5}
              required
              className="border-0 border-b border-muted-foreground/30 rounded-none bg-transparent px-0 py-5 text-sm placeholder:opacity-50 focus-visible:ring-0 focus-visible:border-foreground resize-none"
            />
          </div>
          <div className="text-center pt-6">
            <Button
              type="submit"
              className="px-12 py-6 text-sm tracking-[0.03em] uppercase rounded-full"
            >
              Отправить
            </Button>
          </div>
        </form>
      </section>

      <footer className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-12 border-t border-[#2526311a]">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-1.5">
            <div className="h-px w-32 bg-foreground/20"></div>
            <div className="text-sm font-medium tracking-[0.3em] uppercase">Евгений Остапенко</div>
            <div className="h-px w-20 bg-foreground/20"></div>
          </div>
          <a
            href="#"
            className="text-xs font-bold tracking-[0.03em] uppercase hover:opacity-60 transition-opacity"
          >
            Правила студии
          </a>
          <div className="flex gap-6">
            <Icon name="Instagram" size={20} className="cursor-pointer hover:opacity-60 transition-opacity" />
            <Icon name="Youtube" size={20} className="cursor-pointer hover:opacity-60 transition-opacity" />
            <Icon name="Mail" size={20} className="cursor-pointer hover:opacity-60 transition-opacity" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;