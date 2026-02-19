

const ROIs = () => {
  const metrics = [
    {
      id: 1,
      title: "Production Cost",
      stat: "-85%",
      description: "Average reduction in campaign costs. Zero model fees, zero studio rentals, zero logistics.",
      icon: (
        <svg className="w-6 h-6 text-[#FCA311]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Turnaround Time",
      stat: "24hrs",
      description: "From raw phone photo to billboard-ready campaign. Skip the 3-week editing queue.",
      icon: (
        <svg className="w-6 h-6 text-[#FCA311]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Ad Performance",
      stat: "3x",
      description: "Higher click-through rates (CTR) and drastically reduced Cost Per Lead (CPL) on Meta Ads.",
      icon: (
        <svg className="w-6 h-6 text-[#FCA311]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    }
  ];

  return (
    <div className="relative w-full bg-[#000000] py-24 md:py-32 overflow-hidden border-t border-b border-[#14213D]">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FCA311] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* === HEADER === */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-block bg-[#14213D]/50 border border-[#14213D] rounded-full px-4 py-1.5 mb-6">
            <span className="text-xs font-mono text-[#E5E5E5] tracking-widest uppercase">
              The Math Makes Sense
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#FFFFFF] mb-6 tracking-tight">
            Your <span className="text-[#FCA311]">Unfair Advantage.</span>
          </h2>
          <p className="text-[#E5E5E5] text-base md:text-xl max-w-2xl mx-auto opacity-80 leading-relaxed">
            Why top brands are abandoning traditional photoshoots for the RetenaAI Engine.
          </p>
        </div>

        {/* === METRICS GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {metrics.map((metric) => (
            <div 
              key={metric.id}
              className="relative p-8 md:p-10 bg-[#14213D]/20 backdrop-blur-sm border border-[#14213D] rounded-2xl group hover:bg-[#14213D]/40 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-[#14213D] border border-[#FCA311]/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {metric.icon}
              </div>

              {/* Stat Number */}
              <h3 className="text-5xl md:text-7xl font-bold text-[#FFFFFF] mb-4 tracking-tighter">
                {metric.stat}
              </h3>

              {/* Title & Description */}
              <h4 className="text-lg font-bold text-[#FCA311] mb-3 uppercase tracking-wider">
                {metric.title}
              </h4>
              <p className="text-[#E5E5E5] text-sm md:text-base opacity-70 leading-relaxed">
                {metric.description}
              </p>

              {/* Subtle hover accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FCA311] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ROIs;