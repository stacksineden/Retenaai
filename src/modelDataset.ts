import interbro from "./resources/RetenaAI AI SYSTEM INTEGRATION CURRICULUM.pdf";
import strbro from "./resources/RetenaAI AI AI STRATEGY AND CONSULTING CURRICULUM.pdf";

export const flux_styles_data = [
  {
    title: "Ultra Realistic Style",
    text: "CR2 is a common file format for ultra-realistic raw camera images.",
    images: [
      "/assets/psedo-generations/flux1.1-ultra-realistic.webp",
      "/assets/psedo-generations/flux1.1-ultra-realistic1.webp",
    ],
    query_slug: "flux-ultra-realistic",
    url: "/generations?mode=flux-ultra-realistic",
    credit_fee: 4,
  },
  {
    title: "Embed text",
    text: "Add Keywords and variability to your outputs.",
    images: ["/assets/psedo-generations/embed-text-flux.webp"],
    query_slug: "embed_text_flux",
    url: "/generations?mode=embed_text_flux",
    credit_fee: 4,
  },
  {
    title: "Flux Half Illustration",
    text: "A flux lora creates half photo half illustrated elements.",
    images: ["/assets/psedo-generations/tok-style.jpg"],
    query_slug: "tok-style",
    url: "/generations/flux/lora?mode=tok-style",
    credit_fee: 2,
  },
  {
    title: "Flux Ghibsky Illustration",
    text: "Flux Ghibsky Illustration lora, use GHIBSKY style to trigger image generation.",
    images: ["/assets/psedo-generations/chibsky-style.jpg"],
    query_slug: "ghibsky-style",
    url: "/generations/flux/lora?mode=ghibsky-style",
    credit_fee: 2,
  },
  {
    title: "Video Game Style",
    text: "Get really good low-poly video game outputs.",
    images: ["/assets/psedo-generations/video-game-style.webp"],
    query_slug: "video_game_style",
    url: "/generations?mode=video_game_style",
    credit_fee: 2,
  },
  {
    title: "Flux cinestill Illustration",
    text: "Flux Cinestill Illustration lora, use CNSTLL style to trigger image generation.",
    images: ["/assets/psedo-generations/cnstill-style.jpg"],
    query_slug: "cnstill-style",
    url: "/generations/flux/lora?mode=cnstill-style",
    credit_fee: 2,
  },
  // {
  //   title: "Flux cinestill Illustration",
  //   text: "Flux Cinestill Illustration lora, use CNSTLL style to trigger image generation.",
  //   images: ["/assets/psedo-generations/cnstill-style.jpg"],
  //   query_slug: "flux1.1-pro",
  //   credit_fee:1
  // },
];

export const mini_apps_data = [
  {
    title: "Flux 1.1 Ultra AI Image Generator",
    text: "Create ultra-detailed images in both ultra and raw modes. Capture up to 4MP for clarity, and select raw mode for unmatched realism.",
    images: ["/assets/psedo-generations/flux1.1ultra1.png"],
    query_slug: "flux1.1-ultra",
    url: "/generations/flux?mode=flux1.1-ultra",
    credit_fee: 5,
  },
  {
    title: "Flux 1.1Pro AI Image Generator",
    text: "Create stunning, high-quality images with the power of the most advanced AI model.",
    images: ["/assets/psedo-generations/flux1.1pro1.webp"],
    query_slug: "flux1.1-pro",
    url: "/generations/flux?mode=flux1.1-pro",
    credit_fee: 5,
  },
  {
    title: "Flux-dev Realism",
    text: "Embark on a journey through AI-generated masterpieces.",
    images: ["/assets/psedo-generations/flux-dev-realism.webp"],
    query_slug: "flux-dev-realism",
    url: "/generations/flux?mode=flux-dev-realism",
    credit_fee: 2,
  },
  {
    title: "Photo Upscaling",
    text: "Make your blurry, low-quality photos clear and beautiful.",
    images: ["/assets/psedo-generations/upscaler.webp"],
    query_slug: "photo-upscaling",
    url: "/generations/photo-upscaling",
    credit_fee: 2,
  },
  {
    title: "Background Remover",
    text: "Easily remove backgrounds from your photos with precision using advanced AI tools.",
    images: ["/assets/psedo-generations/bg-remover.png"],
    query_slug: "bg-remover",
    url: "/generations/bg-remover",
    credit_fee: 1,
  },
  // {
  //   title: "Image generation with DALL.E-3",
  //   text: "Easily remove backgrounds from your photos with precision using advanced AI tools.",
  //   images: ["/assets/psedo-generations/dalle3.webp"],
  //   query_slug: "dalle3",
  //   url: "/generations/flux?mode=dalle3",
  //   credit_fee: 2,
  // },
];

export const photo_shoot_ideas_data = [
  {
    title: "Night life",
    text: "Take photos in cocktail bars, nightclubs, and nightlife venues, showcasing stylish outfits. Capture the vibrant nightlife while experimenting with dynamic looks. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "night_life",
    is_trending: false,
    images: [
      "/assets/psedo-generations/night_life_shoot1.webp",
      "/assets/psedo-generations/night_life_shoot2.png",
      "/assets/psedo-generations/night_life_shoot3.png",
      "/assets/psedo-generations/night_life_shoot4.png",
    ],
  },
  {
    title: "Travel Photoshoot",
    text: "Travel the world and capture stunning photos from Paris to Tokyo. Showcase your global adventures with vibrant images of iconic cities and diverse cultures. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "travel_photoshoot",
    is_trending: false,
    images: [
      "/assets/psedo-generations/travel1.webp",
      "/assets/psedo-generations/travel2.png",
      "/assets/psedo-generations/travel3.png",
      "/assets/psedo-generations/travel4.png",
    ],
  },
  {
    title: "A Night in Las Vagas",
    text: "Experience a thrilling night in Las Vegas, from dazzling casinos and the vibrant Strip to lively dive bars and nightclubs. Capture the essence of this iconic nightlife destination. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "night_vagas",
    is_trending: false,
    images: [
      "/assets/psedo-generations/vagas1.webp",
      "/assets/psedo-generations/vagas2.png",
      "/assets/psedo-generations/vagas3.png",
      "/assets/psedo-generations/vagas4.png",
    ],
  },
  {
    title: "Keynote speakers",
    text: "Capture compelling photos of yourself speaking with authority on stage at a conference. Showcase your leadership and confidence in powerful, professional moments. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "keynote_speakers",
    is_trending: false,
    images: [
      "/assets/psedo-generations/speaker1.webp",
      "/assets/psedo-generations/speaker2.png",
      "/assets/psedo-generations/speaker3.png",
      "/assets/psedo-generations/speaker4.png",
    ],
  },
  {
    title: "Fitness Photoshoot",
    text: "Showcase your hard work and dedication with our fitness photo shoot. Capture your journey with powerful, motivating images that highlight your progress and achievements. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "fitness_photoshoot",
    is_trending: false,
    images: [
      "/assets/psedo-generations/fitness1.png",
      "/assets/psedo-generations/fitness2.png",
      "/assets/psedo-generations/fitness3.png",
      "/assets/psedo-generations/fitness4.png",
    ],
  },
  {
    title: "Polaroid",
    text: "Capture polaroid photographs with a classic analog camera for a vintage, timeless look. Create authentic, nostalgic moments that stand out in a digital age. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "polaroid",
    is_trending: false,
    images: [
      "/assets/psedo-generations/polaroid1.webp",
      "/assets/psedo-generations/polaroid2.png",
      "/assets/psedo-generations/polaroid3.png",
      "/assets/psedo-generations/polaroid4.png",
    ],
  },
  {
    title: "Digital Nomad",
    text: "Transform into a digital nomad, living and working remotely from anywhere in the world. This official pack by Nomads.com™ captures the essence of the nomadic lifestyle, showcasing dynamic locations, workspaces, and the freedom to work on your own terms while exploring the globe. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "digital_nomad",
    is_trending: false,
    images: [
      "/assets/psedo-generations/nomad1.webp",
      "/assets/psedo-generations/nomad2.png",
      "/assets/psedo-generations/nomad3.png",
      "/assets/psedo-generations/nomad4.png",
    ],
  },
  {
    title: "Cyberpunk Photoshoot",
    text: "Explore a futuristic catalog of digital clothes inspired by Vaporwave and Cyberpunk aesthetics. Try on cutting-edge styles with vibrant colors and neon details for a modern, edgy look. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "cyberpunk",
    is_trending: false,
    images: [
      "/assets/psedo-generations/cyberpunk1.png",
      "/assets/psedo-generations/cyberpunk2.png",
      "/assets/psedo-generations/cyberpunk3.png",
      "/assets/psedo-generations/cyberpunk4.png",
    ],
  },
  {
    title: "Berlin Nightlife",
    text: "Dive into Berlin's underground techno club scene, from dimly lit basements to neon-lit dance floors, where the party continues past sunrise. Capture the gritty, electrifying essence of this nightlife. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "berlin_nightlife",
    is_trending: false,
    images: [
      "/assets/psedo-generations/berlin1.webp",
      "/assets/psedo-generations/berlin2.png",
      "/assets/psedo-generations/berlin3.png",
      "/assets/psedo-generations/berlin4.png",
    ],
  },
  {
    title: "Swimsuits",
    text: "Capture stunning swimsuit photos with ease and style. Highlight your confidence and elegance in beautiful, flattering beach images. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "swimsuits",
    is_trending: false,
    images: [
      "/assets/psedo-generations/swimsuit1.webp",
      "/assets/psedo-generations/swimsuit2.png",
      "/assets/psedo-generations/swimsuit3.png",
      "/assets/psedo-generations/swimsuit4.png",
    ],
  },
  {
    title: "Fitness Influencer shoot",
    text: "Showcase your power and strength by capturing your muscular physique and dedication to fitness. Highlight your commitment to building an extraordinary body with dynamic, impressive images. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "fitness_influencer_shot",
    is_trending: false,
    images: [
      "/assets/psedo-generations/influencer1.png",
      "/assets/psedo-generations/influencer2.png",
      "/assets/psedo-generations/influencer3.png",
      "/assets/psedo-generations/influencer4.png",
    ],
  },
  {
    title: "Nature photoshoot",
    text: "model outside in nature in forest or jungle or a field of wheat enjoying the natural world",
    query_slug: "nature",
    is_trending: false,
    images: [
      "/assets/psedo-generations/nature1.png",
      "/assets/psedo-generations/nature2.png",
      "/assets/psedo-generations/nature3.png",
      "/assets/psedo-generations/nature4.png",
    ],
  },
  {
    title: "Music Festival",
    text: "Capture the beauty and harmony of nature as you immerse yourself in serene forests, majestic mountains, lush jungles, and more, creating a profound connection with the natural world. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "music_festival",
    is_trending: false,
    images: [
      "/assets/psedo-generations/music1.webp",
      "/assets/psedo-generations/music2.png",
      "/assets/psedo-generations/music3.png",
      "/assets/psedo-generations/music4.png",
    ],
  },
  {
    title: "Professional Headshoot",
    text: "Get a polished, professional look with AI headshots perfect for LinkedIn. Stand out, increase visibility, and attract job offers with a strong first impression. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "professional_headshoot",
    is_trending: true,
    images: [
      "/assets/psedo-generations/pro-headshhot1.webp",
      "/assets/psedo-generations/pro-headshhot2.png",
      "/assets/psedo-generations/pro-headshhot3.png",
      "/assets/psedo-generations/pro-headshhot4.png",
    ],
  },
  {
    title: "Y2K Aesthetic Photoshoot",
    text: "Transform yourself into the Y2K aesthetic, also known as Kaybug or Cybercore, a style that dominated pop culture from 1997 to 2004. See how you'd look in this nostalgic, futuristic era. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "y2k_asthetic",
    is_trending: false,
    images: [
      "/assets/psedo-generations/y2k1.webp",
      "/assets/psedo-generations/y2k2.png",
      "/assets/psedo-generations/y2k3.png",
      "/assets/psedo-generations/y2k4.png",
    ],
  },
  {
    title: "Christmas Photoshoot",
    text: "Capture the magic of the holiday season with our enchanting Christmas photoshoots! Whether you’re looking to create cherished memories with family, showcase festive outfits, or send personalized holiday cards, our AI-generated images will bring your vision to life. Enjoy a unique and joyful experience that perfectly reflects the spirit of Christmas. Create stunning visuals that you can treasure for years to come!",
    query_slug: "xmas_shoot",
    is_trending: true,
    images: [
      "/assets/psedo-generations/xmashoot1.webp",
      "/assets/psedo-generations/xmashoot2.webp",
      "/assets/psedo-generations/xmashoot3.webp",
      "/assets/psedo-generations/xmashoot4.webp",
    ],
  },
  {
    title: "Instagram",
    text: "Capture engaging, visually stunning photos that showcase your personality as an Instagram influencer. Boost your confidence, likes, and followers with captivating images that reflect your unique style and charisma. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "instagram",
    is_trending: true,
    images: [
      "/assets/psedo-generations/instagram1.png",
      "/assets/psedo-generations/instagram2.jpeg",
      "/assets/psedo-generations/instagram3.png",
      "/assets/psedo-generations/instagram4.png",
    ],
  },
  {
    title: "Makeup Try-On",
    text: "Experiment with countless makeup ideas using AI, without applying anything in real life. Discover the makeup that best suits your face. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "make_up",
    is_trending: false,
    images: [
      "/assets/psedo-generations/makeup1.webp",
      "/assets/psedo-generations/makeup2.png",
      "/assets/psedo-generations/makeup3.png",
      "/assets/psedo-generations/makeup4.png",
    ],
  },
  {
    title: "Retro 1950s Diner Photoshoot",
    text: "Do a pin-up inspired photo shoot in a 1950s diner, featuring pancakes, milkshakes, and cheeseburgers for a classic retro vibe. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "retro_diner",
    is_trending: false,
    images: [
      "/assets/psedo-generations/diner1.webp",
      "/assets/psedo-generations/diner2.png",
      "/assets/psedo-generations/diner3.png",
      "/assets/psedo-generations/diner4.png",
    ],
  },
  {
    title: "Pink fever",
    text: "Generate images of yourself in different styles and transform into a pink blonde doll. Embrace bold, vibrant pink themes for eye-catching, unique looks. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "pink_fever",
    is_trending: false,
    images: [
      "/assets/psedo-generations/pink1.webp",
      "/assets/psedo-generations/pink2.png",
      "/assets/psedo-generations/pink3.png",
      "/assets/psedo-generations/pink4.jpeg",
    ],
  },
  {
    title: "Latex",
    text: "Try on premium latex and leather dresses, lingerie, and fashion. Experience bold, high-end styles that make a statement with sleek, edgy designs. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "latex",
    is_trending: false,
    images: [
      "/assets/psedo-generations/latex1.webp",
      "/assets/psedo-generations/latex2.jpeg",
      "/assets/psedo-generations/latex3.png",
      "/assets/psedo-generations/latex4.jpeg",
    ],
  },
  {
    title: "Korean profile photo",
    text: "Curious how you'd look as a Korean K-Pop idol? We'll transform you into one, styled in the latest Seoul fashion for a striking, glamorous appearance. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "korean_dp",
    is_trending: false,
    images: [
      "/assets/psedo-generations/korean1.webp",
      "/assets/psedo-generations/korean2.png",
      "/assets/psedo-generations/korean3.png",
      "/assets/psedo-generations/korean4.png",
    ],
  },
  {
    title: "Cosplay photoshoot",
    text: "Capture exciting, visually stunning photos that showcase your unique cosplay characters. Bring your favorite characters to life with dynamic, high-quality images. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "cosplay",
    is_trending: false,
    images: [
      "/assets/psedo-generations/cosplay1.webp",
      "/assets/psedo-generations/cosplay2.png",
      "/assets/psedo-generations/cosplay3.png",
      "/assets/psedo-generations/cosplay4.png",
    ],
  },
  {
    title: "High Fashion Studio",
    text: "Step into the world of high fashion with our exclusive studio photoshoots! Designed for trendsetters and style enthusiasts, our AI-generated imagery captures the essence of contemporary fashion in striking detail. Showcase your unique style, express your creativity, and elevate your portfolio with stunning visuals that stand out. Perfect for models, designers, and anyone wanting to make a bold statement in the fashion scene!",
    query_slug: "high_fashion",
    is_trending: true,
    images: [
      "/assets/psedo-generations/studio1.png",
      "/assets/psedo-generations/studio2.webp",
      "/assets/psedo-generations/studio3.webp",
      "/assets/psedo-generations/studio4.webp",
    ],
  },
  {
    title: "Mobster photoshoot",
    text: "Transform into a classic mobster, wearing sharp tailored suits, stylish fedoras, and bold, flashy jewelry. Channel the timeless swagger and power of the underworld with this iconic look. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "mobster",
    is_trending: false,
    images: [
      "/assets/psedo-generations/mobster1.webp",
      "/assets/psedo-generations/mobster2.png",
      "/assets/psedo-generations/mobster3.png",
      "/assets/psedo-generations/mobster4.png",
    ],
  },
  {
    title: "Street Photography",
    text: "Capture trendy outfits in vibrant city streets with dynamic urban backdrops that highlight your style. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "street_photography",
    is_trending: false,
    images: [
      "/assets/psedo-generations/street-photo1.webp",
      "/assets/psedo-generations/street-photo2.png",
      "/assets/psedo-generations/street-photo3.png",
      "/assets/psedo-generations/street-photo4.png",
    ],
  },
  {
    title: "Sexy Xmas",
    text: "Embrace the festive spirit with a seductive twist by transforming into captivating Christmas characters. Blend holiday cheer with enchanting styles for a unique, festive look. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "xmas_photoshoot",
    is_trending: false,
    images: [
      "/assets/psedo-generations/xmas1.png",
      "/assets/psedo-generations/xmas2.png",
      "/assets/psedo-generations/xmas3.webp",
      "/assets/psedo-generations/xmas4.png",
    ],
  },
  {
    title: "Selfies",
    text: "Create AI-generated selfies that capture your best angles and expressions. Personalize your look with unique styles and settings, ensuring perfect selfies every time without the hassle. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "selfies",
    is_trending: false,
    images: [
      "/assets/psedo-generations/selfies1.png",
      "/assets/psedo-generations/selfies2.png",
      "/assets/psedo-generations/selfies3.png",
      "/assets/psedo-generations/selfies4.png",
    ],
  },
  {
    title: "Try on Cloths",
    text: "Explore a catalog of outfits and try on different styles to see what suits you best. Use AI to visualize how various clothes look on you before making a choice. First, create an AI model of yourself, then take AI photos with it!",
    query_slug: "try_cloths",
    is_trending: true,
    images: [
      "/assets/psedo-generations/fashion1.webp",
      "/assets/psedo-generations/fashion2.png",
      "/assets/psedo-generations/fashion3.png",
      "/assets/psedo-generations/fashion4.png",
    ],
  },
];

export const photo_shoot_ideas_options = [
  { name: "Professional Headshoot", value: "professional_headshoot" },
  { name: "Street Photography", value: "street_photography" },
  { name: "Night life", value: "night_life" },
  { name: "Travel Photoshoot", value: "travel_photoshoot" },
  { name: "Instagram", value: "instagram" },
  { name: "A Night in Las Vagas", value: "a_night_in_las_vagas" },
  { name: "Keynote speakers", value: "keynote_speakers" },
  { name: "Sexy Xmas", value: "sexy_xmas" },
  { name: "Fitness Photoshoot", value: "fitness_photoshoot" },
  { name: "Polaroid", value: "polaroid" },
  { name: "Digital Nomad", value: "digital_nomad" },
  { name: "Cyberpunk Photoshoot", value: "cyberpunk_photoshoot" },
  { name: "Berlin Nightlife", value: "berlin_nightlife" },
  { name: "Try on Cloths", value: "try_on_cloths" },
  { name: "Swimsuits", value: "swimsuits" },
  { name: "Fitness Influencer shoot", value: "fitness_influencer_shoot" },
  { name: "Nature photoshoot", value: "nature_photoshoot" },
  { name: "Music Festival", value: "music_festival" },
  { name: "Y2K Aesthetic Photoshoot", value: "y2k_aesthetic_photoshoot" },
  { name: "Makeup Try-On", value: "makeup_try_on" },
  { name: "Christmas Photoshoot", value: "xmas_shoot" },
  { name: "High Fashion Studio", value: "high_fashion" },
  {
    name: "Retro 1950s Diner Photoshoot",
    value: "retro_1950s_diner_photoshoot",
  },
  { name: "Pink fever", value: "pink_fever" },
  { name: "Latex", value: "latex" },
  { name: "Korean profile photo", value: "korean_profile_photo" },
  { name: "Cosplay photoshoot", value: "cosplay_photoshoot" },
  { name: "Mobster photoshoot", value: "mobster_photoshoot" },
  { name: "Selfies", value: "selfies" },
];

export const photoshoot_plans = [
  {
    id: "1",
    plan: "Pro Studio Plan",
    feature: [
      "30 high-quality, professional-grade product images",
      "200 image generation credits for unmatched creativity",
      "Image upscales/variations",
      "First-priority rendering speed for faster project completion",
      "Choose from an unlimited range of customizable templates",
      "Affordable and budget-friendly option for all creators",
    ],
    base_price: "35",
    price_in_naira: "54500",
    discount_base_price: "7",
    dicount_price_in_naira: "6600",
    is_promo: false,
  },
  // {
  //   id: "2",
  //   plan: "Standard Professional Package",
  //   feature: [
  //     "Perfect for casual and everyday shoots",
  //     "Choose more than 1 photoshoot style",
  //     "Includes 15 high-quality, AI-generated photos",
  //     "Complimentary revisions if images do not meet expectations.",
  //     "Free Photo Upscaling for images",
  //     "1-hour processing time",
  //   ],
  //   base_price: "18",
  //   price_in_naira: "32000",
  //   discount_base_price: "8",
  //   dicount_price_in_naira: "13000",
  //   is_promo: false,
  // },
  // {
  //   id: "3",
  //   plan: "Premium Professional Package",
  //   feature: [
  //     "Perfect for brands, social media influencers, and models",
  //     "Choose more than 1 photoshoot style",
  //     "Up to 30 professionally retouched photos",
  //     "Complimentary revisions if images do not meet expectations.",
  //     "Priority access",
  //     "Free Photo Upscaling for images",
  //     "30-min processing time",
  //   ],
  //   base_price: "29",
  //   price_in_naira: "51500",
  //   discount_base_price: "10",
  //   dicount_price_in_naira: "16000",
  //   is_promo: false,
  // },
];

export const photo_credits_plan = [
  {
    id: "1",
    plan: "Basic",
    feature: [
      "200 credits",
      "Includes high-quality, AI-generated photos",
      "Instant photo generations",
    ],
    base_price: "4",
    price_in_naira: "6000",
    credits: 200,
  },
  {
    id: "2",
    plan: "Pro",
    feature: [
      "800 credits",
      "Includes high-quality, AI-generated photos",
      "Instant photo generations",
      "Priority access",
    ],
    base_price: "14",
    price_in_naira: "22000",
    credits: 800,
  },
  {
    id: "3",
    plan: "Max",
    feature: [
      "1500 credits",
      "Includes high-quality, AI-generated photos",
      "Instant photo generations",
      "Priority access",
      "Free Photo Upscaling for images",
    ],
    base_price: "18",
    price_in_naira: "29000",
    credits: 1500,
  },
];

export const ratios = [
  { label: "2:3", width: "w-4", height: "h-6" },
  { label: "3:2", width: "w-6", height: "h-4" },
  { label: "1:1", width: "w-6", height: "h-6" },
  { label: "16:9", width: "w-6", height: "h-[13.5px]" },
  { label: "21:9", width: "w-6", height: "h-[10.3px]" },
  { label: "9:16", width: "w-[13.5px]", height: "h-6" },
  { label: "9:21", width: "w-[10.24px]", height: "h-6" },
  { label: "4:5", width: "w-[19.2px]", height: "h-6" },
  { label: "5:4", width: "w-6", height: "h-[19.2px]" },
  { label: "3:4", width: "w-[18px]", height: "h-6" },
  { label: "4:3", width: "w-6", height: "h-[18px]" },
];

export const credit_charge = {
  FLUXPROCREDIT: 5,
  FLUXDEVREALISM: 2,
  IMAGEUPSCALING: 1,
};

export const prompt_factory_photoshot = [
  {
    category: "Nightlife",
    propmts: [
      "a young african american woman in a yellow sweater and headband pointing up, inspired by Chinwe Chukwuogo-Roy, trending on shutterstock, african american young woman, black young woman, yellow clothes, photo of a black woman, beautiful yellow woman, young black woman",
      "a young woman in a checkered skirt and black sweater posing for the camera, Nicolette Macnamara, a character portrait, behance, realistic portrait photography, editorial portrait, clothed non - nude portrait, perdita weeks!, colour portrait photograph, studio portrait, feminine portrait, portrait girl",
      "a woman sitting on a wooden stool with her legs crossed and her hands on her, Natasha Tan, seated on wooden chair, very beautiful long slim legs, beautiful slim legs, woman model, seductive seated pose, sitting on a stool",
      "a woman in a red dress posing in front of a chair and a dark background, by Alexey Merinov, a portrait, art photography, featured on cg society, young sexy elegant woman, dressed in velvet, elegant woman, woman in dress, sophisticated young woman, fashion portrait photo",
      "an african american woman sitting at a table with her hand on her chin, a portrait, trending on unsplash, african american young woman, young black woman, photo of a black woman, photo in style of tyler mitchell, young business woman, portrait featured on unsplash",
      "a black and white photo of a woman in a black hat with her hair blowing, by Ju Chao, a character portrait, behance, fashion portrait photo, fashion photography portrait, sensual gloomy style, dark portrait, fashion portrait, side portrait dark witch, emotive portrait",
      "a woman with an afro wearing a red jacket and yellow pants standing in front, a portrait, afrofuturism, featured on unsplash, afro hair, afro, afro futuristic, long afro hair, photo of a black woman, big afro, black young woman",
      "model at a pop-up food market at night, combining the love for street food with nightlife",
      "model wearing mini skirt  in night club with neon lights",
      "model , fit body in floral silk  swim shorts and shirtless at cocktail bar with neon lights",
      "model wearing  smart casual in night club with neon lights",
      "model wearing   black suit in a VIP box at a sporting event at night, capturing the thrill of live sports with nightlife",
      "model wearing skimpy cut out dress  at an exclusive yacht party sunset, capturing the essence of luxury and opulence",
      "model at a pop-up food market at night, combining the love for street food with nightlife",
      "model wearing (red bodycon dress) with (black suspenders garter straps)  in night club neon lights",
      "model wearing black cut out dress   in a VIP box at a sporting event at night, capturing the thrill of live sports with nightlife",
      "model , fit body in floral silk  swim shorts and shirtless at cocktail bar with neon lights",
      "model wearing skimpy cut out dress  at an exclusive yacht party sunset, capturing the essence of luxury and opulence",
      "a model wearing  silk floral swim shorts in night club, instagram photo, instagram, , fit body",
      "model wearing  smart casual in night club with neon lights",
      "A photo of rike in a vibrant nightclub scene with a diverse crowd, centered on a striking young woman with olive skin, deep brown eyes, and long curly black hair. She wears a shimmering silver dress, her expression a mix of excitement and confidence. She stands near a sleek, modern bar, the neon lights casting a soft blue and pink glow on her face. The background is a blur of dancing silhouettes and pulsating lights, with a low-key, warm ambient light from overhead spots. The scene is inspired by the visual style of director Christopher Nolan, with a high-contrast, slightly desaturated color grading, and subtle film grain adding to the gritty, urban atmosphere.",
      "headshot:8k professional headshot of rike a female, crisp details, studio backdrop, executive attire, confident posture, neutral expression, high-definition, corporate setting, sharp focus, ambient lighting, business professional, cityscape view",
      "A young woman with fair skin and blue eyes, dressed in a stylish winter coat and fur hat, stands in front of the majestic Kremlin in Moscow. Her expression is one of awe and wonder as she gazes up at the iconic red walls and golden domes. The scene is bathed in the soft, warm light of a late afternoon sun, casting long shadows and creating a golden glow that highlights the intricate details of the Kremlin's architecture. The background is crisp and clear, with a slight film grain adding a nostalgic touch. The color grading enhances the warm tones, giving the image a timeless and romantic feel, reminiscent of a classic film by Sergei Eisenstein.",
      "A photo of rike standing on a cobblestone street in Paris, the Eiffel Tower looming behind her. She wears a vintage blue dress, her straight white hair cascading down her back. Her expression is a mix of curiosity and joy, as she gazes up at the iconic tower. The scene is bathed in warm golden hour light, with soft shadows creating a gentle contrast. The background is slightly blurred, emphasizing her as the focal point. The image has a vintage film look, with subtle grain and a warm color grade, reminiscent of a Wes Anderson film.",
      "a photo of rike as a female in Dubai with skyline in background",
      "a photo of rike in a bikini as a female in Dubai with skyline in background",
      "A photo of rike as a model in swimsuit  underwater, showcasing athletic ability",
    ],
  },
  {
    category: "Virtual Try On Clothes",
    propmts: [
      "model wearing  cream hoodie in try on fashion shoot for Zara Shein H&M",
      "model wearing cropped cream hoodie  in try on fashion shoot for Zara Shein H&M",
      "model wearing  floral silk shirt in try on fashion shoot for Zara Shein H&M",
      "model wearing  nightclub outfit in try on fashion shoot for Zara Shein H&M",
      "model wearing t-shirt and pants in try on fashion shoot for Zara Shein H&M",
      "model wearing crop top and short pleated skirt  in try on fashion shoot for Zara Shein H&M",
      "model wearing  white collar shirt in try on fashion shoot for Zara Shein H&M",
      "model wearing white collar shirt in try on fashion shoot for Zara Shein H&M",
      "model wearing bodycon dress  in try on fashion shoot for Zara Shein H&M",
      "model wearing navy colopink pants suit  in try on fashion shoot for Zara Shein H&M",
      "model wearing  t-shirt and gym shorts in try on fashion shoot for Zara Shein H&M",
      "model wearing navy colopink pants suit  in try on fashion shoot for Zara Shein H&M",
      "model wearing summer dress  in try on fashion shoot for Zara Shein H&M",
      "model wearing white cropped blouse and denim jeans  in try on fashion shoot for Zara Shein H&M",
      "model wearing  floral silk shirt in try on fashion shoot for Zara Shein H&M",
      "model wearing  navy colored suit in try on fashion shoot for Zara Shein H&M",
      "model wearing  t-shirt and pants in try on fashion shoot for Zara Shein H&M",
      "a photo of rike, a striking young woman with deep caramel skin and lustrous dark hair stands confidently in a chic, modern cityscape. She wears a bold, form-fitting red dress that accentuates her curves, paired with sleek black heels. Her expression is one of determination and grace, with her lips curled into a subtle, knowing smile. The scene is bathed in the golden hour light, casting warm, soft shadows and highlighting the texture of her dress. The background features a blend of neon lights and urban architecture, creating a vibrant, cinematic atmosphere. The lighting setup includes a soft key light from the front, a warm fill light from the side, and a subtle rim light from behind to define her silhouette. The image has a slight film grain and a warm color grading, inspired by the visual style of Wes Anderson",
      "",
    ],
  },
];

export const training_status = [
  {
    name: "Dataset analysis",
    value: "analysing_dataset",
    color: "#ffb703",
  },
  {
    name: "Training in progress",
    value: "training_in_progress",
    color: "#22007C",
  },
  {
    name: "Training successful",
    value: "training_successful",
    color: "#0ad6ff",
  },
  {
    name: "Preparing Photoshoot",
    value: "preparing_photoshoot",
    color: "#3a86ff",
  },
  {
    name: "Photoshoot ready",
    value: "photoshoot_ready",
    color: "#00a878",
  },
  {
    name: "Invalid Ref Code",
    value: "invalid_ref_code",
    color: "#d90429",
  },
];

export const featuredShoots = [
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729491534/asxup8jtbefnfexru3yj.png",

  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729491532/yhlbypp71f9zck2pcozf.png",
  "https://r2-us-west.photoai.com/1726225587-cbeb0d94c9b7809217e1b082f9f157ed-2.png",

  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729491665/yckwxrkpjimpsz13rpkq.png",

  "https://r2-us-west.photoai.com/1726225566-e10b396f8ba338973de4ffc6c961f476-3.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729491921/swb09ib9soaylygquq0l.png",
  "https://r2-us-west.photoai.com/1726221741-246033362f6620f615fd549c76147682-4.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729491664/utyuyvzeeohzkigpvqbt.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729531506/avma2rstdinstbk6hc2k.webp",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729523876/zpqu5faqbmednfzoxcg8.webp",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729491927/ddfh7spqs4ixn8drlo40.png",
  "https://r2-us-west.photoai.com/1726231388-99afe54ff61cc44eb13fc95d87bec4ab-2.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729491550/swyieaotudk3hrgna7rv.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729491918/fzsc9lj6swmxaam6mu6o.png",
  "https://r2-us-west.photoai.com/1725212295-f6b06d5a18a0dc06d192724e09576035-3.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729491532/yhlbypp71f9zck2pcozf.png",
  "https://r2-us-west.photoai.com/1725039720-ad365dd73f636497bf61a94a3f2dd4e3-1.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729531733/uhdybmho9gahg72hnsvj.webp",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729491374/u5xmgccrlttngeloyrdr.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729523247/niy9uo9rk9hym5lllrfx.webp",
  "https://r2-us-west.photoai.com/1726226953-9f706cf3b25ab1e18272b1cd64ef6a5b-4.png",

  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729523098/fynihid6rdprjf2hizfy.webp",
  "https://r2-us-west.photoai.com/1725031102-cce576dc36b0eabdd875a96d0bda4ea3-1.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729491888/vnvolismerfuhfeomebw.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729524829/ui4nacxvfsvckmtsczah.webp",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729043844/o9wctgtrmad5dbzqmvtk.webp",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729336203/p6z4jhr46czc1dfufdkr.webp",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729531735/gtvf0z4vimpcjxoxtpu0.webp",
  "https://r2-us-west.photoai.com/1726175013-648e2794da2c21fdb252080560c7c3a8-3.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729523481/lextvxblshtufqltgzbk.webp",

  "https://r2-us-west.photoai.com/1726227079-4780ec5cadfe8e4eecab7d8ccc00c35d-3.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729203310/z9yzq3tbyhn4v4kesrqt.webp",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1729491889/tdkxbt6kpts28jf91le5.png",
  "https://r2-us-west.photoai.com/1726225608-81dc3efc0d24695f1dbbc57c3a67c57b-4.png",
];

export const imageDataset = [
  "/assets/dis1.webp",
  "/assets/dis2.webp",
  "/assets/dis3.webp",
  "/assets/dis4.webp",
  "/assets/dis5.webp",
  "/assets/dis6.webp",
  "/assets/dis7.webp",
  "/assets/dis8.webp",
  "/assets/dis9.webp",
  "/assets/dis10.webp",
  "/assets/dis11.webp",
  "/assets/dis11.png",
  "/assets/dis13.webp",
  "/assets/dis14.webp",
  "/assets/dis16.webp",
];

export const photoshotDataset = [
  "/assets/shootDemo/shoot1.webp",
  "/assets/shootDemo/shoot2.webp",
  "/assets/shootDemo/shoot3.webp",
  "/assets/shootDemo/shoot4.webp",
  "/assets/shootDemo/shoot5.webp",
  "/assets/shootDemo/shoot6.webp",
  "/assets/shootDemo/shoot7.png",
  "/assets/shootDemo/shoot8.webp",
  "/assets/shootDemo/shoot9.webp",
  "/assets/shootDemo/shoot10.webp",
  "/assets/shootDemo/shoot11.webp",
  "/assets/shootDemo/shoot12.webp",
  "/assets/shootDemo/shoot13.webp",
  "/assets/shootDemo/shoot14.png",
  "/assets/shootDemo/shoot15.png",
  "/assets/shootDemo/shoot16.png",
  "/assets/shootDemo/shoot17.webp",
  "/assets/shootDemo/shoot18.png",
  "/assets/shootDemo/shoot19.png",
  "/assets/shootDemo/shoot20.png",
  "/assets/shootDemo/shoot21.png",
  "/assets/shootDemo/shoot22.png",
  "/assets/shootDemo/shoot23.png",
  "/assets/shootDemo/shoot24.png",
  "/assets/shootDemo/shoot25.png",
  "/assets/shootDemo/shoot26.png",
  "/assets/shootDemo/shoot27.webp",
  "/assets/shootDemo/shoot28.png",
  "/assets/shootDemo/shoot29.png",
  "/assets/shootDemo/shoot30.webp",
  "/assets/shootDemo/shoot31.webp",
  "/assets/shootDemo/shoot32.webp",
  "/assets/shootDemo/shoot33.webp",
  "/assets/shootDemo/shoot34.png",
];
export const business_solutions = [
  { name: "Content Creation", value: "content_creation" },
  { name: "Brand influencing", value: "brand_influencing" },
  { name: "Fashion", value: "fashion" },
  { name: "Model", value: "model" },
  { name: "SMEs", value: "smes" },
];

export const budgetOptions = [
  { name: "less than $5000", value: "< $5000" },
  { name: "$5,000 - $10,000", value: "$5,000 - $10,000" },
  { name: "$10,000 - $20,000", value: "$10,000 - $20,000" },
  { name: "$20,000 - $40,000", value: "$20,000 - $40,000" },
  { name: "$40,000 +", value: "$40,000 +" },
];

export const product_shoot_styles = [
  {
    name: "Product",
    slug: "products",
    category: "product",
    images: [
      "/assets/categories/products1.png",
      "/assets/categories/products2.png",
      "/assets/categories/products3.png",
    ],
    text: "Create Custom Photoshoots for Your Products",
    templates: [
      {
        image: "/assets/categories/products1.png",
        prompt: `A sleek, matte black jar of luxurious skincare cream sits prominently on a dark, polished marble surface. The jar’s lid is slightly ajar, revealing a creamy, velvety white product with a subtle sheen that catches the soft light. Surrounding the jar, delicate black orchids with intricate petals create a dramatic and elegant frame, while lush green palm leaves arch gracefully from the sides, adding texture and vibrancy. The lighting is low and moody, with a warm, diffused glow spotlighting the jar, casting soft, elongated shadows. A faint mist in the background enhances the spa-like atmosphere, suggesting tranquility and exclusivity.`,
      },
      {
        image: "/assets/categories/products2.png",
        prompt: `A matte black skincare cream jar, its minimalist design exuding sophistication, is displayed on a dark wooden surface with subtle grooves, adding organic warmth to the scene. The lid rests slightly off-center, revealing the smooth, pearl-white cream inside, its texture invitingly rich. Surrounding the jar, black orchids cascade in a loose arrangement, their velvety petals absorbing the moody light, while a fan of glossy green palm leaves extends outward, adding contrast. A soft spotlight illuminates the jar, creating a gentle gradient of light and shadow that emphasizes the product’s premium quality. The background fades into darkness, enhancing the overall luxurious ambiance.`,
      },
      {
        image: "/assets/categories/products3.png",
        prompt: `The matte black jar of skincare cream sits on a slate-textured surface, its slightly open lid revealing a pristine, whipped cream-like texture that gleams softly under the dim light. Encircling the jar, black orchids are artfully scattered, their deep hues accentuated by the sheen of their petals, while palm leaves with dewdrops glisten under the ambient light. A subtle spotlight directly above casts a luminous halo over the jar, creating dramatic shadows that stretch outward. The atmosphere is serene and indulgent, with hints of moisture and luxury evoked by the interplay of soft light, shadow, and rich textures`,
      },
      {
        image: "/assets/categories/products4.webp",
        prompt: `A 3D rendering of a sleek, transparent perfume bottle with a swirling gradient of deep blue, vibrant purple, and soft pink smoke. The bottle is filled with smoke, and a cloud of pink smoke billows out from the perfume spray. The name "Elsa mi amor" is artfully crafted by the smoke, shifting from pink to purple to blue. The dark grey background accentuates the vividness of the colors, resulting in a refined and striking aesthetic.`,
      },
    ],
    samples: [
      "/assets/demoTrainings/speaker1.jpeg",
      "/assets/demoTrainings/speaker2.jpeg",
      "/assets/demoTrainings/speaker3.jpeg",
    ],
    is_trending: true,
  },
  {
    name: "Fashion & Wearables",
    slug: "fashion",
    category: "fashion",
    images: [
      "/assets/categories/fashion1.png",
      "/assets/categories/fashion2.png",
      "/assets/categories/fashion3.png",
      "/assets/categories/fashion4.png",
      "/assets/categories/fashion5.png",
    ],
    text: "Get AI Models to Showcase Your Fashion Items",
    templates: [
      {
        image: "/assets/categories/fashion1.png",
        prompt: `A fashionable young African woman stands confidently under soft, diffused studio lighting, making her the undeniable focus. Her shiny, iridescent metallic outfit gleams brilliantly—a holographic oversized jacket draped loosely over her shoulders, paired with matching high-waisted pants that ripple with a spectrum of colors. The metallic gray tube top beneath adds a sleek contrast. Her striking expression, enhanced by bold pink eyeshadow and glossy lips, exudes power and poise. Her short, wavy bob frames her face perfectly, while layered black necklaces add depth and edge to her look. The background is a neutral gradient in soft beige tones, subtly textured to emphasize her vibrant outfit. The reflective clothing casts delicate glints of light onto the clean backdrop, creating an aura of futuristic elegance. The overall composition is minimalistic yet electrifying, allowing her confidence and style to dominate the frame.`,
      },
      {
        image: "/assets/categories/fashion2.png",
        prompt: `A strikingly confident young african woman with radiant, natural beauty stands poised against a neutral, cream-toned background. Her voluminous afro is impeccably styled, each curl catching the soft, diffused lighting that bathes the scene. She smiles warmly, her direct gaze exuding charm and self-assurance. Her attire is effortlessly chic—a crisp white button-up shirt tied stylishly at the waist, revealing a hint of her midriff. The shirt’s voluminous sleeves add a touch of relaxed elegance. She complements this with high-waisted, light blue denim jeans that hug her form in a comfortable yet flattering fit. Large gold hoop earrings frame her face, subtly reflecting the warm light. The composition emphasizes her smooth, glowing skin and the interplay of textures in her outfit, creating a serene, contemporary portrait`,
      },
      {
        image: "/assets/categories/fashion3.png",
        prompt: `A strikingly confident young african woman with radiant, natural beauty stands poised against a neutral, cream-toned background. Her voluminous afro is impeccably styled, each curl catching the soft, diffused lighting that bathes the scene. She smiles warmly, her direct gaze exuding charm and self-assurance. Her attire is effortlessly chic—a crisp white button-up shirt tied stylishly at the waist, revealing a hint of her midriff. The shirt’s voluminous sleeves add a touch of relaxed elegance. She complements this with high-waisted, light blue denim jeans that hug her form in a comfortable yet flattering fit. Large gold hoop earrings frame her face, subtly reflecting the warm light. The composition emphasizes her smooth, glowing skin and the interplay of textures in her outfit, creating a serene, contemporary portrait`,
      },
      {
        image: "/assets/categories/fashion4.png",
        prompt: `A confident man with dark skin and a lean, fit build, wearing a vibrant short-sleeve Hawaiian shirt featuring bold tropical floral patterns in shades of orange, green, and yellow. He has a strong, defined face, a neatly groomed beard, and striking natural afro hair that is voluminous and frames his face perfectly. The man is standing in a relaxed, confident pose against a solid warm yellow background that complements the shirt's colors. The lighting is soft and even, accentuating his features and the vibrant details of his outfit. His gaze is direct, adding a charismatic and stylish vibe to the image`,
      },
      {
        image: "/assets/categories/fashion5.png",
        prompt: `A stunning woman with a fit physique and dark skin tone, standing confidently in a glamorous red satin gown. The dress features a deep plunging neckline and elegant gathered drapes at the waist, enhancing the luxurious look. She has long, voluminous, curly black hair cascading down her shoulders, and her expression is poised and confident, exuding elegance. The background is a smooth, warm yellow gradient, complementing the red of the dress. The overall lighting is soft and even, highlighting her beauty and the shine of the gown`,
      },
    ],
    samples: [
      "/assets/demoTrainings/dress1.jpeg",
      "/assets/demoTrainings/dress2.jpeg",
      "/assets/demoTrainings/dress3.jpeg",
    ],
    is_trending: true,
  },
  {
    name: "Furniture",
    slug: "furniture",
    category: "home",
    images: [
      "/assets/categories/furniture1.png",
      "/assets/categories/furniture2.png",
      "/assets/categories/furniture3.png",
    ],
    text: "Create a Custom Display for Your Furniture",
    templates: [
      {
        image: "/assets/categories/furniture1.png",
        prompt: `A luxurious and modern black velvet round armchair with soft curves and plush cushioning, set against a completely dark, moody black background. The chair is accompanied by a matching black throw pillow and a dark knitted blanket draped casually over the seat, adding a cozy and elegant vibe. The lighting is subtle, with soft highlights that emphasize the texture and contours of the velvet fabric, creating a sleek and minimalist atmosphere. The overall aesthetic is monochromatic and sophisticated, exuding comfort and a modern, high-end style`,
      },
      {
        image: "/assets/categories/furniture2.png",
        prompt: `A luxurious black velvet round armchair with soft, curving armrests and deeply plush cushioning sits elegantly in the center of a completely dark, moody black background. The velvet fabric gleams subtly under soft, focused lighting, highlighting the chair's texture and contours. A matching black throw pillow, perfectly plumped, rests at the center, while a dark knitted blanket is draped casually over one arm, its delicate weave adding a touch of coziness. The scene is sleek and minimalist, with a faint spotlight accentuating the chair as the singular focal point, creating an atmosphere of modern luxury and sophistication`,
      },
      {
        image: "/assets/categories/furniture3.png",
        prompt: `A luxurious black velvet round armchair with soft, curving armrests and deeply plush cushioning sits elegantly in the center of a completely dark, moody black background. The velvet fabric gleams subtly under soft, focused lighting, highlighting the chair's texture and contours. A matching black throw pillow, perfectly plumped, rests at the center, while a dark knitted blanket is draped casually over one arm, its delicate weave adding a touch of coziness. The scene is sleek and minimalist, with a faint spotlight accentuating the chair as the singular focal point, creating an atmosphere of modern luxury and sophistication`,
      },
    ],
    samples: [
      "/assets/categories/furniture1.png",
      "/assets/categories/furniture2.png",
      "/assets/categories/furniture3.png",
    ],
    is_trending: true,
  },
  {
    name: "Tech",
    slug: "tech",
    category: "tech",
    images: [
      "/assets/categories/tech1.png",
      "/assets/categories/tech2.png",
      "/assets/categories/tech3.png",
      "/assets/categories/tech4.png",
    ],
    text: "Create a Custom Display that Highlights Your Tech Product",
    templates: [
      {
        image: "/assets/categories/tech1.png",
        prompt: `An ultra-modern studio photography setup featuring a sleek and innovative tech product, such as a smartphone, wireless earbuds, or smartwatch, placed on a minimalist pedestal or surface. The background is a clean, gradient black-to-gray or soft white backdrop with controlled soft lighting that highlights the product’s smooth edges, premium textures, and reflective surfaces. Subtle light reflections and a faint shadow beneath the product add depth and realism. The composition is balanced and centered, focusing entirely on the product with no distractions, creating a luxurious and high-tech atmosphere that is perfect for a product showcase. The overall feel is sharp, professional, and futuristic`,
      },
      {
        image: "/assets/categories/tech2.png",
        prompt: `A professional studio photograph of a cutting-edge tech product, such as a wireless speaker, smartwatch, or laptop, positioned on a matte surface with a futuristic setting. The background features a soft gradient of deep blue and black tones, with carefully placed LED light strips or subtle neon highlights to add a modern, high-tech vibe. The product is illuminated with soft, diffused lighting to emphasize its sleek design, polished materials, and intricate details. Gentle reflections on the surface add realism, and the camera angle is slightly tilted to showcase the product's form factor and premium build quality. The composition is clean and minimal, exuding sophistication and innovation`,
      },
      {
        image: "/assets/categories/tech3.png",
        prompt: `A sleek studio photograph featuring a modern tech product, such as a pair of wireless earbuds, a smartwatch, or a smartphone, showcased on a reflective surface. The background is dark with a soft spotlight illuminating the product, creating a dramatic, high-contrast effect. Hints of cool-toned accents, like soft blue or silver lighting, subtly highlight the product's curves and edges. The composition includes carefully positioned elements, such as geometric shapes or metallic props, to create a futuristic, minimalistic atmosphere. The product is the clear focal point, with detailed close-ups emphasizing its texture, premium materials, and advanced design`,
      },
      {
        image: "/assets/categories/tech4.png",
        prompt: `A professional studio shot of a modern tech product, such as a wireless charging pad, smartwatch, or portable speaker, displayed on a clean, matte surface with soft overhead lighting. The background features a gradient of soft neutral tones, such as white to light gray, creating a minimal and premium aesthetic. Subtle shadows beneath the product give depth, while delicate rim lighting outlines its shape to enhance the sleek and polished design. The product is perfectly centered, with a few complementary props, like a minimal glass or metallic object, adding balance and a contemporary touch. The overall mood is clean, elegant, and focused, perfect for high-end advertising or branding`,
      },
    ],
    samples: [
      "/assets/categories/tech1.png",
      "/assets/categories/tech2.png",
      "/assets/categories/tech3.png",
      "/assets/categories/tech4.png",
    ],
    is_trending: true,
  },
  {
    name: "Food",
    slug: "food",
    category: "product",
    images: [
      "/assets/categories/food1.png",
      "/assets/categories/food2.png",
      "/assets/categories/food3.png",
      "/assets/categories/food4.png",
    ],
    text: "Create a Custom Display that Showcases Your Food Item",
    templates: [
      {
        image: "/assets/categories/food1.png",
        prompt: `A delicious plate of food presented on a reflective black surface. The dish consists of a juicy, perfectly grilled beef steak with visible sear marks, garnished with finely chopped parsley. To the left of the steak is a serving of crispy golden French fries sprinkled with grated Parmesan cheese and more parsley. Accompanying the dish is a small glass bowl of creamy dipping sauce with an orange hue, garnished with a sprig of parsley. The entire meal is served on a clear, round glass plate. The background is dark and moody, emphasizing the food's colors and textures.`,
      },
      {
        image: "/assets/categories/food2.png",
        prompt: `A gourmet plate of food on a dark reflective surface. The dish features a juicy grilled beef steak with a slightly charred surface, garnished with finely chopped herbs. Beside the steak is a portion of golden, crispy French fries topped with a light dusting of Parmesan cheese and parsley. A small glass bowl contains a creamy white garlic aioli sauce, elegantly garnished with a tiny sprig of parsley. The food is served on a matte black ceramic plate, adding a modern, upscale dining feel. The moody dark background highlights the food’s colors and textures`,
      },
      {
        image: "/assets/categories/food3.png",
        prompt: `A rustic-style serving of food on a dark wooden table. The centerpiece is a large, juicy grilled steak with visible sear marks and a sprinkle of chopped parsley. Accompanying the steak are two generous portions of thick-cut, golden fries, dusted with coarse salt and Parmesan shavings. A small bowl with spicy orange chipotle mayo sits alongside, topped with a parsley leaf. The plate is rustic, made of textured black stoneware, giving the image a cozy and artisanal presentation. The background is dark, providing contrast to the vibrant food.`,
      },
      {
        image: "/assets/categories/food4.png",
        prompt: `A bright, well-lit food presentation featuring a tender, grilled steak with a glossy surface and herb garnish. To the side is a portion of thin, crispy French fries with Parmesan cheese and parsley sprinkled generously. A small dipping bowl of creamy orange sauce is placed next to the fries. Additional garnishes include steamed green beans and roasted cherry tomatoes, adding a splash of color. The meal is plated on a sleek white ceramic dish, set against a light gray marble background for a fresh, modern look`,
      },
    ],
    samples: [
      "/assets/categories/food1.png",
      "/assets/categories/food2.png",
      "/assets/categories/food3.png",
      "/assets/categories/food4.png",
    ],
    is_trending: true,
  },
  {
    name: "Footwaer",
    slug: "footwear",
    category: "fashion",
    images: [
      "/assets/categories/footwear1.png",
      "/assets/categories/footwear2.png",
      "/assets/categories/footwear3.png",
      "/assets/categories/footwear4.png",
    ],
    text: "Create a Custom Display for Your Footwear brands",
    templates: [
      {
        image: "/assets/categories/footwear1.png",
        prompt: `A sleek pair of leather sneakers on a matte black surface, illuminated by a single overhead spotlight. The background fades into darkness, emphasizing the shoe's texture, stitching, and laces. The lighting creates subtle reflections, enhancing the luxury feel`,
      },
      {
        image: "/assets/categories/footwear2.png",
        prompt: `A pair of running shoes captured mid-air against a gradient background (blue to white). Thin powder bursts in vibrant colors (e.g., yellow and orange) to simulate motion and energy. The shoes appear as if they are sprinting through the air`,
      },
      {
        image: "/assets/categories/footwear3.png",
        prompt: `A top-down view of elegant high heels arranged on a marble surface with soft, warm lighting. Complementary accessories like a clutch bag, jewelry, or perfume bottle are placed artistically around the shoes to tell a lifestyle story`,
      },
      {
        image: "/assets/categories/footwear4.png",
        prompt: `Rugged hiking boots placed on a textured wooden plank, surrounded by outdoor elements like moss, small rocks, and a rolled-up map. Soft natural light filters through a simulated forest canopy, creating a sense of adventure`,
      },
    ],
    samples: [
      "/assets/demoTrainings/shoe1.jpeg",
      "/assets/demoTrainings/shoe2.jpeg",
      "/assets/demoTrainings/shoe3.jpeg",
      "/assets/demoTrainings/shoe4.jpeg",
      "/assets/demoTrainings/shoe5.jpeg",
      "/assets/demoTrainings/shoe6.jpeg",
      "/assets/demoTrainings/shoe7.jpeg",
      "/assets/demoTrainings/shoe8.jpeg",
    ],
    is_trending: true,
  },
  {
    name: "Jewelry & Accessories",
    slug: "jewelry",
    category: "fashion",
    images: [
      "/assets/categories/jewelry1.png",
      "/assets/categories/jewelry2.png",
      "/assets/categories/jewelry3.png",
      "/assets/categories/jewelry4.png",
    ],
    text: "Showcase Your Jewelry with a Custom Design",
    templates: [
      {
        image: "/assets/categories/jewelry1.png",
        prompt: `A studio setting with a plain white background, showcasing a gold necklace with a small diamond pendant. The necklace is elegantly draped over a soft, white velvet cushion. Lighting is soft and evenly diffused, highlighting the shimmer and texture of the materials`,
      },
      {
        image: "/assets/categories/jewelry2.png",
        prompt: `A macro shot of a solitaire diamond ring, showcasing the precision of its cut and the brilliance of its facets. The setting is a neutral, softly blurred white or gray background, with sharp focus on the diamond's fire and sparkle. Fine scratches or details on the metal band are visible, emphasizing craftsmanship`,
      },
      {
        image: "/assets/categories/jewelry3.png",
        prompt: `An extreme close-up of a vintage gold bracelet, highlighting the intricate filigree work and embedded emerald stones. The texture of the metal and the micro-reflections within the emeralds are emphasized, creating a rich and luxurious feel. A slightly warm-toned background enhances the metal's natural warmth`,
      },
      {
        image: "/assets/categories/jewelry4.png",
        prompt: `A macro image of a strand of pearls, zooming in to reveal their subtle variations in color, texture, and luster. The composition emphasizes the natural beauty of the pearls, with reflections from soft, diffused lighting. The background is a smooth, blurred velvet in soft pink or beige tones`,
      },
    ],
    samples: [
      "/assets/demoTrainings/watch1.jpeg",
      "/assets/demoTrainings/watch2.jpeg",
      "/assets/demoTrainings/watch3.jpeg",
    ],
    is_trending: true,
  },
  {
    name: "Bags & Purses",
    slug: "bags",
    category: "fashion",
    images: [
      "/assets/categories/bag1.png",
      "/assets/categories/bag2.jpeg",
      "/assets/categories/bag3.jpeg",
      "/assets/categories/bag4.png",
    ],
    text: "Highlight Every Detail of Your Bag with a Custom Display",
    templates: [
      {
        image: "/assets/categories/bag1.png",
        prompt: `A sleek leather handbag displayed on a smooth white pedestal in a minimalist studio setting. The background is a gradient of soft beige transitioning to white, creating a luxurious atmosphere. Spotlights cast subtle shadows, accentuating the bag's texture and stitching. Beside the bag, a single gold accessory (e.g., a watch or bracelet) is placed to complement the high-end look, while a faint reflection on the surface adds depth and sophistication`,
      },
      {
        image: "/assets/categories/bag4.png",
        prompt: `A high-quality studio photograph of a luxury maroon leather shoulder bag with a sleek and modern design. The bag features smooth edges, a structured silhouette, and a metallic silver clasp with a unique interlocking shape in the center. The strap is elegantly draped and matches the bag's maroon color. The background is minimal and softly lit, with a light beige tone that enhances the bag's rich color and texture.`,
      },
    ],
    samples: [
      "/assets/demoTrainings/bag1.jpeg",
      "/assets/demoTrainings/bag2.jpeg",
      "/assets/demoTrainings/bag3.jpeg",
      "/assets/demoTrainings/bag4.jpeg",
    ],
    is_trending: true,
  },
  {
    name: "Home Decor",
    slug: "decor",
    category: "home",
    images: [
      "/assets/categories/decor1.png",
      "/assets/categories/decor2.png",
      "/assets/categories/decor3.png",
    ],
    text: "Train a Model Tailored to Your Home Decor",
    templates: [
      {
        image: "/assets/categories/decor1.png",
        prompt: `A minimalistic black plate and two matte black ceramic vases arranged elegantly on a dark textured background. One vase contains a branch with small orange berries and green leaves, adding a subtle touch of color and contrast. The scene is lit with soft, diffused lighting, creating gentle shadows and emphasizing the matte finish of the ceramics and the vibrant details of the foliage`,
      },
      {
        image: "/assets/categories/decor2.png",
        prompt: `A minimalistic black plate and two matte black ceramic vases arranged elegantly on a dark textured background. One vase contains a branch with small orange berries and green leaves, adding a subtle touch of color and contrast. The scene is lit with soft, diffused lighting, creating gentle shadows and emphasizing the matte finish of the ceramics and the vibrant details of the foliage`,
      },
      {
        image: "/assets/categories/decor3.png",
        prompt: `A minimalistic black plate and two matte black ceramic vases arranged elegantly on a dark textured background. One vase contains a branch with small orange berries and green leaves, adding a subtle touch of color and contrast. The scene is lit with soft, diffused lighting, creating gentle shadows and emphasizing the matte finish of the ceramics and the vibrant details of the foliage`,
      },
    ],
    samples: [
      "/assets/categories/decor1.png",
      "/assets/categories/decor2.png",
      "/assets/categories/decor3.png",
    ],
    is_trending: true,
  },
  {
    name: "Hats & Caps",
    slug: "hats",
    category: "fashion",
    images: [
      "/assets/categories/hats1.png",
      "/assets/categories/hats2.png",
      "/assets/categories/hats3.webp",
    ],
    text: "Showcase Every Detail of Your Hat with a Custom Design",
    templates: [
      {
        image: "/assets/categories/hats1.png",
        prompt: `A high-quality studio photograph of a stylish black and silver fedora hat. The hat is placed on a smooth black surface with dramatic, soft lighting that accentuates its glossy texture and sleek design. The background is entirely black, creating a minimalist and elegant atmosphere. The focus is on the hat, highlighting its classic shape and sophisticated details`,
      },
      {
        image: "/assets/categories/hats3.webp",
        prompt: `A hyperrealistic image of a white baseball cap, designed with vibrant, hand-painted flowers in an acrylic painting style. The centerpiece is a large daisy with white petals and a bright yellow center, surrounded by smaller flowers in hues of pink, purple, and green. The floral design appears meticulously painted with visible brushstrokes, creating a textured effect that contrasts with the smooth fabric of the cap. The lighting enhances the details of the acrylic paint, casting soft shadows under the raised texture of the flowers. The cap’s white fabric reflects soft natural light, giving it a clean and pristine look. Above the floral design, the word "Inspire" is written in elegant, flowing script, perfectly blending with the artistic nature of the cap.The background is a minimalist, elegant setting with a smooth, neutral-colored surface (like marble or polished wood) that enhances the cap's details. The lighting is soft, creating a delicate play of light and shadow that emphasizes the cap’s texture and the vibrancy of the painted flowers. The overall atmosphere is refined, with a subtle touch of luxury, making the cap the clear focal point while maintaining a professional, stylish look.`,
      },
    ],
    samples: [
      "/assets/demoTrainings/hat1.jpeg",
      "/assets/demoTrainings/hat2.jpeg",
      "/assets/demoTrainings/hat3.jpeg",
      "/assets/demoTrainings/hat4.jpeg",
    ],

    is_trending: true,
  },
  {
    name: "Kitchenware",
    slug: "kitchenware",
    category: "home",
    images: [
      "/assets/categories/kitchenware1.png",
      "/assets/categories/kitchenware2.png",
    ],
    text: "Showcase Your Kitchenware with a Custom Design",
    templates: [
      {
        image: "/assets/categories/kitchenware1.png",
        prompt: `A professional studio photograph of a sleek stainless steel cookware set, including pots, pans, and a kettle, arranged on a clean white surface. The lighting is bright and even, emphasizing the shiny, polished texture of the steel. The background is a black gradient, creating a minimalist and luxurious feel. Subtle reflections on the surface add depth and sophistication to the composition`,
      },
      {
        image: "/assets/categories/kitchenware2.png",
        prompt: `A professional studio photograph of a sleek stainless steel cookware set, including pots, pans, and a kettle, arranged on a clean white surface. The lighting is bright and even, emphasizing the shiny, polished texture of the steel. The background is pure white, creating a minimalist and luxurious feel. Subtle reflections on the surface add depth and sophistication to the composition`,
      },
    ],
    samples: [
      "/assets/demoTrainings/cup1.jpeg",
      "/assets/demoTrainings/cup2.jpeg",
      "/assets/demoTrainings/cup3.jpeg",
      "/assets/demoTrainings/cup4.jpeg",
      "/assets/demoTrainings/cup5.jpeg",
      "/assets/demoTrainings/cup6.jpeg",
    ],
    is_trending: true,
  },
  {
    name: "Vehicles",
    slug: "vehicles",
    category: "automobile",
    images: [
      "/assets/categories/vehicles1.png",
      "/assets/categories/vehicles2.png",
      "/assets/categories/vehicles3.png",
      "/assets/categories/vehicles4.png",
    ],
    text: "Create a Custom Design to Showcase Your Vehicle's Details",
    templates: [
      {
        image: "/assets/categories/vehicles1.png",
        prompt: `Mercedes AMG GT car bright blue oily print colour realistic and primium quality close up  full size image`,
      },
      {
        image: "/assets/categories/vehicles2.png",
        prompt: `a close up of a car dashboard with a steering wheel and a dashboard, tesla logo on chest, unsplash photography, the scary empty liminal spaces, reptilian cyborg, it has six thrusters in the back, the electric boy, white wheel rims, sitting in her car`,
      },
      {
        image: "/assets/categories/vehicles3.png",
        prompt: `The image showcases a stunning black sports car parked along a winding road. In the background, majestic mountains rise under a clear sky. The sunlight adds a warm glow, enhancing the car's sleek contours. The vehicle's aggressive design features bold lines and sporty accents, hinting at its high performance. This striking scene combines the allure of automotive design with the beauty of nature, making it an eye-catching visual.`,
      },
      {
        image: "/assets/categories/vehicles4.png",
        prompt: `a close up of a car with a red tail light on, 2019 trending photo, bmw m1 lincoln continental, high detail - n 4, ford fusion, detailed studio lighting, lada, left align, 2 0 1 9, anonymous as a car, inspired by Hubert van Ravesteyn, kia soul, trending on interfacelift, by Donald Sherwood`,
      },
    ],
    samples: [
      "/assets/categories/vehicles1.png",
      "/assets/categories/vehicles2.png",
      "/assets/categories/vehicles3.png",
      "/assets/categories/vehicles4.png",
    ],
    is_trending: true,
  },
  {
    name: "Glasses",
    slug: "glasses",
    category: "fashion",
    images: [
      "/assets/categories/glasses1.png",
      "/assets/categories/glasses2.png",
      "/assets/categories/glasses3.png",
    ],
    text: "Showcase the Details of Your Glasses with a Custom Design",
    templates: [
      {
        image: "/assets/categories/glasses1.png",
        prompt: `A pair of eyeglasses in a completely white background. The frames are black, adding a modern touch to the image. The natural light creates interesting patterns on the lenses. This close-up shot highlights the details of the eyeglasses. The background is softly blurred to keep the focus on the eyeglasses, creating an artistic feel.`,
      },
      {
        image: "/assets/categories/glasses2.png",
        prompt: `A pair of eyeglasses is placed on a wooden table, creating a modern aesthetic. The black frames give a stylish look, while the lenses capture colorful reflections from the environment. Natural light is filtering through, enhancing the artistic qualities of the scene. The background is delicately blurred, ensuring the eyeglasses remain the main focus of the image. This close-up shot showcases the intricate details of the lenses and how they interact with light.`,
      },
      {
        image: "/assets/categories/glasses3.png",
        prompt: `A pair of eyeglasses sits on a wooden table, its lenses catching random reflections of colors and light. The frames are black, adding a modern touch to the image. The natural light creates interesting patterns on the lenses. This close-up shot highlights the details of the eyeglasses and the surface they rest on. The background is softly blurred to keep the focus on the eyeglasses, creating an artistic feel.`,
      },
    ],
    samples: [
      "/assets/demoTrainings/glasses1.jpeg",
      "/assets/demoTrainings/glasses2.jpeg",
      "/assets/demoTrainings/glasses3.jpeg",
      "/assets/demoTrainings/glasses4.jpeg",
      "/assets/demoTrainings/glasses5.jpeg",
    ],
    is_trending: true,
  },
  {
    name: "Watches",
    slug: "watches",
    category: "fashion",
    images: ["/assets/categories/watch1.png", "/assets/categories/watch2.png"],
    text: "Showcase the Details of Your Watch Brand with a Custom Design",
    templates: [
      {
        image: "/assets/categories/watch1.png",
        prompt: `The image shows an intricately designed black wristwatch positioned against a dark background, emphasizing its sophisticated design. The watch face is detailed, showing small dials and a clear branding. The leather strap adds a touch of luxury, with visible stitching along the edges. The lighting is low and focused, casting subtle highlights and shadows, which accentuate the watch’s features and create a dramatic, elegant atmosphere. The product is shown laid flat, with part of another object partially visible in the foreground, slightly out of focus, possibly a mobile device or similar gadget.`,
      },
      {
        image: "/assets/categories/watch2.png",
        prompt: `Create a photo of a luxury watch called 'ÀPeuPrès'. The watch features an elegant dial with slightly misaligned numbers and hands that don't point exactly to the correct time, reflecting the concept of chic imprecision. The dial is minimalistic, with a gold bezel and an off-white background. The strap is made of high-quality leather with perfect stitching. The image should be bright, highlighting soft, luxurious lighting, with elements like marble and velvet in the setting to emphasize the high-end yet subtly imperfect style of the watch. The watch face is detailed, emphasizing its sophisticated design, showing small dials and a clear branding, The lighting is low and focused, elegant atmosphere, with part of another object partially visible in the foreground,`,
      },
    ],
    samples: [
      "/assets/demoTrainings/watch1.jpeg",
      "/assets/demoTrainings/watch2.jpeg",
      "/assets/demoTrainings/watch3.jpeg",
    ],
    is_trending: true,
  },
  {
    name: "Consumer packaged goods",
    slug: "goods",
    category: "product",
    images: [
      "/assets/categories/goods1.webp",
      "/assets/categories/goods2.webp",
      "/assets/categories/goods3.webp",
    ],
    text: "Showcase Your Consumer Packaged Goods with a Custom Design",
    templates: [
      {
        image: "/assets/categories/goods1.webp",
        prompt: `hyperrealistic, food photography, dark mood, a bottle of soy sauce with a white label at the top a French flag on the label written "SAUCE A L AIL NOIR PREMIUM "The cap explodes and the soy makes a splash`,
      },
      {
        image: "/assets/categories/goods2.webp",
        prompt: `hyperrealistic, food photography, dark mood, a bottle of soy sauce with a white label at the top a French flag on the label written "SAUCE A L AIL NOIR PREMIUM "The cap explodes and the soy makes a splash`,
      },
      {
        image: "/assets/categories/goods3.webp",
        prompt: `hyperrealistic, food photography, dark mood, a bottle of soy sauce with a white label at the top a French flag on the label written "SAUCE A L AIL NOIR PREMIUM "The cap explodes and the soy makes a splash`,
      },
    ],
    samples: [
      "/assets/categories/goods1.webp",
      "/assets/categories/goods2.webp",
      "/assets/categories/goods3.webp",
    ],
    is_trending: true,
  },
  {
    name: "Gym wears",
    slug: "gym",
    category: "fashion",
    images: [
      "/assets/categories/gym1.webp",
      "/assets/categories/gym2.webp",
      "/assets/categories/gym3.webp",
    ],
    text: "Showcase the Details of Your Gym Wear Brand with a Custom Design",
    templates: [
      {
        image: "/assets/categories/gym1.webp",
        prompt: `In a sleek, modern studio, a black african model poses confidently in high-performance gym wear branded with 'RFIT' across the chest in bold, minimalist typography. The outfit consists of a fitted athletic crop top and matching high-waisted leggings in a deep matte black with subtle, textured patterns that catch the light. The studio lighting is sharp, casting strong highlights and soft shadows that define the model's athletic physique and emphasize the premium quality of the fabric. The background is a neutral gray with a subtle gradient, allowing the outfit and model to stand out, with the 'RFIT' logo adding a touch of edgy sophistication. The overall atmosphere is powerful and clean, with a hint of urban, athletic aesthetic`,
      },
      {
        image: "/assets/categories/gym2.webp",
        prompt: `In a sleek, modern studio, a black african male model poses confidently in high-performance gym wear branded with 'RFIT' across the chest in bold, minimalist typography. The outfit consists of a fitted athletic crop top and matching high-waisted leggings in a deep matte black with subtle, textured patterns that catch the light. The studio lighting is sharp, casting strong highlights and soft shadows that define the model's athletic physique and emphasize the premium quality of the fabric. The background is a neutral gray with a subtle gradient, allowing the outfit and model to stand out, with the 'RFIT' logo adding a touch of edgy sophistication. The overall atmosphere is powerful and clean, with a hint of urban, athletic aesthetic`,
      },
      {
        image: "/assets/categories/gym3.webp",
        prompt: `In a fashion-forward studio setup with dramatic lighting, a model strikes a strong pose in a bold 'RFIT' gym wear ensemble, perfect for an athletic yet stylish aesthetic. The outfit is a two-piece set: a racerback sports bra and fitted leggings, both in sleek midnight blue with contrasting neon accents that emphasize the logo 'RFIT' across the chest. Studio lighting is angled to create deep shadows and strong highlights, defining the textures of the fabric and the model's toned physique. The background is a gradient from dark to light gray, amplifying the studio’s contemporary feel. The atmosphere is intense and stylish, merging high fashion with a premium athletic edge`,
      },
    ],
    samples: [
      "/assets/categories/gym1.webp",
      "/assets/categories/gym2.webp",
      "/assets/categories/gym3.webp",
    ],
    is_trending: true,
  },
];

export const demo_products = [
  {
    name: "Fashion Bag",
    trigger_word: "BAGMULBEERY",
    training_dataset: [
      "/assets/demoTrainings/bag1.jpeg",
      "/assets/demoTrainings/bag2.jpeg",
      "/assets/demoTrainings/bag3.jpeg",
      "/assets/demoTrainings/bag4.jpeg",
    ],
    image_generated: [
      "/assets/demoExamples/bag1.jpeg",
      "/assets/demoExamples/bag2.jpeg",
      "/assets/demoExamples/bag3.jpeg",
      "/assets/demoExamples/bag4.jpeg",
    ],
    prompt: `photo of an young African lady with black hair wearing a maroon BAGMULBEERY Mulberry shoulder bag that's rounded on the bottom posing in front of a soft rust colored background, professional fashion photography`,
  },
  {
    name: "Fashion Sneakers",
    trigger_word: "SNEAKERSTODEMO",
    training_dataset: [
      "/assets/demoTrainings/shoe1.jpeg",
      "/assets/demoTrainings/shoe2.jpeg",
      "/assets/demoTrainings/shoe3.jpeg",
      "/assets/demoTrainings/shoe4.jpeg",
      "/assets/demoTrainings/shoe5.jpeg",
      "/assets/demoTrainings/shoe6.jpeg",
      "/assets/demoTrainings/shoe7.jpeg",
      "/assets/demoTrainings/shoe8.jpeg",
    ],
    image_generated: [
      "/assets/demoExamples/shoe1.jpeg",
      "/assets/demoExamples/shoe2.jpeg",
      "/assets/demoExamples/shoe3.jpeg",
      "/assets/demoExamples/shoe4.jpg",
      "/assets/demoExamples/shoe5.jpg",
      "/assets/demoExamples/shoe6.jpeg",
    ],
    prompt: `photo of a pair of light grey SNEAKERSTODEMO Nike shoes with 7 shoelace holes with high contrast between shadows and highlights in front of a deep black background with shadows on it. 60mm lens, professional studio photography`,
  },
  {
    name: "Maroon Dress",
    trigger_word: "MAROONTODEMO",
    training_dataset: [
      "/assets/demoTrainings/dress1.jpeg",
      "/assets/demoTrainings/dress2.jpeg",
      "/assets/demoTrainings/dress3.jpeg",
    ],
    image_generated: [
      "/assets/demoExamples/dress1.jpeg",
      "/assets/demoExamples/dress2.jpg",
      "/assets/demoExamples/dress3.jpg",
      "/assets/demoExamples/dress4.jpg",
    ],
    prompt: `snapshot in retro style of a rust-colored MAROONTODEMO midi dress with a see-through floral pattern and short puff sleeves worn by an African woman with pale skin, white wet hair and brown shoes in the arms of a young man wearing a black outfit with wet hair looking at each other in heavy rain on the edge of a cliff, golden hour`,
  },
  {
    name: "Aroma Cup",
    trigger_word: "EARTHMADETODEMO",
    training_dataset: [
      "/assets/demoTrainings/cup1.jpeg",
      "/assets/demoTrainings/cup2.jpeg",
      "/assets/demoTrainings/cup3.jpeg",
      "/assets/demoTrainings/cup4.jpeg",
      "/assets/demoTrainings/cup5.jpeg",
      "/assets/demoTrainings/cup6.jpeg",
    ],
    image_generated: [
      "/assets/demoExamples/cup1.jpeg",
      "/assets/demoExamples/cup2.jpg",
      "/assets/demoExamples/cup3.jpg",
      "/assets/demoExamples/cup4.jpeg",
    ],
    prompt: `photo of a light pastel green EARTHMADETODEMO tumbler with a ribbed exterior and a lid with "earthmade" engraved in it is held by someone an african in front of a blue background. 50mm lens, professional studio photography`,
  },
  {
    name: "Sunglasses",
    trigger_word: "SUNGLASSICTODEMO",
    training_dataset: [
      "/assets/demoTrainings/glasses1.jpeg",
      "/assets/demoTrainings/glasses2.jpeg",
      "/assets/demoTrainings/glasses3.jpeg",
      "/assets/demoTrainings/glasses4.jpeg",
      "/assets/demoTrainings/glasses5.jpeg",
    ],
    image_generated: [
      "/assets/demoExamples/glasses1.jpeg",
      "/assets/demoExamples/glasses2.jpeg",
      "/assets/demoExamples/glasses3.jpeg",
      "/assets/demoExamples/glasses4.jpeg",
    ],
    prompt: `a photo of an African woman in her 40s wearing a black SUNGLASSICTODEMO sunglasses that has a thin top bar across the top of the lenses and thin temple arms and the woman is wearing an orange winter jacket with a hoody in front of a snowy mountain on a sunny day, professional outdoor photography.`,
  },
  {
    name: "Woman's Hat",
    trigger_word: "HATSTODEMO",
    training_dataset: [
      "/assets/demoTrainings/hat1.jpeg",
      "/assets/demoTrainings/hat2.jpeg",
      "/assets/demoTrainings/hat3.jpeg",
      "/assets/demoTrainings/hat4.jpeg",
    ],
    image_generated: [
      "/assets/demoExamples/hat1.jpeg",
      "/assets/demoExamples/hat2.jpeg",
      "/assets/demoExamples/hat3.jpeg",
      "/assets/demoExamples/hat4.jpeg",
    ],
    prompt: `photo of a black haired african woman wearing a tan HATSTODEMO hat with a brown leather band leaning on a fence at a wrench with a sunset in the background, 50mm lens, professional fashion photography`,
  },
  {
    name: "Soltune Speakers",
    trigger_word: "SOLTUNESPEAKERS",
    training_dataset: [
      "/assets/demoTrainings/speaker1.jpeg",
      "/assets/demoTrainings/speaker2.jpeg",
      "/assets/demoTrainings/speaker3.jpeg",
    ],
    image_generated: [
      "/assets/demoExamples/speaker1.jpeg",
      "/assets/demoExamples/speaker2.jpeg",
      "/assets/demoExamples/speaker3.jpeg",
      "/assets/demoExamples/speaker4.jpeg",
      "/assets/demoExamples/speaker5.jpg",
    ],
    prompt: `A photo of a rust colored Soltune SOLTUNESPEAKERS smart speaker with a huge round speaker and smaller cone shaped body on a wooden desk in a bright bedroom with beige walls next to a houseplant, 50 mm lens, professional product photography with contrasting highlight and shadows on the background`,
  },
  {
    name: "Wrist Watch",
    trigger_word: "WATCHTODEMO",
    training_dataset: [
      "/assets/demoTrainings/watch1.jpeg",
      "/assets/demoTrainings/watch2.jpeg",
      "/assets/demoTrainings/watch3.jpeg",
    ],
    image_generated: [
      "/assets/demoExamples/watch1.jpg",
      "/assets/demoExamples/watch2.jpg",
      "/assets/demoExamples/watch3.jpg",
      "/assets/demoExamples/watch4.jpg",
    ],
    prompt: `photo of brown leather WATCHTODEMO watch with a white square face with the label "Quartz" on the lower part of it and gold rounded trim sitting on a table surrounded by a few elegant dry brown twigs and a beige silk fabric. 30mm lens, professional studio photography`,
  },
];

export const mock_model_data = [
  {
    name: "GLASSEESUUI09",
    training_status: "Training Succesful",
    data_created: "17 Nov 2024",
    shoot_type: "products",
    api_url: "demoulr",
    image: "/assets/demoExamples/speaker3.jpeg",
  },
];

export const case_studies = [
  {
    name: "LeadPilot",
    desc: "🎯 Personalized Deep Outreach System",
    slug: "leadpilot",
    lead_magnet:
      "If you're still manually chasing leads, you're already behind. Retena LeadPilot is your AI-powered outreach engine — it finds leads, personalizes every message, handles replies, and books calls on autopilot. More qualified leads. Less grind. Zero excuses.",
    background:
      "Most professional service providers struggle with cold outreach — either sending generic messages that get ignored or spending countless hours trying to personalize every email manually. This leads to poor conversion rates, missed opportunities, and heavy reliance on word-of-mouth or paid ads. RetenaAI saw the opportunity to change that by building LeadPilot — an AI-powered system that automates hyper-personalized outreach at scale. Our goal was to help service providers consistently fill their calendars with qualified leads without hiring an SDR team or running ads.",
    challenges: [
      "Low response rates from generic cold emails",
      "Manual processes that didn’t scale beyond a few prospects a day",
      "Difficulty qualifying leads before conversations",
      "Lack of follow-up systems that feel natural or timely",
      "Limited tech know-how to set up and manage complex CRMs or outreach tools",
    ],
    challenges_title: "Clients often faced:",
    challenges_footer:
      "They needed a done-for-you system that understands their niche, speaks like a human, and delivers results predictably.",
    solution: [
      "Lead scraping using smart filters (industry, location, decision-maker roles, etc.)",
      "Company-level personalization (pulling data from websites, LinkedIn, news mentions)",
      "Icebreaker generation using NLP — tailored to each contact",
      "Automated smart email sequences — written like a human, timed like a machine",
      "AI inbox agent that replies to interested leads and pushes qualified ones into booking flows",
      "Appointment scheduling via a built-in assistant or integrated tools like Calendly",
    ],
    solution_title:
      "We developed Retena LeadPilot, a Personalized Deep Outreach System powered by AI agents. The system combines:",
    solution_footer:
      "The system is fully managed by RetenaAI, and deployable for any service business in under 7 days.",
    features: [
      "Smart lead finder: Crawls databases and public web for up-to-date B2B leads",
      "Deep personalization engine: Tailors messaging based on company news, job titles, and context",
      "Natural language icebreakers: Crafted to sound like they came from the sender — not ChatGPT",
      "Reply handling AI: Filters real replies from out-of-office/autoresponders and responds accordingly",
      "Autonomous appointment setter: Engages and books calls into your calendar",
      "Performance dashboard: Tracks open, reply, and conversion rates in real-time",
    ],
    results: [
      "Up to 10x outreach volume with less effort",
      "Consistent 5–15% reply rates (vs. 1–2% average industry)",
      "Predictable booking of qualified sales calls every week",
      "Zero-hassle setup — we handle the tech, the training, and the system",
    ],
    results_title: "With Retena LeadPilot, clients experience:",
    lessons: [
      "Hyper-personalization beats volume every time",
      "Follow-ups matter more than the first message — timing & tone are key",
      "Outreach without qualification leads to burnout. Smart filters save time.",
      "Most professionals don’t want dashboards — they want results. So we made it hands-off.",
    ],
    lessons_title:
      "Building a cold outreach system is less about tools and more about trust and timing. We discovered:",
    conclusion:
      "Retena LeadPilot is transforming the way professional service providers do outreach — replacing guesswork with systems, hustle with automation, and unpredictability with consistent results. We built a scalable, AI-driven infrastructure that acts like your best SDR — working 24/7, adapting to your voice, and filling your calendar with high-quality leads so you can focus on closing deals.",
  },
  {
    name: "StudioGen",
    desc: "📸 AI Product Photography System",
    slug: "studiogen",
    lead_magnet:
      "Still paying for studio shoots? There’s a better way. Retena StudioGen lets you generate stunning, branded product images without cameras, crews, or editing tools. Scale your visuals. Slash your costs. Launch faster.",
    background:
      "For most product-based businesses — especially small brands and eCommerce sellers — high-quality product photography is expensive, time-consuming, and difficult to scale. Studio shoots, editing cycles, and logistics slow down launch timelines and eat into budgets. Retena StudioGen was built to eliminate this bottleneck by offering a plug-and-play AI solution that transforms raw product images into polished, studio-grade visuals ready for ads, websites, and storefronts — all without a physical camera or studio space.",
    challenges: [
      "High cost of professional product photography",
      "Slow turnaround time for edits and retakes",
      "Limited creative control or lack of variety in photo outputs",
      "Difficulty maintaining brand consistency across visuals",
      "No in-house design or editing expertise",
    ],
    challenges_title: "Clients often faced:",
    challenges_footer: "",
    solution: [
      "AI-generated product photography from basic phone shots or rough images",
      "Scene variation engine that applies multiple backdrops, lighting conditions, and props to fit your brand’s aesthetic",
      "Batch generation for full catalog shooting in a single session",
      "Style training to match previous visuals or brand guidelines",
      "Export-ready files optimized for web, mobile, and print campaigns",
      "Hands-off process — users upload raw images, we do the rest",
    ],
    solution_title:
      "Retena StudioGen is an AI-powered image generation system that enables brands to go from concept to production-ready visuals in hours, not weeks.",
    solution_footer:
      "The system is particularly loved by eCommerce sellers, D2C brands, fashion entrepreneurs, and even digital product creators who need mockups.",
    features: [
      "Rapid image generation: Create studio-level images in minutes",
      "Brand style matching: Consistent output across all visuals",
      "AI model customization: Adaptable to different product types (apparel, cosmetics, food, tech)",
      "Multiple shot variations: Angles, lighting, props, and seasonal themes",
      "One-click export: Web-optimized and ready for upload or campaign",
      "No learning curve: You don’t need to touch Photoshop or Midjourney",
    ],
    results: [
      "Reduce photo production costs by up to 90%",
      "Launch products faster — even same-day visual turnarounds",
      "Maintain visual quality and brand consistency",
      "Stay agile in a competitive, content-hungry market",
    ],
    results_title: "With Retena StudioGen, clients experience:",
    lessons: [
      "Speed and visual diversity matter more than perfect lighting.",
      "Many businesses don’t want more tools — they want creative output on autopilot.",
      "Brand style training improves consistency and client satisfaction significantly.",
      "StudioGen isn’t just about replacing photography — it’s about accelerating marketing velocity.",
    ],
    lessons_title: "",
    conclusion:
      "Retena StudioGen changes how brands create visual content. No more waiting on shoots, retouches, or expensive freelancers. Just upload, generate, and go live with scroll-stopping product visuals that get people clicking — and buying. It's not just faster — it's smarter, scalable, and built for the visual-first world of eCommerce and social media.",
  },
  {
    name: "CloneCast",
    desc: "📡 Content Automation & Deployment System",
    slug: "clonecast",
    lead_magnet:
      "Tired of trying to be everywhere at once? Let CloneCast do it for you. Retena CloneCast turns your voice into content, your scripts into assets, and your ideas into influence — daily, hands-off, and on-brand. Create once. Scale everywhere.",
    background:
      "In today's digital landscape, consistency is everything — but for coaches, creators, consultants, and service brands, showing up online every day with fresh, on-brand content is exhausting. Between scripting, designing, recording, editing, and publishing — the content grind kills productivity and creativity. Retena CloneCast was built to solve that — an AI-driven system that replicates your content voice, automates production, and publishes across platforms — so you stay visible, without burning out.",
    challenges: [
      "Inconsistent online presence due to time or burnout",
      "Difficulty scaling content without a large team",
      "Delays in turning ideas into ready-to-publish assets",
      "Struggles to maintain personal brand voice at scale",
      "No infrastructure for repurposing or reusing existing content",
    ],
    challenges_title: "Clients often faced:",
    challenges_footer: "",
    solution: [
      "Cloning your voice and tone through audio/video samples and writing style",
      "Generating content automatically based on predefined scripts or prompts",
      "Converting scripts into talking-head videos, voiceovers, carousels, and more",
      "Scheduling and auto-publishing to TikTok, Instagram, LinkedIn, and YouTube",
      "Adapting content for different formats and platforms",
      "Receiving input scripts via a custom portal or direct feed from your team",
    ],
    solution_title:
      "Retena CloneCast is an AI Content Automation & Deployment System designed to clone your content voice, generate media at scale, and automate multi-channel publishing — completely hands-off. It works by:",
    solution_footer:
      "Whether you're a founder or a content team, CloneCast removes 90% of the grunt work.",
    features: [
      "Avatar & Voice Cloning: The system replicates your tone and delivery",
      "Script-to-Video/Audio Generation: Turn ideas into content, hands-free",
      "Cross-platform Publishing: Schedule content natively to all major platforms",
      "Smart Repurposing Engine: Convert a single script into multiple formats",
      "Batch Automation: Produce a month’s worth of content in one sitting",
      "Minimal Input, Maximum Output: Just upload your voice sample and scripts — we handle the rest",
    ],
    results: [
      "Consistent brand visibility without being online 24/7",
      "Massive time savings — up to 20 hours per month reclaimed",
      "Improved engagement due to timely, platform-native content",
      "Zero burnout because the system never sleeps",
    ],
    results_title: "With Retena CloneCast, clients experience:",
    lessons: [
      "Consistency > virality — and CloneCast makes consistency effortless",
      "Clients value authenticity at scale — cloning tone is critical",
      "Teams don’t want a tool — they want a system that just works",
      "Let users focus on ideas, not logistics — that’s the true value",
    ],
    lessons_title: "",
    conclusion:
      "Retena CloneCast helps brands show up like pros without working like machines. It's a full-stack AI solution that lets you multiply your voice, dominate timelines, and stay relevant — without ever touching an editor, script, or scheduler again. If content is king — CloneCast is your AI-powered court.",
  },
  {
    name: "UGCPro",
    desc: "🎬 AI UGC Ad Creation & Deployment System",
    slug: "ugcpro",
    lead_magnet:
      "Your next top-performing ad shouldn’t take weeks — or a creative team. Retena UGCPro delivers tested ad concepts, ready-to-shoot scripts, and vetted creators — so you launch fast, convert better, and scale like a pro. Ad creation, finally simplified",
    background:
      "User-Generated Content (UGC) ads are the new frontier of authentic digital marketing — but sourcing great UGC, writing effective scripts, and producing ads that convert is still frustratingly slow for most brands. Most business owners don’t know how to brief creators, write converting ad copy, or test performance quickly enough to scale. That’s where Retena UGCPro comes in — an AI-backed system that handles everything from concept to conversion-ready UGC ads.",
    challenges: [
      `Struggles finding the right UGC creators or "ad hackers"`,
      "Lack of effective scripts and ad copy tailored to their product",
      "Inconsistent ad quality and low performance across platforms",
      "Manual testing with no data-driven optimization",
      "Delays in production cycles, slowing down scaling and iteration",
    ],
    challenges_title: "Clients often faced:",
    challenges_footer: "",
    solution: [
      "Marketing Objective Alignment – We start by understanding the client’s product, offer, and advertising goals",
      "Ad Market Research – Our AI engine analyzes high-performing ads in similar industries to identify proven hooks, angles, and structures",
      "Script & Copy Creation – We generate conversion-optimized UGC scripts and marketing copy tailored to the client's brand",
      "UGC Talent Matching – We pair these scripts with vetted UGC creators from our internal talent network",
      "Post-Production + AI Editing – Final videos are edited with optional overlays, branding, captions, and ad-ready formatting",
      "Meta Ad Setup Assistance – Optionally, we deploy ads or support clients with smart campaign setups",
    ],
    solution_title:
      "Retena UGCPro is an end-to-end system for UGC ad production, powered by AI and optimized for scale. Here’s how it works:",
    solution_footer: "",
    features: [
      "AI-Powered Ad Research: Instantly access ad formats and angles that convert in your niche",
      "Script Generator Engine: Auto-generate viral-style UGC scripts personalized for your offer",
      "Access to Pre-vetted UGC Creators: Skip the hiring chaos — we’ve got your creators",
      "Branded Output: Studio-style polish meets UGC authenticity",
      "Multi-platform Optimizations: TikTok, Meta, YouTube Shorts — we cover them all",
      "Feedback & Iteration Loop: Built-in review and refinement process before final delivery",
    ],
    results: [
      "Faster ad production cycles (from weeks to days)",
      "Access to high-converting creative without an in-house team",
      "Boosted CTRs and lower CACs due to more relatable, authentic content",
      "Ability to scale ads with plug-and-play creative units backed by performance data",
    ],
    results_title: "With Retena UGCPro, Outcomes include:",
    lessons: [
      "UGC without structure is just content — UGCPro makes it convert",
      "Fast, performance-based creative iteration is more valuable than polished perfection",
      "Brands need more than creators — they need UGC systems",
      "Creator-led content performs best when driven by research-backed scripting",
    ],
    lessons_title: "",
    conclusion:
      "Retena UGCPro bridges the gap between creativity and conversions — helping brands deploy high-performing UGC ads without hiring, scripting, editing, or guessing. From idea to launch, it’s the fastest path to scalable UGC ad campaigns that feel human, perform like pros, and grow your business.",
  },
  {
    name: "ConvertFlow",
    desc: "🔄 AI Lead Conversion System",
    slug: "convertflow",
    lead_magnet:
      "Leads aren’t your problem — conversions are. Retena ConvertFlow turns ghosted leads into booked calls, and “maybe laters” into “let’s talk.” Every message matters. This system makes sure it lands.",
    background:
      "Most businesses don’t have a lead generation problem — they have a lead conversion problem. The leads come in, but they don’t show up, don’t respond, or don’t convert. For service providers, coaches, agencies, and founders running paid ads or outreach campaigns, it’s common to lose 70–90% of leads before a call even happens. Retena ConvertFlow was designed to fix that. It’s an AI-powered infrastructure that qualifies, nurtures, and converts leads from initial interest to booked appointments — automatically.",
    challenges: [
      "High drop-off between opt-in and appointment.",
      "Unqualified or unresponsive leads wasting sales time",
      "No consistent follow-up or nurture process",
      "Missed opportunities due to slow responses",
      "Lack of systems to track lead behavior or intent",
    ],
    challenges_title: "Clients often faced:",
    challenges_footer: "",
    solution: [
      "AI-powered lead qualification using smart forms and chat agents",
      "Automated nurturing flows via email, SMS, and DMs",
      "Contextual follow-up messaging based on lead behavior",
      "Calendar integration for auto-booking and reminders",
      "AI inbox agents that respond to objections, questions, and handle pre-sale messaging",
      "Lead tracking dashboard for real-time visibility on progress and drop-offs",
    ],
    solution_title:
      "Retena ConvertFlow is a full-stack AI Lead Conversion System that captures, qualifies, and guides leads through to booking with minimal human input. It combines:",
    solution_footer:
      "The system can plug into your existing landing pages, ads, CRMs, or booking tools — no extra tech needed.",
    features: [
      "Smart Lead Qualification Engine: Filters high-intent leads in real-time",
      "Multi-Channel Nurture Sequences: Personalized follow-ups across email, WhatsApp, and SMS",
      "AI Response Agent: Handles DMs, inbox replies, and FAQs with human-like tone",
      "Integrated Appointment Setter: Pushes warm leads directly to your calendar",
      "Lead Score Tracking: See who’s hot, warm, or cold — and act accordingly",
      "Hands-Free Follow-up: No more ghosted leads or missed chances",
    ],
    results: [
      "Dramatically higher show-up rates for booked calls",
      "More qualified conversations and less sales friction",
      "Improved customer experience with faster responses",
      "Increased conversion rate from ad spend or outreach",
    ],
    results_title: "With Retena ConvertFlow, Results include:",
    lessons: [
      "Speed and context are key to conversion — delay kills interest",
      "Most teams don’t need more leads — they need better systems for handling them",
      "Follow-up isn’t optional — it’s a revenue multiplier",
      "AI can make follow-up feel personal, not robotic — if trained right",
    ],
    lessons_title: "",
    conclusion:
      "Retena ConvertFlow makes sure no lead goes cold, no opportunity slips through, and every sales call feels like a warm, prepared conversation — not a cold pitch. It’s your silent, AI-powered closer working 24/7 to turn interest into income.",
  },
];

export const available_programs = [
  {
    program_name: "AI Systems Integration Bootcamp",
    needed_by: "For AI Enthusiasts",
    card_descpription_text:
      "Gain practical expertise in deploying AI-powered systems using no-code and low-code tools to help businesses automate processes and achieve strategic goals.",
    slug: "systems_intergration",
    card_image: "/assets/int.webp",
    is_disabled: false,
    hero_subtext:
      "The AI System Integration Bootcamp is designed to equip you with the thinking frameworks and automation tools needed to identify business frictions, design smart workflows, and help companies move closer to their goals through seamless AI-powered systems.",
    brochure_link: interbro,
    cohort: "2",
    cohort_start_date: "September 1st, 2025",
    cohort_duration: "4 Months",
    testimonials: [
      {
        name: "Olayinka Moyosore",
        designation: "Cohort 1 Fellow",
        text: "Being a student at Retena AI has been nothing short of life-changing. This program has redefined the way I think about technology, intelligence, and the future of innovation. I’ve been equipped with world-class knowledge and hands-on experience that rivals any global standard. Each lecture challenges my mindset, fuels my creativity, and sharpens my ability to integrate powerful AI systems seamlessly. I no longer see AI as just a tool — I see it as a limitless frontier. Retena AI is not just teaching me to build systems; it’s shaping me into a visionary leader in automation and AI integration. I walk with confidence, speak with insight, and build with precision. I’m not just learning — I’m evolving. My goal isn’t just to be one of the best AI system integrators in the world — it’s to define what that means.",
        image: "/assets/moyo.jpg",
      },
      {
        name: "Elizabeth Jacob",
        designation: "Cohort 1 Fellow",
        text: "RetenaAI didn't just teach me how systems talk to each other, it showed me the why behind it all. Now, I can confidently connect tools, automate workflows, and build smarter systems that actually work together , all from scratch. I came in curious. I’m leaving empowered. RetenaAI didn’t just teach me integration, it taught me transformation.",
        image: "/assets/liz.jpg",
      },
    ],
    course_outline: [
      {
        topic: "Introduction to Generative AI",
        description:
          "Start your journey by uncovering how large language models like GPT work under the hood. Discover why transformers and embeddings changed everything.",
        outcomes: [
          "Understand how LLMs are built and trained",
          "Recognize the core components like embeddings and tokens",
          "Know what responsible AI means and how to apply it",
        ],
        is_elective: false,
      },
      {
        topic: "Prompt Engineering",
        description:
          "Learn to design powerful prompts using the RETENAAI Prompting Framework and think like an LLM to get better business outcomes.",
        outcomes: [
          "Craft prompts that produce high-quality responses",
          "Use role-based context and instructions to steer AI behavior",
          "Choose the right AI model for different use cases",
        ],
        is_elective: false,
      },
      {
        topic: "Generative AI 1",
        description:
          "Understand the hard parts of LLMs and how to enhance them with Retrieval-Augmented Generation (RAG) and vector databases.",
        outcomes: [
          "Understand how RAG improves accuracy with external knowledge",
          "Learn the architecture behind retrieval systems",
          "Explore how vector search powers modern AI tools",
        ],
        is_elective: false,
      },
      {
        topic: "Applied NLP for System Integrators",
        description:
          "Apply NLP techniques like sentiment analysis and entity recognition to extract insights from unstructured business text.",
        outcomes: [
          "Perform sentiment analysis and summarization",
          "Extract business-relevant entities from unstructured text",
          "Use NLP tools in business workflows",
        ],
        is_elective: true,
      },
      {
        topic: "Agentic AI & Automation Thinking",
        description:
          "Build the mindset and foundation of a systems integrator. Learn how to connect APIs, read JSON, and automate with Make and N8N.",
        outcomes: [
          "Understand agent-based systems in business",
          "Work with APIs using Postman and no-code clients",
          "Design smart workflows using automation tools",
        ],
        is_elective: false,
      },
      {
        topic: "AI Agent Design and Development",
        description:
          "Learn to build AI agents with task-specific memory using tools like Flowise, N8N, and Make.com.",
        outcomes: [
          "Design agents with long- and short-term memory",
          "Use multi-agent thinking for advanced workflows",
          "Deploy working agents with no-code tools",
        ],
        is_elective: false,
      },
      {
        topic: "Automation Design",
        description:
          "Combine agents, workflows, and APIs into scalable solutions. Learn troubleshooting, monitoring, and case-based implementation.",
        outcomes: [
          "Build full automation systems with agents and APIs",
          "Troubleshoot and monitor workflows",
          "Scale business solutions using no-code tools",
        ],
        is_elective: false,
      },
      {
        topic: "Business systemisation with AI",
        description:
          "Package your knowledge into a client-ready product. Learn pricing, pitching, and creating a standout AI solution portfolio.",
        outcomes: [
          "Design and present complete AI-powered solutions",
          "Build a portfolio and pitch-ready project",
          "Understand pricing and delivery for clients",
        ],
        is_elective: false,
      },
    ],
    track_phase: {
      heading: "Become a Certified AI System Integrator",
      description:
        "In this final phase, you’ll solve real-world business problems by identifying operational frictions and deploying AI-enabled infrastructures to eliminate them. This is the ultimate test of your system integration capabilities.",
      tracks: [
        "AI Solutions Consulting & Strategy",
        "AI Workflow Design & Integration",
        "AI Product Development - No Code",
      ],
      points: [
        "Solve real-world business problems through a capstone project focused on automation and AI system design.",
        "Receive 1:1 mentorship, expert reviews, and weekly live syncs to guide your specialization journey.",
        " Graduate with a deployable AI system, a case study, and a client-ready portfolio that positions you for freelance or full-time integration roles.",
      ],
    },
    outcome:
      "You won't just know how AI works—you'll prove it by delivering business value with it.",
    payment: {
      total: "₦440,000",
      discounted_total: "220,000",
      first_tranche: "₦160,000",
      discounted_first_tranche: "₦100,000",
      second_tranche: "₦150,000",
      discounted_second_tranche: "₦60,000",
      third_tranche: "₦150,000",
      discounted_third_tranche: "₦60,000",
    },
    faqs: [
      {
        question: "What is the duration of the AI System Integration program?",
        answer:
          "The program runs for 4 months with flexible interactive sessions designed to accommodate both working professionals and dedicated learners.",
      },
      {
        question: "Can I pay in installments?",
        answer:
          "Yes. You can either pay a one-time fee of ₦440,000 or opt for a flexible 3-month installment plan to suit your budget.",
      },
      {
        question: "What happens after the training ends?",
        answer:
          "You’ll have access to three post-training opportunities: join our Pilot Program, get matched through Career Placement, or work with us as an instructor or engineer.",
      },
      {
        question: "How do I get started?",
        answer:
          "First, pay an application fee of ₦10,000, receive a home study kit, take an assessment and attend an interview to complete your onboarding.",
      },
      {
        question: "What are the minimum requirements to join the program?",
        answer:
          "To join the program, you must be at least 16 years old. No prior technical background is required — this beginner-friendly program is designed to take you from foundational knowledge to expert-level skills in AI system integration.",
      },
      {
        question: "How will I learn during the program?",
        answer:
          "You'll gain access to a Learning Management System (LMS) where all your course materials, recorded sessions, and assignments will be available. You'll also be prompted to join interactive live sessions that explore key system integration concepts and tools.",
      },
      {
        question: "Will I take an assessment before joining the program?",
        answer:
          "Yes. Once your application is confirmed, you'll receive access to your Home Study Kit via the learning portal. The date and schedule for your assessment will be communicated, and you'll be notified via email. This is part of the admissions process to ensure you're ready for the program.",
      },
      {
        question: "How does the application process work?",
        answer:
          "Click the 'Apply Now' button to create your learning account. After registration, you’ll be taken to the paywall to complete your ₦10,000 application fee. Once payment is complete, you’ll receive an email with further details on your learning portal activation. Upon activation, you'll be prompted to reset your password and log in. From there, you can access your Home Study Kit and begin preparing for your assessment.",
      },
      {
        question: "How do I pay the tuition fee?",
        answer:
          "We’ve made the payment process seamless and stress-free to give you the best possible experience. Once you’ve been successfully onboarded into the program, you’ll be required to pay your tuition fee directly through the Learning Management System (LMS). Clear instructions and payment options will be available once you log in.",
      },
    ],
    call_to_action: {
      heading: "Ready to Build the Future of AI Integration?",
      description:
        "Join the next generation of system integrators reshaping how businesses run—powered by AI, driven by you.",
    },
  },

  {
    program_name: "AI Strategy & Consulting Bootcamp",
    needed_by: "For Business Leaders & Professionals",
    card_descpription_text:
      "Master the art of identifying business challenges, designing AI strategies, and guiding organizations to impactful AI adoption without deep technical skills.",
    slug: "strategy_and_consulting",
    card_image: "/assets/int.webp",
    is_disabled: false,
    hero_subtext:
      "The AI Consulting & Strategy Program equips you with the insight and frameworks to analyze business processes, identify AI opportunities, and craft actionable strategies that drive measurable results—without the need for deep technical expertise.",
    brochure_link: strbro,
    cohort: "2",
    cohort_start_date: "September 1st, 2025",
    cohort_duration: "3 Months",
    // testimonials: [
    //   {
    //     name: "Sarah Chen",
    //     designation: "Product Manager at TechFlow",
    //     text: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    //     image: "/assets/sysimg.webp",
    //   },
    //   {
    //     name: "Michael Rodriguez",
    //     designation: "CTO at InnovateSphere",
    //     text: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    //     image: "/assets/sysimg.webp",
    //   },
    //   {
    //     name: "Emily Watson",
    //     designation: "Operations Director at CloudScale",
    //     text: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    //     image: "/assets/sysimg.webp",
    //   },
    //   {
    //     name: "James Kim",
    //     designation: "Engineering Lead at DataPro",
    //     text: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises. ",
    //     image: "/assets/sysimg.webp",
    //   },
    // ],
    course_outline: [
      {
        topic: "Introduction to Generative AI",
        description:
          "Start your journey by uncovering how large language models like GPT work under the hood. Discover why transformers and embeddings changed everything.",
        outcomes: [
          "Understand how LLMs are built and trained",
          "Recognize the core components like embeddings and tokens",
          "Know what responsible AI means and how to apply it",
        ],
        is_elective: false,
      },
      {
        topic: "Prompt Engineering",
        description:
          "Learn to design powerful prompts using the RETENAAI Prompting Framework and think like an LLM to get better business outcomes.",
        outcomes: [
          "Craft prompts that produce high-quality responses",
          "Use role-based context and instructions to steer AI behavior",
          "Choose the right AI model for different use cases",
        ],
        is_elective: false,
      },
      {
        topic: "AI Literacy for Business Strategy",
        description:
          "Gain essential AI literacy to advise and strategize effectively. Learn AI vs automation, debunk myths, explore ROI, and analyze case studies.",
        outcomes: [
          "AI vs Automation: Understanding core capabilities and limitations",
          "Common AI misconceptions in business",
          "The economics of AI: Cost, scalability, ROI considerations",
          "Case study analysis: What worked, what didn’t, and why",
        ],
        is_elective: false,
      },
      {
        topic: "Business Process Intelligence & Friction Mapping",
        description:
          "Learn to map business processes, identify bottlenecks, and locate opportunities where AI creates measurable impact.",
        outcomes: [
          "Understanding how businesses operate under the hood",
          "Process mapping, bottleneck identification & decision modeling",
          "Friction analysis: Where AI adds value and where it doesn’t",
          "Value chain thinking and opportunity diagnosis",
        ],
        is_elective: false,
      },
      {
        topic: "Agentic AI & Automation Thinking",
        description:
          "Build the mindset and foundation of a systems integrator. Learn how to connect APIs, read JSON, and automate with Make and N8N.",
        outcomes: [
          "Understand agent-based systems in business",
          "Work with APIs using Postman and no-code clients",
          "Design smart workflows using automation tools",
        ],
        is_elective: false,
      },
      {
        topic: "AI Opportunity Design & Use Case Crafting",
        description:
          "Turn business pain points into actionable AI use cases aligned with strategic goals.",
        outcomes: [
          "Design and structure AI use cases aligned with business goals",
          "Turn business pain points into deployable workflows",
          "Prioritization frameworks (effort-impact matrix, automation readiness)",
          "Build client-ready AI Opportunity Maps",
        ],
        is_elective: false,
      },
      {
        topic: "Business systemisation with AI",
        description:
          "Package your knowledge into a client-ready product. Learn pricing, pitching, and creating a standout AI solution portfolio.",
        outcomes: [
          "Design and present complete AI-powered solutions",
          "Build a portfolio and pitch-ready project",
          "Understand pricing and delivery for clients",
        ],
        is_elective: false,
      },
      {
        topic: "AI Implementation Strategy & Roadmap Design",
        description:
          "Create complete AI transformation strategies, from readiness audits to multi-phase adoption plans.",
        outcomes: [
          "Conduct AI Readiness Audits for organizations",
          "Design short- vs long-term AI transformation plans",
          "Change management, adoption tactics, and stakeholder alignment",
          "Create a full AI roadmap deck with timelines & outcomes",
        ],
        is_elective: false,
      },
      {
        topic: "Client Strategy Labs & Case Practice.",
        description:
          "Simulate client engagements to practice AI diagnosis, recommendation, and presentation.",
        outcomes: [
          "Simulate client discovery calls and diagnosis",
          "Use RETENA templates to create AI recommendation decks",
          "Present strategies, use cases, and roadmap to stakeholders",
          "Peer and mentor feedback cycles",
        ],
        is_elective: false,
      },
      {
        topic: "AI Strategy Deck & Portfolio.",
        description:
          "Build and pitch a complete AI Strategy Plan for a real or simulated business.",
        outcomes: [
          "Build a real-world AI Strategy Plan for a selected business",
          "Includes: Friction map, Opportunity canvas, Roadmap, Tooling overview",
          "Learn how to pitch to executives, investors, or clients",
          "Finalize your consulting portfolio",
        ],
        is_elective: false,
      },
    ],
    outcome:
      "Become a certified AI Consultant & Strategist, equipped to advise businesses, craft AI adoption roadmaps, and lead AI-driven transformation without deep technical builds.",
    payment: {
      total: "₦350,000",
      discounted_total: "175,000",
      first_tranche: "₦130,000",
      discounted_first_tranche: "₦80,000",
      second_tranche: "₦110,000",
      discounted_second_tranche: "₦47,500",
      third_tranche: "₦110,000",
      discounted_third_tranche: "₦47,500",
    },
    faqs: [
      {
        question:
          "What is the duration of the AI Consulting & Strategy program?",
        answer:
          "The program runs for 3 months with flexible interactive sessions designed to suit working professionals and business leaders.",
      },
      {
        question: "Can I pay in installments?",
        answer:
          "Yes. You can either pay a one-time fee of ₦350,000 or opt for a flexible 3-month installment plan to suit your budget.",
      },
      {
        question: "What happens after the training ends?",
        answer:
          "You’ll have access to three post-training opportunities: join our Pilot Program, get matched through Career Placement, or work with us as a strategist, mentor, or instructor.",
      },
      {
        question: "How do I get started?",
        answer:
          "First, pay an application fee of ₦10,000, receive a home study kit, take an assessment, and attend an interview to complete your onboarding.",
      },
      {
        question: "What are the minimum requirements to join the program?",
        answer:
          "To join the program, you must be at least 16 years old. No technical background is required — this program is designed for business professionals and entrepreneurs who want to master AI consulting and strategy.",
      },
      {
        question: "How will I learn during the program?",
        answer:
          "You'll gain access to a Learning Management System (LMS) where all your course materials, recorded sessions, and assignments will be available. You'll also be prompted to join live interactive sessions to apply concepts in real-world scenarios.",
      },
      {
        question: "Will I take an assessment before joining the program?",
        answer:
          "Yes. Once your application is confirmed, you'll receive access to your Home Study Kit via the learning portal. The date and schedule for your assessment will be communicated via email. This ensures you are ready for the program.",
      },
      {
        question: "How does the application process work?",
        answer:
          "Click the 'Apply Now' button to create your learning account. After registration, you’ll be taken to the paywall to complete your ₦10,000 application fee. Once payment is complete, you’ll receive an email with details on your learning portal activation. From there, you can access your Home Study Kit and begin preparing for your assessment.",
      },
      {
        question: "How do I pay the tuition fee?",
        answer:
          "We’ve made the payment process seamless and stress-free. Once you’ve been successfully onboarded into the program, you’ll be required to pay your tuition fee directly through the Learning Management System (LMS). Clear instructions and payment options will be available once you log in.",
      },
    ],
    call_to_action: {
      heading: "Ready to Shape the Future of AI in Business?",
      description:
        "Join the next wave of AI consultants and strategists transforming industries with insight-driven, high-impact solutions.",
    },
  },
];

export const academyfaqs = [
  {
    question: "What is RetenaAI Academy?",
    answer:
      "RetenaAI Academy is Africa’s leading AI training hub, designed to equip aspiring professionals, engineers, and founders with future-ready AI skills. We focus on hands-on learning, real-world projects, and mentorship so you can apply AI to solve actual business problems.",
  },
  {
    question: "Who can join the programs?",
    answer:
      "Our programs are open to beginners with no prior AI or coding experience, working professionals looking to integrate AI into their careers, and entrepreneurs or business leaders seeking to leverage AI for growth. You must be at least 16 years old to apply.",
  },
  {
    question: "Do I need a technical background?",
    answer:
      "No. Our programs are designed for all levels. We’ll take you from foundational AI literacy to practical implementation skills, using both no-code and low-code tools.",
  },
  {
    question: "How does the application process work?",
    answer:
      "Click 'Start Your Application' and create a learning account. Pay the ₦10,000 non-refundable application fee, receive your Home Study Kit and prepare for the entrance assessment, complete the test and attend your interview. If successful, you’ll be officially onboarded into your chosen program.",
  },
  {
    question: "Can I get a scholarship?",
    answer:
      "Yes! For Cohort 2, we’re offering 1 Full Scholarship and 2 Partial Scholarships. Selection is based on performance in the assessment and interview, plus demonstrated commitment to learning.",
  },
  {
    question: "How will I learn during the program?",
    answer:
      "You’ll learn through a mix of interactive live sessions with expert instructors, access to our Learning Management System (LMS) for all course materials, templates, and recorded sessions, and real-world projects and case studies to practice your skills.",
  },
  {
    question: "What happens after I complete the program?",
    answer:
      "Graduates can choose from three post-training pathways: Pilot Program to launch your AI-powered project with our support, Career Placement to get matched with companies and clients, or the RetenaAI Contributor Track to join our ecosystem as an instructor, mentor, or engineer.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Yes. You can pay the full tuition upfront or choose a flexible 3-month installment plan. Details are provided during onboarding.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Absolutely! Upon successful completion, you’ll receive an industry-recognized certification from RetenaAI Academy to showcase your skills and expertise.",
  },
];

export const retenaPrograms = [
  {
    name: "AI Systems Integration",
    description:
      "Gain practical expertise in deploying AI-powered systems using no-code and low-code tools to help businesses automate processes and achieve strategic goals.",
    image: "/assets/int.webp",
    linkText: "Learn More",
    href: "#",
    slug: "systems_intergration",
    disabled: false,
  },
  {
    name: "AI Strategy & Consulting",
    description:
      "Learn how to advise companies on adopting AI technologies, designing strategic systems, and solving business challenges without deep technical implementation.",
    image: "/assets/strategy.webp",
    linkText: "Learn More",
    href: "#",
    slug: "strategy_and_consulting",
    disabled: false,
  },
  {
    name: "Generative AI Engineering",
    description:
      "Master how to build intelligent systems using code. This track focuses on programming AI workflows, automations, and infrastructure with generative models.",
    image: "/assets/genai.webp",
    linkText: "Learn More",
    href: "#",
    slug: "",
    disabled: true,
  },
  {
    name: "AI Automations",
    description:
      "Build AI-powered automation pipelines that optimize operations. Work with tools and platforms to automate repetitive tasks with or without code.",
    image: "/assets/auto.webp",
    linkText: "Learn More",
    href: "#",
    slug: "",
    disabled: true,
  },
  {
    name: "AI Agents Development",
    description:
      "Learn to design, build, and deploy smart agents using both code and no-code tools to solve complex business problems with real-world use cases.",
    image: "/assets/lead.webp",
    linkText: "Learn More",
    href: "#",
    slug: "",
    disabled: true,
  },
];
