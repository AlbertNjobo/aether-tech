import { Link } from 'react-router-dom';
import { articleIndex } from '../content/articles';

const coverClasses: Record<string, string> = {
  'gradient-ember': 'from-emerald-400/30 via-slate-900 to-zinc-950',
  'gradient-horizon': 'from-sky-400/25 via-slate-900 to-zinc-950',
  'gradient-noir': 'from-purple-400/20 via-slate-900 to-zinc-950',
};

export default function LatestArticles() {
  const latest = articleIndex.slice(0, 3);

  return (
    <section className="py-24 md:py-32 border-t border-white/5 bg-[#050506]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-emerald-400/80">/// RESEARCH LOG</span>
              <div className="h-[1px] w-10 bg-zinc-800"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium text-zinc-100 tracking-tight">Latest Articles</h2>
            <p className="mt-4 text-sm text-zinc-500 max-w-lg">
              Dispatches from frontier deployments, signal work, and system design research.
            </p>
          </div>
          <Link
            to="/articles"
            className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            View all articles
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {latest.map((article) => (
            <Link
              key={article.slug}
              to={`/articles/${article.slug}`}
              className="group border border-zinc-900 bg-zinc-950/40 rounded-xl overflow-hidden hover:border-emerald-500/40 transition-colors"
            >
              <div className={`h-28 bg-gradient-to-br ${coverClasses[article.cover]} relative`}>
                <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]"></div>
                <div className="absolute bottom-3 left-4 text-[10px] uppercase font-mono tracking-[0.25em] text-zinc-300/80">
                  {article.date}
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-medium text-zinc-100 group-hover:text-white transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-zinc-500 mt-2 leading-relaxed">{article.summary}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 border border-zinc-800 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
