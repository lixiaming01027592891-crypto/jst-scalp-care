export const NAV_LINKS = [
  { label: '首頁', path: '/' },
  { label: '服務項目', path: '/services/' },
  { label: '頭皮護理', path: '/scalp-care/' },
  { label: '價格方案', path: '/pricing/' },
  { label: '常見問題', path: '/faq/' },
  { label: '養護文章', path: '/blog/' },
  { label: '預約聯絡', path: '/contact/' },
];

export const BLOG_POSTS = [
  {
    slug: 'scalp-care-frequency',
    title: '頭皮護理多久做一次？找到適合自己的保養頻率',
    description: '頭皮護理不是越頻繁越好。了解自己的頭皮類型與生活習慣，才能找到最適合的保養間隔，讓每一次護理都發揮最大效果。',
    date: '2026-04-15',
    category: '保養知識',
    readTime: '5 分鐘',
    keywords: ['頭皮護理頻率', '多久做一次', '保養間隔'],
  },
  {
    slug: 'oily-scalp-solutions',
    title: '頭皮出油怎麼辦？從成因到日常改善完整指南',
    description: '下午就開始頭皮出油、髮根扁塌？了解頭皮出油的真正原因，從洗髮習慣到飲食調整，給你實用的日常改善建議。',
    date: '2026-04-08',
    category: '問題改善',
    readTime: '6 分鐘',
    keywords: ['頭皮出油', '油性頭皮', '頭皮護理'],
  },
  {
    slug: 'scalp-detection-guide',
    title: '頭皮檢測是什麼？專業檢測流程與注意事項',
    description: '第一次做頭皮檢測會緊張嗎？帶你了解完整的檢測流程，從諮詢到儀器分析，讓你安心認識自己的頭皮狀態。',
    date: '2026-03-28',
    category: '服務介紹',
    readTime: '4 分鐘',
    keywords: ['頭皮檢測', '頭皮分析', '新竹頭皮護理'],
  },
  {
    slug: 'dandruff-causes-treatment',
    title: '頭皮屑分成幾種？不同類型的成因與保養方式',
    description: '頭皮屑不是單一問題。乾性屑與油性屑的成因與處理方式完全不同，認識自己的頭皮屑類型，才能對症保養。',
    date: '2026-03-20',
    category: '問題改善',
    readTime: '5 分鐘',
    keywords: ['頭皮屑', '去屑', '頭皮保養'],
  },
  {
    slug: 'scalp-spa-benefits',
    title: '頭皮SPA不只是洗頭：精油按摩與舒壓療癒',
    description: '頭皮SPA結合精油按摩與頸肩舒壓，不只是清潔頭皮，更是一場從頭開始的身心放鬆體驗。了解頭皮SPA的完整內容與適合對象。',
    date: '2026-03-12',
    category: '服務介紹',
    readTime: '5 分鐘',
    keywords: ['頭皮SPA', '精油按摩', '舒壓'],
  },
  {
    slug: 'daily-scalp-care-tips',
    title: '居家頭皮保養六要點：日常習慣決定頭皮健康',
    description: '專業護理之外，日常習慣才是維持頭皮健康的關鍵。六個簡單易做的居家保養要點，讓你在生活中也能守護頭皮。',
    date: '2026-03-05',
    category: '保養知識',
    readTime: '4 分鐘',
    keywords: ['頭皮保養', '居家護理', '日常習慣'],
  },
  {
    slug: 'seasonal-hair-loss',
    title: '換季掉髮怎麼辦？季節轉換時的頭皮養護重點',
    description: '春秋季節交替時，許多人會發現掉髮量增加。了解換季掉髮的原因，以及這個時期特別需要注意的頭皮養護重點。',
    date: '2026-02-25',
    category: '保養知識',
    readTime: '5 分鐘',
    keywords: ['換季掉髮', '頭皮養護', '季節保養'],
  },
  {
    slug: 'first-time-scalp-care',
    title: '第一次做頭皮護理：新客須知與療程準備',
    description: '第一次來JSt.*做頭皮護理會發生什麼事？從預約到療程結束的完整流程說明，讓你第一次就安心享受。',
    date: '2026-02-18',
    category: '服務介紹',
    readTime: '4 分鐘',
    keywords: ['第一次', '頭皮護理', '新客'],
  },
];

export const BRAND = {
  name: 'JSt.*頭皮養護中心',
  tagline: '讓頭皮，回到最舒適的狀態',
  description: 'Scalp Care Art Center | 新竹專業頭皮養護與舒壓 SPA',
  address: '新竹市東區光復路一段 XXX 號',
  phone: '03-528-XXXX',
  phoneClean: '03528XXXX',
  email: 'hello@jst-scalp.com',
  hours: [
    { day: '週二至週六', time: '10:00 - 20:00' },
    { day: '週日', time: '10:00 - 18:00' },
    { day: '週一', time: '公休' },
  ],
  social: {
    line: 'https://lin.ee/your-line-id',
    facebook: 'https://www.facebook.com/jst.scalpcare',
    instagram: 'https://www.instagram.com/jst.scalpcare',
  },
  ogImage: 'images/hero-bg.jpg',
  url: 'https://jstscalpcare.com/',
};

export const SERVICES = [
  { id: 'detect', title: '頭皮檢測分析', duration: '30 min', desc: '高倍率專業儀器檢視頭皮油脂、角質、毛囊狀態，搭配生活習慣諮詢，了解頭皮真實需求。', image: '/images/service-detect.jpg', tags: ['首次推薦', '科學分析'] },
  { id: 'clean', title: '頭皮深層清潔', duration: '60 min', desc: '溫和胺基酸洗淨 + 角質更新護理，淨化日常堆積的油脂與髒污，讓頭皮回到清爽狀態。', image: '/images/service-clean.jpg', tags: ['清爽感', '基礎保養'] },
  { id: 'spa', title: '頭皮舒壓 SPA', duration: '90 min', desc: '精油頭部按摩 + 頸肩舒壓 + 溫感蒸氣導入，釋放累積的緊繃與壓力。', image: '/images/service-spa.jpg', tags: ['舒壓首選', '精油芳療'] },
  { id: 'care', title: '頭皮養護課程', duration: '75 min', desc: '精華液導入 + 專業養護手法 + 居家保養建議，維持健康的頭皮環境。', image: '/images/service-care.jpg', tags: ['精華導入', '持續養護'] },
  { id: 'oily', title: '油性頭皮護理', duration: '75 min', desc: '針對出油困擾，調節油脂平衡，淨化毛囊，減少因油脂堆積帶來的不適感。', image: '/images/service-problem.jpg', tags: ['調節油脂', '淨化毛囊'] },
  { id: 'dry', title: '乾癢/頭皮屑護理', duration: '75 min', desc: '溫和舒緩乾燥緊繃，補充保濕，緩解因乾燥引起的癢感與屑屑困擾。', image: '/images/service-problem.jpg', tags: ['舒緩保濕', '溫和護理'] },
];

export const PRICING = [
  { id: 'single', name: '單次體驗', price: 1280, features: ['頭皮檢測', '深層清潔護理 (60min)'], target: '首次體驗 / 偶爾保養' },
  { id: 'basic', name: '基礎養護', price: 2180, features: ['頭皮檢測', '頭皮 SPA 舒壓 (90min)', '精華導入'], target: '每月定期保養', featured: true, badge: '人氣推薦' },
  { id: 'deep', name: '深度護理', price: 3680, features: ['完整頭皮檢測 + 追蹤記錄', '客製化深層護理 (120min)', '精華導入', '居家保養組'], target: '頭皮困擾較明顯者', featured: true, badge: '完整呵護' },
];

export const ADDONS = [
  { name: '頭皮檢測單次', price: 300 },
  { name: '精華導入加強', price: 500 },
  { name: '頸肩熱敷舒壓', price: 400 },
  { name: '居家養護洗髮組', price: 1200 },
];

export const FAQ = [
  {
    category: '預約相關',
    items: [
      { q: '如何預約？', a: '可以透過 LINE、電話或官網表單預約。建議提前 3-5 天預約，以確保有位。' },
      { q: '可以臨時取消嗎？', a: '如需取消或改期，請於預約時間 24 小時前告知。當日取消將收取課程費用 50%。' },
      { q: '沒有預約可以直接去嗎？', a: '歡迎來電詢問當日空檔，但建議先預約以免久候。' },
    ],
  },
  {
    category: '療程相關',
    items: [
      { q: '第一次來需要做什麼準備？', a: '建議當天不要抓洗頭皮，不要擦造型產品，穿著舒適衣著即可。' },
      { q: '療程會痛嗎？', a: '療程以舒壓放鬆為主，手法溫和。若頭皮較敏感，請隨時告知美容師調整力道。' },
      { q: '多久做一次比較好？', a: '一般建議 2-4 週一次，依個人頭皮狀態調整。' },
      { q: '做完療程可以馬上洗頭/染髮嗎？', a: '建議療程後 24 小時內不要染燙，讓頭皮休息。' },
    ],
  },
  {
    category: '效果相關',
    items: [
      { q: '做一次就有效果嗎？', a: '首次療程後多數人會感到頭皮清爽、放鬆。但頭皮養護需要時間，建議定期保養。' },
      { q: '可以保證生髮嗎？', a: '我們專注於頭皮環境的養護與舒壓，不提供生髮保證。若有嚴重落髮問題，建議先諮詢皮膚科醫師。' },
      { q: '和看醫生有什麼不同？', a: '我們是頭皮養護與舒壓空間，非醫療機構。若有頭皮疾病，建議先就醫治療。' },
    ],
  },
  {
    category: '產品相關',
    items: [
      { q: '使用什麼產品？', a: '我們選用溫和、低刺激的專業頭皮護理產品，並依您的頭皮狀態搭配適合的系列。' },
      { q: '可以買產品回家用嗎？', a: '可以，療程後美容師會依您的頭皮狀態推薦適合的居家保養產品。' },
    ],
  },
];

export const STEPS = [
  { step: 1, title: '專業諮詢', desc: '了解生活習慣與困擾' },
  { step: 2, title: '頭皮檢測', desc: '高倍率鏡頭分析頭皮狀態' },
  { step: 3, title: '客製化護理', desc: '依檢測結果規劃專屬課程' },
  { step: 4, title: '舒壓療程', desc: '深層清潔 / 按摩 / 導入精華' },
  { step: 5, title: '居家保養建議', desc: '日常維護方式與產品推薦' },
];

export const PROBLEMS = [
  { title: '容易出油，下午就扁塌', desc: '頭皮油脂分泌旺盛，髮根缺乏支撐力' },
  { title: '頭皮緊繃，偶爾發癢', desc: '壓力或清潔不當導致頭皮敏感不適' },
  { title: '細小屑屑，穿深色衣服明顯', desc: '角質代謝異常，影響外觀與自信' },
  { title: '髮根脆弱，洗髮時掉落較多', desc: '頭皮環境失衡，髮根營養不足' },
  { title: '頭皮紅紅的，敏感不耐刺激', desc: '頭皮薄屏障受損，需要溫和修護' },
  { title: '長期染燙，頭皮乾燥緊繃', desc: '化學殘留累積，頭皮水分流失' },
];

export const KNOWLEDGE = [
  { title: '頭皮是臉皮的延伸', desc: '頭皮厚度僅次於眼周，需要同等細緻的呵護。別忘了，照顧臉的同時，頭皮也值得被溫柔對待。', icon: 'smile' },
  { title: '頭皮健康，髮質才會穩定', desc: '毛囊的生長環境直接影響髮絲狀態。健康的頭皮，是強韌亮麗髮質的根基。', icon: 'sprout' },
  { title: '定期保養勝過臨時急救', desc: '像保養肌膚一樣，頭皮也需要日常照顧。定期護理，才能維持長期的健康平衡。', icon: 'calendar' },
];

export const TIPS = [
  '水溫不超過 40°C',
  '指腹按摩，不用指甲抓洗',
  '吹髮前先用毛巾輕壓吸水',
  '定期更換枕頭套',
  '避免過度使用造型產品',
  '每月一次專業頭皮檢測',
];
