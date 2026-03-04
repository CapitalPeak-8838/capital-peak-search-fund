
import React, { useState, useEffect } from 'react';
import { 
  Mountain, 
  Target, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  ChevronRight, 
  Send, 
  MessageCircle,
  X,
  Building2,
  PieChart,
  UserCheck,
  Linkedin,
  Mail,
  ArrowRight
} from 'lucide-react';
import { getGeminiResponse } from './geminiService';

// --- Helper Components ---

const SectionHeading = ({ subtitle, title, light = false }: { subtitle: string, title: string, light?: boolean }) => (
  <div className="mb-16 text-center animate-fade-in-up">
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className={`h-px w-8 ${light ? 'bg-gold/40' : 'bg-gold'}`}></div>
      <span className={`${light ? 'text-gold' : 'text-gold'} font-bold uppercase tracking-[0.3em] text-[10px]`}>{subtitle}</span>
      <div className={`h-px w-8 ${light ? 'bg-gold/40' : 'bg-gold'}`}></div>
    </div>
    <h2 className={`text-4xl md:text-5xl font-serif ${light ? 'text-white' : 'text-midnight'} leading-tight`}>{title}</h2>
  </div>
);

// --- Navbar ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'glass py-3 shadow-2xl' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative overflow-hidden p-1">
            <Mountain className={`w-8 h-8 transition-transform duration-500 group-hover:scale-110 ${scrolled ? 'text-gold' : 'text-white'}`} />
          </div>
          <span className={`text-xl font-bold tracking-tighter font-serif transition-colors duration-300 ${scrolled ? 'text-white' : 'text-white'}`}>
            CAPITAL <span className="text-gold">PEAK</span>
          </span>
        </a>
        
        <div className="hidden md:flex gap-10 items-center">
          {['Il Modello', 'Criteri', 'Chi Siamo', 'Contatti'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="nav-link text-[11px] uppercase tracking-widest font-bold text-slate-200 hover:text-gold transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a href="#contatti" className="btn-primary bg-gold text-midnight px-6 py-2.5 rounded text-[11px] uppercase tracking-widest font-black inline-block">
            Inizia Conversazione
          </a>
        </div>
      </div>
    </nav>
  );
};

// --- Hero ---

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-midnight">
      {/* Background with Mountain Layers */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2070" 
          alt="Imponente paesaggio montano" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-mountain-float"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-midnight/80 via-transparent to-midnight"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center animate-fade-in-up">
        <div className="mb-8 inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
          <div className="w-2 h-2 rounded-full bg-gold animate-pulse"></div>
          <span className="text-gold text-[10px] uppercase tracking-[0.2em] font-bold">Search Fund d'Eccellenza</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 leading-[1.1]">
          Dalla vetta alla <span className="text-gold italic">continuità</span>.
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-14 max-w-3xl mx-auto font-light leading-relaxed">
          Garantiamo la continuità della vostra eccellenza imprenditoriale attraverso una transizione fluida e una dedizione operativa assoluta.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <a href="#contatti" className="btn-primary bg-gold text-midnight px-12 py-5 rounded text-sm font-black uppercase tracking-widest shadow-2xl group inline-flex items-center">
            Pianifica la Successione 
            <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#il-modello" className="btn-primary group text-white text-sm font-bold uppercase tracking-widest flex items-center gap-3">
            <span className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:border-gold transition-colors">
              <Mountain className="w-4 h-4 group-hover:text-gold transition-colors" />
            </span>
            Esplora la Tesi
          </a>
        </div>
      </div>

      <a href="#il-modello" className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] text-white uppercase tracking-widest">Scroll per esplorare</span>
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent"></div>
      </a>
    </section>
  );
};

// --- Mission ---

const Mission = () => {
  return (
    <section id="il-modello" className="py-32 bg-white relative overflow-hidden mountain-pattern">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 overflow-hidden rounded-sm shadow-[40px_40px_0px_-10px_rgba(197,160,89,0.1)]">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070" 
                className="w-full transition-transform duration-[2000ms] hover:scale-105"
                alt="Business environment"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-gold/20"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionHeading subtitle="Il Nostro Modello" title="Un unico focus: la vostra eredità." />
            <div className="space-y-8 text-slate-600">
              <p className="text-lg leading-relaxed font-light">
                Capital Peak si distingue per un approccio sartoriale: acquisiamo una <strong>singola realtà</strong> per dedicarvi la totalità delle nostre risorse. Il nostro obiettivo primario è la valorizzazione dell'identità aziendale e la tutela del patrimonio umano e industriale costruito nel tempo.
              </p>
              <div className="grid gap-6">
                {[
                  { title: "Custodia del Valore", desc: "Manteniamo intatta l'identità e i valori che hanno reso grande l'impresa." },
                  { title: "Manager dedicato", desc: "Il sottoscritto subentrerà operativamente per guidare l'azienda giorno dopo giorno." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-slate-50 border border-slate-100 rounded-lg interactive-card">
                    <div className="shrink-0 w-12 h-12 bg-white rounded shadow-sm flex items-center justify-center">
                      <ShieldCheck className="text-gold w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-midnight mb-1">{item.title}</h4>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Criteria ---

const Criteria = () => {
  return (
    <section id="criteri" className="py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-8">
        <SectionHeading subtitle="Criteri di Ricerca" title="Cosa cerchiamo in una gemma." />
        
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              icon: <Building2 className="w-7 h-7" />, 
              title: "Settori Strategici", 
              items: ["Componentistica Industriale", "Servizi B2B ad alto valore", "Distribuzione Specializzata", "Bio-Tech / Pharma Services"] 
            },
            { 
              icon: <PieChart className="w-7 h-7" />, 
              title: "Fondamentali", 
              items: ["EBITDA €1.5M – €5M", "Cash Flow stabile", "Ricavi ricorrenti", "Indebitamento gestibile"] 
            },
            { 
              icon: <Target className="w-7 h-7" />, 
              title: "Passaggio Critico", 
              items: ["Fondatore verso il retirement", "Assenza di eredi operativi", "Voglia di scalare il business", "Cultura d'eccellenza"] 
            }
          ].map((card, idx) => (
            <div key={idx} className="bg-white p-12 rounded-sm border border-slate-200 shadow-sm interactive-card flex flex-col">
              <div className="text-gold mb-8">{card.icon}</div>
              <h4 className="text-xl font-serif font-bold mb-8 text-midnight border-b border-gold/10 pb-4">{card.title}</h4>
              <ul className="space-y-5 flex-grow">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-500 text-sm">
                    <div className="w-1 h-1 rounded-full bg-gold"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#contatti" className="mt-10 text-[10px] uppercase tracking-widest font-bold text-gold hover:text-midnight transition-colors flex items-center gap-2">
                Verifica Idoneità <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Team ---

const Team = () => {
  return (
    <section id="chi-siamo" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative z-10 aspect-[4/5] overflow-hidden shadow-[60px_60px_0px_-20px_rgba(5,12,26,1)]">
              <img 
                src="/simone-costa-1.jpg" 
                alt="Simone Costa" 
                className="w-full h-full object-cover grayscale contrast-110 brightness-105 transition-all duration-1000 scale-105 group-hover:scale-100 group-hover:grayscale-0" 
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <SectionHeading subtitle="Leadership" title="Passione Operativa, Visione Strategica." />
            <p className="text-xl font-serif text-midnight mb-8 leading-relaxed italic border-l-4 border-gold pl-8">
              "L'innovazione non è solo tecnologia, è la capacità di vedere oltre l'orizzonte. Porto in ogni azienda la stessa disciplina e visione necessaria per scalare le vette più impegnative."
            </p>
            <div className="space-y-6 text-slate-600 mb-12">
              <p>
                Simone Costa è un <strong>Innovation Manager</strong> con oltre 10 anni di esperienza internazionale in R&D automotive e tecnologie sostenibili. Ha guidato programmi di innovazione presso <strong>IVECO Group</strong> e <strong>CNH Industrial</strong>, gestendo team multiculturali e budget significativi.
              </p>
              <p>
                Appassionato di AI e trasformazione digitale, ha conseguito un <strong>Executive MBA</strong> e certificazioni in Generative AI presso il <strong>MIT</strong>. Alpinista esperto (2 Seven Summits) e imprenditore, porta in Capital Peak la stessa determinazione che lo guida verso le vette più alte.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 items-center">
              <a href="https://www.linkedin.com/in/simone-costa-tech-leader/" target="_blank" rel="noopener noreferrer" className="btn-primary bg-midnight text-white px-8 py-4 rounded font-bold text-xs uppercase tracking-widest flex items-center gap-3">
                <Linkedin className="w-4 h-4 text-gold" /> Curriculum Vitae
              </a>
              <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-slate-400" />
                  </div>
                ))}
                <div className="pl-6 flex flex-col justify-center">
                   <span className="text-[10px] uppercase font-bold text-slate-400">Supported by</span>
                   <span className="text-xs font-bold text-midnight italic">Institutional Investors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Contact ---

const Contact = () => {
  return (
    <section id="contatti" className="py-32 bg-midnight relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Mountain className="w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <SectionHeading subtitle="Contatto Riservato" title="Un dialogo di valore." light />
        
        <form className="bg-white/5 backdrop-blur-xl p-10 md:p-16 border border-white/10 rounded-sm" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gold font-black">Referente</label>
              <input type="text" className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-gold transition-colors text-white placeholder-white/20" placeholder="Nome e Cognome" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] text-gold font-black">Contatto Diretto</label>
              <input type="email" className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-gold transition-colors text-white placeholder-white/20" placeholder="email@aziendale.it" />
            </div>
          </div>
          <div className="space-y-3 mb-16">
            <label className="text-[10px] uppercase tracking-[0.2em] text-gold font-black">Nota Preliminare (Opzionale)</label>
            <textarea rows={2} className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-gold transition-colors text-white placeholder-white/20 resize-none" placeholder="Breve descrizione del contesto..."></textarea>
          </div>
          <button type="submit" className="btn-primary w-full bg-gold text-midnight py-6 rounded text-sm font-black uppercase tracking-[0.2em] shadow-2xl flex items-center justify-center gap-4 group">
            Richiedi NDA e Sessione Informativa <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
};

// --- AI Consultant ---

const AIConsultant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    const res = await getGeminiResponse(query);
    setResponse(res || "Spiacente, non ho una risposta.");
    setLoading(false);
  };

  const predefinedQuestions = [
    "Vantaggi fiscali del Search Fund",
    "Timeline del passaggio operativo",
    "Coinvolgimento del fondatore post-sale"
  ];

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="btn-primary bg-midnight text-white px-8 py-5 rounded-full shadow-[0_20px_50px_rgba(197,160,89,0.3)] flex items-center gap-5 border border-gold/40 group overflow-hidden"
        >
          <div className="flex flex-col items-end">
            <span className="font-black text-[10px] uppercase tracking-widest text-gold">PeakAI</span>
            <span className="text-[10px] text-white/60">Business Consultant</span>
          </div>
          <div className="bg-gold/10 p-2 rounded-full group-hover:bg-gold transition-colors">
            <MessageCircle className="w-6 h-6 text-gold group-hover:text-midnight transition-colors" />
          </div>
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-[0_40px_100px_rgba(0,0,0,0.4)] w-80 md:w-[450px] overflow-hidden border border-slate-200 flex flex-col max-h-[650px] animate-fade-in-up">
          <div className="bg-midnight p-8 flex justify-between items-center border-b border-gold/20">
            <div className="flex items-center gap-4 text-white">
              <div className="bg-gold/10 p-3 rounded-lg border border-gold/20">
                <Mountain className="w-7 h-7 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl tracking-tight leading-none">Peak<span className="text-gold">AI</span></span>
                <span className="text-[9px] text-slate-400 uppercase tracking-[0.3em] mt-1.5 font-black">Strategic Advisory</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/5 p-2 rounded-full transition-colors">
              <X className="w-6 h-6 text-slate-500 hover:text-white" />
            </button>
          </div>
          
          <div className="p-8 flex-1 overflow-y-auto bg-slate-50 min-h-[300px] space-y-6">
            {response ? (
              <div className="animate-fade-in-up">
                <div className="bg-white p-6 rounded-sm shadow-sm border border-slate-100 text-slate-700 text-sm leading-relaxed relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gold"></div>
                  {response}
                </div>
                <button 
                  onClick={() => { setResponse(null); setQuery(''); }} 
                  className="mt-8 text-[10px] text-gold font-black uppercase tracking-widest hover:underline flex items-center gap-3 group"
                >
                  Nuova Analisi Strategica <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ) : loading ? (
              <div className="flex flex-col items-center justify-center py-24 gap-6">
                <div className="relative">
                   <div className="w-16 h-16 border-2 border-gold/20 rounded-full"></div>
                   <div className="w-16 h-16 border-t-2 border-gold rounded-full animate-spin absolute top-0 left-0"></div>
                </div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-slate-400 font-black animate-pulse">Analisi tesi d'investimento...</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-midnight/5 p-6 rounded-lg border-l-4 border-gold">
                  <p className="text-sm text-midnight font-medium">
                    Benvenuto. Sono l'assistente strategico di Capital Peak. Come posso aiutarla a valutare la successione della sua azienda?
                  </p>
                </div>
                <div className="grid gap-3">
                  {predefinedQuestions.map((q, i) => (
                    <button 
                      key={i} 
                      onClick={() => {
                        setQuery(q);
                        // Trigger the ask automatically for predefined buttons
                        const syntheticEvent = { preventDefault: () => {} } as React.FormEvent;
                        handleAsk(syntheticEvent);
                      }}
                      className="text-left text-[11px] bg-white hover:bg-gold/10 hover:border-gold p-4 rounded-sm border border-slate-200 transition-all font-bold uppercase tracking-widest text-slate-600"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleAsk} className="p-8 bg-white border-t border-slate-100 flex gap-4">
            <input 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Inserisca un quesito specifico..." 
              className="flex-1 bg-slate-50 p-4 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gold border border-slate-200 transition-all font-light"
              disabled={loading}
            />
            <button 
              type="submit" 
              className="btn-primary bg-midnight p-4 rounded-sm text-gold disabled:opacity-50"
              disabled={loading || !query.trim()}
            >
              <Send className="w-6 h-6" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

const Footer = () => (
  <footer className="bg-midnight py-24 text-slate-500 relative">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid md:grid-cols-4 gap-20 mb-20 border-b border-white/5 pb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <Mountain className="w-10 h-10 text-gold" />
            <span className="text-3xl font-bold font-serif text-white tracking-tighter">CAPITAL <span className="text-gold">PEAK</span></span>
          </div>
          <p className="max-w-md text-sm leading-relaxed font-light">
            Search Fund d'élite dedicato alla crescita sostenibile del tessuto industriale italiano. Proteggiamo l'eredità degli imprenditori attraverso l'eccellenza operativa.
          </p>
        </div>
        <div>
          <h5 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-gold">Navigazione</h5>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
            <li><a href="#il-modello" className="hover:text-gold transition-colors">Tesi Operativa</a></li>
            <li><a href="#criteri" className="hover:text-gold transition-colors">Parametri Target</a></li>
            <li><a href="#chi-siamo" className="hover:text-gold transition-colors">Leadership</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-black mb-8 uppercase text-[10px] tracking-[0.3em] text-gold">Hub Milano</h5>
          <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
            <li className="text-slate-400 italic">Via Montenapoleone, Milano</li>
            <li><a href="mailto:info@capitalpeak.com" className="hover:text-gold transition-colors">info@capitalpeak.com</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-[9px] uppercase tracking-[0.3em] font-black">
        <p>&copy; {new Date().getFullYear()} Capital Peak Strategic Partners. Tutti i diritti riservati.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors">Privacy Ethics</a>
          <a href="#" className="hover:text-white transition-colors">Institutional Disclosure</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Mission />
      <Criteria />
      <Team />
      <Contact />
      <Footer />
      <AIConsultant />
    </div>
  );
}
