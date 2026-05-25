import { useState, useEffect } from 'react';
import { Music, Gamepad2, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#' },
    { name: '音乐节', href: '#festivals' },
    { name: '游戏推荐', href: '#games' },
    { name: '活动资讯', href: '#events' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-festival-darker/95 backdrop-blur-md shadow-lg shadow-festival-purple/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-festival flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-festival-pink rounded-full animate-pulse" />
            </div>
            <span className="text-xl font-bold text-gradient">娱悦天地</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200 relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-festival transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-festival-purple/50 text-festival-cyan hover:bg-festival-purple/20 transition-all duration-200">
              <Gamepad2 className="w-4 h-4" />
              <span>游戏中心</span>
            </button>
            <button className="btn-gradient px-4 py-2 rounded-lg text-white font-medium">
              立即体验
            </button>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-festival-darker/98 backdrop-blur-lg border-t border-festival-purple/30">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="block py-2 text-gray-300 hover:text-white transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <button className="btn-gradient w-full mt-4 px-4 py-3 rounded-lg text-white font-medium">
              立即体验
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
