import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Campaigns from './components/Campaigns';
import Testimonials from './components/Testimonials';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Campaigns />
        <Testimonials />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
