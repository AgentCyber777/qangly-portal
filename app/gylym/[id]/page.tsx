import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BookMarked, GraduationCap, ExternalLink } from "lucide-react";
import { scientistsData } from "@/data/people";

export const instant = false;

export default async function ScientistPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const scientist = scientistsData.find((s) => s.id === resolvedParams.id);

  if (!scientist) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Ғалым табылмады</h1>
        <Link href="/gylym" className="text-qangly-primary hover:underline">← Ғылым бетіне қайту</Link>
      </div>
    );
  }

  const isKaidar = scientist.id === "kaidar";
  const isPodushkin = scientist.id === "podushkin";

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link href="/gylym" className="inline-flex items-center text-gray-500 hover:text-qangly-gold mb-8 transition font-medium">
        <ArrowLeft size={20} className="mr-2" /> Ғалымдар тізіміне қайту
      </Link>

      {/* Егер Подушкин болса, сурет жоғарыда, мәтін астында болады */}
      {isPodushkin ? (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col">
          {/* Подушкиннің суреті (Ғылым бетіндегідей ені бойынша) */}
          <div className="w-full bg-white flex justify-center p-4 md:p-6">
            <div className="relative w-full max-w-4xl rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <Image 
                src={scientist.image} 
                alt={scientist.name} 
                width={800} 
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          {/* Подушкиннің мәтіні */}
          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-qangly-dark mb-2">{scientist.name}</h1>
            <p className="text-qangly-gold font-semibold text-lg mb-6 flex items-center gap-2">
              <GraduationCap size={20}/> {scientist.title}
            </p>

            <div className="prose prose-lg text-gray-700 mb-8">
              <p className="leading-relaxed">{scientist.fullBio}</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-qangly-gold">
              <h3 className="font-bold text-xl text-qangly-dark mb-4 flex items-center gap-2">
                <BookMarked size={20}/> Негізгі еңбектері:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {scientist.works.map((work, idx) => (
                  <li key={idx} className="leading-relaxed">{work}</li>
                ))}
              </ul>
            </div>

            {scientist.link && (
              <a 
                href={scientist.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-qangly-primary text-white px-6 py-3 rounded-md hover:bg-qangly-dark transition font-medium"
              >
                Ғылыми кітапхана сілтемесі <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      ) : (
        /* Қайдар үшін бұрынғы дизайн (бүйірде) қалады */
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          
          <div className="md:w-1/3 bg-gray-50 flex items-center justify-center p-6 md:p-10">
            <Image 
              src={scientist.image} 
              alt={scientist.name} 
              width={333} 
              height={500}
              className="h-[400px] md:h-[500px] w-auto object-contain rounded-lg shadow-lg border-2 border-qangly-gold/50"
              priority
            />
          </div>

          <div className="md:w-2/3 p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-qangly-dark mb-2">{scientist.name}</h1>
            <p className="text-qangly-gold font-semibold text-lg mb-6 flex items-center gap-2">
              <GraduationCap size={20}/> {scientist.title}
            </p>

            <div className="prose prose-lg text-gray-700 mb-8">
              <p className="leading-relaxed">{scientist.fullBio}</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-qangly-gold">
              <h3 className="font-bold text-xl text-qangly-dark mb-4 flex items-center gap-2">
                <BookMarked size={20}/> Негізгі еңбектері:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {scientist.works.map((work, idx) => (
                  <li key={idx} className="leading-relaxed">{work}</li>
                ))}
              </ul>
            </div>

            {scientist.link && (
              <a 
                href={scientist.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-qangly-primary text-white px-6 py-3 rounded-md hover:bg-qangly-dark transition font-medium"
              >
                Ғылыми кітапхана сілтемесі <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}