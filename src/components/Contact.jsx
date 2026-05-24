import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('Thank you! Your message has been received. We will contact you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: 'General Inquiry',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#ff9933] to-[#ff7700] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 pointer-events-none"></div>
              
              <h3 className="text-3xl font-extrabold mb-6 relative z-10">Get In Touch</h3>
              <p className="text-orange-100 mb-10 relative z-10">
                We'd love to hear from you. Whether you want to volunteer, start a campaign, or have a concern, reach out to us.
              </p>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-orange-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Address</h4>
                    <p className="text-orange-100">2A Sarai Nandan, Sunderpur,<br/>Varanasi, Uttar Pradesh,<br/>PIN – 221005 India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-orange-200 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Phone</h4>
                    <p className="text-orange-100">+91 63906 58852</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-orange-200 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">Email</h4>
                    <p className="text-orange-100">support@charanvandan.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-3 p-10 lg:p-14">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-8">Send us a Message</h3>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ff9933] focus:border-transparent transition-all outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ff9933] focus:border-transparent transition-all outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ff9933] focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ff9933] focus:border-transparent transition-all outline-none bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Volunteer Application</option>
                    <option>Donation Issue</option>
                    <option>Start a Campaign</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ff9933] focus:border-transparent transition-all outline-none resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#ff9933] hover:bg-[#e68a2e] text-white rounded-xl font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
                {status && <p className="mt-4 text-sm text-green-600">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
