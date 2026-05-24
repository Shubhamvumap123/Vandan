import React from 'react';
import { Users, CheckCircle, Heart, Globe } from 'lucide-react';

const Impact = () => {
  const stats = [
    { label: 'Total Visitors', value: '1.2M+', icon: <Users className="w-6 h-6 text-white" /> },
    { label: 'Lives Impacted', value: '50K+', icon: <Heart className="w-6 h-6 text-white" /> },
    { label: 'Verified NGOs', value: '100+', icon: <CheckCircle className="w-6 h-6 text-white" /> },
    { label: 'Active Campaigns', value: '25+', icon: <Globe className="w-6 h-6 text-white" /> },
  ];

  return (
    <section id="impact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff9933]/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ffcc00]/10 rounded-full blur-3xl -ml-40 -mb-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-[#ff9933] uppercase tracking-wider mb-2">Our Impact</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-6">
            Together, We Make a Difference
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every contribution brings hope. Join our community of donors and volunteers who are changing lives every single day.
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#ff9933] to-[#ff7700] rounded-3xl shadow-2xl p-8 md:p-12 mb-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CgkJPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz4KCTwvc3ZnPg==')]"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm border border-white/30">
                  {stat.icon}
                </div>
                <h4 className="text-4xl font-extrabold text-white mb-2">{stat.value}</h4>
                <p className="text-orange-100 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Give Every Month Through Our Platform</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Make a lasting impact by donating monthly to trusted causes and receive 80G tax benefits. Contribute regularly and help us plan better for consistent impact.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                'Monthly Support for consistent impact',
                'Receive a valid receipt for tax savings under Section 80G',
                'Donations go only to government-verified, credible NGOs',
                '100% Assured transparency'
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-[#ff9933] mr-3 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg">
              Start Monthly Donation
            </button>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#ff9933] to-[#ffcc00] rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
            <img 
              src="/assets/annadaan.png" 
              alt="Monthly Impact" 
              className="relative z-10 rounded-3xl shadow-xl w-full object-cover h-96"
            />
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center space-x-4 z-20">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase">Tax Benefit</p>
                <p className="text-sm font-extrabold text-gray-900">80G Certificate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
