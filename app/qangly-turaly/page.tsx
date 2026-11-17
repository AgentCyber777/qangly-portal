import Link from "next/link";
import { BookOpen, Map, ScrollText, Users, ArrowRight, Shield, Landmark } from "lucide-react";

export default function QanglyTuralyPage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. Жоғарғы баннер */}
      <section className="bg-qangly-dark text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-qangly-gold font-serif mb-4 drop-shadow-lg uppercase">
            Қаңлы туралы
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Ежелгі түркі мемлекетінің ұрпақтары. Тарихы тереңде жатқан, шежіресі мыңжылдықтарға созылған халық.
          </p>
        </div>
      </section>

      {/* 2. Негізгі мазмұн */}
      <section className="max-w-7xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Сол жақ (2 баған): Жалпы анықтама */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-qangly-dark mb-6 border-l-4 border-qangly-gold pl-4">
              Жалпы анықтама
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="mb-4">
                <strong>Қаңлы (Кангюй)</strong> — біздің заманымызға дейінгі II ғасырдан бастап біздің заманымыздың IV ғасырына дейін Орталық Азия мен Оңтүстік Қазақстан аумағында өмір сүрген ежелгі мемлекеттік бірлестік. Ол Ұлы Жібек жолының бойында орналасып, сауда-саттық пен мәдениеттің дамуына үлкен үлес қосқан.
              </p>
              <p className="mb-4">
                Қаңлылар — қазақ халқының этногенезінде маңызды рөл атқарған ежелгі түркі тайпаларының бірі. Олардың тарихы, тілі, мәдениеті мен дәстүрлері бүгінгі ұрпақтың рухани мұрасының ажырамас бөлігі болып табылады.
              </p>
              <p>
                Бұл порталда біз Қаңлы тарихының тексерілген деректерін, ғылыми зерттеулерін, шежіресін және рухани мұрасын жинақтап, келер ұрпаққа жеткізуді мақсат етеміз.
              </p>
            </div>

            {/* Хронология */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-qangly-dark mb-6 border-l-4 border-qangly-gold pl-4">
                Тарихи кезеңдер
              </h2>
              <div className="space-y-4 border-l-2 border-qangly-gold pl-6 ml-2">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 bg-qangly-gold rounded-full border-4 border-white"></div>
                  <span className="font-bold text-qangly-gold">Б.з.д. II ғ.</span>
                  <h3 className="font-bold text-lg text-qangly-dark mt-1">Құрылуы</h3>
                  <p className="text-sm text-gray-600">Қаңлы мемлекетінің тарихи сахнаға шығуы және алғашқы мемлекеттік құрылымдардың қалыптасуы.</p>
                </div>
                <div className="relative pt-4">
                  <div className="absolute -left-[31px] top-5 w-4 h-4 bg-qangly-gold rounded-full border-4 border-white"></div>
                  <span className="font-bold text-qangly-gold">Б.з.д. I – Б.з. IV ғ.</span>
                  <h3 className="font-bold text-lg text-qangly-dark mt-1">Гүлдену кезеңі</h3>
                  <p className="text-sm text-gray-600">Ұлы Жібек жолының дамуы, сауда-саттықтың өркендеуі және мәдениеттің жоғары деңгейге көтерілуі.</p>
                </div>
                <div className="relative pt-4">
                  <div className="absolute -left-[31px] top-5 w-4 h-4 bg-qangly-gold rounded-full border-4 border-white"></div>
                  <span className="font-bold text-qangly-gold">Қазіргі уақыт</span>
                  <h3 className="font-bold text-lg text-qangly-dark mt-1">Зерттеу және мұра</h3>
                  <p className="text-sm text-gray-600">Ғалымдардың археологиялық зерттеулері және Қаңлы мұрасын цифрлық форматта сақтау.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Оң жақ (1 баған): Ішкі бөлімдерге сілтемелер */}
          <div>
            <h2 className="text-2xl font-bold text-qangly-dark mb-6 border-l-4 border-qangly-gold pl-4">
              Тереңірек танысу
            </h2>
            <div className="space-y-4">
              
              {/* Рухани мұра */}
              <Link href="/qangly-turaly/ruhani-mura/auyz-adebieti" className="group flex flex-col bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-qangly-gold hover:shadow-md transition">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-qangly-gold/10 p-2 rounded-lg text-qangly-gold"><BookOpen size={24}/></div>
                  <ArrowRight className="text-gray-300 group-hover:text-qangly-gold transition" />
                </div>
                <h3 className="font-bold text-lg text-qangly-dark group-hover:text-qangly-primary transition mt-2">Рухани мұра</h3>
                <p className="text-sm text-gray-500 mt-1">Қаңлының ауыз әдебиеті: мақал-мәтелдер, жырлар, нақыл сөздер.</p>
              </Link>

              {/* Шежіре */}
              <Link href="/shezhire" className="group flex flex-col bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-qangly-gold hover:shadow-md transition">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-qangly-gold/10 p-2 rounded-lg text-qangly-gold"><Users size={24}/></div>
                  <ArrowRight className="text-gray-300 group-hover:text-qangly-gold transition" />
                </div>
                <h3 className="font-bold text-lg text-qangly-dark group-hover:text-qangly-primary transition mt-2">Шежіре және аталар</h3>
                <p className="text-sm text-gray-500 mt-1">Қаңлы руының тарихи тармақтары мен ата-бабалар жолы.</p>
              </Link>

              {/* Тарих */}
              <Link href="/tarih" className="group flex flex-col bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-qangly-gold hover:shadow-md transition">
                <div className="flex items-center justify-between mb-2">
                  <div className="bg-qangly-gold/10 p-2 rounded-lg text-qangly-gold"><Map size={24}/></div>
                  <ArrowRight className="text-gray-300 group-hover:text-qangly-gold transition" />
                </div>
                <h3 className="font-bold text-lg text-qangly-dark group-hover:text-qangly-primary transition mt-2">Тарих және археология</h3>
                <p className="text-sm text-gray-500 mt-1">Ежелгі ескерткіштер, қазба жұмыстары және карталар.</p>
              </Link>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}