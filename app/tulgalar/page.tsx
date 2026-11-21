"use client"; // Іздеу үшін клиенттік компонент болуы шарт

import Link from "next/link";
import { useState } from "react";
import { peopleCategories } from "@/data/people";
import { Search, ChevronRight, Shield, Landmark, BookOpen, Mic2, Palette, Trophy, HeartHandshake, User, LucideIcon } from "lucide-react";

// Иконкаларды динамикалық түрде шығаратын функция
const renderIcon = (iconName: string) => {
  const icons: Record<string, LucideIcon> = { 
    Shield, Landmark, BookOpen, Mic2, Palette, Trophy, HeartHandshake, User 
  };
  const IconComponent = icons[iconName] || User;
  return <IconComponent className="w-8 h-8 text-qangly-gold mb-4" />;
};

export default function TulgalarPage() {
  // Іздеу сөзін сақтайтын күй
  const [searchQuery, setSearchQuery] = useState("");

  // Іздеу сөзіне сәйкес келетін категориялар мен адамдарды сүзгілеу
  const filteredCategories = peopleCategories.map(category => {
    // Санат атауы немесе ішіндегі адамдардың аты іздеу сөзіне сәйкес келе ме?
    const matchingPeople = category.people.filter(person => 
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (person.desc && person.desc.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const categoryMatches = category.title.toLowerCase().includes(searchQuery.toLowerCase());

    // Егер санат атауы сәйкес келсе, бүкіл санатты көрсетеміз. 
    // Егер тек адамдар сәйкес келсе, сол санатты тек сәйкес адамдармен көрсетеміз.
    if (categoryMatches) {
      return { ...category, filteredPeople: category.people };
    } else if (matchingPeople.length > 0) {
      return { ...category, filteredPeople: matchingPeople };
    }
    return null; // Ештеңе сәйкес келмесе, қайтармаймыз
  }).filter(Boolean); // null мәндерді алып тастаймыз

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      
      {/* Жоғарғы Баннер */}
      <div className="bg-qangly-dark text-white rounded-xl p-8 md:p-12 text-center mb-10 shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-qangly-gold uppercase tracking-wider mb-3">
            ТҰЛҒАЛАР
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Қаңлы тарихы мен рухани мұрасындағы есімдер
          </p>
        </div>
      </div>

      {/* Іздеу жолағы */}
      <div className="relative mb-8 max-w-2xl">
        <input 
          type="text" 
          placeholder="Тұлғаның аты-жөні бойынша іздеу..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border-b-2 border-gray-300 bg-transparent py-3 pl-10 text-lg focus:outline-none focus:border-qangly-gold transition"
        />
        <Search className="absolute left-0 top-4 text-gray-400 w-6 h-6" />
      </div>

      {/* Категориялар Торы (Сүзгіленген) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((category: any) => (
            <Link 
              href={`/tulgalar/${category.id}`} 
              key={category.id}
              className="group border border-gray-200 bg-white rounded-xl p-6 shadow-sm hover:shadow-md hover:border-qangly-gold transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {renderIcon(category.iconName)}
                <h2 className="text-2xl font-bold text-qangly-dark mb-4">{category.title}</h2>
                
                {/* Егер іздеу сөзі болса және ішінде адамдар табылса, соларды көрсетеміз */}
                {searchQuery && category.filteredPeople && (
                  <ul className="mb-4 text-sm text-gray-600 space-y-1">
                    {category.filteredPeople.map((person: any) => (
                      <li key={person.id} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-qangly-gold rounded-full"></span>
                        {person.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex items-center text-gray-500 font-medium group-hover:text-qangly-gold transition">
                <span>Тізімді ашу</span>
                <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">
            Ештеңе табылмады. Басқа сөзбен іздеп көріңіз.
          </div>
        )}
      </div>

    </div>
  );
}