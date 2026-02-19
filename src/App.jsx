import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Services from './components/Services';
import Process from './components/Process';
import Cases from './components/Cases';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: '#0B0B0D', minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Services />
        <Process />
        <Cases />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
