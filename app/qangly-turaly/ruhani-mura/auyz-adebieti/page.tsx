import { folkloreData } from "@/data/folklore";
import { Quote, MessageSquare, Mic2, Landmark, BookOpen } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, any> = { Quote, MessageSquare, Mic2, Landmark };

export default function AuzyAdebietiPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Артқа қайту батырмасы */}
      <Link href="/qangly-turaly" className="inline-flex items-center text-gray-500 hover:text-qangly-gold mb-8 transition font-medium">
        ← Қаңлы туралы бетіне қайту
      </Link>

      {/* Бет тақырыбы */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-qangly-dark mb-4 uppercase">Қаңлының ауыз әдебиеті</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Ғасырлар бойы халық жадында сақталған мақал-мәтелдер, нақыл сөздер, жырлар мен дәстүрлер.
        </p>
      </div>

      <div className="space-y-20">
        {folkloreData.map((section) => {
          const Icon = iconMap[section.icon] || BookOpen;
          return (
            <section key={section.id} className="scroll-mt-24">
              {/* Секция тақырыбы */}
              <div className="flex items-center gap-4 mb-8 border-b-2 border-qangly-gold pb-4">
                <div className="bg-qangly-gold/10 p-3 rounded-full">
                  <Icon className="w-8 h-8 text-qangly-gold" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-qangly-dark">{section.title}</h2>
              </div>

              {/* Элементтер */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((item: any, idx: number) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 flex flex-col">
                    
                    {/* Негізгі мәтін */}
                    <p className="text-lg md:text-xl font-serif italic text-qangly-dark mb-4 flex-grow">
                      {item.text}
                    </p>

                    {/* Дереккөз және қосымша ақпарат */}
                    <div className="text-sm text-gray-500 border-t border-gray-100 pt-4 mt-auto">
                      {item.source && <p><strong className="text-gray-700">Дерек:</strong> {item.source}</p>}
                      {item.topic && <p className="mt-1"><strong className="text-gray-700">Тақырып:</strong> {item.topic}</p>}
                      {item.note && <p className="mt-2 text-xs bg-blue-50 text-blue-800 p-2 rounded border border-blue-100"><strong>Ескерту:</strong> {item.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* Төменгі ескерту */}
      <div className="mt-20 p-6 bg-gray-50 border-l-4 border-qangly-gold rounded-r-lg text-sm text-gray-600">
        <p><strong>Редакциялық қағида:</strong> Негізгі дерек: Жанатбек Қанды, «Ата-бабалардан жеткен құпия кодтар» жинағы негізінде құрастырылды. Материалдардың бастапқы дереккөздері мен авторлық құқықтары тексерілуде.</p>
      </div>
    </div>
  );
}