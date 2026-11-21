import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import RotatingSlogan from "@/components/RotatingSlogan";
import CurrentDate from "@/components/CurrentDate";
import Navbar from "@/components/Navbar"; // Жаңа компонент

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "ҚАҢЛЫ — Тарихи-мәдени және ғылыми портал",
  description: "Қаңлы руының тарихы, шежіресі, тұлғалары және ғылыми зерттеулері",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kk">
      <body className={`${inter.className} bg-qangly-light text-gray-800 min-h-screen flex flex-col relative`}>
        
        {/* Жоғары ақпараттық жолақ (Тек дата қалды) */}
        <div className="bg-qangly-dark text-gray-300 text-xs py-2 px-4 border-b border-gray-700">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <CurrentDate />
            {/* Телефон мен пошта алынып тасталды */}
          </div>
        </div>

        {/* Header */}
        <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b-4 border-qangly-gold">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Логотип */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer group">
              <div className="w-14 h-14 md:w-16 md:h-16 relative transition-transform group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Қаңлы Логотипі"
                  fill
                  sizes="(max-width: 768px) 56px, 64px"
                  className="object-contain rounded-full shadow-md"
                  priority
                />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-extrabold text-qangly-dark uppercase tracking-tighter">
                  ҚАҢЛЫ
                </h1>
                <p className="text-[10px] md:text-xs text-qangly-gold font-bold tracking-widest uppercase">
                  Тарих. Таным. Тағлым.
                </p>
              </div>
            </Link>

            {/* Іздеу (Барлық құрылғыда көрінеді) */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Порталдан іздеу..."
                className="w-full border-2 border-gray-200 bg-gray-50 rounded-full px-4 py-2 pl-10 text-sm focus:outline-none focus:border-qangly-gold transition-all"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Жаңа Мәзір */}
          <Navbar />
        </header>

        {/* Абайдың сөзі (Тек басты бетте көрінеді) */}
        <RotatingSlogan />

        {/* Негізгі мазмұн */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-qangly-dark text-gray-300 py-12 border-t-4 border-qangly-gold mt-12">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 relative flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Логотип"
                    fill
                    sizes="48px"
                    style={{
                      clipPath: "polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)",
                    }}
                    className="object-cover scale-125"
                  />
                </div>
                <h3 className="text-white font-bold text-xl uppercase">
                  Қаңлы порталы
                </h3>
              </div>
              <p className="text-sm leading-relaxed">
                Ежелгі тарихтан бүгінге дейінгі тексерілген деректер мен ғылыми
                мұраның ашық платформасы. Барлық материалдар дереккөздерімен
                расталған.
              </p>
            </div>
            <div>
              <h3 className="text-qangly-gold font-bold text-lg mb-4 uppercase">
                Бөлімдер
              </h3>
              <ul className="text-sm space-y-2">
                <li><Link href="/tarih" className="hover:text-white transition">Тарих және археология</Link></li>
                <li><Link href="/gylym" className="hover:text-white transition">Ғылыми мақалалар</Link></li>
                <li><Link href="/shezhire" className="hover:text-white transition">Шежіре ағашы</Link></li>
                <li><Link href="/balalar" className="hover:text-white transition">Балалар бөлімі</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-qangly-gold font-bold text-lg mb-4 uppercase">
                Байланыс
              </h3>
              <ul className="text-sm space-y-2">
                <li>Материал жіберу</li>
                <li>Серіктестер</li>
                <li>Ғылыми кеңес</li>
                <li>Редакция</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-6">
            © 2026 Қаңлы порталы. Барлық құқықтар қорғалған.
          </div>
        </footer>

        {/* Жоғарыға көтеретін батырма */}
        <ScrollToTop />
      </body>
    </html>
  );
}