"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { kk } from "date-fns/locale";
import { CloudRain, CloudSnow, CloudLightning, Cloud, CloudSun, Sun, CloudFog } from "lucide-react"; // Иконкаларды қосамыз

// Ауа райына байланысты Lucide иконкаларын таңдау
const getWeatherIcon = (condition: string) => {
  const props = { size: 20, className: "text-qangly-gold animate-pulse" }; // animate-pulse - анимация береди
  
  switch (condition) {
    case "Clear": return <Sun {...props} />;
    case "Clouds": return <Cloud {...props} />;
    case "Rain":
    case "Drizzle": return <CloudRain {...props} />;
    case "Thunderstorm": return <CloudLightning {...props} />;
    case "Snow": return <CloudSnow {...props} />;
    case "Mist":
    case "Fog":
    case "Haze": return <CloudFog {...props} />;
    default: return <CloudSun {...props} />;
  }
};

export default function CurrentDate() {
  const [isMounted, setIsMounted] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [weather, setWeather] = useState<{ temp: number; condition: string; main: string } | null>(null);

  useEffect(() => {
    setIsMounted(true);

    const updateDate = () => {
      const now = new Date();
      const formatted = format(now, "eeee, d LLLL yyyy 'ж.'", { locale: kk });
      setCurrentDate(formatted.charAt(0).toUpperCase() + formatted.slice(1));
    };
    updateDate();
    const interval = setInterval(updateDate, 60000);

    const fetchWeather = async () => {
      try {
        const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=42.3&lon=69.6&appid=${API_KEY}&units=metric&lang=kk`
        );
        const data = await res.json();
        
        if (data.main) {
          setWeather({
            temp: Math.round(data.main.temp),
            condition: data.weather[0].description,
            main: data.weather[0].main, // Негізгі топ (Rain, Clear, т.б.)
          });
        }
      } catch (error) {
        console.error("Ауа райын алу мүмкін болмады:", error);
      }
    };
    fetchWeather();
    const weatherInterval = setInterval(fetchWeather, 1800000);

    return () => {
      clearInterval(interval);
      clearInterval(weatherInterval);
    };
  }, []);

  if (!isMounted) {
    return <span className="opacity-0">Жүктелуде...</span>;
  }

  return (
    <div className="flex items-center gap-4">
      <span>{currentDate}</span>

      {weather && (
        <div className="flex items-center gap-2 border-l border-gray-600 pl-4">
          {/* Мұнда иконканы функция арқылы шығарамыз */}
          <div className="flex items-center justify-center w-6 h-6">
            {getWeatherIcon(weather.main)}
          </div>
          <span className="font-semibold text-white">
            Шымкент {weather.temp > 0 ? `+${weather.temp}` : weather.temp}°C
          </span>
        </div>
      )}
    </div>
  );
}