import { Music, Gamepad2, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    music: [{ name: '草莓音乐节', href: '#' }, { name: 'Ultra China', href: '#' }, { name: '迷笛音乐节', href: '#' }, { name: '奶油田音乐节', href: '#' }],
    games: [{ name: '热门游戏', href: '#' }, { name: '新游上线', href: '#' }, { name: '游戏评测', href: '#' }, { name: '电竞资讯', href: '#' }],
    about: [{ name: '关于我们', href: '#' }, { name: '联系我们', href: '#' }, { name: '合作伙伴', href: '#' }, { name: '加入我们', href: '#' }],
  };

  return (
    <footer className="bg-festival-darker border-t border-festival-purple/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-festival flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">娱悦天地</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">专注于音乐节和游戏资讯的综合性平台，为您带来最新最热门的娱乐体验。</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-festival-purple/30 flex items-center justify-center text-gray-400 hover:text-festival-pink hover:bg-festival-purple/50 transition-all">
                <Gamepad2 className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-festival-purple/30 flex items-center justify-center text-gray-400 hover:text-festival-cyan hover:bg-festival-purple/50 transition-all">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-festival-purple/30 flex items-center justify-center text-gray-400 hover:text-white hover:bg-festival-purple/50 transition-all">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">音乐节</h3>
            <ul className="space-y-3">
              {footerLinks.music.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-festival-pink transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">游戏推荐</h3>
            <ul className="space-y-3">
              {footerLinks.games.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-festival-cyan transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">关于我们</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-festival-purple/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <MapPin className="w-4 h-4" />
              <span>北京市朝阳区娱乐大道88号</span>
            </div>
            <p className="text-gray-500 text-sm">&copy; 2024 娱悦天地. 保留所有权利.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
