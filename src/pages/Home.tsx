import { Music, Gamepad2, Sparkles } from 'lucide-react';
import { musicFestivals, games } from '../data/mockData';
import FestivalCard from '../components/FestivalCard';
import GameCard from '../components/GameCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-festival-darker">
      <section id="festivals" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Music className="w-6 h-6 text-festival-pink" />
              <span className="inline-block px-4 py-2 rounded-full bg-festival-purple/30 text-festival-pink text-sm font-medium">音乐节</span>
              <Sparkles className="w-6 h-6 text-festival-cyan" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">热门音乐节推荐</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">探索最受欢迎的音乐节，感受现场音乐的魅力与激情</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {musicFestivals.map((festival, index) => (
              <FestivalCard key={festival.id} festival={festival} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-gradient px-8 py-4 rounded-xl text-white font-semibold">查看更多音乐节</button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-festival-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Gamepad2 className="w-6 h-6 text-festival-cyan" />
              <span className="inline-block px-4 py-2 rounded-full bg-festival-cyan/30 text-festival-cyan text-sm font-medium">游戏推荐</span>
              <Sparkles className="w-6 h-6 text-festival-pink" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">热门游戏精选</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">发现最精彩的游戏作品，开启你的游戏之旅</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 rounded-xl border-2 border-festival-cyan text-festival-cyan font-semibold hover:bg-festival-cyan/10 transition-all duration-200">查看更多游戏</button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <img src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=music%20festival%20and%20gaming%20collaboration%20with%20neon%20lights%20and%20colorful%20effects&image_size=landscape_16_9" alt="音乐节与游戏" className="w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-festival-darker via-festival-darker/80 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">加入我们的社区</h3>
              <p className="text-gray-300 mb-6 max-w-md">订阅我们的新闻通讯，获取最新的音乐节和游戏资讯，享受专属优惠和活动邀请</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input type="email" placeholder="输入您的邮箱地址" className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:border-festival-pink transition-colors" />
                <button className="btn-gradient px-8 py-4 rounded-xl text-white font-semibold whitespace-nowrap">立即订阅</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
