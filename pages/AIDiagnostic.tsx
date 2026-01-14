import React, { useState, useRef } from "react";
import { diagnoseDevice } from "../src/services/geminiService";
import { DiagnosisResult } from "../types";
import {
  Camera,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Calendar,
  ArrowRight,
} from "lucide-react";

const AIDiagnostic: React.FC = () => {
  const [deviceType, setDeviceType] = useState("Smartphone");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [step, setStep] = useState(1); // 1: Info, 2: Diagnosis, 3: Booking
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDiagnose = async () => {
    if (!description) return;
    setIsLoading(true);
    try {
      const data = await diagnoseDevice(
        deviceType,
        description,
        image || undefined
      );
      setResult(data);
      setStep(2);
    } catch (err) {
      alert(
        "Fehler bei der Diagnose. Bitte beschreiben Sie das Problem genauer."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    date: "",
  });

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-in slide-in-from-bottom duration-500">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">KI-Fehlerdiagnose</h1>
        <p className="text-slate-600 text-lg">
          Nutzen Sie unsere künstliche Intelligenz, um das Problem Ihres Geräts
          sofort zu identifizieren.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        {/* Progress Bar */}
        <div className="bg-slate-50 px-8 py-4 border-b border-slate-100 flex justify-between">
          {[
            { s: 1, n: "Beschreibung" },
            { s: 2, n: "KI-Analyse" },
            { s: 3, n: "Termin buchen" },
          ].map((item) => (
            <div key={item.s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= item.s
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                {step > item.s ? <CheckCircle2 className="w-5 h-5" /> : item.s}
              </div>
              <span
                className={`text-sm font-medium hidden sm:inline ${
                  step >= item.s ? "text-slate-900" : "text-slate-400"
                }`}
              >
                {item.n}
              </span>
            </div>
          ))}
        </div>

        <div className="p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Gerätetyp
                  </label>
                  <select
                    value={deviceType}
                    onChange={(e) => setDeviceType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option>Smartphone</option>
                    <option>Laptop</option>
                    <option>Tablet</option>
                    <option>Lautsprecher</option>
                    <option>Smartwatch</option>
                    <option>Sonstiges</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Foto hochladen (optional)
                  </label>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full px-4 py-3 rounded-xl border-2 border-dashed border-slate-200 hover:border-blue-400 transition-colors flex items-center justify-center gap-2 text-slate-500"
                  >
                    {image ? (
                      "Foto ausgewählt"
                    ) : (
                      <>
                        <Camera className="w-5 h-5" /> Bild auswählen
                      </>
                    )}
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    className="hidden"
                    accept="image/*"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Was ist das Problem?
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Beschreiben Sie z.B. 'Das Display flackert' oder 'Der Akku lädt nicht mehr'..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                />
              </div>

              <button
                onClick={handleDiagnose}
                disabled={isLoading || !description}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" /> Analysiere...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Analyse starten
                  </>
                )}
              </button>
            </div>
          )}

          {step === 2 && result && (
            <div className="space-y-8 animate-in fade-in zoom-in duration-300">
              <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg text-white">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm text-blue-600 font-bold uppercase tracking-wider">
                      Mögliche Diagnose
                    </h3>
                    <p className="text-2xl font-bold text-slate-900">
                      {result.possibleIssue}
                    </p>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {result.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50">
                  <h4 className="font-bold text-slate-900 mb-2">
                    Geschätzte Kosten
                  </h4>
                  <p className="text-3xl font-extrabold text-blue-600">
                    {result.estimatedCost}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Endgültiger Preis nach Sichtung vor Ort.
                  </p>
                </div>
                <div className="border border-slate-100 p-6 rounded-2xl bg-slate-50">
                  <h4 className="font-bold text-slate-900 mb-2">
                    Dringlichkeit
                  </h4>
                  <p
                    className={`text-xl font-bold ${
                      result.urgency === "Hoch"
                        ? "text-red-600"
                        : result.urgency === "Mittel"
                        ? "text-orange-600"
                        : "text-green-600"
                    }`}
                  >
                    {result.urgency}
                  </p>
                  <p className="text-xs text-slate-500 mt-2">
                    Wir empfehlen eine zeitnahe Prüfung.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-4">
                  Nächste Schritte
                </h4>
                <ul className="space-y-3">
                  {result.nextSteps.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-slate-600"
                    >
                      <div className="w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold mt-0.5">
                        {idx + 1}
                      </div>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-100 flex gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 px-6 rounded-xl border border-slate-200 font-bold hover:bg-slate-50 transition-colors"
                >
                  Zurück
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-[2] py-4 px-6 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
                >
                  Jetzt Termin buchen
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right duration-300">
              <h3 className="text-2xl font-bold mb-6">
                Reparaturtermin vereinbaren
              </h3>
              <form onSubmit={handleBooking} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      Vollständiger Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="Max Mustermann"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      E-Mail Adresse
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                      placeholder="max@beispiel.de"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Wunschtermin
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="date"
                      required
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-600 border border-slate-100">
                  <p>
                    <strong>Zusammenfassung:</strong> {deviceType} Reparatur (
                    {result?.possibleIssue}). Vorraussichtlich{" "}
                    {result?.estimatedCost}.
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-xl shadow-blue-100 flex items-center justify-center gap-2"
                >
                  Buchung bestätigen <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-12 animate-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Buchung erfolgreich!</h2>
              <p className="text-slate-600 mb-8 max-w-md mx-auto">
                Vielen Dank! Wir haben Ihre Anfrage erhalten und senden Ihnen in
                Kürze eine Bestätigung per E-Mail zu.
              </p>
              <button
                onClick={() => (window.location.hash = "/")}
                className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all"
              >
                Zur Startseite
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIDiagnostic;
