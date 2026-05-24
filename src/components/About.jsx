import { ShieldCheck, Target, Users, BookOpen } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#ff9933]" />,
      title: 'Verified NGOs',
      description: 'Donations go only to government-verified, credible NGOs with 100% assured transparency.',
    },
    {
      icon: <Target className="w-8 h-8 text-[#ff9933]" />,
      title: 'Direct Impact',
      description: 'Focused on direct execution of humanitarian, social and spiritual welfare initiatives.',
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#ff9933]" />,
      title: '80G Tax Benefits',
      description: 'Make a lasting impact and receive a valid receipt for tax savings under Section 80G.',
    },
    {
      icon: <Users className="w-8 h-8 text-[#ff9933]" />,
      title: 'Volunteer Network',
      description: 'Over 8 years of ground-level social service experience powered by dedicated volunteers.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[#ff9933] uppercase tracking-wider mb-2">About Us</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-6">
            Earning Blessings Through Selfless Service
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Charanvandan is a Section 8 Non‑Profit Organisation registered under the Ministry of Corporate Affairs (Government of India). We provide a trusted platform to help raise funds for medical, education, social & spiritual causes.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-6">
            Our mission is to connect compassionate donors with verified causes, deliver transparent impact, and support communities with dignity, trust, and consistent care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-[#ff9933]/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
