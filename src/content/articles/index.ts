export type ArticleMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  cover: string;
};

type ArticleModule = {
  default: React.ComponentType;
  meta: Omit<ArticleMeta, 'slug'>;
};

type ArticleImporter = () => Promise<{ default: React.ComponentType; meta: Record<string, unknown> } | ArticleModule>;

const articles: Record<string, ArticleImporter> = {
  'field-operating-systems': () => import('./field-operating-systems.mdx'),
  'terrain-signals': () => import('./terrain-signals.mdx'),
  'zero-knowledge-audits': () => import('./zero-knowledge-audits.mdx'),
};


export const articleIndex: ArticleMeta[] = [
  {
    slug: 'field-operating-systems',
    title: 'Field Operating Systems',
    date: '2026-01-17',
    tags: ['systems', 'field', 'reliability'],
    summary: 'Designing resilient operating layers for equipment running at the edge of connectivity.',
    cover: 'gradient-ember',
  },
  {
    slug: 'terrain-signals',
    title: 'Terrain Signals',
    date: '2026-01-17',
    tags: ['communications', 'research', 'signal'],
    summary: 'Mapping signal collapse across remote terrain and designing for imperfect transmission.',
    cover: 'gradient-horizon',
  },
  {
    slug: 'zero-knowledge-audits',
    title: 'Zero-Knowledge Audits',
    date: '2026-01-17',
    tags: ['security', 'privacy', 'research'],
    summary: 'A field-ready framework for proving system integrity without exposing sensitive data.',
    cover: 'gradient-noir',
  },
];

export const loadArticle = async (slug: string) => {
  const loader = articles[slug];
  if (!loader) {
    return null;
  }

  const module = await loader();
  return module as ArticleModule;
};

export const getArticleMeta = (slug: string) => articleIndex.find((article) => article.slug === slug);
