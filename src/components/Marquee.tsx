import { motion } from "framer-motion";

type MarqueeProps = {
  items: string[];
  speed?: number;
  className?: string;
};

/** Seamless infinite ticker. Renders the list twice and loops half its width. */
export function Marquee({ items, speed = 32, className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <motion.div
        className="flex w-max items-center gap-10 py-1"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-10 whitespace-nowrap text-sm font-medium tracking-tight text-navy/45"
          >
            {item}
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-amber/60" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
