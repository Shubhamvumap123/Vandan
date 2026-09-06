import { useState } from 'react';
import { X, Heart } from 'lucide-react';

const DonationModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && Number(amount) > 0) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setAmount('');
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-6 mx-auto">
            <Heart className="w-6 h-6 text-[#ff9933]" />
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
              <p className="text-gray-600">Your mock donation of ₹{amount} has been processed.</p>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Make a Donation</h3>
              <p className="text-center text-gray-600 mb-8 text-sm">Support our causes and make a difference today.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Amount (₹)</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[500, 1000, 5000].map((preset) => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => setAmount(preset.toString())}
                        className={`py-2 rounded-xl border text-sm font-semibold transition-all ${
                          amount === preset.toString()
                            ? 'bg-orange-50 border-[#ff9933] text-[#ff9933]'
                            : 'border-gray-200 text-gray-600 hover:border-[#ff9933] hover:text-[#ff9933]'
                        }`}
                      >
                        ₹{preset}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">₹</span>
                    <input
                      type="number"
                      min="1"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Custom Amount"
                      className="w-full pl-8 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#ff9933] focus:border-transparent transition-all outline-none"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#ff9933] hover:bg-[#e68a2e] text-white py-3 rounded-xl font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Donate Now <Heart className="w-4 h-4 fill-current" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonationModal;