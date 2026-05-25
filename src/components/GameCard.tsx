import { Star, Calendar, Monitor } from 'lucide-react';
import { Game } from '../data/mockData';

interface GameCardProps {
  game: Game;
  index: number;
}

export default function GameCard({ game, index }: GameCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden card-glow card-glow-hover bg-festival-dark/50">
      <div className="relative h-56 overflow-hidden">
        <img src={game.image} alt={game.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-festival-dark via-transparent to-transparent" />
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <span className="px-3 py-1 rounded-full bg-festival-purple/90 text-white text-sm font-medium">{game.genre}</span>
        </div>
        <div className="absolute top-4 right-4 flex items-center space-x-1 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-white font-semibold">{game.rating}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-200">{game.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{game.description}</p>

        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="w-4 h-4 text-festival-cyan" />
          <span className="text-gray-400 text-sm">{game.releaseDate}</span>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <Monitor className="w-4 h-4 text-festival-pink" />
          <div className="flex flex-wrap gap-2">
            {game.platform.map((platform, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-festival-purple/30 text-gray-300 text-xs">{platform}</span>
            ))}
          </div>
        </div>

        <button className="btn-gradient w-full py-3 rounded-xl text-white font-medium">查看详情</button>
      </div>
    </div>
  );
}
