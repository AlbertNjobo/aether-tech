import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { articleIndex } from '../content/articles';

const coverClasses: Record<string, string> = {
  'gradient-ember': 'from-emerald-400/30 via-slate-900 to-zinc-950',
  'gradient-horizon': 'from-sky-400/25 via-slate-900 to-zinc-950',
  'gradient-noir': 'from-purple-400/20 via-slate-900 to-zinc-950',
};

export default function Articles() {
  return (
    <div className="min-h-screen bg-[#030304] text-zinc-300">
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono text-emerald-400/80">/// RESEARCH LOG</span>
              <div className="h-[1px] w-8 bg-zinc-800"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-medium text-zinc-100 tracking-tight">Articles</h1>
            <p className="mt-4 text-sm md:text-base text-zinc-500 max-w-2xl">
              Field reports, engineering notes, and research dispatches from the edge. Structured for longevity and practical implementation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articleIndex.map((article) => (
              <Link
                key={article.slug}
                to={`/articles/${article.slug}`}
                className="group border border-zinc-900 bg-zinc-950/40 rounded-xl overflow-hidden hover:border-emerald-500/40 transition-colors"
              >
                <div className={`h-36 bg-gradient-to-br ${coverClasses[article.cover]} relative`}>
                  <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]"></div>
                  <div className="absolute bottom-3 left-4 text-[10px] uppercase font-mono tracking-[0.25em] text-zinc-300/80">
                    {article.date}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div>
                    <h2 className="text-lg font-medium text-zinc-100 group-hover:text-white transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-sm text-zinc-500 mt-2 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
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
        </section>
      </main>
      <Footer />
    </div>
  );
}
