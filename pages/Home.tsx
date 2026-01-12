
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Award, ArrowRight, Laptop, Smartphone, Headphones } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              Wir reparieren Ihre <span className="gradient-text">Technik</span> in Rekordzeit.
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0">
              Von Laptops über Smartphones bis hin zu High-End-Lautsprechern – unser Expertenteam bringt Ihre Geräte wieder zum Laufen. Mit 24 Monaten Garantie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/ai-diagnostic" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2">
                KI-Fehlerdiagnose starten <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center">
                Unsere Services
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <img 
              src="/images/reparatur-start.jpg"
              alt="Technician repairing a device" 
              className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Was wir reparieren</h2>
            <p className="text-slate-600">Professionelle Reparatur für fast alle elektronischen Geräte.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-3xl hover:shadow-xl transition-shadow group">
              <Laptop className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Laptops & PCs</h3>
              <p className="text-slate-600 mb-6">Displaytausch, Mainboard-Reparatur, Akku-Service und Software-Optimierung.</p>
              <Link to="/services" className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">Mehr erfahren <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl hover:shadow-xl transition-shadow group">
              <Smartphone className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Smartphones</h3>
              <p className="text-slate-600 mb-6">iPhone, Samsung & Co. – Displays, Akkus, Kameras und Wasserschäden.</p>
              <Link to="/services" className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">Mehr erfahren <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="p-8 bg-slate-50 rounded-3xl hover:shadow-xl transition-shadow group">
              <Headphones className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Audio & Hi-Fi</h3>
              <p className="text-slate-600 mb-6">Reparatur von JBL, Bose, Sonos und hochwertigen Verstärkern.</p>
              <Link to="/services" className="text-blue-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all">Mehr erfahren <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Warum TechFix Pro?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">24 Monate Garantie</h4>
                  <p className="text-slate-600 text-sm">Auf alle verbauten Ersatzteile und unsere Arbeitsleistung.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Express-Reparatur</h4>
                  <p className="text-slate-600 text-sm">Über 80% aller Smartphone-Reparaturen erledigen wir in unter 60 Minuten.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold">Zertifizierte Techniker</h4>
                  <p className="text-slate-600 text-sm">Unsere Techniker sind speziell auf die jeweiligen Marken geschult.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/repair-1.jpg" className="rounded-2xl shadow-lg mt-8" alt="Repair 2" />
            <img src="/images/repair-2.jpg" className="rounded-2xl shadow-lg" alt="Repair 3" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
