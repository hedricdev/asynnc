import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Solutions from '@/components/Solutions';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Cases from '@/components/Cases';
import Projects from '@/components/Projects';
import BlogPreview from '@/components/BlogPreview';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <div style={{ background: '#0B0B0D', minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Services />
        <Process />
        <Cases />
        <Projects />
        <BlogPreview posts={posts} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
