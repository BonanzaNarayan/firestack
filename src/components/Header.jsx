import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Services", href: "/services" },
    { text: "Projects", href: "/projects" },
    { text: "Pricing", href: "/pricing" },
    { text: "Contact", href: "/contact" },
    { text: "About", href: "/about" },
  ];

  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    closed: { 
      opacity: 0,
      y: "-100%",
      transition: { staggerChildren: 0.1, staggerDirection: -1 }
    }
  };

  const linkVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-gray-800 z-50 text-white py-4 px-6 md:px-8 flex items-center justify-between"
    >
      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent flex items-center gap-2"
      >
        <img src="/logo2.png" alt="logo" className="w-8 h-8" />
        FireStack Studio
      </motion.a>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            whileHover={{ 
              scale: 1.05,
              color: "#ff6b00"
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-gray-300 hover:text-orange-400 transition-colors font-medium"
          >
            {link.text}
          </motion.a>
        ))}
        <motion.button
        onClick={()=> window.location.href="/contact"}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ml-4 bg-gradient-to-br from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 px-6 py-2.5 rounded-xl font-semibold text-white shadow-lg shadow-orange-500/20 transition-all"
        >
          Get a Quote
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-orange-500 transition-colors p-2"
          aria-label="Mobile Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="lg:hidden absolute top-full left-0 right-0 bg-[#0D0D0D]/95 backdrop-blur-sm border-t border-gray-800"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  variants={linkVariants}
                  className="text-gray-300 hover:text-orange-400 text-lg font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </motion.a>
              ))}
              <motion.button
              onClick={()=> window.location.href="/contact"}
                variants={linkVariants}
                className="mt-4 bg-orange-500 hover:bg-orange-600 w-full py-3 rounded-xl font-semibold transition"
              >
                Get a Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;