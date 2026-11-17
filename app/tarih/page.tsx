import Image from "next/image";
import Link from "next/link";

export default function TarihPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Жоғарғы Баннер */}
      <section className="relative bg-qangly-dark text-white h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        
        {/* Фондық сурет */}
        <Image 
          src="/images/history_back.jpg" 
          alt="Тарихи карта" 
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />

        {/* Мәтін оқылуы үшін қараңғы қабат (Күшейтілді) */}
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Қосымша градиент - төменгі жағы қарая түседі */}
        <div className="absolute inset-0 bg-gradient-to-t from-qangly-dark via-black/40 to-transparent"></div>

        {/* Мәтін */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Мәтінге қосымша қара көлеңке (drop-shadow-2xl) қосылды */}
          <h1 className="text-4xl md:text-6xl font-bold text-qangly-gold font-serif mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]">
            ТАРИХ ЖӘНЕ АРХЕОЛОГИЯ
          </h1>
          <p className="text-lg md:text-xl text-gray-100 font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.9)]">
            Ежелгі Қаңлы (Кангюй) мемлекетінің тарихы, археологиялық ескерткіштері және ғылыми зерттеулер.
          </p>
        </div>
      </section>

      {/* 2. Негізгі мазмұн */}
      <section className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-qangly-dark mb-6 border-l-4 border-qangly-gold pl-4">
              Қаңлы мемлекеті
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Қаңлы (Кангюй) — біздің заманымызға дейінгі II ғасырдан бастап біздің заманымыздың IV ғасырына дейін өмір сүрген ежелгі мемлекет. Ол Ұлы Жібек жолының бойында орналасып, сауда-саттық пен мәдениеттің дамуына үлкен үлес қосқан.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Бұл бөлімде біз ежелгі дереккөздерді, археологиялық қазба жұмыстарының нәтижелерін және ғалымдардың зерттеулерін жинақтаймыз. Материалдар «Бастапқы дерек», «Ғылыми зерттеу» деп белгіленеді.
            </p>
            <Link href="/gylym" className="inline-block bg-qangly-primary text-white font-bold px-6 py-3 rounded hover:bg-qangly-dark transition">
              Ғалымдардың еңбектерімен танысу
            </Link>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg border border-gray-200">
            <h3 className="text-xl font-bold text-qangly-dark mb-4">Уақыт сызығы (Жақында)</h3>
            <ul className="space-y-4 border-l-2 border-qangly-gold pl-4">
              <li>
                <span className="font-bold text-qangly-gold">Б.з.д. II ғ.</span>
                <p className="text-sm text-gray-600">Қаңлы мемлекетінің құрылуы.</p>
              </li>
              <li>
                <span className="font-bold text-qangly-gold">Б.з.д. I ғ. - Б.з. IV ғ.</span>
                <p className="text-sm text-gray-600">Мемлекеттің гүлдену кезеңі, Жібек жолының дамуы.</p>
              </li>
              <li>
                <span className="font-bold text-qangly-gold">Қазіргі уақыт</span>
                <p className="text-sm text-gray-600">Археологиялық зерттеулер және мұраны сақтау.</p>
              </li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
}