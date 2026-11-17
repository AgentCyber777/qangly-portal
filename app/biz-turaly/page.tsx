import { Target, ShieldCheck, BookOpen, Users, Quote } from "lucide-react";

export default function BizTuralyPage() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. Жоғарғы баннер */}
      <section className="bg-qangly-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-qangly-gold font-serif mb-4 uppercase tracking-wide drop-shadow-lg">
            Біз туралы
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Qangly.kz — тарих арқылы бөліну емес, тарих арқылы бірігу жолындағы ашық білім платформасы.
          </p>
        </div>
      </section>

      {/* 2. Негізгі мазмұн */}
      <section className="max-w-7xl mx-auto px-4 py-16 w-full">
        
        {/* Миссия мәтіні */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start mb-20">
          
          {/* Сол жақ: Негізгі мәтін */}
          <div className="lg:col-span-2 space-y-6 text-gray-700 text-lg leading-relaxed">
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-qangly-gold/10 p-3 rounded-full text-qangly-gold flex-shrink-0 mt-1">
                <Target size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-qangly-dark mb-4">Біздің миссиямыз</h2>
                <p className="font-medium text-gray-800 mb-4">
                  Qangly.kz — Қаңлы тарихын, мәдениетін, ғылыми және рухани мұрасын зерттеуге, жүйелеуге және көпшілікке таныстыруға арналған ғылыми-танымдық портал.
                </p>
                <p>
                  Қаңлы тарихы — қазақ халқының көпқырлы тарихи-мәдени мұрасының бір бөлігі. Осы мұраны зерделеу арқылы біз халқымыздың ортақ тарихын тереңірек тануға, ұлттық бірлікті нығайтуға және жас ұрпақтың тарихи санасын қалыптастыруға үлес қосуды мақсат етеміз.
                </p>
              </div>
            </div>

            <p>
              Портал белгілі бір ру мен тайпаны өзгелерден жоғары қоюды немесе қоғамды руға бөлуді көздемейді. Керісінше, қазақ халқының тұтастығын, өзара құрметін, тарихи сабақтастығын және рухани бірлігін басты құндылық деп таниды.
            </p>
          </div>

          {/* Оң жақ: Қағидалар */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="font-bold text-xl text-qangly-dark mb-6 border-b border-gray-300 pb-3">Біздің ұстанымдар</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <ShieldCheck className="text-qangly-gold flex-shrink-0" size={24} />
                <div>
                  <strong className="block text-qangly-dark mb-1">Дерекке негізделу</strong>
                  <span className="text-sm text-gray-600">Тарихи деректерге, археологиялық зерттеулерге, ғылыми еңбектерге және халық жадында сақталған ауызша тарихқа сүйенеміз.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <BookOpen className="text-qangly-gold flex-shrink-0" size={24} />
                <div>
                  <strong className="block text-qangly-dark mb-1">Айқындық</strong>
                  <span className="text-sm text-gray-600">Ғылыми тұжырымдар мен шежірелік аңыздарды ажыратып, әр мәліметтің дереккөзін көрсетуге ұмтыламыз.</span>
                </div>
              </li>
              <li className="flex gap-4">
                <Users className="text-qangly-gold flex-shrink-0" size={24} />
                <div>
                  <strong className="block text-qangly-dark mb-1">Бірлік</strong>
                  <span className="text-sm text-gray-600">Қазақ халқының тұтастығын, өзара құрметін және рухани бірлігін басты құндылық деп танимыз.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Дәйексөз блогы */}
        <div className="bg-qangly-dark text-white p-10 md:p-16 rounded-2xl text-center relative overflow-hidden shadow-2xl">
          <Quote className="absolute top-6 left-6 text-qangly-gold/20 w-24 h-24" />
          <Quote className="absolute bottom-6 right-6 text-qangly-gold/20 w-24 h-24 rotate-180" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold font-serif italic leading-snug text-qangly-gold mb-6">
              «Біздің ұстанымыз — тарих арқылы бөліну емес, тарих арқылы бірігу.»
            </h3>
            <p className="text-gray-300 text-lg">
              Qangly.kz порталы Қаңлы ұрпақтарына ғана емес, Қазақстан тарихына, түркі халықтарының мәдени мұрасына және ұлттық құндылықтарға қызығатын барша оқырманға ашық.
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}