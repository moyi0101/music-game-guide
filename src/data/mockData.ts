export interface MusicFestival {
  id: string;
  name: string;
  description: string;
  image: string;
  date: string;
  location: string;
  artists: string[];
  ticketUrl: string;
}

export interface Game {
  id: string;
  name: string;
  description: string;
  image: string;
  genre: string;
  rating: number;
  platform: string[];
  releaseDate: string;
}

export interface HeroItem {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  type: 'festival' | 'game';
}

export const heroItems: HeroItem[] = [
  {
    id: 'hero-1',
    title: '2024 音乐节狂欢季',
    subtitle: '感受音乐的力量，释放你的激情',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=colorful%20music%20festival%20stage%20with%20neon%20lights%20and%20crowd%20celebrating%20night%20concert&image_size=landscape_16_9',
    type: 'festival'
  },
  {
    id: 'hero-2',
    title: '热门游戏推荐',
    subtitle: '探索虚拟世界的无限可能',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=epic%20gaming%20scene%20with%20fantasy%20characters%20and%20dramatic%20lighting%20digital%20art&image_size=landscape_16_9',
    type: 'game'
  },
  {
    id: 'hero-3',
    title: '电子音乐节',
    subtitle: '电子音乐与视觉艺术的完美融合',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=electronic%20music%20festival%20with%20laser%20lights%20and%20DJ%20booth%20futuristic%20neon%20atmosphere&image_size=landscape_16_9',
    type: 'festival'
  }
];

export const musicFestivals: MusicFestival[] = [
  {
    id: 'fest-1',
    name: '草莓音乐节',
    description: '中国最大的户外音乐节之一，汇集国内外顶尖音乐人，带来三天三夜的音乐狂欢。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=strawberry%20music%20festival%20colorful%20stage%20with%20crowd%20and%20artists%20performing&image_size=landscape_4_3',
    date: '2024年8月15-17日',
    location: '北京奥林匹克公园',
    artists: ['万能青年旅店', '痛仰乐队', '草东没有派对', '陈粒'],
    ticketUrl: '#'
  },
  {
    id: 'fest-2',
    name: 'Ultra China',
    description: '全球顶级电子音乐节品牌，带来最震撼的电音体验和视觉盛宴。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ultra%20music%20festival%20electronic%20dance%20music%20event%20with%20stunning%20stage%20production&image_size=landscape_4_3',
    date: '2024年9月6-7日',
    location: '上海世博公园',
    artists: ['Martin Garrix', 'David Guetta', 'Calvin Harris', 'Kygo'],
    ticketUrl: '#'
  },
  {
    id: 'fest-3',
    name: '迷笛音乐节',
    description: '中国摇滚乐的发源地，见证中国摇滚三十年的辉煌历程。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=midi%20rock%20music%20festival%20with%20rock%20bands%20performing%20on%20stage%20night%20concert&image_size=landscape_4_3',
    date: '2024年10月1-3日',
    location: '深圳欢乐海岸',
    artists: ['崔健', '谢天笑', '新裤子', 'Joyside'],
    ticketUrl: '#'
  },
  {
    id: 'fest-4',
    name: '仙人掌音乐节',
    description: '成都最具影响力的音乐节，融合多元音乐风格，打造西部音乐盛典。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cactus%20music%20festival%20outdoor%20concert%20with%20desert%20theme%20and%20colorful%20lighting&image_size=landscape_4_3',
    date: '2024年11月8-10日',
    location: '成都融创文旅城',
    artists: ['朴树', '赵雷', '告五人', '郭顶'],
    ticketUrl: '#'
  },
  {
    id: 'fest-5',
    name: '奶油田音乐节',
    description: '亚洲最大的电子音乐节之一，带来世界级DJ阵容和沉浸式舞台体验。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=creamfields%20electronic%20music%20festival%20with%20creamy%20white%20theme%20and%20spectacular%20fireworks&image_size=landscape_4_3',
    date: '2024年12月21-22日',
    location: '广州天河体育中心',
    artists: ['Tiësto', 'Hardwell', 'Armin van Buuren', 'Above & Beyond'],
    ticketUrl: '#'
  },
  {
    id: 'fest-6',
    name: '太湖湾音乐节',
    description: '江南水乡的音乐盛宴，将传统与现代完美融合。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lake%20tai%20music%20festival%20outdoor%20concert%20by%20the%20lake%20with%20beautiful%20scenery&image_size=landscape_4_3',
    date: '2024年7月26-28日',
    location: '常州太湖湾旅游度假区',
    artists: ['周杰伦', '林俊杰', '邓紫棋', '薛之谦'],
    ticketUrl: '#'
  }
];

export const games: Game[] = [
  {
    id: 'game-1',
    name: '塞尔达传说：王国之泪',
    description: '探索海拉鲁大陆的全新冒险，利用究极能力创造无限可能。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=zelda%20game%20epic%20fantasy%20landscape%20with%20hero%20and%20magical%20elements&image_size=landscape_4_3',
    genre: '动作冒险',
    rating: 9.8,
    platform: ['Switch'],
    releaseDate: '2023年5月'
  },
  {
    id: 'game-2',
    name: '博德之门3',
    description: '基于D&D规则的史诗级RPG，你的每一个选择都将改变故事走向。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=baldurs%20gate%203%20fantasy%20RPG%20game%20dark%20medieval%20setting%20with%20heroes&image_size=landscape_4_3',
    genre: '角色扮演',
    rating: 9.6,
    platform: ['PC', 'PS5', 'Xbox'],
    releaseDate: '2023年8月'
  },
  {
    id: 'game-3',
    name: '艾尔登法环',
    description: 'FromSoftware最新力作，在广袤的交界地展开史诗冒险。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=elden%20ring%20dark%20fantasy%20game%20with%20epic%20boss%20battle%20and%20mysterious%20world&image_size=landscape_4_3',
    genre: '动作RPG',
    rating: 9.5,
    platform: ['PC', 'PS5', 'Xbox'],
    releaseDate: '2022年2月'
  },
  {
    id: 'game-4',
    name: '星空',
    description: 'Bethesda打造的太空史诗RPG，探索无尽宇宙的奥秘。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=starfield%20space%20exploration%20game%20with%20spaceships%20and%20planets%20sci-fi%20epic&image_size=landscape_4_3',
    genre: '角色扮演',
    rating: 8.9,
    platform: ['PC', 'Xbox'],
    releaseDate: '2023年9月'
  },
  {
    id: 'game-5',
    name: '战神：诸神黄昏',
    description: '父子二人的北欧神话终章，迎接诸神黄昏的到来。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=god%20of%20war%20ragnarok%20norse%20mythology%20game%20epic%20battle%20with%20gods&image_size=landscape_4_3',
    genre: '动作冒险',
    rating: 9.7,
    platform: ['PS5'],
    releaseDate: '2022年11月'
  },
  {
    id: 'game-6',
    name: '赛博朋克2077',
    description: '夜之城的赛博朋克史诗，在霓虹闪烁中追寻梦想。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cyberpunk%202077%20futuristic%20neon%20city%20with%20cyborgs%20and%20high%20tech&image_size=landscape_4_3',
    genre: '动作RPG',
    rating: 9.0,
    platform: ['PC', 'PS5', 'Xbox'],
    releaseDate: '2020年12月'
  },
  {
    id: 'game-7',
    name: '霍格沃茨之遗',
    description: '重返魔法世界，在霍格沃茨展开你的魔法冒险。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hogwarts%20legacy%20magic%20school%20game%20with%20wizards%20and%20fantastic%20beasts&image_size=landscape_4_3',
    genre: '动作RPG',
    rating: 9.2,
    platform: ['PC', 'PS5', 'Xbox', 'Switch'],
    releaseDate: '2023年2月'
  },
  {
    id: 'game-8',
    name: '最后生还者 第二部',
    description: '末世生存故事的延续，在残酷世界中寻找希望。',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=the%20last%20of%20us%20part%202%20post%20apocalyptic%20game%20with%20survivors%20and%20zombies&image_size=landscape_4_3',
    genre: '动作冒险',
    rating: 9.3,
    platform: ['PS5'],
    releaseDate: '2020年6月'
  }
];
