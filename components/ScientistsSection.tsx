import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { scientistsData } from "@/data/people";

export default function ScientistsSection() {
  return (
    <section className="bg-white py-16 border-t-4 border-qangly-gold mt-12">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="flex justify-between items-end mb-10 border-b-2 border-gray-100 pb-4">
          <h2 className="text-3xl font-bold text-qangly-dark border-l-4 border-qangly-gold pl-4 uppercase">
            Қаңлы тарихын зерттеген ғалымдар
          </h2>
          <Link href="/gylym" className="hidden md:flex items-center text-qangly-gold font-bold hover:text-qangly-dark transition">
            Барлығын көру <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {scientistsData.map((scientist) => (
            <div key={scientist.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col group hover:shadow-2xl transition duration-300">
              
              {/* Сурет контейнері */}
              <div className="relative w-full h-[350px] md:h-[400px] bg-gray-100 overflow-hidden">
                <Image 
                  src={scientist.image} 
                  alt={scientist.name} 
                  fill 
                  // Әр ғалымның суретіне жеке позиция береміз:
                  // podushkin (жалпақ 800х600) - ортасынан
                  // kaidar (биік 333х500) - беті көрінуі үшін жоғарыдан
                  className={`object-cover ${
                    scientist.id === "kaidar" ? "object-top" : "object-center"
                  } group-hover:scale-105 transition duration-500`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Мәтін астында анық болуы үшін сәл қараңғы градиент */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              
              {/* Мәтін бөлімі */}
              <div className="p-6 flex flex-col flex-grow bg-white relative -mt-6 mx-4 rounded-t-lg shadow-sm border-t-2 border-qangly-gold">
                <h3 className="font-bold text-2xl text-qangly-dark mb-1">{scientist.name}</h3>
                <p className="text-sm text-qangly-gold font-semibold mb-4">{scientist.title}</p>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {scientist.shortBio}
                </p>
                <Link 
                  href={`/gylym/${scientist.id}`} 
                  className="inline-flex items-center justify-center w-full bg-qangly-primary text-white font-bold px-4 py-3 rounded hover:bg-qangly-dark transition uppercase tracking-wider text-xs mt-auto"
                >
                  Толығырақ оқу <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/gylym" className="inline-flex items-center text-qangly-gold font-bold hover:text-qangly-dark transition">
            Барлық ғалымдарды көру <ArrowRight size={18} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}