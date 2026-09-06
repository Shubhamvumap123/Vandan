import Navbar from './components/Navbar';
import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Campaigns from './components/Campaigns';
import Testimonials from './components/Testimonials';
import Impact from './components/Impact';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DonationModal from './components/DonationModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    if(e) e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar openModal={openModal} />
      <main className="flex-grow">
        <Hero openModal={openModal} />
        <About />
        <Campaigns openModal={openModal} />
        <Testimonials />
        <Impact />
        <Contact />
      </main>
      <Footer />
      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
