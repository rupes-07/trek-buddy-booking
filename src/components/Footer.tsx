
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Trek<span className="text-nepal-red">Buddy</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner for unforgettable Himalayan adventures. 
              Experience Nepal's majestic mountains with expert guides and 
              premium service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-nepal-blue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-nepal-blue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-nepal-blue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-nepal-blue transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/trips" className="text-gray-400 hover:text-white transition-colors">
                  Our Trips
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Treks */}
          <div>
            <h4 className="font-semibold mb-4">Popular Treks</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/trips/everest-base-camp" className="text-gray-400 hover:text-white transition-colors">
                  Everest Base Camp
                </Link>
              </li>
              <li>
                <Link to="/trips/annapurna-circuit" className="text-gray-400 hover:text-white transition-colors">
                  Annapurna Circuit
                </Link>
              </li>
              <li>
                <Link to="/trips/langtang-valley" className="text-gray-400 hover:text-white transition-colors">
                  Langtang Valley
                </Link>
              </li>
              <li>
                <Link to="/trips/manaslu-circuit" className="text-gray-400 hover:text-white transition-colors">
                  Manaslu Circuit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Thamel, Kathmandu</li>
              <li>Nepal</li>
              <li>Phone: +977 1234567890</li>
              <li>Email: info@trekbuddy.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} TrekBuddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
