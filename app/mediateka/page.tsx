import { youtubeVideos } from "@/data/media";
import MediaCard from "@/components/MediaCard";

export default function MediatekaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      
      {/* Бет тақырыбы */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-qangly-dark mb-4 uppercase">Медиатека</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Қаңлы тарихы, мәдениеті мен ғылыми зерттеулері туралы бейнематериалдар.
        </p>
      </div>

      {/* Видеолар торы */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {youtubeVideos.map((video) => (
          <MediaCard 
            key={video.id} 
            videoId={video.id} 
            title={video.title} 
            category={video.category} 
          />
        ))}
      </div>

    </div>
  );
}