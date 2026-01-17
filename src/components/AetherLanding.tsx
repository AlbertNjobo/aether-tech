import { motion } from 'framer-motion';
import { ConstellationCanvas } from './ConstellationCanvas';
import { MorphingBlob } from './MorphingBlob';
import { CursorGlow } from './CursorGlow';
import { StatsSection, MarqueeSection } from './StatsAndMarquee';
// import { AetherField } from './AetherField'; // Keeping for reference/backup if needed
import { 
  ArrowRight, 
  Shield, 
  Cpu, 
  Layers, 
  Code, 
  Server, 
  Activity, 
  Github, 
  Linkedin,
  Mail,
  Globe,
  type LucideIcon
} from 'lucide-react';
// import { clsx, type ClassValue } from 'clsx';
// import { twMerge } from 'tailwind-merge';

// --- Utility ---
// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// --- IconWrapper removed (using direct styling) ---

// --- Sections ---

const Navbar = () => (
  <nav className="fixed w-full z-50 top-0 left-0 border-b border-gray-200/50 bg-white/90 backdrop-blur-xl shadow-sm transition-all duration-300">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src="/src/assets/aether-logo.png" className="h-7 object-contain opacity-90 hover:opacity-100 transition-opacity" alt="Aether Tech" />
        <span className="font-bold tracking-tight text-gray-900 text-lg">Aether Tech</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-500">
        {['Work', 'Vision', 'Roadmap', 'Contact'].map(item => (
           <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-blue-600 hover:bg-blue-50/50 px-3 py-1 rounded-full transition-all cursor-pointer">{item}</a>
        ))}
      </div>
    </div>
  </nav>
);

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 50, damping: 20 }
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Morphing Blob Background */}
      <MorphingBlob />
      
      {/* Constellation Particles overlay */}
      <ConstellationCanvas />
      
      {/* Light Gradient overlay with refined transparency */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/90 pointer-events-none" />

      <div className="relative z-10 px-6 max-w-5xl mx-auto text-center">
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center"
        >
            <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-blue-700 font-mono text-[10px] uppercase tracking-widest font-bold">Engineering Intelligent Systems</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter text-gray-900 mb-8 leading-[1.05]">
                Technology that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Endures</span>.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
                Aether Tech builds advanced AI systems, secure software platforms, and intelligent tools designed for long-term reliability and real-world impact.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group relative px-8 py-3.5 bg-gray-900 text-white hover:bg-gray-800 transition-all font-semibold text-sm w-full sm:w-auto shadow-md hover:shadow-xl hover:-translate-y-0.5 rounded-xl overflow-hidden">
                    <span className="relative z-10">Explore Our Work</span>
                    <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity" />
                </button>
                <button className="px-8 py-3.5 text-gray-600 hover:text-gray-900 transition-all text-sm border border-gray-200 w-full sm:w-auto hover:border-gray-400 rounded-xl bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 font-medium">
                    Read Our Vision
                </button>
            </motion.div>
        </motion.div>
      </div>

       {/* Scroll Indicator */}
       <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-200" />
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold">Scroll</span>
       </motion.div>
    </section>
  );
};

const BuildPillar = ({ title, desc, icon: Icon, delay, featured = false }: { title: string, desc: string, icon: LucideIcon, delay: number, featured?: boolean }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay, duration: 0.6 }}
        className={`group p-8 border border-gray-100 bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-300 rounded-2xl relative overflow-hidden ${featured ? 'md:row-span-2' : ''}`}
    >
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full" style={{ transition: 'transform 0.8s ease' }} />
        
        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Icon className={`${featured ? 'w-32 h-32' : 'w-24 h-24'} text-blue-600 -rotate-12`} />
        </div>
        <div className={`mb-6 ${featured ? 'w-16 h-16' : 'w-12 h-12'} bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm relative z-10`}>
            <Icon className={`${featured ? 'w-8 h-8' : 'w-6 h-6'}`} />
        </div>
        <h3 className={`${featured ? 'text-2xl' : 'text-xl'} font-bold text-gray-900 mb-3 tracking-tight relative z-10 group-hover:text-blue-700 transition-colors`}>{title}</h3>
        <p className={`text-gray-600 ${featured ? 'text-base' : 'text-sm'} leading-relaxed relative z-10`}>{desc}</p>
        
        {featured && (
            <div className="mt-8 pt-6 border-t border-gray-100 relative z-10">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2 px-2 py-1 bg-green-50 rounded-full border border-green-100">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs font-semibold text-green-700 uppercase tracking-wider">Active Development</span>
                    </div>
                </div>
            </div>
        )}
    </motion.div>
);

const WhatWeBuild = () => (
    <section id="work" className="py-32 px-6 bg-slate-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
            <div className="mb-16 md:text-center max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Core Competencies</h2>
                <p className="text-gray-600">Our engineering focuses on three foundational pillars designed for resilience and scale.</p>
            </div>
            {/* Bento Grid Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Featured Item - Spans 2 rows */}
                <BuildPillar 
                    title="Intelligent Systems" 
                    desc="AI-powered tools for reasoning, analysis, and decision support. Designed with offline and hybrid execution in mind. Our focus is on building AI that works reliably in constrained environments."
                    icon={Cpu}
                    delay={0}
                    featured
                />
                <BuildPillar 
                    title="Secure & Trusted Computing" 
                    desc="Security embedded at the system level. Defensive thinking, privacy awareness, and risk reduction by design."
                    icon={Shield}
                    delay={0.1}
                />
                <BuildPillar 
                    title="Advanced Software Platforms" 
                    desc="Modular architectures, high-performance tooling, and scalable systems."
                    icon={Layers}
                    delay={0.2}
                />
            </div>
        </div>
    </section>
);

const ProjectR3KON = () => (
    <section className="py-32 px-6 relative overflow-hidden border-t border-gray-200 bg-white">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/80 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
         
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
             <div>
                 <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 w-fit">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                    <span className="text-blue-700 font-mono text-xs uppercase tracking-widest font-bold">Featured Production</span>
                 </div>
                 
                 <div className="mb-8">
                    <img src="/src/assets/r3kon-logo.png" className="h-20 object-contain hover:scale-105 transition-transform duration-500 origin-left" alt="R3KON" />
                 </div>

                 <p className="text-gray-600 text-lg mb-10 leading-relaxed font-light">
                     Security Intelligence & Assessment Assistant. <br/>
                     <span className="font-normal text-gray-900">R3KON GPT</span> is an offline-first, privacy-conscious AI system designed to help developers and teams understand and improve cybersecurity posture instantly.
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                    {[
                        { icon: Code, text: "Static Analysis" },
                        { icon: Server, text: "Architecture Review" },
                        { icon: Activity, text: "Anomaly Detection" },
                        { icon: Shield, text: "Risk Assessment" },
                    ].map((feat, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors"
                        >
                            <feat.icon className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-semibold text-gray-700">{feat.text}</span>
                        </motion.div>
                    ))}
                 </div>
                 
                 <button className="flex items-center gap-2 text-gray-900 border-b-2 border-blue-600 pb-1 hover:text-blue-600 hover:border-blue-700 transition-all text-sm uppercase tracking-wider font-bold group">
                     Explore Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </button>
             </div>
             
             {/* Visual Container */}
             <div className="relative aspect-square bg-gray-50 border border-gray-200 rounded-3xl p-12 flex items-center justify-center overflow-hidden shadow-inner">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
                
                {/* Simulated Nodes Graph */}
                <div className="relative z-10 w-full h-full max-w-sm max-h-sm bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col gap-4">
                    <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <div className="space-y-3">
                        <div className="h-2 w-3/4 bg-gray-100 rounded animate-pulse" />
                        <div className="h-2 w-1/2 bg-gray-100 rounded animate-pulse delay-75" />
                        <div className="h-24 w-full bg-blue-50/50 rounded border border-blue-100 flex items-center justify-center">
                            <Shield className="w-10 h-10 text-blue-600 opacity-50" />
                        </div>
                         <div className="h-2 w-2/3 bg-gray-100 rounded animate-pulse delay-150" />
                    </div>
                </div>
             </div>
         </div>
    </section>
);

const ProjectNyx = () => (
    <section className="py-32 px-6 border-t border-gray-200 bg-gray-50/50">
         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
             {/* Order Swap on desktop */}
             <div className="order-2 lg:order-1 relative aspect-video bg-white border border-gray-200 rounded-3xl flex items-center justify-center shadow-sm overflow-hidden group">
                 <div className="absolute inset-0 bg-gray-100/50 group-hover:bg-transparent transition-colors duration-500" />
                 
                 {/* Browser Mockup */}
                 <div className="w-3/4 h-3/4 bg-white rounded-xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden transform group-hover:scale-105 transition-transform duration-700 ease-out">
                    <div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center px-3 gap-2">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                        <div className="ml-4 flex-1 h-4 bg-gray-100 rounded-full" />
                    </div>
                    <div className="flex-1 flex items-center justify-center p-6 bg-slate-50">
                        <div className="text-center">
                            <Globe className="w-12 h-12 text-gray-300 mx-auto mb-3" strokeWidth={1.5} />
                            <div className="text-gray-400 text-xs font-mono uppercase tracking-widest">Secure Environment</div>
                        </div>
                    </div>
                 </div>
             </div>
             
             <div className="order-1 lg:order-2">
                 <div className="inline-block px-3 py-1 bg-gray-900 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-6">Coming Soon</div>
                 <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Nyx Browser</h2>
                 <p className="text-gray-500 mb-6 font-medium text-lg">Security-First Browsing Environment.</p>
                 <p className="text-gray-600 mb-8 leading-relaxed text-base">
                     A research-driven browser concept focused on transparency, permission control, and user trust. Minimal interface. Explicit security signals. No hidden behavior.
                 </p>
                 <button className="text-gray-400 cursor-not-allowed text-sm font-medium border border-gray-200 px-6 py-2 rounded-lg bg-gray-50">
                    Private Beta Access (Closed)
                 </button>
             </div>
         </div>
    </section>
);

const Philosophy = () => (
    <section className="py-32 px-6 bg-white text-gray-900 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 tracking-tight">How We Think</h2>
            
            <div className="grid sm:grid-cols-2 gap-12 text-left">
                {[
                    { head: "Ethics over hype", body: "We value precision and explainability." },
                    { head: "Defense over offense", body: "Security is about resilience, not exploitation." },
                    { head: "Performance over bloat", body: "Lean, efficient systems that respect resources." },
                    { head: "Trust over short-term profit", body: "Guided by values that ensure longevity." }
                ].map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="pl-6 border-l-4 border-gray-100 hover:border-blue-600 transition-colors py-1 group"
                    >
                        <h3 className="text-gray-900 font-bold mb-2 text-lg group-hover:text-blue-700 transition-colors">{item.head}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">{item.body}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

const Roadmap = () => (
    <section id="roadmap" className="py-24 px-6 border-t border-gray-200 bg-slate-50">
        <div className="max-w-4xl mx-auto">
             <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-12">Research & Roadmap</h2>
             <div className="space-y-12">
                <p className="text-3xl text-gray-900 font-light leading-tight">Aether Tech evolves through deliberate, structured execution.</p>
                <div className="space-y-8 pl-4 border-l border-gray-200">
                    {[
                        "AI optimization and performance engineering",
                        "Modular cybersecurity and intelligence tooling",
                        "Privacy-respecting analytics and UX"
                    ].map((item, i) => (
                         <div key={i} className="flex items-start gap-4 relative">
                            <span className="w-3 h-3 mt-1.5 bg-white border-2 border-blue-500 rounded-full absolute -left-[23px]" />
                            <p className="text-gray-700 font-medium text-lg">{item}</p>
                        </div>
                    ))}
                </div>
             </div>
        </div>
    </section>
);

const Footer = () => (
    <footer id="contact" className="py-20 px-6 border-t border-gray-200 bg-white text-gray-900">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
            <div>
                 <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 bg-blue-600 rotate-45" />
                    <span className="text-gray-900 font-bold tracking-tight">Aether Tech</span>
                 </div>
                 <div className="flex gap-4">
                    <a href="#" className="p-3 border border-gray-200 text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all rounded-full"><Github className="w-4 h-4" /></a>
                    <a href="#" className="p-3 border border-gray-200 text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all rounded-full"><Linkedin className="w-4 h-4" /></a>
                    <a href="#" className="p-3 border border-gray-200 text-gray-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all rounded-full"><Mail className="w-4 h-4" /></a>
                 </div>
            </div>
            
            <div className="text-right">
                <p className="text-gray-400 text-sm mb-2 font-medium">Built by Engineers and Researchers</p>
                <div className="group inline-block cursor-default">
                    <p className="text-gray-900 font-bold group-hover:text-blue-600 transition-colors duration-500">Technology that endures.</p>
                    <div className="w-0 group-hover:w-full h-[2px] bg-blue-600 transition-all duration-700 ease-out mt-1" />
                </div>
                <p className="text-xs text-gray-300 mt-8">© {new Date().getFullYear()} Aether Tech. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default function AetherLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-600 selection:text-white scroll-smooth">
      {/* Cursor Glow Effect */}
      <CursorGlow />
      
      <Navbar />
      <Hero />
      <WhatWeBuild />
      <StatsSection />
      <ProjectR3KON />
      <ProjectNyx />
      <Philosophy />
      <Roadmap />
      <MarqueeSection />
      <Footer />
    </div>
  );
}
