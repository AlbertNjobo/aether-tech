import { Radio, Cpu, Github, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const UIOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none flex flex-col justify-between p-6 md:p-12">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-between items-start pointer-events-auto"
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <Cpu className="text-[#00F0FF]" />
            <h1 className="text-2xl font-bold tracking-[0.2em] text-white">
              AETHER<span className="text-[#00F0FF]">TECH</span>
            </h1>
          </div>
          <div className="text-[10px] text-[#00F0FF] tracking-widest mt-1 font-mono uppercase">
            // Neural Interface: Active
          </div>
        </div>
        
        <div className="hidden md:flex flex-col items-end font-mono text-xs text-[#00F0FF]/80 space-y-1">
          <div className="flex items-center gap-2">
            <span>SYS.STATUS</span>
            <div className="w-2 h-2 bg-[#00FF94] rounded-full animate-pulse" />
          </div>
          <div>LOC: 34.0522° N, 118.2437° W</div>
          <div>ENC: AES-256-GCM</div>
        </div>
      </motion.header>

      {/* Side decorative lines */}
      <div className="absolute top-1/2 left-6 md:left-12 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#00F0FF]/30 to-transparent hidden md:block" />
      <div className="absolute top-1/2 right-6 md:right-12 -translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-[#00F0FF]/30 to-transparent hidden md:block" />

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex justify-between items-end pointer-events-auto"
      >
        <div className="flex gap-4 text-[#00F0FF]/60">
          <Github className="w-5 h-5 hover:text-[#00F0FF] cursor-pointer transition-colors" />
          <Twitter className="w-5 h-5 hover:text-[#00F0FF] cursor-pointer transition-colors" />
          <Linkedin className="w-5 h-5 hover:text-[#00F0FF] cursor-pointer transition-colors" />
        </div>

        <div className="text-right">
          <div className="flex items-center gap-2 justify-end mb-2 text-[#00FF94] font-mono text-xs">
            <Radio size={14} className="animate-pulse" />
            <span>TRANSMISSION SECURE</span>
          </div>
          <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">
            © 2077 Aether Industries. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default UIOverlay;
