import Link from "next/link";
import Image from "next/image";
import { peopleCategories } from "@/data/people";
import { ArrowLeft, User, Info } from "lucide-react";

// Осы жол қатені түзеді
export const instant = false;

export default async function PersonPage({ params }: { params: Promise<{ category: string; person: string }> }) {
  const resolvedParams = await params;
  
  const categoryData = peopleCategories.find((c) => c.id === resolvedParams.category);
  const personData = categoryData?.people.find((p: any) => p.id === resolvedParams.person);

  if (!categoryData || !personData) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Тұлға табылмады</h1>
        <Link href="/tulgalar" className="text-qangly-primary hover:underline">← Тұлғалар бетіне қайту</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link href={`/tulgalar/${categoryData.id}`} className="inline-flex items-center text-gray-500 hover:text-qangly-gold mb-8 transition font-medium">
        <ArrowLeft size={20} className="mr-2" /> {categoryData.title} тізіміне қайту
      </Link>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
        
        <div className="md:w-1/3 relative min-h-[400px] bg-gray-100">
          {personData.image ? (
            <Image 
              src={personData.image} 
              alt={personData.name} 
              fill 
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
               <User size={80} className="text-gray-400" />
            </div>
          )}
        </div>

        <div className="md:w-2/3 p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-qangly-dark mb-2">{personData.name}</h1>
          <p className="text-qangly-gold font-semibold text-lg mb-6 flex items-center gap-2">
            <Info size={20}/> Мәртебесі: {personData.status}
          </p>

          <div className="prose prose-lg text-gray-700 mb-8">
            <h3 className="text-xl font-bold text-qangly-dark mb-2">Өмірбаяны:</h3>
            <p className="leading-relaxed">{personData.desc || "Бұл тұлға туралы толық мәліметтер әзірге енгізілмеген. Ғылыми кеңесте тексерілуде."}</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-qangly-gold">
             <h3 className="font-bold text-lg text-qangly-dark mb-2">Қосымша ақпарат</h3>
             <p className="text-sm text-gray-600">Бұл тұлғаның толық өмірбаяны, ғылыми еңбектері мен фотосуреттері жақын арада толықтырылатын болады.</p>
          </div>
        </div>
      </div>
    </div>
  );
}