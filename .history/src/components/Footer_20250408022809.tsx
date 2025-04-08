import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8 border-t border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-kazakh-dark">Быстрые ссылки</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-kazakh-blue transition-colors">Главная</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-kazakh-blue transition-colors">О нас</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-kazakh-blue transition-colors">Услуги для членов</Link></li>
              <li><Link to="/news" className="text-gray-600 hover:text-kazakh-blue transition-colors">Новости и обновления</Link></li>
              <li><Link to="/join" className="text-gray-600 hover:text-kazakh-blue transition-colors">Присоединиться</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-kazakh-blue transition-colors">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-kazakh-dark">Ресурсы для членов</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-600 hover:text-kazakh-blue transition-colors">Юридическая помощь</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-kazakh-blue transition-colors">Программы обучения</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-kazakh-blue transition-colors">Обзор льгот</Link></li>
              <li><Link to="/documents" className="text-gray-600 hover:text-kazakh-blue transition-colors">Документы и формы</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-kazakh-blue transition-colors">Часто задаваемые вопросы</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-kazakh-dark">Важные документы</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-kazakh-blue transition-colors">Устав профсоюза</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kazakh-blue transition-colors">Кодекс поведения</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kazakh-blue transition-colors">Годовые отчеты</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kazakh-blue transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kazakh-blue transition-colors">Условия использования</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-kazakh-dark">Свяжитесь с нами</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-kazakh-blue shrink-0 mt-1" />
                <span className="text-gray-600">Казахстан, Астана, <br></br>проспект Абая 38</span>
              </p>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-kazakh-blue" />
                <span className="text-gray-600">+7 (7172) 12-34-56</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-kazakh-blue" />
                <span className="text-gray-600">info@civilservants-union.kz</span>
              </p>
            </div>
            <div className="mt-6 flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-kazakh-blue transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-kazakh-blue transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-kazakh-blue transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-10 h-10 bg-kazakh-blue rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">
              ПС
            </div>
            <p className="text-sm text-gray-500">Профсоюз работников государственных учреждений Казахстана</p>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Все права защищены
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
