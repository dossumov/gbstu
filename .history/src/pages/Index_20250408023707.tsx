import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileText, Book, Users, Check, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample news data
const newsList = [
  {
    id: 1,
    title: "Встреча в Маркакольском районе ВКО",
    date: "4 апреля 2025",
    excerpt: "Председатель ВКОФ ОО «Казахстанский отраслевой профсоюз работников культуры, спорта, туризма и информации» Т. Тусупбеков и председатель ВКОФ ОО «Отраслевой профсоюз….",
    image: "https://gbstu.kz/wp-content/uploads/2025/04/1-1-720x405.jpg"
  },
  {
    id: 2,
    title: "Отчётно-выборная конференция Жамбылского филиала",
    date: "28 марта 2025",
    excerpt: "28 марта 2025 года состоялась XXVIII отчётно-выборная конференция Жамбылского филиала Отраслевого профсоюза работников государственных, банковских учреждений и общественного обслуживания «Қызмет».…",
    image: "https://gbstu.kz/wp-content/uploads/2025/04/ecbed31e-7b5d-4091-a28a-f242e0b64269-720x405.jpg"
  },
  {
    id: 3,
    title: "Соблюдение рабочего времени находится на контроле",
    date: "27 марта 2025",
    excerpt: "Департаментом Агентства Республики Казахстан по делам государственной службы по Карагандинской области совместно с заместителем председателя областного Профсоюзного Центра Федерации профсоюзов…",
    image: "https://gbstu.kz/wp-content/uploads/2025/03/486a56b2-cb6f-4d62-9313-b3096dcf0e92-1-720x405.jpg"
  }
];

const events = [
  {
    id: 1,
    title: "Съезд ",
    date: "15 апреля 2025",
    location: "Астана, Конференц-холл"
  },
  {
    id: 2,
    title: "Обучение трудовому законодательству",
    date: "22 апреля, 2025",
    location: "Алматы"
  },
  {
    id: 3,
    title: "Молодежный форум",
    date: "5-7 мая, 2025",
    location: "Курорт Боровое"
  }
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      title: "Supporting Kazakhstan's Civil Servants",
      subtitle: "Advocating for the rights and well-being of public service professionals",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=1600"
    },
    {
      title: "Join Our Growing Community",
      subtitle: "Connect with peers, access resources, and advance your career",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=1600"
    },
    {
      title: "Building a Better Future Together",
      subtitle: "Working toward improved conditions and professional development",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1600"
    }
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-kazakh-dark h-[70vh] min-h-[500px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="container-custom h-full flex flex-col justify-center relative z-10 animate-slide-in">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{slide.title}</h1>
                <p className="text-xl text-white/90 mb-8">{slide.subtitle}</p>
                <div className="flex flex-wrap gap-4">
                  <Button className="btn-secondary">Join Us Today</Button>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? "bg-white scale-125" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      
      {/* Mission Statement Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-1 bg-kazakh-blue/10 text-kazakh-blue rounded-full text-sm font-medium mb-4">
                Наша миссия
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-kazakh-dark mb-6">
            За защиту прав, достойный труд и социальную справедливость!
            </h2>
            <p className="text-gray-600 text-lg mb-8">
            Наш отраслевой профсоюз работников государственных, банковских учреждений и общественного обслуживания Республики Казахстан действует как эффективный посредник между работниками, работодателями и государством, объединяя усилия для развития справедливой социально-трудовой сферы, развивая институты коллективной защиты, обучая профсоюзные кадры, формируя политику и высокие стандарты в интересах наших членов.
            </p>
            <div className="flex justify-center">
              <Button variant="outline" className="btn-outline flex items-center gap-2">
                <span>Подробнее о нас</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-kazakh-blue/10 text-kazakh-blue rounded-full text-sm font-medium mb-4">
              Преимущества для наших членов
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-kazakh-dark">
              Как мы помогаем нашим членам профсоюза
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card border-t-4 border-t-kazakh-blue">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-kazakh-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-kazakh-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Защищаем права и интересы</h3>
                <p className="text-gray-600 mb-4">
                Представляем и отстаиваем права членов профсоюза в органах власти, судах и перед работодателями.
                </p>
                <Link to="/services" className="text-kazakh-blue font-medium flex items-center gap-1 hover:underline">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="card border-t-4 border-t-kazakh-gold">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-kazakh-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <Book className="h-6 w-6 text-kazakh-gold" />
                </div>
                <h3 className="text-xl font-bold mb-3">Ведем переговоры и заключаем соглашения</h3>
                <p className="text-gray-600 mb-4">
                Являемся стороной социального партнерства при подписании коллективных договоров и отраслевых соглашений..
                </p>
                <Link to="/services" className="text-kazakh-blue font-medium flex items-center gap-1 hover:underline">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            <Card className="card border-t-4 border-t-kazakh-blue">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-kazakh-blue/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-kazakh-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Контролируем соблюдение трудового законодательства</h3>
                <p className="text-gray-600 mb-4">
                Осуществляем профсоюзный контроль за условиями труда, охраной труда и безопасностью на рабочих местах.
                </p>
                <Link to="/services" className="text-kazakh-blue font-medium flex items-center gap-1 hover:underline">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button className="btn-primary">Узнать больше</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Latest News Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-12">
            <div>
              <span className="inline-block px-4 py-1 bg-kazakh-blue/10 text-kazakh-blue rounded-full text-sm font-medium mb-4">
              Будьте в курсе событий
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-kazakh-dark">
                Новости и события
              </h2>
            </div>
            <Link to="/news" className="hidden md:flex text-kazakh-blue font-medium items-center gap-1 hover:underline">
              <span>Просмотреть все новости</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsList.map((news) => (
              <Card key={news.id} className="card overflow-hidden hover:shadow-lg transition-all flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="py-6 flex flex-col flex-1">
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <h3 className="text-xl font-bold mb-3">{news.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{news.excerpt}</p>
                  <Link to={`/news/${news.id}`} className="text-kazakh-blue font-medium flex items-center gap-1 hover:underline mt-auto">
                    <span>Read more</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/news">
              <Button variant="outline" className="btn-outline">View All News</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Events & Join Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Upcoming Events */}
            <div>
              
              <h2 className="text-3xl font-bold text-kazakh-dark mb-6">
              Предстоящие события
              </h2>
              
              <div className="space-y-4">
                {events.map((event) => (
                  <Card key={event.id} className="card flex gap-4">
                    <div className="bg-kazakh-blue/10 rounded p-3 flex flex-col items-center justify-center min-w-16 h-16">
                      <Calendar className="h-5 w-5 text-kazakh-blue" />
                    </div>
                    <CardContent className="p-0 py-2 flex-grow">
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm text-gray-500">{event.date}</p>
                      <p className="text-sm text-gray-500">{event.location}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6">
                <Link to="/events">
                  <Button variant="outline" className="btn-outline flex items-center gap-2">
                    <span>Посмотреть календарь</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Become a Member */}
            <div className="bg-kazakh-blue text-white p-8 rounded-lg relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                  Присоединяйтесь к нам
                </span>
                <h2 className="text-3xl font-bold mb-6">
                  Становитесь членом нашего профсоюза уже сегодня
                </h2>
                <p className="text-white/90 mb-6">
                Присоединяйтесь к нашему растущему сообществу, насчитывающему более 150 000 работников государственных, банковских учреждений и общественного обслуживания. Вместе мы сможем достичь большего.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-kazakh-gold" />
                    <span>Правовая защита и помощь</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-kazakh-gold" />
                    <span>Возможности профессионального развития</span>
                  </li>
                  
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-kazakh-gold" />
                    <span>Специальные скидки и льготы</span>
                  </li>
                </ul>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="btn-secondary">Вступить в профсоюз</Button>
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                    Узнать больше
                  </Button>
                </div>
              </div>
              
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMTQgMTZIOS4zMzMzMzMzM3YtNS42NjY2NjY2N0gxNFYxNnptLS42NjY2NjY3LTZoLTRWNS4zMzMzMzMzM2g0djQuNjY2NjY2NjdoLS4wMDAwMDAyNXpNNi42NjY2NjY2NyAxNkgydjguNjY2NjY2N0g2LjY2NjY2NjY3VjE2ek0yIDQuNjY2NjY2NjdoMy4zMzMzMzMzM3YtLjMzMzMzMzM0SDJWNHYuNjY2NjY2Njd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20 transform rotate-45 translate-x-20 -translate-y-20"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-kazakh-blue to-blue-600 rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">У Вас есть вопрос?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Мы готовы ответить на все ваши вопросы о защите трудовых прав и вступлении в профсоюз. Свяжитесь с нами прямо сейчас!
            </p>
            <Button className="btn-secondary flex items-center gap-2 mx-auto">
              <Phone className="h-5 w-5" />
              <span>Написать нам</span>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;
