import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaToolbox, FaMoneyCheckAlt, FaPaperPlane } from 'react-icons/fa';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SocialFloat from '../components/SocialFloat';
import { toast, Toaster } from 'sonner';

function Quote() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "4aa7e03f-6c45-4586-a428-63fb70ca0af4");
    
    toast.promise(
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then(async (response) => {
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Submission failed");
        return data;
      }), 
      {
        loading: 'Sending your message...',
        success: (data) => {
          event.target.reset();
          return 'Message sent! I\'ll respond as soon as possible!';
        },
        error: (error) => {
          console.error("Error:", error);
          return error.message || 'Message failed to send. Please email me directly.';
        }
      }
    );
  };

  return (
    <>
      <Header />
      <Toaster richColors position="top-center" />
      <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#1A1A2E] text-white px-6 py-20 flex items-center justify-center">
        <motion.div 
          className="w-full max-w-2xl bg-[#1E1E2F]/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-800"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center mb-10">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Get a Custom Quote
            </motion.h1>
            <motion.p 
              className="text-gray-400 text-lg"
              variants={itemVariants}
            >
              Complete this form and we'll craft a personalized proposal within 24 hours
            </motion.p>
          </div>

          <form className="space-y-8" onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label className="block mb-3 text-gray-300">
                  <span className="flex items-center gap-2 mb-2">
                    <FaUser className="text-orange-500" />
                    Full Name
                  </span>
                  <input 
                  id="name"
                  name="name"
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                    required 
                  />
                </label>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block mb-3 text-gray-300">
                  <span className="flex items-center gap-2 mb-2">
                    <FaEnvelope className="text-orange-500" />
                    Email Address
                  </span>
                  <input 
                    id="email"
                    name="email"
                    type="email" 
                    placeholder="you@company.com" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                    required 
                  />
                </label>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block mb-3 text-gray-300">
                  <span className="flex items-center gap-2 mb-2">
                    <FaPhone className="text-orange-500" />
                    Phone Number
                  </span>
                  <input 
                    id="phone"
                    name="phone"
                    type="tel" 
                    placeholder="055 443 5925" 
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                    required 
                  />
                </label>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label className="block mb-3 text-gray-300">
                  <span className="flex items-center gap-2 mb-2">
                    <FaMoneyCheckAlt className="text-orange-500" />
                    Estimated Budget
                  </span>
                  <select 
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 appearance-none transition-all"
                  >
                    <option value="">Select budget range</option>
                    <option value="Under GHS 1,500">Under GHS 1,500</option>
                    <option value="GHS 1,500 - 3,500">GHS 1,500 - 3,500</option>
                    <option value="GHS 3,500 - 6,500">GHS 3,500 - 6,500</option>
                    <option value="GHS 6,500 - 15,000">GHS 6,500 - 15,000</option>
                    <option value="Enterprise (GHS 15,000+)">Enterprise (GHS 15,000+)</option>
                  </select>
                </label>
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <label className="block mb-3 text-gray-300">
                <span className="flex items-center gap-2 mb-2">
                  <FaToolbox className="text-orange-500" />
                  Service Needed
                </span>
                <select 
                  id="service"
                  name="service"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                >
                  <option>Starter Website</option>
                  <option>Business Web App</option>
                  <option>Premium SaaS App</option>
                  <option>Custom Solution</option>
                  <option>Not Sure - Need Consultation</option>
                </select>
              </label>
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block mb-3 text-gray-300">
                <span className="flex items-center gap-2 mb-2">
                  <FaPaperPlane className="text-orange-500" />
                  Project Details
                </span>
                <textarea 
                  id="details"
                  name="details"
                  placeholder="Describe your project goals, target audience, and any special requirements..." 
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 h-40 transition-all"
                  required 
                />
              </label>
            </motion.div>

            <motion.div 
              className="flex items-center gap-3 mb-6"
              variants={itemVariants}
            >
              <input 
                type="checkbox" 
                id="terms" 
                name="terms"
                className="w-5 h-5 text-orange-500 bg-gray-800/50 border-gray-700 rounded focus:ring-orange-500" 
                required 
              />
              <label htmlFor="terms" className="text-sm text-gray-400">
                I agree to FireStack Studio's terms and privacy policy
              </label>
            </motion.div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit" 
              className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 text-white font-semibold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-3"
            >
              <FaPaperPlane className="text-lg" />
              Send Quote Request
            </motion.button>
          </form>
        </motion.div>
      </div>
      <SocialFloat />
      <Footer />
    </>
  );
}

export default Quote;