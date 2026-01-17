
export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030304]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <svg width="24" height="24" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" className="text-zinc-100">
            <rect x="20" y="20" width="24" height="24" transform="rotate(45 32 32)" rx="2"></rect>
            <path d="M28 32c-2 0-3.5-1.5-3.5-3.5s1.5-3.5 3.5-3.5c1 0 1.5 0.5 2 1 1-1.5 2.5-2.5 4.5-2.5 3 0 5 2 5 5 0 0.5 0 1-0.2 1.2 1.2 0.3 2.2 1.3 2.2 2.8 0 1.5-1.2 3-3 3H28z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <line x1="15" y1="15" x2="21" y2="21" strokeLinecap="round"></line> <circle cx="13" cy="13" r="3" fill="currentColor" className="text-zinc-100" stroke="none"></circle>
            <line x1="49" y1="15" x2="43" y2="21" strokeLinecap="round"></line> <circle cx="51" cy="13" r="3" fill="currentColor" className="text-zinc-100" stroke="none"></circle>
            <line x1="49" y1="49" x2="43" y2="43" strokeLinecap="round"></line> <circle cx="51" cy="51" r="3" fill="currentColor" className="text-zinc-100" stroke="none"></circle>
            <line x1="15" y1="49" x2="21" y2="43" strokeLinecap="round"></line> <circle cx="13" cy="51" r="3" fill="currentColor" className="text-zinc-100" stroke="none"></circle>
          </svg>
          <span className="text-sm font-semibold tracking-widest text-zinc-100 font-mono">AETHER TECH</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-mono tracking-wide uppercase text-zinc-500">
          <a href="/#work" className="hover:text-zinc-200 transition-colors duration-300">Engineering</a>
          <a href="/#projects" className="hover:text-zinc-200 transition-colors duration-300">Projects</a>
          <a href="/articles" className="hover:text-zinc-200 transition-colors duration-300">Articles</a>
          <a href="/#principles" className="hover:text-zinc-200 transition-colors duration-300">Principles</a>
        </div>
        <a href="/#contact" className="px-4 py-2 text-xs font-mono border border-zinc-800 rounded hover:bg-zinc-900 text-zinc-300 transition-all hover:border-zinc-700">
          System Access
        </a>
      </div>
    </nav>
  );
}
