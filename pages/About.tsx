
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="py-20 animate-in fade-in duration-500">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold mb-6">Über <span className="text-blue-600">TechFix Pro</span></h1>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Gegründet im Jahr 2015, begann TechFix Pro als kleine Werkstatt in einer Berliner Garage. Heute sind wir einer der führenden Dienstleister für Elektronikreparaturen mit drei Standorten und einem Team von über 15 spezialisierten Technikern.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Unsere Mission ist es, die Lebensdauer von Technik zu verlängern und Elektroschrott zu reduzieren. Wir glauben daran, dass Qualität und Schnelligkeit Hand in Hand gehen können. Deshalb verwenden wir ausschließlich hochwertige Ersatzteile und modernste Diagnosewerkzeuge.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600">25k+</div>
                <div className="text-sm text-slate-500">Reparaturen</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-sm text-slate-500">Techniker</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">99%</div>
                <div className="text-sm text-slate-500">Zufriedenheit</div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <img src="https://picsum.photos/seed/team/800/600" className="rounded-3xl shadow-2xl" alt="Our team" />
          </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-12">
          <h2 className="text-3xl font-bold mb-12 text-center">Unsere Philosophie</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Nachhaltigkeit</h3>
              <p className="text-slate-600">Reparieren statt wegwerfen. Wir helfen dabei, Ressourcen zu schonen.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Transparenz</h3>
              <p className="text-slate-600">Keine versteckten Kosten. Wir kommunizieren jeden Schritt der Reparatur.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-slate-600">Wir nutzen KI und modernste Technik, um Fehler schneller zu finden.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
