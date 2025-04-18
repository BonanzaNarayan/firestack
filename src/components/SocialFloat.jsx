import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTelegram, FaEnvelope, FaGithub, FaTimes, FaCommentDots } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';

const SocialFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const socialLinks = [
    {
      icon: <FaWhatsapp />,
      label: "WhatsApp",
      color: "#25D366",
      link: "https://wa.me/233554435925",
    },
    {
      icon: <BsInstagram />,
      label: "Instagram",
      color: "#0088CC",
      link: "https://instagram.com/firestackstudio",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      color: "#EA4335",
      link: "mailto:narayanbonanzakweku@gmail.com",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      color: "#333",
      link: "https://github.com/BonanzaNarayan",
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <div className="flex flex-col items-end gap-4">
            {/* Social Links */}
            <AnimatePresence>
              {isOpen && socialLinks.map((item, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.1 }}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, x: -10 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-3 bg-[#1A1A2E]/80 backdrop-blur-sm border border-gray-800 rounded-full px-4 py-2 hover:border-orange-500 transition-all"
                  style={{ color: item.color }}
                >
                  <span className="text-sm text-gray-300 hidden md:block">
                    {item.label}
                  </span>
                  <div className="text-2xl p-2 rounded-full bg-gray-800/50">
                    {item.icon}
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>

            {/* Main Floating Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="w-14 h-14 flex items-center justify-center text-2xl bg-gradient-to-br from-orange-500 to-amber-600 rounded-full shadow-lg hover:shadow-orange-500/30 relative"
            >
              <AnimatePresence mode='wait'>
                {isOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                  >
                    <FaTimes className="text-white" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                  >
                    <FaCommentDots className="text-white" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialFloat;