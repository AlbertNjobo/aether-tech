import { motion, useScroll, useSpring } from 'framer-motion';
import { ParallaxStarsBackground } from './ParallaxStarsBackground';
import { 
  ArrowRight, 
  Github, 
  Code,
  Shield,
  Server,
  Lock,
  Eye,
  Activity,
  type LucideIcon
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Styles & CSS Animations ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

    :root {
      --accent-red: #ef233c;
      --accent-red-glow: rgba(239, 35, 60, 0.5);
    }
    
    body {
      background-color: #000;
      color: #fff;
      font-family: 'Inter', sans-serif;
    }

    .font-manrope { font-family: 'Manrope', sans-serif; }
    
    /* Animated Shiny CTA Button Styles */
    @property --gradient-angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
    @property --gradient-angle-offset { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
    @property --gradient-percent { syntax: "<percentage>"; initial-value: 20%; inherits: false; }
    @property --gradient-shine { syntax: "<color>"; initial-value: #ef233c; inherits: false; }
    
    .shiny-cta {
      --gradient-angle: 0deg;
      --gradient-angle-offset: 0deg;
      --gradient-percent: 20%;
      --gradient-shine: #ef233c;
      position: relative;
      overflow: hidden;
      border-radius: 9999px;
      padding: 1rem 2.5rem;
      font-size: 1rem;
      font-weight: 500;
      color: #ffffff;
      background: linear-gradient(#000000, #000000) padding-box,
      conic-gradient(from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
      transparent 0%, #ef233c 5%, var(--gradient-shine) 15%, #ef233c 30%, transparent 40%, transparent 100%) border-box;
      border: 2px solid transparent;
      box-shadow: inset 0 0 0 1px #1a1818;
      cursor: pointer;
      isolation: isolate;
      outline-offset: 4px;
      animation: border-spin 2.5s linear infinite;
    }
    
    @keyframes border-spin { to { --gradient-angle: 360deg; } }
    
    .shiny-cta::before {
      content: '';
      pointer-events: none;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 50% 50%, white 0.5px, transparent 0) padding-box;
      background-size: 4px 4px;
      opacity: 0.2;
      mask-image: conic-gradient(from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black);
    }
    
    .shiny-cta::after {
      content: '';
      pointer-events: none;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 1;
      width: 100%;
      aspect-ratio: 1;
      background: linear-gradient(-50deg, transparent, #ef233c, transparent);
      mask-image: radial-gradient(circle at bottom, transparent 40%, black);
      opacity: 0.6;
      animation: shimmer 4s linear infinite;
    }
    
    @keyframes shimmer { to { transform: translate(-50%, -50%) rotate(360deg); } }

    /* Gradient Blur */
    .gradient-blur {
      position: fixed;
      z-index: 5;
      inset: 0 0 auto 0;
      height: 120px;
      pointer-events: none;
    }
    .gradient-blur::before { content: ""; position: absolute; inset:0; z-index: 1; backdrop-filter: blur(0.5px); mask: linear-gradient(to top, transparent, black 25%); }
    .gradient-blur > div:nth-of-type(1) { position: absolute; inset:0; z-index: 2; backdrop-filter: blur(1px); mask: linear-gradient(to top, transparent 12%, black 37%); }
    .gradient-blur > div:nth-of-type(2) { position: absolute; inset:0; z-index: 3; backdrop-filter: blur(2px); mask: linear-gradient(to top, transparent 25%, black 50%); }
    .gradient-blur > div:nth-of-type(3) { position: absolute; inset:0; z-index: 4; backdrop-filter: blur(4px); mask: linear-gradient(to top, transparent 37%, black 62%); }
  `}</style>
);

// --- Components ---

const Navbar = () => {
  return (
    <div className="fixed flex z-50 w-full pt-6 px-4 top-0 left-0 justify-center">
      <nav className="flex items-center justify-between w-full max-w-5xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 shadow-2xl shadow-black/50">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#ef233c] rounded-sm rotate-45" />
          <span className="text-lg font-bold font-manrope tracking-tight text-white">Aether Tech</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['R3KON GPT', 'Solutions', 'Security', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white/5 px-6 py-2 transition-transform active:scale-95">
             <span className="absolute inset-0 border border-white/10 rounded-full" />
             <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ef233c_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
             <span className="absolute inset-[1px] rounded-full bg-black" />
             <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />
             
             <span className="relative z-10 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white">
               Get Access <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
             </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-pointer group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef233c]"></span>
          </span>
          <span className="text-xs font-medium text-red-100/90 tracking-wide font-manrope">
            R3KON GPT Security Intelligence
          </span>
          <ArrowRight className="w-3 h-3 text-red-400 group-hover:translate-x-1 transition-transform" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-semibold tracking-tighter font-manrope leading-[1.1] mb-8"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
            Intelligent Security
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40">
            Assessment & <span className="text-[#ef233c] inline-block relative">
              Analysis
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#ef233c] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          R3KON GPT helps you analyze, understand, and improve cybersecurity posture through offline-first intelligent assessment and clear technical explanations.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="shiny-cta group">
            <span className="relative z-10 flex items-center gap-2">
              Start Assessment <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
          
          <button className="group px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium hover:text-white hover:bg-zinc-800 transition-all flex items-center gap-2">
            <Github className="w-5 h-5" />
            View Documentation
          </button>
        </motion.div>
      </div>

      {/* Logo Strip / Tech Stack */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full mt-32 border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-10"
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <p className="text-sm font-bold tracking-widest text-zinc-500 uppercase shrink-0">Core Focus:</p>
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center w-full">
            {['Security Awareness', 'Risk Identification', 'Defensive Ops', 'Technical Clarity', 'Local Processing'].map((item) => (
              <div key={item} className="text-lg font-semibold text-white font-manrope flex items-center gap-2">
                 <div className="w-2 h-2 bg-[#ef233c] rounded-full" />
                 {item}
              </div>
            ))}
           </div>
        </div>
      </motion.div>
    </section>
  );
};

const FeatureCard = ({ title, description, icon: Icon, delay, className, color = "red" }: { title: string; description: string; icon: LucideIcon; delay: number; className?: string; color?: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "group relative overflow-hidden p-8 border border-white/10 bg-black/50 hover:bg-zinc-900/50 hover:border-white/20 transition-all duration-300 backdrop-blur-sm",
        className
      )}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-6 inline-flex p-3 rounded-lg bg-white/5 border border-white/10 text-white">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-semibold text-white font-manrope mb-3 tracking-tight group-hover:text-[#ef233c] transition-colors">{title}</h3>
        <p className="text-zinc-400 leading-relaxed mb-auto">{description}</p>
        
        {/* Decorative elements */}
        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
          <span className="text-xs font-mono text-[#ef233c]">EXPLORE</span>
          <ArrowRight className="w-4 h-4 text-[#ef233c]" />
        </div>
      </div>
      
      {/* Background Gradient Hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at top right, ${color === 'red' ? '#ef233c' : '#3b82f6'}, transparent 70%)` }}
      />
    </motion.div>
  );
};

const Features = () => {
  return (
    <section className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight font-manrope mb-6"
          >
            Core Functional <br />
            <span className="text-[#ef233c]">Architecture</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400 font-light"
          >
            Modular cybersecurity toolkit where each function acts independently but interconnects through a shared AI reasoning layer.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            title="Code Scanner" 
            description="Analyzes source code to identify potential security weaknesses, unsafe patterns, and poor practices. Logic flow and input handling examination."
            icon={Code}
            delay={0.1}
          />
          
          <FeatureCard 
            title="API Analyzer" 
            description="Evaluates API design and configuration to assess security posture, exposure risks, and misuse potential."
            icon={Server}
            delay={0.2}
          />

          <FeatureCard 
            title="Password Check" 
            description="Evaluates password strength and authentication practices locally and ephemerally, without storing credentials."
            icon={Lock}
            delay={0.3}
          />
          
           <FeatureCard 
            title="Log Analyzer" 
            description="Interprets system and application logs to identify unusual behavior, errors, and security-relevant events."
            icon={Activity}
            delay={0.4}
          />
          
          <FeatureCard 
            title="OWASP Check" 
            description="Maps application characteristics against widely accepted web security risk categories (OWASP) for structured risk profiling."
            icon={Shield}
            delay={0.5}
          />
          
          <FeatureCard 
            title="Privacy First" 
            description="Local processing by default, minimal data retention, and explicit user-controlled inputs."
            icon={Eye}
            delay={0.6}
            color="blue"
          />
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black/60 backdrop-blur-xl border-t border-zinc-900 pt-20 pb-10 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-24 relative z-10">
        <div className="col-span-2">
           <div className="flex items-center gap-2 mb-6">
            <div className="w-5 h-5 bg-[#ef233c] rounded-sm rotate-45" />
            <span className="text-xl font-bold font-manrope tracking-tight text-white">Aether Tech</span>
          </div>
          <p className="text-zinc-500 max-w-xs leading-relaxed">
            R3KON GPT: An offline-first, security-focused AI assistant for intelligent assessment and reasoning.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs font-bold text-[#ef233c] uppercase tracking-widest mb-6">Platform</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            {['Code Scanner', 'API Analyzer', 'Log Analyzer', 'OWASP Check', 'Docs'].map(item => (
              <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-xs font-bold text-[#ef233c] uppercase tracking-widest mb-6">Company</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            {['About Us', 'Methodology', 'Privacy', 'Contact', 'Terms'].map(item => (
              <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Massive Footer Text */}
      <div className="relative flex justify-center items-center py-10 opacity-20 select-none pointer-events-none">
         <h1 className="text-[12vw] leading-none font-bold text-transparent font-manrope tracking-tighter" style={{ WebkitTextStroke: '1px #333' }}>
           R3KON GPT
         </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between text-zinc-600 text-xs uppercase tracking-wider">
        <p>&copy; 2026 Aether Tech. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-zinc-400 transition-colors">Twitter</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-zinc-400 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main Component ---

export default function RedNoirLanding() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#ef233c] selection:text-white overflow-x-hidden relative">
      <GlobalStyles />
      
      {/* Global Interactive Background */}
      <div className="fixed inset-0 z-0 w-full h-full">
         {/* Parallax Stars Background */}
         <ParallaxStarsBackground 
           backgroundColorStart="#1a0505" 
           backgroundColorEnd="#000000"
           speed={0.5}
           className="w-full h-full"
         />

        {/* Overlays for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none z-20" />
      </div>
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#ef233c] origin-left z-[100]"
        style={{ scaleX }}
      />
      
      {/* Gradient Blur Top */}
      <div className="gradient-blur">
        <div />
        <div />
        <div />
        <div />
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Features />
        
        {/* Testimonial / Statement Strip */}
        <div className="w-full bg-[#ef233c] py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-black font-manrope leading-tight mb-8">
              "Understanding, prevention, and improvement. Not exploitation."
            </h3>
            <div className="text-black/80 font-medium text-lg">
              - The R3KON GPT Philosophy
            </div>
          </div>
        </div>

        <section className="py-32 px-6 relative overflow-hidden">
           <div className="absolute inset-0 bg-black/40 backdrop-blur-sm -z-10" />
           <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-5xl md:text-7xl font-bold font-manrope mb-8 tracking-tighter">
               Ready to <span className="text-[#ef233c]">Secure?</span>
             </h2>
             <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
               Join the future of offline-first security assessment.
             </p>
             
             <form className="max-w-md mx-auto flex gap-4">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-[#ef233c] transition-colors"
               />
               <button className="bg-[#ef233c] hover:bg-red-700 text-white font-bold rounded-full px-8 py-4 transition-colors">
                 Join Waitlist
               </button>
             </form>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
