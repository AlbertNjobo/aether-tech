const locations = [
  {
    name: 'Matobo Field Node',
    coordinates: '20.5626° S, 28.4930° E',
    detail: 'Rocky terrain test site for low-power autonomy and sensor resilience.',
  },
  {
    name: 'Hwange Signal Corridor',
    coordinates: '18.6296° S, 26.9466° E',
    detail: 'Long-range mesh experiments across sparse infrastructure zones.',
  },
  {
    name: 'Eastern Highlands Lab',
    coordinates: '18.9216° S, 32.4243° E',
    detail: 'High-humidity validation for field casing and thermal stability.',
  },
];

const timeline = [
  {
    date: '2024-11-03',
    title: 'Edge resilience baseline',
    detail: 'Initial field trials establish power budgets and thermal baselines in Matobo.',
  },
  {
    date: '2025-03-18',
    title: 'Signal corridor expansion',
    detail: 'Mesh routing prototypes deployed across the Hwange corridor.',
  },
  {
    date: '2025-09-27',
    title: 'Adaptive protocol launch',
    detail: 'Self-healing sync layers validated in Eastern Highlands humidity cycles.',
  },
  {
    date: '2026-01-17',
    title: 'Frontier research program live',
    detail: 'Multi-site coordination and telemetry windows operational across Zimbabwe.',
  },
];

export default function FrontierResearch() {
  return (
    <section className="py-24 md:py-32 border-y border-white/5 bg-[#050506] relative overflow-hidden">
      <div className="absolute inset-0 bg-topo-lines opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.15),transparent_60%)]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-emerald-400/80">/// FRONTIER RESEARCH</span>
              <div className="h-[1px] w-10 bg-zinc-800"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-zinc-100 tracking-tight">
              Field research in Zimbabwe, engineered for the edge.
            </h2>
            <p className="mt-4 text-sm md:text-base text-zinc-500 leading-relaxed max-w-xl">
              Our research teams operate across Zimbabwe to validate systems in the environments they must endure. From
              rugged terrain to sparse connectivity, we design for durability, sovereignty, and long-term reliability.
            </p>
            <div className="mt-8 grid gap-4">
              {locations.map((site) => (
                <div key={site.name} className="border border-zinc-900 bg-zinc-950/40 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-zinc-200">{site.name}</h3>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400/70">
                      Active
                    </span>
                  </div>
                  <div className="mt-2 text-xs font-mono text-zinc-500">{site.coordinates}</div>
                  <p className="mt-3 text-sm text-zinc-500 leading-relaxed">{site.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-zinc-900 bg-zinc-950/60 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-50 bg-[linear-gradient(120deg,rgba(16,185,129,0.15),transparent_50%)]"></div>
            <div className="relative z-10 space-y-6">
              <div>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Frontier Log</p>
                <h3 className="text-2xl font-medium text-zinc-100 mt-2">Adaptive systems in uncertain terrain.</h3>
                <p className="mt-4 text-sm text-zinc-500 leading-relaxed">
                  We operate where infrastructure is imperfect. That means designing compute that can survive packet loss,
                  energy volatility, and harsh physical conditions. Zimbabwe gives us the frontier conditions that shape
                  lasting technology.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-zinc-900 bg-zinc-950/80 rounded-lg p-4">
                  <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Sites Active</p>
                  <p className="text-2xl font-medium text-zinc-100 mt-2">03</p>
                </div>
                <div className="border border-zinc-900 bg-zinc-950/80 rounded-lg p-4">
                  <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Protocols Tested</p>
                  <p className="text-2xl font-medium text-zinc-100 mt-2">18</p>
                </div>
                <div className="border border-zinc-900 bg-zinc-950/80 rounded-lg p-4">
                  <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Edge Nodes</p>
                  <p className="text-2xl font-medium text-zinc-100 mt-2">42</p>
                </div>
                <div className="border border-zinc-900 bg-zinc-950/80 rounded-lg p-4">
                  <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Deployment Range</p>
                  <p className="text-2xl font-medium text-zinc-100 mt-2">690km</p>
                </div>
              </div>
              <div className="border border-emerald-500/30 bg-emerald-500/10 rounded-lg p-4">
                <p className="text-xs font-mono uppercase tracking-widest text-emerald-300">Field Status</p>
                <p className="text-sm text-zinc-200 mt-2">Seasonal calibration underway. Next synchronization window opens in 12 days.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border border-zinc-900 bg-zinc-950/60 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_60%)]"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-mono text-sky-300/80">/// FIELD TIMELINE</span>
              <div className="h-[1px] w-10 bg-zinc-800"></div>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {timeline.map((item, index) => (
                <div key={item.title} className="relative">
                  <div className="border border-zinc-900 bg-black/30 rounded-lg p-4 h-full">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{item.date}</div>
                    <h4 className="text-sm font-medium text-zinc-100 mt-3">{item.title}</h4>
                    <p className="text-xs text-zinc-500 mt-2 leading-relaxed">{item.detail}</p>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 h-[1px] w-6 bg-zinc-800"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
