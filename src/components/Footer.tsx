
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8 border-t border-gray-200">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-kazakh-dark">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-kazakh-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-kazakh-blue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-kazakh-blue transition-colors">Member Services</Link></li>
              <li><Link to="/news" className="text-gray-600 hover:text-kazakh-blue transition-colors">News & Updates</Link></li>
              <li><Link to="/join" className="text-gray-600 hover:text-kazakh-blue transition-colors">Join Us</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-kazakh-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-kazakh-dark">Member Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-600 hover:text-kazakh-blue transition-colors">Legal Assistance</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-kazakh-blue transition-colors">Training Programs</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-kazakh-blue transition-colors">Benefits Overview</Link></li>
              <li><Link to="/documents" className="text-gray-600 hover:text-kazakh-blue transition-colors">Documents & Forms</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-kazakh-blue transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-kazakh-dark">Important Documents</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-kazakh-blue transition-colors">Union Charter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kazakh-blue transition-colors">Code of Conduct</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kazakh-blue transition-colors">Annual Reports</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kazakh-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kazakh-blue transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-kazakh-dark">Contact Us</h3>
            <div className="space-y-4">
              <p className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-kazakh-blue shrink-0 mt-1" />
                <span className="text-gray-600">123 Democracy Avenue<br />Astana, 010000<br />Kazakhstan</span>
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
              TU
            </div>
            <p className="text-sm text-gray-500">Trade Union of Civil Servants of Kazakhstan</p>
          </div>
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
