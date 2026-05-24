import { ArrowRight, HeartHandshake } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/assets/hero.png")' }}
      >
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#ffcc00] font-medium text-sm mb-6 shadow-xl">
            <HeartHandshake className="w-4 h-4" />
            <span>India's Trusted Crowdfunding Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Support Causes That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff9933] to-[#ffcc00]">Matter</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-light">
            Help raise funds for medical, education, social & spiritual causes with transparency and trust. Your contribution can change a life today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#campaigns"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-[#ff9933] hover:bg-[#e68a2e] transition-all shadow-[0_0_20px_rgba(255,153,51,0.4)] hover:shadow-[0_0_30px_rgba(255,153,51,0.6)] transform hover:-translate-y-1"
            >
              Start Donating
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a 
              href="#about"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 transition-all hover:border-white/50"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <a href="#about" className="absolute z-20 bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center hover:opacity-80 transition-opacity cursor-pointer">
        <span className="text-white/70 text-sm mb-2 font-medium">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-[#ff9933] rounded-full animate-pulse"></div>
        </div>
      </a>
    </section>
  );
};

export default Hero;
