import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Music, Gamepad2 } from 'lucide-react';
import { heroItems } from '../data/mockData';

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + heroItems.length) % heroItems.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroItems.length);
  };

  const currentItem = heroItems[currentIndex];

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <div className="absolute inset-0">
        <img src={currentItem.image} alt={currentItem.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-festival-darker/80 via-festival-darker/40 to-festival-darker" />
        <div className="absolute inset-0 bg-gradient-to-r from-festival-darker/90 via-transparent to-festival-darker/60" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-festival-purple/30 border border-festival-purple/50">
              {currentItem.type === 'festival' ? <Music className="w-4 h-4 text-festival-pink" /> : <Gamepad2 className="w-4 h-4 text-festival-cyan" />}
              <span className="text-sm text-gray-300">{currentItem.type === 'festival' ? '音乐节' : '游戏'}</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">{currentItem.title}</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-8">{currentItem.subtitle}</p>

          <div className="flex flex-wrap gap-4">
            <button className="btn-gradient px-8 py-4 rounded-xl text-white font-semibold text-lg">立即探索</button>
            <button className="px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-200">了解更多</button>
          </div>
        </div>
      </div>

      <button onClick={goToPrevious} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-200 md:left-8">
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button onClick={goToNext} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-200 md:right-8">
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroItems.map((_, index) => (
          <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-gradient-festival' : 'bg-white/30 hover:bg-white/50'}`} />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-festival-darker to-transparent" />
    </section>
  );
}
