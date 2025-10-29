import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const photographerServices = {
  events: [
    { id: 'wedding-stories', name: 'Свадебные истории', price: 15000 },
    { id: 'graduation', name: 'Выпускные вечера', price: 8000 },
    { id: 'movie-series', name: 'Кино и сериалы', price: 25000 },
    { id: 'birthday', name: 'День рождения', price: 6000 },
    { id: 'children-party', name: 'Детские праздники', price: 7000 },
    { id: 'advertising', name: 'Рекламные проекты', price: 20000 },
    { id: 'anniversary', name: 'Юбилеи', price: 8000 },
    { id: 'graduation-bell', name: 'Последний звонок', price: 5000 },
    { id: 'social-videos', name: 'Ролики для соцсетей', price: 4000 },
    { id: 'baptism', name: 'Крещения', price: 6000 },
    { id: 'music-video', name: 'Музыкальные клипы', price: 15000 },
    { id: 'interview', name: 'Интервью', price: 3000 },
  ],
  additional: [
    { id: 'photobooks', name: 'Фотокниги', price: 3000 },
    { id: 'object-removal', name: 'Удаление объектов с фото', price: 500 },
    { id: 'retouching', name: 'Фоторетушь', price: 200 },
    { id: 'location-scouting', name: 'Подбор локаций', price: 2000 },
    { id: 'fast-processing', name: 'Ускоренная обработка', price: 3000 },
  ],
  printing: [
    { id: 'photo-printing', name: 'Печать фотографий', price: 50 },
    { id: 'lamination', name: 'Ламинирование фото', price: 100 },
    { id: 'adhesive-paper', name: 'Самоклеящаяся бумага', price: 150 },
    { id: 'color-printing', name: 'Цветная печать', price: 80 },
    { id: 'photo-calendar', name: 'Календарь с фото', price: 500 },
    { id: 'bw-printing', name: 'Ч/Б печать', price: 30 },
    { id: 'document-photos', name: 'Фото на документы', price: 200 },
    { id: 'business-cards', name: 'Печать визиток', price: 300 },
  ],
};

const videographerServices = {
  events: [
    { id: 'wedding-video', name: 'Свадебные видео', price: 25000 },
    { id: 'graduation-video', name: 'Выпускные фильмы', price: 12000 },
    { id: 'movie-series', name: 'Кино и сериалы', price: 40000 },
    { id: 'birthday-video', name: 'День рождения', price: 10000 },
    { id: 'children-video', name: 'Детские праздники', price: 12000 },
    { id: 'advertising-video', name: 'Рекламные ролики', price: 35000 },
    { id: 'anniversary-video', name: 'Юбилеи', price: 15000 },
    { id: 'graduation-bell-video', name: 'Последний звонок', price: 8000 },
    { id: 'social-content', name: 'Контент для соцсетей', price: 6000 },
    { id: 'baptism-video', name: 'Крещения', price: 10000 },
    { id: 'music-video', name: 'Музыкальные клипы', price: 30000 },
    { id: 'interview-video', name: 'Интервью', price: 5000 },
  ],
  additional: [
    { id: 'video-editing', name: 'Монтаж видео', price: 5000 },
    { id: 'color-correction', name: 'Цветокоррекция', price: 3000 },
    { id: 'sound-editing', name: 'Обработка звука', price: 2000 },
    { id: 'location-scouting', name: 'Подбор локаций', price: 2000 },
    { id: 'fast-delivery', name: 'Ускоренная доставка', price: 5000 },
  ],
  printing: [
    { id: 'dvd-burning', name: 'Запись на DVD', price: 300 },
    { id: 'usb-delivery', name: 'Доставка на USB', price: 500 },
    { id: 'online-delivery', name: 'Онлайн доставка', price: 200 },
    { id: 'trailer-creation', name: 'Создание трейлера', price: 2000 },
    { id: 'subtitles', name: 'Субтитры', price: 1000 },
    { id: 'hd-export', name: 'HD экспорт', price: 800 },
    { id: 'social-cuts', name: 'Нарезки для соцсетей', price: 1500 },
    { id: 'background-music', name: 'Фоновая музыка', price: 1200 },
  ],
};

const timeSlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];

const hourOptions = [
  { value: '1', label: '1 час' },
  { value: '2', label: '2 часа' },
  { value: '3', label: '3 часа' },
  { value: '4', label: '4 часа' },
  { value: '5', label: '5 часов' },
  { value: '6', label: '6 часов' },
  { value: '8', label: '8 часов' },
  { value: '10', label: '10 часов' },
  { value: '12', label: '12 часов' },
];

const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
}

function InteractiveCheckbox({ checked, onChange, children }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2 cursor-pointer group" onClick={onChange}>
      <div
        className={`w-5 h-5 rounded-[5px] flex items-center justify-center transition-colors ${
          checked ? 'bg-foreground' : 'bg-white border-[1.5px] border-foreground'
        }`}
      >
        {checked && <Icon name="Check" size={14} className="text-white" />}
      </div>
      {children}
    </div>
  );
}

export default function Calculator() {
  const { toast } = useToast();
  const [activeMode, setActiveMode] = useState<'photographer' | 'videographer'>('photographer');
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set(['wedding-stories', 'photobooks', 'photo-printing']));
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedHours, setSelectedHours] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
  });

  const currentServices = activeMode === 'photographer' ? photographerServices : videographerServices;

  const switchMode = (mode: 'photographer' | 'videographer') => {
    setActiveMode(mode);
    if (mode === 'photographer') {
      setSelectedServices(new Set(['wedding-stories', 'photobooks', 'photo-printing']));
    } else {
      setSelectedServices(new Set(['wedding-video', 'video-editing', 'dvd-burning']));
    }
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };

  const calculateTotal = () => {
    let total = 0;
    [...currentServices.events, ...currentServices.additional, ...currentServices.printing].forEach((service) => {
      if (selectedServices.has(service.id)) {
        total += service.price;
      }
    });
    return total;
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + ' ₽';
  };

  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Я свяжусь с вами в ближайшее время для уточнения деталей.',
    });
  };

  const renderServiceGrid = (services: typeof photographerServices.events, columns = 4) => {
    const rows = Math.ceil(services.length / columns);
    return (
      <div className="flex gap-10 md:gap-15 w-full">
        {Array.from({ length: columns }).map((_, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-4 w-full max-w-[179px]">
            {Array.from({ length: rows }).map((_, rowIndex) => {
              const serviceIndex = colIndex * rows + rowIndex;
              const service = services[serviceIndex];
              return service ? (
                <InteractiveCheckbox key={service.id} checked={selectedServices.has(service.id)} onChange={() => toggleService(service.id)}>
                  <p className="text-sm leading-tight">{service.name}</p>
                </InteractiveCheckbox>
              ) : (
                <div key={rowIndex} className="h-[22px]"></div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full bg-[#f5f5f5] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
        <div className="flex flex-col items-center gap-5 mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-[62px] font-medium text-center leading-tight tracking-[-0.05em]">
            Тарифы и пакеты услуг
          </h1>
          <p className="text-sm md:text-base text-[#4c4e5f] text-center max-w-2xl">
            Выберите направление, событие и дополнительные услуги.
          </p>
          <div className="flex gap-1 items-center">
            <button
              onClick={() => switchMode('photographer')}
              className={`px-2.5 py-2 text-2xl md:text-3xl uppercase transition-opacity relative ${
                activeMode === 'photographer' ? 'opacity-100 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-foreground' : 'opacity-20'
              }`}
            >
              Фотограф
            </button>
            <button
              onClick={() => switchMode('videographer')}
              className={`px-2.5 py-2 text-2xl md:text-3xl uppercase transition-opacity relative ${
                activeMode === 'videographer' ? 'opacity-100 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-foreground' : 'opacity-20'
              }`}
            >
              Видеограф
            </button>
          </div>
        </div>

        <div className="bg-white rounded-[30px] p-6 md:p-10 max-w-[1001px] mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-5">
              <h2 className="text-lg md:text-xl font-medium">События</h2>
              {renderServiceGrid(currentServices.events, 4)}
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="text-lg md:text-xl font-medium">Дополнительные услуги</h2>
              {renderServiceGrid(currentServices.additional, 4)}
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="text-lg md:text-xl font-medium">
                {activeMode === 'photographer' ? 'Печать и продукция' : 'Доставка и дополнительно'}
              </h2>
              {renderServiceGrid(currentServices.printing, 4)}
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2.5">
                <h2 className="text-lg md:text-xl font-medium">Заполните форму для бронирования</h2>
                <p className="text-sm text-[#4c4e5f]">Укажите контакты и желаемую дату — я свяжусь с вами для уточнения деталей.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ваше имя"
                    required
                    className="border-0 border-b border-muted-foreground/20 rounded-none bg-transparent px-0 py-5 text-sm placeholder:opacity-50 focus-visible:ring-0 focus-visible:border-foreground"
                  />
                </div>
                <div className="relative">
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ваш E-mail (не обязательно)"
                    className="border-0 border-b border-muted-foreground/20 rounded-none bg-transparent px-0 py-5 text-sm placeholder:opacity-50 focus-visible:ring-0 focus-visible:border-foreground"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+ 7 ( _ _ _ ) _ _ _-_ _-_ _"
                    required
                    className="border-0 border-b border-muted-foreground/20 rounded-none bg-transparent px-0 py-5 text-sm placeholder:opacity-50 focus-visible:ring-0 focus-visible:border-foreground"
                  />
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="relative cursor-pointer">
                      <Input
                        value={selectedDate ? formatDate(selectedDate) : ''}
                        placeholder="Выберите дату"
                        readOnly
                        className="border-0 border-b border-muted-foreground/20 rounded-none bg-transparent px-0 py-5 text-sm placeholder:opacity-50 focus-visible:ring-0 focus-visible:border-foreground cursor-pointer"
                      />
                      <Icon name="Calendar" size={20} className="absolute right-0 top-1/2 -translate-y-1/2 text-foreground" />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} disabled={(date) => date < new Date()} />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <Select value={selectedTime} onValueChange={setSelectedTime}>
                  <SelectTrigger className="border-0 border-b border-muted-foreground/20 rounded-none bg-transparent px-0 py-5 text-sm h-auto">
                    <SelectValue placeholder="Время начала" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedHours} onValueChange={setSelectedHours}>
                  <SelectTrigger className="border-0 border-b border-muted-foreground/20 rounded-none bg-transparent px-0 py-5 text-sm h-auto">
                    <SelectValue placeholder="Количество часов" />
                  </SelectTrigger>
                  <SelectContent>
                    {hourOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="relative">
                  <Input
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    placeholder="Комментарий"
                    className="border-0 border-b border-muted-foreground/20 rounded-none bg-transparent px-0 py-5 text-sm placeholder:opacity-50 focus-visible:ring-0 focus-visible:border-foreground"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
              <div className="flex items-center gap-3">
                <span className="text-lg">Итоговая стоимость:</span>
                <span className="text-3xl md:text-[32px] font-medium tracking-tight">{formatPrice(calculateTotal())}</span>
              </div>
              <Button type="submit" size="lg" className="w-full md:w-[300px] h-[55px] text-base tracking-[0.03em] uppercase rounded-full">
                Забронировать дату
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
