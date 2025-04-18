import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaRegEnvelope, FaPhone } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  const footerLinks = [
    { text: "Services", href: "/services" },
    { text: "Projects", href: "/projects" },
    { text: "Pricing", href: "/pricing" },
    { text: "Contact", href: "/contact" },
    { text: "About", href: "/about" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: "#", label: "GitHub" },
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
    { icon: <BsInstagram />, href: "https://instagram.com/firestackstudio/", label: "Instagram" },
  ];

  const contactInfo = [
    { icon: <FaRegEnvelope />, text: "narayanbonanzakweku@gmail.com" },
    { icon: <FaPhone />, text: "+233 554 435925" },
  ];

  return (
    <footer className="bg-[#0D0D0D] border-t border-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-orange-500">FireStack Studio</h3>
            <p className="text-sm leading-relaxed">
              Igniting digital transformation through cutting-edge web solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="text-gray-400 hover:text-orange-500 transition-colors text-xl"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h4 className="text-gray-100 font-semibold mb-4">Quick Links</h4>
            {footerLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ x: 5 }}
                className="flex items-center hover:text-orange-400 transition-colors py-2 text-sm"
              >
                <FiArrowUpRight className="mr-2" />
                {link.text}
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-gray-100 font-semibold mb-4">Get in Touch</h4>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-3">
                <span className="text-orange-500">{info.icon}</span>
                <span className="text-sm hover:text-orange-400 transition-colors">
                  {info.text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-gray-100 font-semibold mb-4">Stay Updated</h4>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
              >
                Subscribe Now
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} FireStack Studio. All rights reserved.
            <span className="block md:inline-block mt-2 md:mt-0 md:ml-4">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a> 
              {" | "}
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;