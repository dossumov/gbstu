import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const switchLanguage = () => {
    // Cycle through available languages (English -> Kazakh -> Russian -> English)
    setLanguage(prev => {
      if (prev === "EN") return "KZ";
      if (prev === "KZ") return "RU";
      return "EN";
    });
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center h-20">
        <Link to="/" className="flex items-center">
          <div className="hidden md:block">
            <img 
              src="/lovable-uploads/b68f6104-79af-4007-a0f9-95a12707a530.png" 
              alt="Отраслевой профессиональный союз работников государственных, банковских учреждений и общественного обслуживания"
              className="h-40 py-5"
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-2">
          <Link to="/" className="nav-link nav-link-active">Главная</Link>
          <Link to="/about" className="nav-link">О нас</Link>
          <Link to="/services" className="nav-link">Деятельность</Link>
          <Link to="/news" className="nav-link">Новости</Link>
          <Link to="/contact" className="nav-link">Контакты</Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button 
            onClick={switchLanguage}
            variant="ghost" 
            size="sm"
            className="flex items-center gap-1 text-kazakh-dark"
          >
            <Globe className="h-4 w-4" />
            <span>{language}</span>
          </Button>
          
          <Button className="btn-primary">Личный кабинет</Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-2">
          <Button 
            onClick={switchLanguage}
            variant="ghost" 
            size="icon"
            className="text-kazakh-dark"
          >
            <Globe className="h-5 w-5" />
          </Button>
          <Button
            onClick={toggleMenu}
            variant="ghost"
            size="icon"
            className="text-kazakh-dark"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container-custom py-4 flex flex-col space-y-3">
            <Link to="/" className="nav-link nav-link-active py-2">Home</Link>
            <Link to="/about" className="nav-link py-2">About Us</Link>
            <Link to="/services" className="nav-link py-2">Member Services</Link>
            <Link to="/news" className="nav-link py-2">News & Updates</Link>
            <Link to="/join" className="nav-link py-2">Join Us</Link>
            <Link to="/contact" className="nav-link py-2">Contact</Link>
            <Button className="btn-primary w-full">Личный кабинет</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
