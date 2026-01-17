export default function Principles() {
  return (
    <section id="principles" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-medium text-zinc-200 mb-16 tracking-tight">Built on First Principles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
                <div className="space-y-2 philosophy-item border-l border-zinc-800 pl-6">
                    <h3 className="text-xs font-mono text-emerald-500 uppercase tracking-wider">01. Approach</h3>
                    <p className="text-xl text-zinc-300 font-medium">Ethics over Hype</p>
                    <p className="text-sm text-zinc-600 leading-relaxed">We reject the 'move fast and break things' mentality. We build systems that respect human autonomy.</p>
                </div>
                
                <div className="space-y-2 philosophy-item border-l border-zinc-800 pl-6">
                    <h3 className="text-xs font-mono text-emerald-500 uppercase tracking-wider">02. Strategy</h3>
                    <p className="text-xl text-zinc-300 font-medium">Defense over Offense</p>
                    <p className="text-sm text-zinc-600 leading-relaxed">Our tools are designed to protect infrastructure and privacy, not to exploit vulnerabilities.</p>
                </div>

                <div className="space-y-2 philosophy-item border-l border-zinc-800 pl-6">
                    <h3 className="text-xs font-mono text-emerald-500 uppercase tracking-wider">03. Engineering</h3>
                    <p className="text-xl text-zinc-300 font-medium">Performance over Bloat</p>
                    <p className="text-sm text-zinc-600 leading-relaxed">Optimization is a core value. We write efficient, low-overhead code that respects resources.</p>
                </div>

                <div className="space-y-2 philosophy-item border-l border-zinc-800 pl-6">
                    <h3 className="text-xs font-mono text-emerald-500 uppercase tracking-wider">04. Business</h3>
                    <p className="text-xl text-zinc-300 font-medium">Trust over Profit</p>
                    <p className="text-sm text-zinc-600 leading-relaxed">Long-term sustainability is built on trust. We optimize for reliability, not short-term metrics.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
