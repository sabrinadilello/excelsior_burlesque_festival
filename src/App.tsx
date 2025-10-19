import { useState, useEffect } from 'react';
import { MapPin, Instagram, Mail, Home, Users, Calendar, Camera, X, Lightbulb, MessageCircle } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [modalImageSrc, setModalImageSrc] = useState<string | null>(null);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    scrollToTop();
  }, [currentPage]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setModalImageSrc(null);
      }
    };

    if (modalImageSrc) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalImageSrc]);
  
  const navItems = [
    { page: 1, Icon: Home, label: 'Home' },
    { page: 2, Icon: Users, label: 'Cast' },
    { page: 3, Icon: Lightbulb, label: 'Workshop' },
    { page: 4, Icon: Calendar, label: 'Programma' },
    { page: 5, Icon: Camera, label: 'Galleria' },
    { page: 6, Icon: Mail, label: 'Contatti' },
  ];

  const galleryImages = [
    '/images/Foto1.jpg',
    '/images/Foto2.jpg',
    '/images/Foto3.jpg',
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-24">
      
      {modalImageSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setModalImageSrc(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalImageSrc(null)}
              className="absolute -top-12 -right-4 md:-right-12 text-white hover:text-gold transition-colors"
              aria-label="Chiudi"
            >
              <X className="w-10 h-10" />
            </button>
            <img
              src={modalImageSrc}
              alt="Immagine ingrandita"
              className="w-full h-auto object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}

      <nav className="fixed inset-x-0 bottom-0 z-50 bg-black/80 backdrop-blur-sm border-t border-gold/30">
        <div className="flex items-center py-3">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => goToPage(item.page)}
              className="flex flex-1 flex-col items-center gap-1 px-1 text-xs transition-all duration-300 transform"
              aria-label={item.label}
            >
              <item.Icon
                className={`w-6 h-6 ${
                  currentPage === item.page ? 'text-gold' : 'text-gray-400 group-hover:text-gold'
                }`}
              />
              <span
                className={`font-cinzel ${
                  currentPage === item.page ? 'text-gold' : 'text-gray-400 group-hover:text-gold'
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Page 1 - Home */}
      {currentPage === 1 && (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-gold rounded-full" />
            <div className="absolute bottom-10 right-10 w-40 h-40 border border-gold rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h1 className="font-cinzel text-5xl md:text-7xl text-gold mb-4 tracking-wider">
              EXCELSIOR BURLESQUE FESTIVAL
            </h1>
            <div className="text-2xl md:text-3xl text-gold/80 mb-8 font-light">
              II EDIZIONE
            </div>
            <p className="text-xl md:text-2xl text-porpora font-cinzel mb-12 italic">
              Tre giorni di eleganza, ironia e seduzione nella Roma Imperiale
            </p>
            <div className="mb-12 border-4 border-gold p-4 bg-black/50 inline-block">
              <button 
                onClick={() => setModalImageSrc('/images/locandina II ed..jpg')} 
                className="cursor-zoom-in"
              >
                <img
                  src="/images/locandina II ed..jpg"
                  alt="Locandina Excelsior Burlesque Festival II Edizione"
                  className="max-w-full h-auto max-h-96 object-contain"
                />
              </button>
            </div>
            <div className="text-lg md:text-xl leading-relaxed mb-12 text-left max-w-3xl mx-auto space-y-6">
              <p>
                Il fascino del burlesque incontra la grandezza di Roma in un festival unico nel suo genere.
                Per tre serate, il Teatro Petrolini si trasforma in un'arena scintillante dove piume, ventagli
                e tacchi a spillo rendono omaggio alla sensualità e alla Roma Imperiale.
              </p>
              <p className="text-gold font-semibold">
                Dal 14 al 16 novembre 2025, il pubblico vivrà un viaggio tra spettacolo e storia:
              </p>
              <ul className="space-y-4 pl-6">
                <li>
                  <span className="text-gold font-cinzel text-xl">• Venerdì 14 – Ludus Levis</span>
                  <br />
                  <span className="text-sm md:text-base">
                    Cerimonia d'apertura con performance mozzafiato e il primo tuffo nell'universo dell'Excelsior.
                  </span>
                </li>
                <li>
                  <span className="text-gold font-cinzel text-xl">• Sabato 15 – Electio Imperatoris</span>
                  <br />
                  <span className="text-sm md:text-base">
                    La notte del grande contest: una giuria di esperti incoronerà l'Imperatrice di Roma,
                    la Vestale e la Gladiatrice, mentre il pubblico sceglierà il proprio campione — il Favor Populi.
                  </span>
                </li>
                <li>
                  <span className="text-gold font-cinzel text-xl">• Domenica 16 – Spectaculum Excellens</span>
                  <br />
                  <span className="text-sm md:text-base">
                    Gran Galà di chiusura con le esibizioni delle guest star, la madrina del festival e le vincitrici del contest.
                  </span>
                </li>
              </ul>
              <p className="italic text-gold/90 pt-6">
                Tre giorni di spettacolo, workshop e pura celebrazione dell'arte burlesque.
                Una festa di libertà, ironia e bellezza. Un tributo alla Roma che fu — e alla femminilità che è.
              </p>
            </div>
            <div className="border-t border-b border-gold py-6 mb-8">
              <div className="flex items-center justify-center gap-3 text-gold text-lg md:text-xl">
                <MapPin className="w-6 h-6" />
                <span className="font-cinzel">Teatro Petrolini – Via Rubattino 5, Roma (Testaccio)</span>
              </div>
              <a
                href="https://maps.google.com/?q=Teatro+Petrolini+Via+Rubattino+5+Roma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-porpora hover:text-white transition-colors underline"
              >
                Apri su Google Maps →
              </a>
            </div>
            
            <div className="border-4 border-gold p-8 bg-black/50">
              <h3 className="font-cinzel text-3xl text-gold mb-6">
                PRENOTAZIONI
              </h3>
              <p className="text-lg mb-6">
                Vuoi partecipare all'Excelsior Burlesque Festival? Compila il modulo di prenotazione
                e assicurati il tuo posto in platea.
              </p>
              <a
                href="https://forms.gle/nAeke1KamjxbaTqeA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-porpora text-white px-12 py-4 text-xl font-cinzel hover:bg-gold hover:text-black transition-all transform hover:scale-105"
              >
                PRENOTA ORA
              </a>
            </div>

          </div>
        </section>
      )}

      {/* Page 2 - Cast (SENZA IMMAGINE POSTER) */}
      {currentPage === 2 && (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cinzel text-4xl md:text-6xl text-gold mb-8 tracking-wider border-b-2 border-gold pb-4">
              IL CAST – II EDIZIONE
            </h2>
            <div className="mb-8">
              <img
                src="/images/def 001.jpg"
                alt="Cast Excelsior Burlesque Festival"
                className="max-w-full h-auto border-4 border-gold p-4"
              />
            </div>

            <div className="my-12 border-4 border-gold p-2 bg-black/50">
              <video
                controls
                playsInline
                className="w-full h-auto"
              >
                <source src="/images/reel.mp4" type="video/mp4" />
                Il tuo browser non supporta il tag video.
              </video>
            </div>

            <div className="text-lg md:text-xl leading-relaxed mb-12 space-y-6">
              <p>
                L'Excelsior Burlesque Festival II Edizione porta sul palco un cast straordinario di performer
                internazionali e talenti emergenti del panorama burlesque.
              </p>
              <p className="text-gold">
                Le artiste e gli artisti vengono annunciati progressivamente: seguici su Instagram per scoprire
                in tempo reale chi si unirà al nostro spettacolo imperiale!
              </p>
            </div>
            <a
              href="https://www.instagram.com/excelsior_burlesque_festival"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-porpora text-white px-10 py-4 text-lg font-cinzel hover:bg-gold hover:text-black transition-all transform hover:scale-105 mb-8"
            >
              <Instagram className="w-6 h-6" />
              SEGUI GLI AGGIORNAMENTI
            </a>
            
            <div className="border-4 border-gold p-8 bg-black/50 mt-12">
              <h3 className="font-cinzel text-3xl text-gold mb-6">
                PRENOTAZIONI
              </h3>
              <p className="text-lg mb-6">
                Vuoi partecipare all'Excelsior Burlesque Festival? Compila il modulo di prenotazione
                e assicurati il tuo posto in platea.
              </p>
              <a
                href="https://forms.gle/nAeke1KamjxbaTqeA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-porpora text-white px-12 py-4 text-xl font-cinzel hover:bg-gold hover:text-black transition-all transform hover:scale-105"
              >
                PRENOTA ORA
              </a>
            </div>

          </div>
        </section>
      )}
      
      {/* Page 3 - Workshop */}
      {currentPage === 3 && (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cinzel text-4xl md:text-6xl text-gold mb-4 tracking-wider border-b-2 border-gold pb-4">
              WORKSHOP
            </h2>
            <p className="text-2xl text-porpora font-cinzel my-6 italic">
              Esplora. Impara. Brilla.
            </p>
            <div className="text-lg leading-relaxed space-y-4 mb-12 text-left max-w-3xl mx-auto">
              <p>
                L’Excelsior Burlesque Festival non è solo spettacolo… è anche formazione, scoperta e condivisione.
                Durante il weekend del festival, performer e insegnanti di fama nazionale guideranno i partecipanti in un viaggio alla scoperta del burlesque, dell’espressione scenica e della consapevolezza del corpo.
              </p>
              <p>
                Quattro workshop unici, ognuno con una personalità e un approccio diverso: dalla costruzione del personaggio alla gestione dell’imprevisto, dalla sinuosità dei movimenti alla seduzione in scena.
                Che tu sia alle prime armi o un’artista già esperta, troverai un’occasione per metterti in gioco, imparare e divertirti… con un pizzico di piume, glitter e autoironia!
              </p>
              <p className="text-gold pt-4">
                Prenota il tuo posto e vivi da protagonista l’atmosfera dell’Excelsior Burlesque Festival. 💋
              </p>
            </div>
            
            <div className="flex flex-col gap-16 mb-12 text-left">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-64 flex-shrink-0">
                  <button onClick={() => setModalImageSrc('/images/terryparadise.jpeg')} className="cursor-zoom-in w-full">
                    <img src="/images/terryparadise.jpeg" alt="Foto di Terry Paradise" className="w-full h-auto object-cover" />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="font-cinzel text-2xl text-porpora mb-2">
                    💄 MAKE-IT UP! – La tua storia, il tuo personaggio
                  </h3>
                  <p className="text-gold font-cinzel text-xl mb-3">Tenuto da: Terry Paradise</p>
                  <div className="text-sm md:text-base border-t border-b border-gold/30 py-2 mb-4 space-y-1">
                    <p>🗓 <span className="font-semibold">Sabato 15 Novembre, ore 17:15</span></p>
                    <p>💰 <span className="font-semibold">Costo: 25€</span> – Durata: 1h 15 min</p>
                  </div>
                  <p className="mb-4">In questo originalissimo workshop, Terry Paradise invita ogni partecipante non solo a sperimentare l’arte della seduzione, ma anche a dare vita a un personaggio burlesque unico e autentico. Attraverso elementi fondamentali dell’arte scenica — come trucco, costume, presenza scenica e costruzione del progetto artistico — scoprirai come raccontare te stessə sul palco in modo consapevole, potente e creativo.</p>
                  <p className="font-cinzel text-gold mt-4">Contenuti:</p>
                  <p>Breve storia del Burlesque e creazione di un progetto e sviluppo del personaggio. (Saranno rilasciate brevi dispense)</p>
                  <p className="font-cinzel text-gold mt-4">A chi è rivolto:</p>
                  <p>A tuttə coloro che desiderano esprimersi in modo creativo e personale, con o senza esperienza nel mondo del burlesque o delle arti performative.</p>
                  <p className="font-cinzel text-gold mt-4">Cosa portare:</p>
                  <p>Abbigliamento comodo e un accessorio con cui giocare o sperimentare la propria espressività.</p>
                  <p className="font-cinzel text-gold mt-4">Obiettivi:</p>
                  <p>Costruire un personaggio scenico coerente con la propria identità creativa e con la propria visione artistica.</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-64 flex-shrink-0">
                  <button onClick={() => setModalImageSrc('/images/ladybb.jpeg')} className="cursor-zoom-in w-full">
                    <img src="/images/ladybb.jpeg" alt="Foto di Lady BB" className="w-full h-auto object-cover" />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="font-cinzel text-2xl text-porpora mb-2">
                    IMPROVVISAZIONE E GESTIONE DELL’IMPREVISTO
                  </h3>
                  <p className="text-gold font-cinzel text-xl mb-3">Tenuto da: Lady BB</p>
                  <div className="text-sm md:text-base border-t border-b border-gold/30 py-2 mb-4 space-y-1">
                    <p>🗓 <span className="font-semibold">Sabato 15 Novembre, ore 18:45</span></p>
                    <p>💰 <span className="font-semibold">Costo: 25€</span> – Durata: 1h 15 min</p>
                  </div>
                  <p className="italic mb-4">“La zip che non scende, il corsetto che non si slaccia... Tutti imprevisti che possono capitare sul palco! Lady BB vi insegnerà come uscirne indenni e vittoriosə!”</p>
                  <p className="mb-4">In questo frizzante workshop, Lady BB condurrà i partecipanti nel mondo dell’improvvisazione teatrale applicata al burlesque. Scoprirete come trasformare gli imprevisti in momenti di comicità, fascino e sicurezza scenica. Perché nel burlesque, anche quando qualcosa va storto… lo spettacolo deve continuare — con stile!</p>
                  <p className="font-cinzel text-gold mt-4">Contenuti:</p>
                  <p>Tecniche di improvvisazione, gestione scenica e come trasformare l’errore in opportunità artistica.</p>
                  <p className="font-cinzel text-gold mt-4">A chi è rivolto:</p>
                  <p>A performer, aspiranti performer o chiunque voglia migliorare la propria presenza scenica e capacità di reazione dal vivo.</p>
                  <p className="font-cinzel text-gold mt-4">Cosa portare:</p>
                  <p>Abbigliamento comodo e un piccolo oggetto di scena o costume con cui esercitarsi.</p>
                  <p className="font-cinzel text-gold mt-4">Obiettivi:</p>
                  <p>Sviluppare prontezza scenica, capacità di improvvisazione e fiducia nel proprio istinto artistico.</p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-64 flex-shrink-0">
                  <button onClick={() => setModalImageSrc('/images/lunedunil.jpeg')} className="cursor-zoom-in w-full">
                    <img src="/images/lunedunil.jpeg" alt="Foto di Lune du Nil" className="w-full h-auto object-cover" />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="font-cinzel text-2xl text-porpora mb-2">
                    SINUOSITY 🐍
                  </h3>
                  <p className="text-gold font-cinzel text-xl mb-3">Tenuto da: Lune du Nil</p>
                  <div className="text-sm md:text-base border-t border-b border-gold/30 py-2 mb-4 space-y-1">
                    <p>🗓 <span className="font-semibold">Domenica 16 Novembre, ore 14:00</span></p>
                    <p>💰 <span className="font-semibold">Costo: 25€</span> – Durata: 1h 15 min</p>
                  </div>
                  <p className="mb-4">Una lezione che celebra la sinuosità del corpo, la sensualità dei movimenti e la gestione dell’energia emotiva sul palco. Attraverso esercizi di comunicazione non verbale, Lune guiderà le partecipanti in un viaggio sensoriale tra gestualità, consapevolezza e potenza espressiva.</p>
                  <p className="font-cinzel text-gold mt-4">A chi è rivolto:</p>
                  <p>A tutt*! Dalle performer, ai ballerini, fino a chi desidera esplorare la propria sensualità e riscoprire il piacere del movimento.</p>
                  <p className="font-cinzel text-gold mt-4">Cosa portare:</p>
                  <p>Abbigliamento comodo, tacchi comodi (o calzini), il vostro sorriso e voglia di divertirsi!</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-64 flex-shrink-0">
                  <button onClick={() => setModalImageSrc('/images/elektrashow.jpeg')} className="cursor-zoom-in w-full">
                    <img src="/images/elektrashow.jpeg" alt="Foto di Elektra Show" className="w-full h-auto object-cover" />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="font-cinzel text-2xl text-porpora mb-2">
                    BURLESQUE – I Tuoi Passi nel Mondo della Seduzione
                  </h3>
                  <p className="text-gold font-cinzel text-xl mb-3">Tenuto da: Elektra Show</p>
                  <div className="text-sm md:text-base border-t border-b border-gold/30 py-2 mb-4 space-y-1">
                    <p>🗓 <span className="font-semibold">Domenica 16 Novembre, ore 15:30</span></p>
                    <p>💰 <span className="font-semibold">Costo: 25€</span> – Durata: 1h 15 min</p>
                  </div>
                  <p className="mb-4">Un workshop dedicato a chi desidera avvicinarsi o approfondire l’arte della seduzione in movimento. Esploreremo le basi di pose, passi e dinamiche sceniche del linguaggio burlesque, arricchite da un tocco di glamour da showgirl. Si imparerà una breve coreografia con accenni di floor work.</p>
                  <p className="font-cinzel text-gold mt-4">A chi è rivolto:</p>
                  <p>A tutt*! Dai curiosi che muovono i primi passi nel burlesque ai performer che desiderano affinare la propria presenza scenica.</p>
                  <p className="font-cinzel text-gold mt-4">Cosa portare:</p>
                  <p>👠 Scarpe da scena o tacchi comodi, 🧤 guanti, calze a rete, reggicalze. Penna e carta facoltativi.</p>
                </div>
              </div>
            </div>

            <div className="border-4 border-gold p-8 bg-black/50 my-12">
              <h3 className="font-cinzel text-3xl text-porpora mb-4">
                Pacchetto Academia Excelsior
              </h3>
              <p className="text-lg mb-6">
                Se vuoi vivere il festival al massimo, c’è il pacchetto perfetto per te: tutte e quattro le lezioni, un unico percorso per scoprire, creare e brillare.
              </p>
              <p className="text-2xl font-cinzel text-gold">
                Prezzo speciale: 80€ invece di 100€
              </p>
            </div>
            
            <div className="border-4 border-gold p-8 bg-black/50 mb-8">
              <h3 className="font-cinzel text-3xl text-gold mb-6">
                ISCRIVITI AI WORKSHOP
              </h3>
              <p className="text-lg mb-6">
                I posti per i workshop sono limitati. Contattaci su WhatsApp per riservare il tuo posto e specificare a quali lezioni vuoi partecipare.
              </p>
              <a
                href="https://wa.me/393922752576"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-porpora text-white px-12 py-4 text-xl font-cinzel hover:bg-gold hover:text-black transition-all transform hover:scale-105"
              >
                <MessageCircle className="w-6 h-6" />
                ISCRIVITI ORA
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Page 4 - Program */}
      {currentPage === 4 && (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-cinzel text-4xl md:text-6xl text-gold mb-12 tracking-wider border-b-2 border-gold pb-4">
              PROGRAMMA DEL FESTIVAL
            </h2>
            
            <div className="flex flex-col gap-12 text-left">
              <div>
                <h3 className="font-cinzel text-2xl md:text-3xl text-gold mb-4 border-b-2 border-gold/30 pb-2">
                  VENERDÌ 14 NOVEMBRE
                </h3>
                <div className="border-2 border-gold p-6 bg-gold/5 rounded-lg">
                  <p className="font-cinzel text-gold text-lg">ore 21:00</p>
                  <h4 className="font-cinzel text-3xl md:text-4xl text-porpora my-2 tracking-wider">
                    LUDUS LEVIS
                  </h4>
                  <p className="text-base md:text-lg leading-relaxed">
                    Una serata di apertura all’insegna dell’eleganza, dell’ironia e della leggerezza. Ludus Levis è il primo spettacolo del festival: un viaggio nel mondo del burlesque in tutte le sue forme, dove sensualità, comicità e arte performativa si fondono per creare un’esperienza unica e raffinata.
                  </p>
                  <p className="italic text-gold mt-4">👉 Non perdere l’Opening Night!</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-cinzel text-2xl md:text-3xl text-gold mb-4 border-b-2 border-gold/30 pb-2">
                  SABATO 15 NOVEMBRE
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="p-4 bg-black/20 rounded-lg">
                    <p className="font-semibold text-gold/80"><span className="font-cinzel">ore 17:15</span> – Workshop “MAKE IT UP!”</p>
                    <p className="text-sm md:text-base mt-1 text-gray-300">Con la guida di Terry Paradise, scopri come costruire un personaggio autentico e memorabile.</p>
                  </div>
                  <div className="p-4 bg-black/20 rounded-lg">
                    <p className="font-semibold text-gold/80"><span className="font-cinzel">ore 18:45</span> – Workshop “IMPROVVISAZIONE”</p>
                    <p className="text-sm md:text-base mt-1 text-gray-300">Un laboratorio dinamico per imparare a trasformare ogni errore di scena in un’occasione di spettacolo.</p>
                  </div>
                  <div className="border-2 border-gold p-6 bg-gold/5 rounded-lg">
                    <p className="font-cinzel text-gold text-lg">ore 21:00</p>
                    <h4 className="font-cinzel text-3xl md:text-4xl text-porpora my-2 tracking-wider">
                      ELECTIO IMPERATORIS
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed">
                      Lo show competitivo del festival! 10 performer una sola corona: le performer cercheranno di conquistare le grazie della giuria, a colpi di glitter e tacchi a spillo, per vincere il titolo di Imperatrice di Roma.
                    </p>
                    <p className="italic text-gold mt-4">👉 Scopri con noi chi sarà la nuova Imperatrice di Roma!</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-cinzel text-2xl md:text-3xl text-gold mb-4 border-b-2 border-gold/30 pb-2">
                  DOMENICA 16 NOVEMBRE
                </h3>
                <div className="flex flex-col gap-6">
                  <div className="p-4 bg-black/20 rounded-lg">
                    <p className="font-semibold text-gold/80"><span className="font-cinzel">ore 14:00</span> – Workshop “SINUOSITY”</p>
                    <p className="text-sm md:text-base mt-1 text-gray-300">Scopri l’arte del movimento sensuale, del controllo del corpo e della grazia scenica.</p>
                  </div>
                  <div className="p-4 bg-black/20 rounded-lg">
                    <p className="font-semibold text-gold/80"><span className="font-cinzel">ore 15:30</span> – Workshop “BURLESQUE”</p>
                    <p className="text-sm md:text-base mt-1 text-gray-300">Un’introduzione al linguaggio del burlesque, dove la seduzione incontra l’autenticità.</p>
                  </div>
                  <div className="border-2 border-gold p-6 bg-gold/5 rounded-lg">
                    <p className="font-cinzel text-gold text-lg">ore 19:00</p>
                    <h4 className="font-cinzel text-3xl md:text-4xl text-porpora my-2 tracking-wider">
                      SPECTACULUM EXCELLENS
                    </h4>
                    <p className="text-base md:text-lg leading-relaxed">
                      Il Gran Gala di Burlesque: con le esibizioni della Madrina dell'Excelsior, le guest e le vincitrici del contest. Un trionfo di arte, femminilità e ironia, per chiudere in bellezza l’Excelsior Burlesque Festival.
                    </p>
                    <p className="italic text-gold mt-4">👉 Vivi l’ultima notte di pura meraviglia!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-4 border-gold p-8 bg-black/50 mt-12">
              <h3 className="font-cinzel text-3xl text-gold mb-6">
                PRENOTAZIONI
              </h3>
              <p className="text-lg mb-6">
                Vuoi partecipare all'Excelsior Burlesque Festival? Compila il modulo di prenotazione
                e assicurati il tuo posto in platea.
              </p>
              <a
                href="https://forms.gle/nAeke1KamjxbaTqeA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-porpora text-white px-12 py-4 text-xl font-cinzel hover:bg-gold hover:text-black transition-all transform hover:scale-105"
              >
                PRENOTA ORA
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Page 5 - Gallery */}
      {currentPage === 5 && (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-cinzel text-4xl md:text-6xl text-gold mb-8 tracking-wider border-b-2 border-gold pb-4">
              GALLERIA I EDIZIONE
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-12">
              Uno sguardo alla magia della prima edizione: il debutto dell'Excelsior Burlesque Festival
              ha incantato il pubblico con un'esplosione di eleganza, ironia e pura energia.
              Rivivi i momenti più belli attraverso alcuni scatti di quella straordinaria esperienza.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {Array.from({ length: 6 }).map((_, index) => {
                const imageSrc = galleryImages[index];
                return (
                  <div
                    key={index}
                    className="aspect-square border-2 border-gold p-2 hover:border-porpora transition-all bg-black"
                  >
                    {imageSrc ? (
                      <button
                        onClick={() => setModalImageSrc(imageSrc)}
                        className="w-full h-full cursor-zoom-in block"
                      >
                        <img
                          src={imageSrc}
                          alt={`Foto galleria ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gold/20 to-porpora/20 flex items-center justify-center">
                        <span className="text-gold/50 font-cinzel text-sm">
                          Prossimamente
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Page 6 - Contacts */}
      {currentPage === 6 && (
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-12">
              <img
                src="/images/logo per video.jpg"
                alt="Logo Excelsior Burlesque Festival"
                className="max-w-xs mx-auto border-4 border-gold p-4"
              />
            </div>
            <h2 className="font-cinzel text-4xl md:text-6xl text-gold mb-12 tracking-wider">
              INFORMAZIONI E CONTATTI
            </h2>
            <div className="space-y-8 text-lg mb-12 max-w-md mx-auto">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="font-cinzel text-gold">LOCATION:</p>
                  <p className="text-white">Teatro Petrolini - Via Rubattino 5, Roma (Testaccio)</p>
                  <a
                    href="https://maps.google.com/?q=Teatro+Petrolini+Via+Rubattino+5+Roma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-porpora hover:text-gold transition-colors underline text-base"
                  >
                    Apri su Google Maps →
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Instagram className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="font-cinzel text-gold">PAGINA UFFICIALE:</p>
                  <a
                    href="https://www.instagram.com/excelsior_burlesque_festival"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-porpora transition-colors"
                  >
                    @excelsior_burlesque_festival
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Instagram className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="font-cinzel text-gold">DIREZIONE ARTISTICA:</p>
                  <a
                    href="https://www.instagram.com/matisse_royale"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-porpora transition-colors"
                  >
                    @matisse_royale
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div className="text-left">
                  <p className="font-cinzel text-gold">EMAIL:</p>
                  <a
                    href="mailto:excelsiorburlesquefestival@gmail.com"
                    className="text-white hover:text-porpora transition-colors"
                  >
                    excelsiorburlesquefestival@gmail.com
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gold pt-8">
              <p className="text-gold/70 text-sm">
                © 2025 Excelsior Burlesque Festival – Tutti i diritti riservati
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default App;