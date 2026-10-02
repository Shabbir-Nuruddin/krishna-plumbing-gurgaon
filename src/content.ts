import { pickAreas, type Feature, type Hours, type Scene, type SectionKey } from "./lib";

export const BRAND = "Krishna";
export const HOURS: Hours = null;
export const FLAP_IDLE = "";
export const SCENE: Scene = "leak";
export const VISIT_IMG = "/img/p4.jpg";
export const VISIT_ALT = "Rooftop water tanks plumbed by Krishna Plumbing Electrical Services";
export const FALLBACK_IMG = "/img/p3.jpg";
export const ORDER: SectionKey[] = ["feature", "reviews", "work", "map", "visit"];

export const PHONE = "+919871345787";
export const PHONE_DISPLAY = "98713 45787";
export const WA = "919871345787";
export const SHOP = { lat: 28.4476911, lon: 77.0947785 };
export const MAPS_URL = `https://www.google.com/maps/dir/?api=1&destination=${SHOP.lat},${SHOP.lon}`;

export const waLink = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

export const AREAS = pickAreas(["dlf5", "s43", "s54", "sl1", "dlf1", "dlf4", "s52", "s56", "s57", "mg"]);
export const DEFAULT_AREA = "s43";

/** Verbatim from Google reviews of the listing. */
export const REVIEWS = [
  "punctual and charges genuine rates",
  "Cost is good as compared to other plumber.",
  "His plumbing and electrical work is amazing with prior knowledge of the problem",
  "complete their task/work within given time",
  "ur work is very net & clean",
];

export const RATINGS = [
  { stars: 5, count: 73 },
  { stars: 4, count: 1 },
  { stars: 3, count: 0 },
  { stars: 2, count: 0 },
  { stars: 1, count: 2 },
];

export const STATUSES = ["OLD GI PIPES", "NEW CPVC LINES", "TANK VALVES", "PRESSURE GOOD"];

export const FEATURE: Feature = {
  kind: "timeline",
  layout: "rail",
  title: { en: "Rusty GI pipes out. CPVC in.", hi: "पुराने GI पाइप बाहर। CPVC अंदर।" },
  body: {
    en: "Gurugram's older houses still run on galvanised iron. One Krishna customer had the whole thing replaced, bathroom to terrace.",
    hi: "गुरुग्राम के पुराने घरों में अब भी लोहे के GI पाइप हैं। Krishna के एक ग्राहक ने बाथरूम से छत तक सब बदलवाया।",
  },
  steps: [
    { label: { en: "The old GI lines", hi: "पुरानी GI लाइन" }, body: { en: "The galvanised pipes many older Gurugram homes still run on.", hi: "लोहे के पाइप, जिन पर कई पुराने घर अब भी चलते हैं।" }, img: "/img/p3.jpg" },
    { label: { en: "Bathroom first", hi: "पहले बाथरूम" }, body: { en: "New CPVC lines through the bathroom.", hi: "बाथरूम में नई CPVC लाइन।" }, img: "/img/p5.jpg" },
    { label: { en: "Up to the terrace", hi: "फिर छत तक" }, body: { en: "Overhead tank valves and terrace lines replaced.", hi: "ओवरहेड टंकी के वाल्व और छत की लाइन बदली।" }, img: "/img/p4.jpg" },
    { label: { en: "Water back on", hi: "पानी फिर चालू" }, body: { en: "“Transition to the new pipelines was flawlessly,” the customer wrote.", hi: "ग्राहक के अनुसार नई लाइन पर बदलाव बिना दिक़्क़त के हुआ।" }, img: "/img/p6.jpg" },
  ],
  quote: "We switched form GI to CPVC for the my bathroom and entire terrace including over head water tank valves. Transition to the new pipelines was flawlessly.",
};

const en = {
  banner: "Concept preview made for Krishna Plumbing Electrical Services by LocalLift. Not live yet.",
  brandSub: "Plumbing and electrical, DLF Phase 5",
  live: "Plumbing and electrical, 24 hours",
  shopLabel: "Krishna, DLF Phase 5",
  call: "Call Krishna",
  callShort: "Call Krishna",
  whatsapp: "WhatsApp",
  waHello: "Hi Krishna ji, I need plumbing / electrical work.",
  heroTitle: ["On time.", "At a genuine rate."],
  heroProof: "4.9 stars from 76 Google reviews. DLF Phase 5, Sector 42. Open 24 hours.",
  drag: "Drag to turn the pipe",
  beats: [
    { title: "He knows before he opens it.", body: "Plumbing and electrical from the same number.", quote: REVIEWS[2] },
    { title: "Finished when he said.", body: "Punctuality is the single thing customers mention most.", quote: REVIEWS[3] },
    { title: "Charged what's fair.", body: "'Genuine rates' comes up again and again.", quote: REVIEWS[0] },
  ],
  googleReview: "Google review",
  distTitle: "How far is Krishna?",
  distBody: "Pick your area. Straight-line distance from DLF Phase 5, Sector 42.",
  distUnit: "km from Phase 5",
  distAsk: "Ask on WhatsApp",
  distWa: (area: string) => `Hi Krishna ji, I'm in ${area}. When can you come?`,
  workTitle: "Shafts, roofs, bathrooms, switches.",
  workBody: "Every photo here is from Krishna's own Google listing.",
  services: [
    { img: "/img/p3.jpg", title: "Pipe stacks and shafts", body: "Vertical lines in building shafts, re-piped." },
    { img: "/img/p4.jpg", title: "Rooftop tanks", body: "Tank connections, valves and overflow lines." },
    { img: "/img/p5.jpg", title: "Bathroom renovation", body: "Wall-hung WC and concealed lines." },
    { img: "/img/p2.jpg", title: "Sink and kitchen lines", body: "Under-sink leaks and connections." },
    { img: "/img/p1.jpg", title: "Electrical work", body: "Switches, sockets and fittings." },
  ],
  revTitle: "76 reviews. 73 of them five stars.",
  revTags: "What customers mention most on Google",
  tags: [
    { label: "Punctuality", n: 15 },
    { label: "Behaviour", n: 12 },
    { label: "Genuine rates", n: 10 },
    { label: "Cost", n: 8 },
  ],
  stars: "stars",
  visitTitle: "In DLF Phase 5.",
  address: "DLF Phase 5, Sector 42, Gurugram",
  hours: "Open 24 hours, 7 days",
  pay: "",
  directions: "Directions",
  footer: "Concept by LocalLift for Krishna Plumbing Electrical Services, Gurugram. Photos and reviews from the business's Google listing.",
  langLabel: "Language",
};

const hi: typeof en = {
  banner: "यह LocalLift द्वारा कृष्णा प्लंबिंग इलेक्ट्रिकल सर्विसेज़ के लिए बनाया गया डेमो है। अभी लाइव नहीं है।",
  brandSub: "प्लंबिंग और इलेक्ट्रिकल, DLF फ़ेज़ 5",
  live: "प्लंबिंग और इलेक्ट्रिकल, 24 घंटे",
  shopLabel: "कृष्णा, DLF फ़ेज़ 5",
  call: "कृष्णा जी को कॉल करें",
  callShort: "कॉल करें",
  whatsapp: "व्हाट्सऐप",
  waHello: "नमस्ते कृष्णा जी, मुझे प्लंबिंग / बिजली का काम है।",
  heroTitle: ["समय पर।", "सही दाम पर।"],
  heroProof: "76 गूगल रिव्यू में 4.9 स्टार। DLF फ़ेज़ 5, सेक्टर 42। 24 घंटे खुला।",
  drag: "पाइप घुमाने के लिए खींचें",
  beats: [
    { title: "खोलने से पहले समझ जाते हैं।", body: "प्लंबिंग और बिजली, एक ही नंबर पर।", quote: REVIEWS[2] },
    { title: "जो समय कहा, उसमें पूरा।", body: "ग्राहक सबसे ज़्यादा समय की पाबंदी लिखते हैं।", quote: REVIEWS[3] },
    { title: "जायज़ दाम।", body: "'सही रेट' की बात बार बार आती है।", quote: REVIEWS[0] },
  ],
  googleReview: "गूगल रिव्यू",
  distTitle: "कृष्णा जी कितनी दूर हैं?",
  distBody: "अपना इलाका चुनें। DLF फ़ेज़ 5, सेक्टर 42 से सीधी दूरी।",
  distUnit: "किमी फ़ेज़ 5 से",
  distAsk: "व्हाट्सऐप पर पूछें",
  distWa: (area: string) => `नमस्ते कृष्णा जी, मैं ${area} में हूँ। आप कब आ सकते हैं?`,
  workTitle: "शाफ़्ट, छत, बाथरूम, स्विच।",
  workBody: "यहाँ की हर फ़ोटो कृष्णा जी की अपनी गूगल लिस्टिंग से है।",
  services: [
    { img: "/img/p3.jpg", title: "पाइप स्टैक और शाफ़्ट", body: "बिल्डिंग शाफ़्ट की खड़ी लाइन, नई पाइपिंग।" },
    { img: "/img/p4.jpg", title: "छत की टंकी", body: "टंकी के कनेक्शन, वाल्व और ओवरफ़्लो।" },
    { img: "/img/p5.jpg", title: "बाथरूम रेनोवेशन", body: "वॉल-हंग WC और कंसील्ड लाइन।" },
    { img: "/img/p2.jpg", title: "सिंक और किचन लाइन", body: "सिंक के नीचे की लीकेज और कनेक्शन।" },
    { img: "/img/p1.jpg", title: "बिजली का काम", body: "स्विच, सॉकेट और फ़िटिंग।" },
  ],
  revTitle: "76 रिव्यू। 73 पाँच स्टार।",
  revTags: "गूगल पर ग्राहक सबसे ज़्यादा क्या लिखते हैं",
  tags: [
    { label: "समय की पाबंदी", n: 15 },
    { label: "व्यवहार", n: 12 },
    { label: "सही रेट", n: 10 },
    { label: "क़ीमत", n: 8 },
  ],
  stars: "स्टार",
  visitTitle: "DLF फ़ेज़ 5 में।",
  address: "DLF फ़ेज़ 5, सेक्टर 42, गुरुग्राम",
  hours: "24 घंटे, सातों दिन खुला",
  pay: "",
  directions: "रास्ता देखें",
  footer: "LocalLift द्वारा कृष्णा प्लंबिंग इलेक्ट्रिकल सर्विसेज़, गुरुग्राम के लिए कॉन्सेप्ट। फ़ोटो और रिव्यू गूगल लिस्टिंग से।",
  langLabel: "भाषा",
};

export const COPY = { en, hi };
