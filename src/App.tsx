import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Domains from './components/Domains';
import LiveMetrics from './components/LiveMetrics';
import Projects from './components/Projects';
import Architecture from './components/Architecture';
import Principles from './components/Principles';
import Footer from './components/Footer';
import FrontierResearch from './components/FrontierResearch';
import LatestArticles from './components/LatestArticles';
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';

const Landing = () => (
  <div className="min-h-screen bg-[#030304] text-zinc-400">
    <Navbar />
    <Hero />
    <Domains />
    <FrontierResearch />
    <LiveMetrics />
    <Projects />
    <LatestArticles />
    <Architecture />
    <Principles />
    <Footer />
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/articles/:slug" element={<ArticleDetail />} />
    </Routes>
  );
}

export default App;
