import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

const StatCounter = ({ value, suffix = '', label, duration = 2 }: StatCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <motion.div 
        ref={ref} 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">{label}</div>
    </motion.div>
  );
};

export const StatsSection = () => (
  <section className="py-20 px-6 bg-white border-t border-gray-100">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <StatCounter value={10} suffix="+" label="Projects" />
        <StatCounter value={500} suffix="K" label="Lines of Code" />
        <StatCounter value={99} suffix="%" label="Uptime" duration={2.5} />
        <StatCounter value={24} suffix="/7" label="Monitoring" duration={1.5} />
      </div>
    </div>
  </section>
);

// Infinite Marquee
export const MarqueeSection = () => {
  const items = ['Security', 'AI', 'Performance', 'Trust', 'Privacy', 'Resilience', 'Innovation', 'Engineering'];

  return (
    <section className="py-8 bg-gray-900 overflow-hidden">
      <div className="relative">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...items, ...items].map((item, i) => (
            <span 
              key={i} 
              className="text-white/60 text-lg font-bold uppercase tracking-widest flex items-center gap-4"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
