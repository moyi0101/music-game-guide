import { Calendar, MapPin, Users } from 'lucide-react';
import { MusicFestival } from '../data/mockData';

interface FestivalCardProps {
  festival: MusicFestival;
  index: number;
}

export default function FestivalCard({ festival, index }: FestivalCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden card-glow card-glow-hover" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="relative h-48 overflow-hidden">
        <img src={festival.image} alt={festival.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-festival-darker via-festival-darker/50 to-transparent" />
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-festival-pink/90 text-white text-sm font-medium">热门</div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-200">{festival.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{festival.description}</p>

        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Calendar className="w-4 h-4 text-festival-cyan" />
            <span>{festival.date}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <MapPin className="w-4 h-4 text-festival-pink" />
            <span>{festival.location}</span>
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-4 h-4 text-festival-purple" />
          <div className="flex -space-x-2">
            {festival.artists.slice(0, 4).map((artist, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-gradient-festival flex items-center justify-center text-white text-xs font-medium border-2 border-festival-dark" title={artist}>
                {artist.charAt(0)}
              </div>
            ))}
            {festival.artists.length > 4 && (
              <div className="w-8 h-8 rounded-full bg-festival-purple/50 flex items-center justify-center text-white text-xs font-medium border-2 border-festival-dark">
                +{festival.artists.length - 4}
              </div>
            )}
          </div>
          <span className="text-gray-400 text-sm ml-2">{festival.artists.length}位艺人</span>
        </div>

        <button className="btn-gradient w-full py-3 rounded-xl text-white font-medium">立即购票</button>
      </div>
    </div>
  );
}
