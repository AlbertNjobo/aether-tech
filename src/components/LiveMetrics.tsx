export default function LiveMetrics() {
  return (
    <section className="py-12 border-y border-white/5 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                <div className="space-y-1">
                    <div className="text-3xl font-mono font-medium text-zinc-100">99.99%</div>
                    <div className="text-xs font-mono uppercase text-zinc-600 tracking-wider">System Uptime</div>
                </div>
                <div className="space-y-1">
                    <div className="text-3xl font-mono font-medium text-zinc-100">12ms</div>
                    <div className="text-xs font-mono uppercase text-zinc-600 tracking-wider">Global Latency</div>
                </div>
                <div className="space-y-1">
                    <div className="text-3xl font-mono font-medium text-zinc-100">2.4M+</div>
                    <div className="text-xs font-mono uppercase text-zinc-600 tracking-wider">Threats Blocked</div>
                </div>
                <div className="space-y-1">
                    <div className="text-3xl font-mono font-medium text-zinc-100">Zero</div>
                    <div className="text-xs font-mono uppercase text-zinc-600 tracking-wider">Data Leaks</div>
                </div>
            </div>
        </div>
    </section>
  );
}
