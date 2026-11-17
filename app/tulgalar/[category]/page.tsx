import Link from "next/link";
import Image from "next/image";
import { peopleCategories } from "@/data/people";
import { ArrowLeft, User } from "lucide-react";

// Осы жол қатені түзеді
export const instant = false;

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const categoryData = peopleCategories.find((c) => c.id === resolvedParams.category);

  if (!categoryData) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Санат табылмады</h1>
        <Link href="/tulgalar" className="text-qangly-primary hover:underline">← Тұлғалар бетіне қайту</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Link href="/tulgalar" className="inline-flex items-center text-gray-500 hover:text-qangly-gold mb-8 transition font-medium">
        <ArrowLeft size={20} className="mr-2" /> Барлық санаттарға қайту
      </Link>

      <div className="mb-10 border-b-2 border-qangly-gold pb-4">
        <h1 className="text-3xl md:text-4xl font-bold text-qangly-dark uppercase">{categoryData.title}</h1>
        <p className="text-gray-500 mt-2">Бұл санаттағы тұлғалардың толық тізімі</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoryData.people.map((person: any) => (
          <Link href={`/tulgalar/${resolvedParams.category}/${person.id}`} key={person.id} className="group block">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 flex flex-col hover:shadow-xl transition duration-300 h-full">
              
              <div className="relative w-full h-64 bg-gray-100">
                {person.image ? (
                  <Image 
                    src={person.image} 
                    alt={person.name} 
                    fill 
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <User size={64} className="text-gray-400" />
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow border-t-4 border-qangly-gold">
                <h3 className="font-bold text-xl text-qangly-dark mb-3 group-hover:text-qangly-primary transition">{person.name}</h3>
                <p className="text-sm text-gray-600 mb-6 flex-grow">{person.desc || "Өмірбаяндық мәліметтер әзірге енгізілмеген."}</p>
                
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400 font-medium">Мәртебесі:</span>
                  <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                    person.status.includes("Тексерілуде") ? "bg-red-100 text-red-700" : 
                    person.status.includes("Кандидат") ? "bg-blue-100 text-blue-700" : 
                    "bg-green-100 text-green-700"
                  }`}>
                    {person.status}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}