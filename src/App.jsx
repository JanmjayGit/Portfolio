import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-zinc-900 selection:bg-emerald-500/30 selection:text-emerald-500">
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="tech-stack">
        <TechStack />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 bg-zinc-900">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Janmjay Prajapati
        </p>
      </footer>
    </div>
  );
}

export default App;
