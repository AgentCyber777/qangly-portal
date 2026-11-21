"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Басты бет", href: "/" },
  { name: "Қаңлы туралы", href: "/qangly-turaly" },
  { name: "Тарих", href: "/tarih" },
  { name: "Ғылым", href: "/gylym" },
  { name: "Шежіре", href: "/shezhire" },
  { name: "Тұлғалар", href: "/tulgalar" },
  { name: "Кітапхана", href: "/kitapkhana" },
  { name: "Медиатека", href: "/mediateka" },
  { name: "Біз туралы", href: "/biz-turaly" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-qangly-dark text-white shadow-inner">
      <div className="max-w-7xl mx-auto px-4 flex overflow-x-auto hide-scrollbar">
        <ul className="flex text-xs md:text-sm font-semibold whitespace-nowrap py-1">
          {navLinks.map((link) => {
            // Қазіргі бетті анықтаймыз (Басты бетті дәл тексеру үшін)
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 rounded-sm transition-all ${
                    isActive
                      ? "bg-qangly-gold text-qangly-dark font-bold shadow-md"
                      : "hover:text-qangly-gold hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}