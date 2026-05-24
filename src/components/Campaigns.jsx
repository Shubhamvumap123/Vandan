import { Heart, MapPin } from 'lucide-react';

const Campaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: 'Sacred Annadaan Seva in Prayagraj: Honor the Divine',
      category: 'Spiritual',
      location: 'Prayagraj, Sangam',
      image: '/assets/annadaan.png',
      raised: 75,
      target: '₹5,00,000',
      description: 'Provide fresh, Satvik meals to Sadhus, pilgrims, and the destitute at the Sangam during the spiritually potent Purushottam Maas.',
    },
    {
      id: 2,
      title: 'Rebuild the Home of Mahadev in Kashi',
      category: 'Heritage Restoration',
      location: 'Varanasi',
      image: '/assets/temple.png',
      raised: 45,
      target: '₹10,00,000',
      description: 'Support the 150-Year-Old Mahadev Temple Renovation. The sacred stones are being reset, and the glory of Kashi is being revived.',
    },
    {
      id: 3,
      title: 'Divine Annadaan Seva on Sri Rama Navami 2026',
      category: 'Spiritual',
      location: 'Ayodhya',
      image: '/assets/annadaan.png', // Reusing placeholder
      raised: 60,
      target: '₹8,00,000',
      description: 'Join the sacred Annadaan Seva in Ayodhya on Sri Rama Navami. Serve sanctified meals to thousands of devotees.',
    }
  ];

  return (
    <section id="campaigns" className="py-24 bg-[#fff0e6]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-[#ff9933] uppercase tracking-wider mb-2">Our Initiatives</h2>
            <h3 className="text-4xl font-extrabold text-gray-900">
              Support Causes That Matter
            </h3>
          </div>
          <a href="#campaigns" className="hidden md:flex items-center text-[#ff9933] font-semibold hover:text-[#e68a2e] transition-colors">
            View All Campaigns <Heart className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={campaign.image} 
                  alt={campaign.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#ff9933]">
                  {campaign.category}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-[#ffcc00]" />
                    {campaign.location}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-[#ff9933] transition-colors cursor-pointer">
                  {campaign.title}
                </h4>
                
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm">
                  {campaign.description}
                </p>
                
                <div className="mt-auto">
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span className="text-[#ff9933]">{campaign.raised}% Funded</span>
                    <span className="text-gray-500">Goal: {campaign.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-[#ff9933] to-[#ffcc00] h-2 rounded-full" 
                      style={{ width: `${campaign.raised}%` }}
                    ></div>
                  </div>
                  
                  <a href="#contact" className="w-full inline-flex items-center justify-center bg-[#ff9933] hover:bg-[#e68a2e] text-white py-3 rounded-xl font-bold transition-colors">
                    Donate Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center md:hidden">
          <button className="bg-white border-2 border-[#ff9933] text-[#ff9933] px-8 py-3 rounded-full font-bold hover:bg-[#ff9933] hover:text-white transition-colors">
            View All Campaigns
          </button>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
