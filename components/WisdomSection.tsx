import { Quote } from "lucide-react";

const wisdoms = [
  {
    author: "Абай Құнанбайұлы",
    text: "Біріңғай, қазақ, кел қатар, Еңбегіңді сау, еңбек қыл. Бірлік болмай, тірлік болмас.",
    title: "Бірлік туралы"
  },
  {
    author: "Ахмет Байтұрсынұлы",
    text: "Білімсіздің күні қараң, көзі соқыр. Оқу – білім бұлағы, білім – өмір шырағы.",
    title: "Білім туралы"
  },
  {
    author: "Әл-Фараби",
    text: "Адамдар бір-біріне мұқтаж. Адамзаттың бақыты – бірлікте және өзара көмекте.",
    title: "Адамгершілік туралы"
  },
  {
    author: "Мағжан Жұмабаев",
    text: "Тәртіпке бағынған құл болмайды, тәртіпсіз елде ұл болмайды.",
    title: "Тәртіп туралы"
  }
];

export default function WisdomSection() {
  return (
    <section className="bg-gray-50 py-16 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-qangly-dark mb-4 uppercase tracking-wider">Ұлт даналығы</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Қазақтың ұлы ойшылдарының бірлік, білім және адамгершілік туралы қанатты сөздері.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wisdoms.map((wisdom, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative group hover:shadow-md transition duration-300">
              <Quote className="absolute top-6 right-6 text-qangly-gold/20 w-12 h-12" />
              
              <span className="inline-block bg-qangly-gold/10 text-qangly-gold text-xs font-bold px-3 py-1 rounded-full mb-4">
                {wisdom.title}
              </span>
              
              <p className="text-lg text-gray-700 italic font-serif leading-relaxed mb-6 relative z-10">
                «{wisdom.text}»
              </p>
              
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-1 bg-qangly-gold"></div>
                <span className="font-bold text-qangly-dark">{wisdom.author}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}