import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

const events = [
  { id: 'event-1', title: '草莓音乐节预热派对', date: '2024年8月10日', time: '19:00-23:00', location: '北京工人体育场', type: '音乐节', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=music%20festival%20pre%20party%20colorful%20lights&image_size=landscape_4_3' },
  { id: 'event-2', title: '游戏发布会直播', date: '2024年8月15日', time: '20:00-22:00', location: '线上直播', type: '游戏', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=game%20release%20conference%20big%20screen&image_size=landscape_4_3' },
  { id: 'event-3', title: '电音狂欢夜', date: '2024年8月20日', time: '21:00-02:00', location: '上海MYST酒吧', type: '音乐节', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=electronic%20dance%20music%20nightclub%20laser%20lights&image_size=landscape_4_3' },
  { id: 'event-4', title: '游戏锦标赛', date: '2024年8月25日', time: '14:00-20:00', location: '深圳电竞中心', type: '游戏', image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=esports%20tournament%20players%20spectators&image_size=landscape_4_3' }
];

export default function EventsSection() {
  return (
    <section id="events" className="py-20 bg-festival-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-festival-purple/30 text-festival-pink text-sm font-medium mb-4">最新活动</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">近期精彩活动</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">探索即将举办的音乐节和游戏活动，抢先获取门票和最新资讯</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div key={event.id} className="group flex rounded-2xl overflow-hidden card-glow card-glow-hover" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative w-1/3 min-w-[150px] h-40 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-festival-dark/80" />
                <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${event.type === '音乐节' ? 'bg-festival-pink/90 text-white' : 'bg-festival-cyan/90 text-white'}`}>
                  {event.type}
                </div>
              </div>

              <div className="flex-1 p-5 bg-festival-dark/80 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gradient transition-all duration-200">{event.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 text-festival-cyan" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <Clock className="w-4 h-4 text-festival-pink" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 text-festival-purple" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <button className="flex items-center space-x-2 text-festival-cyan hover:text-festival-pink transition-colors">
                  <span>了解详情</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
