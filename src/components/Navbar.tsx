
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <span className="font-merriweather text-2xl font-bold text-nepal-blue">
              Trek<span className="text-nepal-red">Buddy</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className={`text-gray-700 hover:text-nepal-blue transition-colors ${
                      isActive('/') ? 'text-nepal-blue font-medium' : ''
                    }`}
                  >
                    Home
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger 
                      className={`flex items-center text-gray-700 hover:text-nepal-blue transition-colors ${
                        isActive('/trips') || isActive('/destinations') ? 'text-nepal-blue font-medium' : ''
                      }`}
                    >
                      Destinations <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem>
                        <Link to="/trips" className="w-full">All Trips</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="/trips?region=everest" className="w-full">Everest Region</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="/trips?region=annapurna" className="w-full">Annapurna Region</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={`text-gray-700 hover:text-nepal-blue transition-colors ${
                      isActive('/about') ? 'text-nepal-blue font-medium' : ''
                    }`}
                  >
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/contact" 
                    className={`text-gray-700 hover:text-nepal-blue transition-colors ${
                      isActive('/contact') ? 'text-nepal-blue font-medium' : ''
                    }`}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/auth">
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link to="/auth?mode=register">
              <Button variant="default" size="sm">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu}>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/') 
                  ? 'text-nepal-blue bg-nepal-blue/10' 
                  : 'text-gray-700 hover:text-nepal-blue hover:bg-gray-50'
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/trips"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/trips') 
                  ? 'text-nepal-blue bg-nepal-blue/10' 
                  : 'text-gray-700 hover:text-nepal-blue hover:bg-gray-50'
              }`}
              onClick={toggleMenu}
            >
              All Trips
            </Link>
            <Link
              to="/trips?region=everest"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/trips') && window.location.search.includes('region=everest')
                  ? 'text-nepal-blue bg-nepal-blue/10' 
                  : 'text-gray-700 hover:text-nepal-blue hover:bg-gray-50'
              }`}
              onClick={toggleMenu}
            >
              Everest Region
            </Link>
            <Link
              to="/trips?region=annapurna"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/trips') && window.location.search.includes('region=annapurna')
                  ? 'text-nepal-blue bg-nepal-blue/10' 
                  : 'text-gray-700 hover:text-nepal-blue hover:bg-gray-50'
              }`}
              onClick={toggleMenu}
            >
              Annapurna Region
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/about') 
                  ? 'text-nepal-blue bg-nepal-blue/10' 
                  : 'text-gray-700 hover:text-nepal-blue hover:bg-gray-50'
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/contact') 
                  ? 'text-nepal-blue bg-nepal-blue/10' 
                  : 'text-gray-700 hover:text-nepal-blue hover:bg-gray-50'
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <Link
                to="/auth"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-nepal-blue hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Sign In
              </Link>
              <Link
                to="/auth?mode=register"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-nepal-blue hover:bg-gray-50"
                onClick={toggleMenu}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
