import Image from "next/image";
import {
  ExternalLink,
  BookMarked,
  MapPin,
  GraduationCap,
  Award,
  BookOpen,
} from "lucide-react";

export default function GylymPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Бет тақырыбы */}
      <div className="border-l-8 border-qangly-gold pl-6 mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-qangly-dark mb-2 uppercase">
          Қаңлы тарихын зерттеген ғалымдар
        </h1>
        <p className="text-gray-600 text-lg">
          Ежелгі Қаңлы (Кангюй) мемлекетінің тарихы мен археологиясын зерттеуге
          үлес қосқан ғалымдардың еңбектері.
        </p>
      </div>

      <div className="space-y-16">
        {/* 1. Александр Подушкин (Сурет ені бойынша, ақпарат астында) */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col">
          {/* Сурет бөлімі (Ені бойынша, әдемі орташа өлшемде) */}
          <div className="w-full bg-white flex justify-center p-4 md:p-6">
            <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <Image
                src="/images/gylym/podushkin.jpeg"
                alt="Александр Подушкин"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Мәтін бөлімі (Суреттің астында) */}
          <div className="p-6 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-qangly-dark mb-2">
              Александр Николаевич Подушкин
            </h2>
            <p className="text-qangly-gold font-semibold mb-4 flex items-center gap-2">
              <GraduationCap size={18} /> Археолог, тарих ғылымдарының докторы,
              профессор
            </p>

            <div className="text-gray-700 text-sm md:text-base space-y-4 mb-6">
              <p>
                <strong>Өмірбаяны:</strong> Александр Николаевич Подушкин —
                Қазақстанның белгілі археологы. Ғылыми қызметінің негізгі бағыты
                — Оңтүстік Қазақстанның ежелгі және ерте ортағасырлық
                археологиясы, Арыс мәдениеті, Қаңлы мемлекетінің тарихи-мәдени
                мұрасы. 1975 жылы Шымкент педагогикалық институтын, 1987 жылы
                Мәскеу мемлекеттік университетінде кандидаттық, 1999 жылы
                докторлық диссертациясын қорғады.
              </p>

              <div>
                <strong className="flex items-center gap-2 text-qangly-dark mb-1">
                  <MapPin size={16} /> Негізгі зерттеу бағыттары:
                </strong>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-600 space-y-1">
                  <li>
                    Оңтүстік Қазақстанның ежелгі және ерте ортағасырлық
                    археологиясы
                  </li>
                  <li>Арыс мәдениетінің қалыптасуы мен даму кезеңдері</li>
                  <li>Қаңлы мемлекетінің археологиялық және жазба деректері</li>
                  <li>Күлтөбе, Қылышжар, Алтынтөбе ескерткіштері</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-qangly-gold">
              <h3 className="font-bold text-qangly-dark mb-2 flex items-center gap-2">
                <BookMarked size={18} /> Негізгі ғылыми еңбектері:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                <li>«Арысская культура Южного Казахстана».</li>
                <li>
                  «К этнической истории государства Кангюй... (по материалам
                  могильников Орлат и Культобе)» (2012).
                </li>
                <li>
                  «Государство Кангюй (II в. до н. э. – IV в. н. э.) в свете
                  археологических источников» (2024).
                </li>
                <li>
                  «Государство Кангюй II в. до н.э. – IV в.н.э. в историческом и
                  этнокультурном контекстах» (2025).
                </li>
              </ul>
            </div>

            <div className="text-sm text-gray-600 mb-6 italic">
              <strong>Қосқан үлесі:</strong> Ғалым Қаңлы мемлекетіне қатысты
              көне қоныстарды, қорымдарды, жерлеу кешендерін, тұрмыстық
              заттарды, қыш бұйымдарды және жазу ескерткіштерін зерттеді. Оның
              2024 және 2025 жылдары жарық көрген екі томдық монографиясы Қаңлы
              тарихын зерттеуге арналған маңызды еңбектер қатарынан орын алады.
            </div>

            <a
              href="https://archeo.kz/ru/library/materialy-i-issledovaniya-po-arh-kz/podushkin-an-gosudarstvo-kangyuj-ii-v-do-n-e-iv-v/read/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-qangly-primary text-white px-6 py-2 rounded-md hover:bg-qangly-dark transition font-medium w-max"
            >
              Ғылыми кітапхана сілтемесі <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* 2. Әбдуәли Қайдар */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row-reverse">
          {/* Сурет бөлімі */}
          <div className="md:w-2/5 relative min-h-[350px] md:min-h-[500px] bg-gray-100">
            <Image
              src="/images/gylym/kaidar.jpeg"
              alt="Әбдуәли Қайдар"
              fill
              // 333x500 сурет үшін адамның беті көрінуі үшін жоғарыдан қиямыз
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Мәтін бөлімі */}
          <div className="md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-qangly-dark mb-2">
              Әбдуәли Туғанбайұлы Қайдар
            </h2>
            <p className="text-qangly-gold font-semibold mb-4 flex items-center gap-2">
              <GraduationCap size={18} /> Академик, филология ғылымдарының
              докторы, профессор
            </p>

            <div className="text-gray-700 text-sm md:text-base space-y-4 mb-6">
              <p>
                <strong>Өмірбаяны:</strong> 1924 жылғы 13 желтоқсанда Алматы
                облысында дүниеге келген. Қазақ тіл білімінің көрнекті өкілі,
                түркітанушы, қазақ этнолингвистикасының негізін қалаушы. Екінші
                дүниежүзілік соғысқа қатысқан. 1951 жылы ҚазМУ-ды бітіріп, Ғылым
                академиясында кіші ғылыми қызметкерден институт директорына
                дейін көтерілді. 1983 жылы Қазақстан Ғылым академиясының
                академигі болды.
              </p>

              <div>
                <strong className="flex items-center gap-2 text-qangly-dark mb-1">
                  <BookOpen size={16} /> Қаңлы тарихын зерттеуге қосқан үлесі:
                </strong>
                <p className="text-sm text-gray-600 mb-2">
                  Ғалымның ғылыми мұрасында Қаңлы тайпасының тарихы, этнонимі
                  және шежіресі маңызды орын алады.
                </p>
                <ul className="list-disc list-inside ml-4 text-sm text-gray-600 space-y-1">
                  <li>
                    «Қаңлы (тарихи шежіре)» монографиясы (Алматы: Дайк-Пресс,
                    2004. — 610 бет).
                  </li>
                  <li>
                    «К историко-лингвистической характеристике этнонима
                    канглы/канлы» ғылыми мақаласы.
                  </li>
                </ul>
              </div>
            </div>

            {/* Еңбектері */}
            <div className="bg-gray-50 p-4 rounded-lg mb-4 border-l-4 border-qangly-gold">
              <h3 className="font-bold text-qangly-dark mb-2 flex items-center gap-2">
                <BookMarked size={18} /> Негізгі ғылыми еңбектері (500-ден
                астам):
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm columns-1 md:columns-2">
                <li>«Қазақ тілінің қысқаша этимологиялық сөздігі» (1966)</li>
                <li>«Қазақша-орысша бір буынды түбірлер сөздігі» (1986)</li>
                <li>«Тысяча метких и образных выражений» (2003)</li>
                <li>«Халық даналығы» (2004)</li>
                <li>«Қазақ қандай халық?» (2008)</li>
                <li>«Қазақтар ана тілі әлемінде» (2009)</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 text-sm text-gray-600 mb-2">
              <p>
                <strong className="flex items-center gap-1">
                  <Award size={16} className="text-qangly-gold" /> Марапаттары:
                </strong>{" "}
                Қазақстан Ғылым академиясының академигі (1983), Қазақ КСР-інің
                еңбек сіңірген ғылым қайраткері (1982), Шоқан Уәлиханов атындағы
                І дәрежелі сыйлықтың лауреаты, «Отан» орденінің иегері.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
