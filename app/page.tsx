import ScientistsSection from "@/components/ScientistsSection";
import WisdomSection from "@/components/WisdomSection"; // <-- Жаңа компонент
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      
      {/* Hero Section (Баннер) - Экранға толық бейімделген */}
      <section className="relative bg-qangly-dark text-white rounded-lg overflow-hidden mb-12 shadow-2xl min-h-[80vh] md:min-h-[600px] flex items-center justify-center">
        
        <Image 
          src="/images/background.jpg" 
          alt="Археологиялық қазбалар" 
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-qangly-dark via-black/40 to-transparent"></div>

        <div className="relative z-10 px-6 py-16 flex flex-col items-center text-center w-full max-w-4xl">
          
          {/* Ең басты тақырып (Алтын түсті, үлкен) */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-4 text-qangly-gold font-serif drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] tracking-wide">
            ҚАҢЛЫ МҰРАСЫ
          </h1>

          {/* Миссиялық сөйлем (Ақ түсті, оның дәл астында) */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Бір атаның тарихы – бір халықтың мұрасы
          </h2>

          {/* Қосымша сипаттама мәтіні */}
          <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mb-10 text-gray-200 font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-relaxed">
            Ежелгі тарих, археология, шежіре және ғылыми-рухани құндылықтар
          </p>

          {/* Батырмалар */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <Link 
              href="/tarih"
              className="bg-qangly-gold text-qangly-dark font-bold px-8 py-4 rounded-md hover:bg-yellow-500 transition-all duration-300 uppercase tracking-wider text-sm md:text-base shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transform hover:-translate-y-1"
            >
              Тарихты зерттеу
            </Link>
            <Link 
              href="/shezhire"
              className="border-2 border-qangly-gold text-qangly-gold bg-qangly-dark/40 backdrop-blur-sm px-8 py-4 rounded-md hover:bg-qangly-gold hover:text-qangly-dark transition-all duration-300 uppercase tracking-wider text-sm md:text-base shadow-lg transform hover:-translate-y-1"
            >
              Шежірені қарау
            </Link>
          </div>
        </div>

      </section>

      {/* Жаңалықтар Торы */}
      <section className="mb-16">
        <div className="flex items-center justify-between border-b-2 border-qangly-gold pb-2 mb-6">
          <h2 className="text-2xl font-bold text-qangly-dark uppercase">Соңғы жаңалықтар</h2>
          <a href="#" className="text-sm font-bold text-qangly-gold hover:text-qangly-dark">Барлығын көру &rarr;</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
            <div className="group bg-white shadow-md rounded-sm overflow-hidden cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/news/arheologiya.jpg" alt="Археология" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-4 border-t-2 border-qangly-gold">
                <span className="text-xs text-qangly-gold font-bold">09.11.2026 • Археология</span>
                <h3 className="font-bold text-lg mt-1 text-qangly-dark">Жаңа археологиялық қазба жұмыстары басталды</h3>
              </div>
            </div>
            <div className="group bg-white shadow-md rounded-sm overflow-hidden cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/news/gylym_kitap.jpg" alt="Кітап" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-4 border-t-2 border-qangly-gold">
                <span className="text-xs text-qangly-gold font-bold">09.11.2026 • Ғылым</span>
                <h3 className="font-bold text-lg mt-1 text-qangly-dark">Ғалымдардың жаңа монографиясы жарық көрді</h3>
              </div>
            </div>
          </div>

          <div className="group relative bg-white shadow-xl rounded-sm overflow-hidden cursor-pointer h-full min-h-[450px]">
            <img src="/images/news/basti_zhanalyq.jpg" alt="Басты жаңалық" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-6 border-b-4 border-qangly-gold">
              <span className="text-qangly-gold text-sm font-bold mb-2 uppercase">Маңызды жаңалық</span>
              <h3 className="text-white text-2xl font-bold mb-2 leading-tight">Құнды жәдігерлер ғалам назарында: Қаңлы мұрасы ЮНЕСКО деңгейінде талқылануда</h3>
            </div>
          </div>

          <div className="flex flex-col gap-6">
             <div className="group bg-white shadow-md rounded-sm overflow-hidden cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/news/shezhire_karta.jpg" alt="Шежіре" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-4 border-t-2 border-qangly-gold">
                <span className="text-xs text-qangly-gold font-bold">05.11.2026 • Шежіре</span>
                <h3 className="font-bold text-lg mt-1 text-qangly-dark">Төртуыл шежіресіндегі тарихи деректер жарияланды</h3>
              </div>
            </div>
            <div className="group bg-white shadow-md rounded-sm overflow-hidden cursor-pointer">
              <div className="h-48 overflow-hidden relative">
                <img src="/images/news/madeniet_murazhat.jpg" alt="Мәдениет" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-4 border-t-2 border-qangly-gold">
                <span className="text-xs text-qangly-gold font-bold">05.11.2026 • Мәдениет</span>
                <h3 className="font-bold text-lg mt-1 text-qangly-dark">Ұлы дала мұрасы: Жаңа көрме ашылды</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ғалымдар бөлімі */}
      <ScientistsSection />

      {/* Ұлт даналығы бөлімі */}
      <WisdomSection />

      {/* Тәлім блогы */}
      <section className="bg-qangly-dark text-white p-8 shadow-lg rounded-sm my-12 border-l-8 border-qangly-gold">
        <h3 className="text-sm font-bold text-qangly-gold uppercase tracking-widest mb-4">Тәлім / Апта дәйексөзі</h3>
        <blockquote className="text-2xl italic font-serif leading-relaxed text-gray-200">
          «Ұлы Жүз Қаңлы, Бәйтерек!» — Бұл қауымдастықтың ұстанымы, тарихи ғылыми факт ретінде автоматты бекітілмейді.
        </blockquote>
      </section>

    </div>
  );
}