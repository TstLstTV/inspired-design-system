<<<<<<< HEAD
import { useTheme } from './contexts/ThemeContext';
=======
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
<<<<<<< HEAD
  const { isDark } = useTheme();
  
  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
=======
  return (
    <div className="min-h-screen bg-[#020617]">
>>>>>>> dda4c44ee0519157f596c42a03e9801e8603196c
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Solutions />
        <Pricing />
        <Testimonials />
        <Resources />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
