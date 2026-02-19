import { optimizeUrl } from "@/lib/utils";
import { useMemo } from "react";

// === FULL ASSET LIST (Raw Data) ===
const ALL_ASSETS = [
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771332039/mv-demo4_dxuwgy.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771332287/mv-demo12_bnrhcy.png",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1771409217/mv-vid1_uunsvg.mp4",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763985760/men_sweatshirt1_gnhitj.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763818840/men_tshirt14_vfkq4z.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763986055/men_sweatshirt2_fglvtj.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771431630/cp-demo9_w4l62q.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763819948/gym3_uxiaj9.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763985584/men_kaftan1_gguhz7.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763986742/men_sweatshirt17_omdfzt.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763818686/men_tshirt10_uqmnnn.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763812732/men_tshirt3_aaax15.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771431590/cp-demo19_du1jbc.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763818720/men_tshirt11_lo97qu.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763818803/men_tshirt13_hto4hl.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763987255/men_agbada6_jy30eq.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771431661/cp-demo13_z3ywy1.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763987043/men_agbada1_qwuw26.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763987557/men_agbada13_kftbnk.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763818633/men_tshirt9_arkh9p.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763984923/men_kaftan3_zf4bsr.png",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1763803284/vid1_zdphwh.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1771331077/Input_based_on_1080p_202602131227_tmgh1s.mp4",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763988386/men_senator17_yaajqk.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763987185/men_agbada4_umycvr.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763819461/men_tshirtad1_ejs88w.png",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1771431785/archive5_kyn25y.mov",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763818582/men_tshirt8_ln4k4c.png",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1763802643/vid1_q6wkb8.mp4",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1763802767/vid1_xxbqb1.mp4",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771431519/gb-demo11_aw9yge.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771431558/gb-demo4_cp2udu.png",
  "https://www.retenaai.com/assets/mockups/men_slippers/men_slippers2.png",
  "https://www.retenaai.com/assets/mockups/men_slippers/men_slippers4.png",
  "https://www.retenaai.com/assets/mockups/men_slippers/men_slippers6.png",
  "https://www.retenaai.com/assets/mockups/men_slippers/men_slippers11.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771411002/ads14_ibcrxk.png",
  "https://res.cloudinary.com/dyryfgjro/video/upload/v1771410814/izzy-vid2_wenfcs.mp4",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1763985617/men_kaftan4_y1sgkv.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771410999/ads3_xtw1iv.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771431431/gb-demo10_zvdmze.png",
  "https://res.cloudinary.com/dyryfgjro/image/upload/v1771431475/gb-demo7_dpppmg.png",
];

// Shuffle Function (Fisher-Yates)
const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};



const RetenaMasonryWall = () => {
  // === DATA PREPARATION ===
  // We shuffle once on mount and split into 4 columns
  const columns = useMemo(() => {
    const shuffled = shuffleArray(ALL_ASSETS);
    const colSize = Math.ceil(shuffled.length / 4);

    // Split into 4 chunks
    const c1 = shuffled.slice(0, colSize);
    const c2 = shuffled.slice(colSize, colSize * 2);
    const c3 = shuffled.slice(colSize * 2, colSize * 3);
    const c4 = shuffled.slice(colSize * 3);

    // Duplicate each column to create the "Infinite Loop" effect
    return [
      [...c1, ...c1],
      [...c2, ...c2],
      [...c3, ...c3],
      [...c4, ...c4],
    ];
  }, []); // Run once on mount

  // === ASSET RENDERER ===
  const renderAsset = (src: string, index: number) => {
    const isVideo = src.endsWith(".mp4") || src.endsWith(".mov") || src.includes("/video/");
    const optimizedSrc = optimizeUrl(src);

    return (
      <div
        key={`${src}-${index}`}
        className="w-full shrink-0 rounded-xl overflow-hidden border border-[#14213D] shadow-lg bg-[#14213D]/20 relative"
      >
        {isVideo ? (
          <video
            src={optimizedSrc}
            // Auto-generate poster to prevent black screens
            poster={optimizedSrc.replace(".mp4", ".jpg").replace(".mov", ".jpg")}
            className="w-full h-auto block object-cover opacity-90"
            autoPlay
            muted
            loop
            playsInline
            preload="none" // Essential for pages with many videos
          />
        ) : (
          <img
            src={optimizedSrc}
            alt={`Asset ${index}`}
            loading="lazy" // Ensures images off-screen don't bog down initial load
            decoding="async" // Prepares image decoding off the main thread
            className="w-full h-auto block object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full bg-[#000000] py-20 overflow-hidden">
      {/* === HEADER === */}
      <div className="relative z-20 text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          <span className="text-[#FCA311]">5,000+</span> Fashion Assets
          Generated.
        </h2>
        <p className="text-[#E5E5E5] text-sm md:text-lg max-w-2xl mx-auto opacity-70">
          From Lagos to London. We are powering the visual identity of modern
          African brands.
        </p>
      </div>

      {/* === THE WALL === */}
      <div className="relative w-full h-[800px] overflow-hidden flex justify-center gap-4 px-4">
        {/* GRADIENTS */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#000000] via-[#000000]/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent z-10 pointer-events-none"></div>

        {/* COL 1: UP (Mobile & Desktop) */}
        <div className="w-1/2 md:w-1/4 flex flex-col gap-6 animate-scroll-up">
          {columns[0].map((src, idx) => renderAsset(src, idx))}
        </div>

        {/* COL 2: DOWN (Mobile & Desktop) */}
        <div className="w-1/2 md:w-1/4 flex flex-col gap-6 animate-scroll-down">
          {columns[1].map((src, idx) => renderAsset(src, idx))}
        </div>

        {/* COL 3: UP (Desktop Only) */}
        <div className="hidden md:flex md:w-1/4 flex-col gap-6 animate-scroll-up">
          {columns[2].map((src, idx) => renderAsset(src, idx))}
        </div>

        {/* COL 4: DOWN (Desktop Only) */}
        <div className="hidden md:flex md:w-1/4 flex-col gap-6 animate-scroll-down">
          {columns[3].map((src, idx) => renderAsset(src, idx))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
        .animate-scroll-up {
          animation: scroll-up 40s linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RetenaMasonryWall;