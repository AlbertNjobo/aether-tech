export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950 py-16 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div>
                <div className="flex items-center gap-3 mb-6">
                    {/* SVG Logo Footer */}
                    <svg width="24" height="24" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" className="text-zinc-100">
                        <rect x="20" y="20" width="24" height="24" transform="rotate(45 32 32)" rx="2"></rect>
                        <path d="M28 32c-2 0-3.5-1.5-3.5-3.5s1.5-3.5 3.5-3.5c1 0 1.5 0.5 2 1 1-1.5 2.5-2.5 4.5-2.5 3 0 5 2 5 5 0 0.5 0 1-0.2 1.2 1.2 0.3 2.2 1.3 2.2 2.8 0 1.5-1.2 3-3 3H28z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <line x1="15" y1="15" x2="21" y2="21" strokeLinecap="round"></line> <circle cx="13" cy="13" r="3" fill="currentColor" className="text-zinc-100" stroke="none"></circle>
                        <line x1="49" y1="15" x2="43" y2="21" strokeLinecap="round"></line> <circle cx="51" cy="13" r="3" fill="currentColor" className="text-zinc-100" stroke="none"></circle>
                        <line x1="49" y1="49" x2="43" y2="43" strokeLinecap="round"></line> <circle cx="51" cy="51" r="3" fill="currentColor" className="text-zinc-100" stroke="none"></circle>
                        <line x1="15" y1="49" x2="21" y2="43" strokeLinecap="round"></line> <circle cx="13" cy="51" r="3" fill="currentColor" className="text-zinc-100" stroke="none"></circle>
                    </svg>
                    <span className="text-lg font-medium tracking-tight text-zinc-100">Aether Tech</span>
                </div>
                <p className="text-zinc-500 text-sm max-w-xs mb-8">
                    Engineering intelligence that endures.
                </p>
                <div className="text-xs text-zinc-700 font-mono">
                    © 2024 Aether Technologies.
                </div>
            </div>

            <div className="flex gap-8 text-xs font-mono text-zinc-400 uppercase tracking-wider">
                <a href="/articles" className="hover:text-white transition-colors">Articles</a>
                <a href="#" className="hover:text-white transition-colors">GitHub</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Security.txt</a>
                <a href="mailto:hello@aether.tech" className="hover:text-white transition-colors">Contact</a>
            </div>
        </div>
    </footer>
  );
}
