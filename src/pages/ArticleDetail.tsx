import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { articleIndex, getArticleMeta, loadArticle } from '../content/articles';

export default function ArticleDetail() {
  const { slug } = useParams();
  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(null);
  const article = slug ? getArticleMeta(slug) : undefined;

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      if (!slug) {
        return;
      }

      const module = await loadArticle(slug);
      if (!isMounted) {
        return;
      }

      setMDXContent(() => (module ? module.default : null));
    };

    load();

    return () => {
      isMounted = false;
    };
  }, [slug]);

  const latest = useMemo(() => articleIndex.filter((entry) => entry.slug !== slug).slice(0, 2), [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#030304] text-zinc-300">
        <Navbar />
        <main className="pt-24 pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-sm font-mono text-zinc-500">/// Article not found</p>
            <h1 className="text-3xl font-medium text-zinc-100 mt-4">Research log unavailable.</h1>
            <Link to="/articles" className="inline-flex mt-6 text-sm font-mono text-emerald-400/80">
              Return to articles
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030304] text-zinc-300">
      <Navbar />
      <main className="pt-24 pb-20">
        <section className="max-w-3xl mx-auto px-6">
          <div className="mb-12 space-y-4">
            <Link to="/articles" className="text-xs font-mono uppercase tracking-widest text-emerald-400/80">
              /// Research log
            </Link>
            <h1 className="text-4xl md:text-5xl font-medium text-zinc-100 tracking-tight">{article.title}</h1>
            <div className="flex flex-wrap gap-3 text-xs font-mono text-zinc-500">
              <span>{article.date}</span>
              <span className="text-zinc-700">/</span>
              <span>{article.tags.join(' / ')}</span>
            </div>
            <p className="text-base text-zinc-500 leading-relaxed">{article.summary}</p>
          </div>

          <article className="article-content space-y-6">
            {MDXContent ? <MDXContent /> : <p className="text-sm text-zinc-500">Loading report...</p>}
          </article>
        </section>

        <section className="max-w-5xl mx-auto px-6 mt-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-zinc-100">More dispatches</h2>
            <Link to="/articles" className="text-xs font-mono text-zinc-500 hover:text-zinc-200">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {latest.map((entry) => (
              <Link
                key={entry.slug}
                to={`/articles/${entry.slug}`}
                className="group border border-zinc-900 bg-zinc-950/40 rounded-xl p-5 hover:border-emerald-500/40 transition-colors"
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500">{entry.date}</div>
                <h3 className="text-lg text-zinc-100 mt-3 group-hover:text-white transition-colors">{entry.title}</h3>
                <p className="text-sm text-zinc-500 mt-2">{entry.summary}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 border border-zinc-800 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
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
