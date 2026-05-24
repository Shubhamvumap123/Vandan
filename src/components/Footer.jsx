import React from 'react';
import { Heart, MessageCircle, Camera, Video, Hash } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="h-8 w-8 text-[#ff9933]" />
              <span className="font-bold text-2xl tracking-tight text-white">
                Charanvandan
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed text-sm">
              Section 8 Non‑Profit Organisation registered under the Ministry of Corporate Affairs (Government of India). Earn Blessings by supporting noble causes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff9933] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff9933] transition-colors">
                <Camera className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff9933] transition-colors">
                <Video className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ff9933] transition-colors">
                <Hash className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-[#ff9933] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff9933] transition-colors">How It Works</a></li>
              <li><a href="#campaigns" className="text-gray-400 hover:text-[#ff9933] transition-colors">Explore Campaigns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff9933] transition-colors">Our Blogs</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#ff9933] transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Information</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-[#ff9933] transition-colors">Login</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff9933] transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff9933] transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff9933] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#ff9933] transition-colors">Download 80G Form</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter to get latest updates about our campaigns.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-3 rounded-l-xl bg-white/10 border-none focus:ring-2 focus:ring-[#ff9933] outline-none text-white text-sm"
              />
              <button 
                type="button"
                className="px-4 py-3 bg-[#ff9933] hover:bg-[#e68a2e] text-white rounded-r-xl font-bold transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Charanvandan Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <span className="text-gray-500 font-medium">Verified NGO</span>
            <span className="text-gray-500 font-medium">100% Secure</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
