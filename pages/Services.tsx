
import React from 'react';
import { Link } from 'react-router-dom';
import { Laptop, Smartphone, Headphones, Tablet, HardDrive, Keyboard } from 'lucide-react';

const services = [
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "Laptop & MacBooks",
    items: ["Displaytausch", "Tastaturwechsel", "Akku-Austausch", "Wasserschaden-Behandlung", "Mainboard-Reparatur"],
    price: "ab 49€"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Smartphones (iOS & Android)",
    items: ["Displayreparatur", "Ladebuchsen-Tausch", "Kameraglas-Wechsel", "Mikrofon/Lautsprecher", "Gehäuse-Reparatur"],
    price: "ab 29€"
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "Audio & Lautsprecher",
    items: ["Bose & JBL Spezialisten", "Sicken-Reparatur", "Verstärker-Instandsetzung", "Kabelbruch-Beseitigung", "Netzteil-Service"],
    price: "ab 39€"
  },
  {
    icon: <Tablet className="w-8 h-8" />,
    title: "Tablets & iPads",
    items: ["Digitizer-Wechsel", "Akku-Service", "Gehäuse-Begradigung", "Software-Wiederherstellung"],
    price: "ab 59€"
  },
  {
    icon: <HardDrive className="w-8 h-8" />,
    title: "Datenrettung",
    items: ["Gelöschte Dateien", "Defekte Festplatten", "Kaputte USB-Sticks", "SD-Karten Wiederherstellung"],
    price: "nach Analyse"
  },
  {
    icon: <Keyboard className="w-8 h-8" />,
    title: "Zubehör-Service",
    items: ["Konsolen-Controller", "Gaming-Mäuse", "Mechanische Tastaturen", "Spezial-Elektronik"],
    price: "ab 19€"
  }
];

const Services: React.FC = () => {
  return (
    <div className="py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-4">Unsere Services</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Wir bieten spezialisierte Reparaturen für eine Vielzahl von Geräten an. Jede Reparatur wird von Experten mit Präzision durchgeführt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-3 mb-8">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <span className="text-slate-400 text-sm">Preise</span>
                <span className="text-xl font-bold text-slate-900">{service.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ihr Gerät ist nicht dabei?</h2>
          <p className="mb-8 text-blue-100 max-w-xl mx-auto">Kein Problem! Wir reparieren fast alles, was einen Stecker oder einen Akku hat. Kontaktieren Sie uns einfach für eine individuelle Anfrage.</p>
          <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">Jetzt anfragen</Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
