
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl font-extrabold mb-4">Kontaktieren Sie uns</h1>
              <p className="text-slate-600">Haben Sie Fragen oder möchten Sie direkt einen Termin vereinbaren? Wir sind für Sie da.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Telefon</h4>
                  <p className="text-slate-600">+49 (0) 30 123 456 78</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">E-Mail</h4>
                  <p className="text-slate-600">info@techfix-pro.de</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Adresse</h4>
                  <p className="text-slate-600">Musterstraße 123, 10115 Berlin</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold">Öffnungszeiten</h4>
                  <p className="text-slate-600">Mo - Fr: 09:00 - 18:00 | Sa: 10:00 - 14:00</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-lg h-64 grayscale opacity-80 border border-slate-200">
               <img src="https://picsum.photos/seed/map/800/600" className="w-full h-full object-cover" alt="Map placeholder" />
            </div>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold mb-6">Nachricht schreiben</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Vorname</label>
                  <input className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Max" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nachname</label>
                  <input className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Mustermann" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">E-Mail</label>
                <input className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500" placeholder="max@beispiel.de" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Nachricht</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none focus:ring-2 focus:ring-blue-500 resize-none" placeholder="Wie können wir Ihnen helfen?" />
              </div>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">Nachricht senden</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
