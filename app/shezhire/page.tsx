"use client";

import ShezhireSlogan from "@/components/ShezhireSlogan";

export default function ShezhirePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Бет тақырыбы */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-qangly-dark mb-4 uppercase">Шежіре және аталар</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Қаңлы руының тарихи тармақтары, ата-бабалар жолы және ұрпақтар сабақтастығы.
        </p>
      </div>

      {/* Тек осы бетке арналған ұран */}
      <ShezhireSlogan />

      {/* Шежіре мазмұны */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-12 text-center">
        <h3 className="text-2xl font-bold text-gray-400 mb-2">Шежіре ағашы</h3>
        <p className="text-gray-500">Бұл бөлімге Қаңлы руының толық шежірелік ағашы мен тармақтары жақын арада енгізілетін болады.</p>
      </div>

    </div>
  );
}