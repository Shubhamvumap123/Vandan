import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Asha Patel',
    role: 'Volunteer Coordinator',
    quote: 'Charanvandan made it easy for our outreach campaign to connect with donors who truly care. The platform feels trustworthy and warm.',
  },
  {
    name: 'Ravi Sharma',
    role: 'Community Partner',
    quote: 'The progress updates and mission clarity built confidence in every contribution. The team is responsive and deeply committed.',
  },
  {
    name: 'Meera Joshi',
    role: 'Social Worker',
    quote: 'A transparent fundraising experience with real impact. The campaigns are thoughtfully curated and visually inspiring.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold text-[#ff9933] uppercase tracking-wider mb-2">Testimonials</p>
          <h2 className="text-4xl font-extrabold text-gray-900">What supporters and partners are saying</h2>
          <p className="mt-4 text-lg text-gray-600">
            Real stories from donors, volunteers, and social leaders who have seen the difference our platform makes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div key={index} className="rounded-[2rem] border border-gray-100 p-8 shadow-xl transition-transform hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-6 text-[#ff9933]">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-8">“{item.quote}”</p>
              <div>
                <p className="font-bold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
