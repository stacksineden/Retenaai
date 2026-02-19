

// === MOCK DATA (Reviews) ===
const REVIEWS_ROW_1 = [
  {
    name: "Adebayo S.",
    role: "Creative Director",
    text: "We used to spend ₦500k and a full week on lookbook shoots. Retena gave us a billboard-ready campaign in 24 hours from phone pictures. Unbelievable.",
  },
  {
    name: "Chioma E.",
    role: "Fashion Entrepreneur",
    text: "The 8K resolution is what shocked me. You can zoom in and literally see the thread and texture of the fabric. My sales tripled after posting these.",
  },
  {
    name: "Tunde O.",
    role: "Brand Manager",
    text: "I was skeptical about AI replacing my photographer, but the ad-calibrated colors match exactly what we need for Instagram conversions. We've completely switched.",
  },
  {
    name: "Sarah L.",
    role: "Boutique Owner",
    text: "No models, no studio booking, no editing delays. Just sent them my raw mannequin shots and got back an international-standard editorial.",
  },
];

const REVIEWS_ROW_2 = [
  {
    name: "Kemi A.",
    role: "Womenswear Designer",
    text: "The team's attention to detail is unmatched. They don't just edit photos; they understand fashion lighting and editorial composition perfectly.",
  },
  {
    name: "David M.",
    role: "E-commerce Founder",
    text: "Retena is the best kept secret in African fashion right now. Our competitors keep asking which agency we flew in for our latest campaign.",
  },
  {
    name: "Grace T.",
    role: "Marketing Head",
    text: "Fast, premium, and strictly professional. The fact that I don't have to organize logistics for models and makeup artists anymore is a massive relief.",
  },
  {
    name: "Victor U.",
    role: "Menswear Stylist",
    text: "I sent an ordinary iPhone photo of a suit. What came back looked like it was shot for the cover of GQ. Worth every single penny.",
  },
];

// Helper to render 5 solid stars
const StarRating = () => (
  <div className="flex gap-1 mb-3">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="w-4 h-4 text-[#FCA311]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Reviews = () => {
  return (
    <div className="relative w-full bg-[#000000] py-24 overflow-hidden">
      
      {/* === HEADER === */}
      <div className="relative z-20 text-center mb-16 px-4 max-w-3xl mx-auto">
        <div className="inline-block bg-[#FCA311]/10 backdrop-blur-md border border-[#FCA311]/30 rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-6">
          <span className="text-[10px] md:text-xs font-mono text-[#FCA311] tracking-widest uppercase">
            ● Industry Validated
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-[#FFFFFF] mb-6 tracking-tight leading-tight">
          Don't just take <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCA311] to-[#E5E5E5]">our word for it.</span>
        </h2>
        <p className="text-[#E5E5E5] text-sm md:text-lg opacity-80 leading-relaxed">
          Top designers and brands are already using Retena to dominate their markets. Here is what happens when you upgrade your visuals.
        </p>
      </div>

      {/* === MARQUEE CONTAINER === */}
      <div className="relative w-full flex flex-col gap-6 md:gap-8">
        
        {/* FADE MASKS (Creates the illusion that cards fade into the darkness at the edges) */}
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-[#000000] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-[#000000] to-transparent z-10 pointer-events-none"></div>

        {/* ROW 1: SCROLL LEFT */}
        <div className="flex w-max animate-marquee-left hover:pause-animation">
          {/* We duplicate the array inside the map to create a seamless infinite loop */}
          {[...REVIEWS_ROW_1, ...REVIEWS_ROW_1].map((review, idx) => (
            <div 
              key={`row1-${idx}`} 
              className="w-[300px] md:w-[400px] shrink-0 mx-3 md:mx-4 p-6 md:p-8 bg-[#14213D]/30 backdrop-blur-sm border border-[#14213D] rounded-2xl hover:border-[#FCA311]/50 transition-colors duration-300 group cursor-default"
            >
              <StarRating />
              <p className="text-[#E5E5E5] text-sm md:text-base mb-6 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#14213D] to-[#FCA311]/20 border border-[#FCA311]/30 flex items-center justify-center">
                  <span className="text-[#FCA311] font-bold text-sm">{review.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-[#FFFFFF] font-bold text-sm">{review.name}</h4>
                  <p className="text-[#FCA311] text-xs font-mono uppercase tracking-wider mt-0.5">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2: SCROLL RIGHT */}
        <div className="flex w-max animate-marquee-right hover:pause-animation">
          {[...REVIEWS_ROW_2, ...REVIEWS_ROW_2].map((review, idx) => (
            <div 
              key={`row2-${idx}`} 
              className="w-[300px] md:w-[400px] shrink-0 mx-3 md:mx-4 p-6 md:p-8 bg-[#14213D]/20 backdrop-blur-sm border border-[#14213D] rounded-2xl hover:border-[#FCA311]/50 transition-colors duration-300 group cursor-default"
            >
              <StarRating />
              <p className="text-[#E5E5E5] text-sm md:text-base mb-6 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#14213D] to-[#FCA311]/20 border border-[#FCA311]/30 flex items-center justify-center">
                  <span className="text-[#FCA311] font-bold text-sm">{review.name.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-[#FFFFFF] font-bold text-sm">{review.name}</h4>
                  <p className="text-[#FCA311] text-xs font-mono uppercase tracking-wider mt-0.5">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* === CUSTOM STYLES FOR MARQUEE === */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 40s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 40s linear infinite;
        }
        /* Pauses the scrolling when the user hovers over a review to read it */
        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>

    </div>
  );
};

export default Reviews;