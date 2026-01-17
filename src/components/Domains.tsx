import { useEffect, useRef, useState } from 'react';
import { Icon } from '@iconify/react';

export default function Domains() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px' // Only trigger when section is well into viewport
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-24 md:py-32 relative border-t border-white/5 bg-[#030304]">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-6">
                <div>
                    <h2 className="text-xs font-mono text-emerald-500/80 mb-4 tracking-widest uppercase">/// DOMAINS</h2>
                    <h3 className="text-3xl md:text-4xl font-medium text-zinc-100 tracking-tight">Core Competencies</h3>
                </div>
                <p className="text-zinc-500 text-sm max-w-md leading-relaxed">
                    Designed for high-security environments where data sovereignty and uptime are non-negotiable.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1: Systems Engineering */}
                <div className="glass-panel p-8 rounded hover:border-zinc-600 transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Icon icon="lucide:arrow-up-right" className="text-zinc-400" />
                    </div>
                    <div className={`mb-6 text-zinc-400 group-hover:text-zinc-100 transition-all duration-700 ${isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'}`}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                            <line x1="6" y1="6" x2="6.01" y2="6"></line>
                            <line x1="6" y1="18" x2="6.01" y2="18"></line>
                        </svg>
                    </div>
                    <h4 className="text-lg font-medium text-zinc-200 mb-3 tracking-tight">Systems Engineering</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                        Distributed systems, offline-first platforms, and resilient architectures designed for the edge.
                    </p>
                </div>

                {/* Card 2: Applied Intelligence */}
                <div className="glass-panel p-8 rounded hover:border-zinc-600 transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Icon icon="lucide:arrow-up-right" className="text-zinc-400" />
                    </div>
                    <div className={`mb-6 text-zinc-400 group-hover:text-zinc-100 transition-all duration-700 ${isVisible ? 'animate-fade-up [animation-delay:0.15s] opacity-100' : 'opacity-0'}`}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                            <rect x="9" y="9" width="6" height="6"></rect>
                            <line x1="9" y1="1" x2="9" y2="4"></line>
                            <line x1="15" y1="1" x2="15" y2="4"></line>
                            <line x1="9" y1="20" x2="9" y2="23"></line>
                            <line x1="15" y1="20" x2="15" y2="23"></line>
                            <line x1="20" y1="9" x2="23" y2="9"></line>
                            <line x1="20" y1="14" x2="23" y2="14"></line>
                            <line x1="1" y1="9" x2="4" y2="9"></line>
                            <line x1="1" y1="14" x2="4" y2="14"></line>
                        </svg>
                    </div>
                    <h4 className="text-lg font-medium text-zinc-200 mb-3 tracking-tight">Applied Intelligence</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                        Decision-support systems, automation engines, and explainable models for complex analysis.
                    </p>
                </div>

                {/* Card 3: Secure & Trusted Computing */}
                <div className="glass-panel p-8 rounded hover:border-zinc-600 transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Icon icon="lucide:arrow-up-right" className="text-zinc-400" />
                    </div>
                    <div className={`mb-6 text-zinc-400 group-hover:text-zinc-100 transition-all duration-700 ${isVisible ? 'animate-fade-up [animation-delay:0.3s] opacity-100' : 'opacity-0'}`}>
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                        </svg>
                    </div>
                    <h4 className="text-lg font-medium text-zinc-200 mb-3 tracking-tight">Secure & Trusted Computing</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                        Data sovereignty, system integrity, and privacy-preserving design. Defense-oriented engineering.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}
