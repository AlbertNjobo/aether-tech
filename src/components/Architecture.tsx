import { Icon } from '@iconify/react';

export default function Architecture() {
  return (
    <section className="py-24 border-y border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-xs font-mono text-emerald-500/80 mb-2 tracking-widest uppercase">/// ARCHITECTURE</h2>
                    <h3 className="text-2xl font-medium text-zinc-200">Modular Data Flow</h3>
                </div>
            </div>

            {/* Animated Diagram */}
            <div className="w-full h-[300px] md:h-[400px] relative border border-zinc-900 bg-zinc-950/50 rounded flex items-center justify-center overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Diagram Content */}
                <div className="relative z-10 w-full max-w-3xl flex justify-between items-center px-6 md:px-12">
                    
                    {/* Input Node */}
                    <div className="flex flex-col items-center gap-4 relative group">
                        <div className="w-16 h-16 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center animate-pulse-ring relative z-10 hover:border-emerald-500/50 transition-colors">
                            <Icon icon="lucide:database" width="24" className="text-zinc-400 group-hover:text-emerald-400" />
                        </div>
                        <span className="text-xs font-mono text-zinc-600 uppercase tracking-wider">Ingest</span>
                    </div>

                    {/* Connection 1 */}
                    <div className="flex-1 h-[1px] bg-zinc-800 relative mx-4 hidden md:block">
                        <div className="absolute top-1/2 left-0 h-0.5 w-6 bg-emerald-500/50 rounded-full -translate-y-1/2 animate-flow" style={{ animationDelay: '0s' }}></div>
                    </div>

                    {/* Processing Node (Center) */}
                    <div className="flex flex-col items-center gap-4 relative group">
                        <div className="w-24 h-24 rounded border border-zinc-600 bg-zinc-900/80 flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:border-emerald-500/50 transition-colors">
                            <Icon icon="lucide:server" width="32" className="text-zinc-200" />
                            {/* Spinner ring square */}
                            <div className="absolute inset-0 rounded border-t border-zinc-400 animate-spin-slow transition-all duration-[3000ms]"></div>
                        </div>
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Processing</span>
                    </div>

                    {/* Connection 2 */}
                    <div className="flex-1 h-[1px] bg-zinc-800 relative mx-4 hidden md:block">
                        <div className="absolute top-1/2 left-0 h-0.5 w-6 bg-emerald-500/50 rounded-full -translate-y-1/2 animate-flow" style={{ animationDelay: '1s' }}></div>
                    </div>

                    {/* Output Node */}
                    <div className="flex flex-col items-center gap-4 relative group">
                        <div className="w-16 h-16 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center relative z-10 hover:border-emerald-500/50 transition-colors">
                            <Icon icon="lucide:shield" width="24" className="text-zinc-400 group-hover:text-emerald-400" />
                        </div>
                        <span className="text-xs font-mono text-zinc-600 uppercase tracking-wider">Secure State</span>
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
}
