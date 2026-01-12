
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone, Laptop, Speaker, Cpu, MessageSquareQuote } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'KI-Diagnose', path: '/ai-diagnostic' },
    { name: 'Über uns', path: '/about' },
    { name: 'Kontakt', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center gap-2">
              <Cpu className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold tracking-tight">TechFix <span className="text-blue-600">Pro</span></span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === item.path ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/ai-diagnostic"
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
              >
                Reparatur buchen
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-base font-medium text-slate-600 hover:bg-slate-50 rounded-lg"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <Cpu className="w-6 h-6 text-blue-400" />
              <span className="text-lg font-bold">TechFix Pro</span>
            </div>
            <p className="text-sm">Ihr zuverlässiger Partner für schnelle und professionelle Reparaturen in Berlin & Umgebung.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Dienstleistungen</h4>
            <ul className="space-y-2 text-sm">
              <li>Laptop-Reparatur</li>
              <li>Handy & Tablet Service</li>
              <li>Audio & Lautsprecher</li>
              <li>Datenrettung</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-sm">
              <li>Über uns</li>
              <li>Karriere</li>
              <li>Preise</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>Musterstraße 123, 10115 Berlin</li>
              <li>+49 (0) 30 123 456 78</li>
              <li>info@techfix-pro.de</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-xs">
          &copy; {new Date().getFullYear()} TechFix Pro. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
