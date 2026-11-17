"use client";
import { useState } from "react";
import { Play } from "lucide-react";

interface MediaCardProps {
  videoId: string;
  title: string;
  category: string;
}

export default function MediaCard({ videoId, title, category }: MediaCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 group">
      
      {/* Видео контейнері */}
      <div className="relative aspect-video bg-black w-full">
        {isPlaying ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div 
            className="absolute inset-0 cursor-pointer flex items-center justify-center bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(https://img.youtube.com/vi/${videoId}/maxresdefault.jpg)` }}
            onClick={() => setIsPlaying(true)}
          >
            {/* Қараңғы қабат (суретті сәл күңгірттендіру үшін) */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
            
            {/* Ойнату батырмасы */}
            <div className="relative z-10 bg-qangly-gold text-qangly-dark p-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.6)] transform group-hover:scale-110 transition duration-300">
              <Play fill="currentColor" size={28} />
            </div>
          </div>
        )}
      </div>

      {/* Мәтін бөлімі */}
      <div className="p-5 border-t-2 border-qangly-gold">
        <span className="text-xs font-bold text-qangly-gold uppercase tracking-wider">{category}</span>
        <h3 className="font-bold text-lg text-qangly-dark mt-1 line-clamp-2">{title}</h3>
      </div>
    </div>
  );
}