// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { toast, Toaster } from 'sonner';
import { BsInstagram } from 'react-icons/bs';
import SocialFloat from '../components/SocialFloat';

const Contact = () => {
  const contactVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
      <Helmet>
        <title>Contact Us | FireStack Studio</title>
        <meta 
          name="description" 
          content="Get in touch with FireStack Studio for web development inquiries. Ghana-based React and Firebase experts ready to bring your project to life." 
        />
      </Helmet>

      <Header />
      <main className="bg-gradient-to-b from-[#0D0D0D] to-[#1E1E2F] text-white">
      <Toaster richColors position="top-center" />
        <section className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-20"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
            >
              Let's Build Together
            </motion.h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Whether you're ready to start or just exploring options, we're here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={contactVariants}
              initial="hidden"
              whileInView="visible"
              className="bg-[#1A1A2E]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            >
              <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id='name'
                    name='name'
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-0" 
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id='email'
                    name='email'
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-0" 
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Project Type</label>
                  <select 
                    id='type'
                    name='type'
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-0">
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Consultation</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id='message'
                    name='message'
                    rows="5"
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-xl px-4 py-3 focus:border-orange-500 focus:ring-0" 
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl font-semibold transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={contactVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-[#1A1A2E]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <FaMapMarkerAlt className="text-3xl text-orange-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Our Office</h3>
                <p className="text-gray-400">
                  Madina Aviation<br />
                  Accra, Ghana
                </p>
              </div>

              <div className="bg-[#1A1A2E]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <FaPhone 
                  onClick={()=> window.open('tel:+233554435925', '_blank')}
                  className="text-3xl text-orange-500 cursor-pointer" />
                  <FaWhatsapp 
                  onClick={()=> window.open('https://wa.me/233554435925', '_blank')}
                  className="text-3xl text-green-500 cursor-pointer" />
                  <BsInstagram
                  onClick={()=> window.open('https://instagram.com/firestackstudio/', '_blank')} 
                  className="text-3xl text-blue-500 cursor-pointer" />
                </div>
                <h3 className="text-xl font-bold mb-2">Direct Contact</h3>
                <p className="text-gray-400 mb-2">+233 554 435 925</p>
                <p className="text-gray-400">narayanboanzakweku@gmail.com</p>
              </div>

              <div className="bg-[#1A1A2E]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Working Hours</h3>
                <p className="text-gray-400">
                  Mon-Fri: 9AM - 5PM GMT<br />
                  Weekend: Emergency Support Only
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SocialFloat />
      <Footer />
    </>
  );
};

export default Contact;