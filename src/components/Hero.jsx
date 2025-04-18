import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative bg-[#0D0D0D] overflow-hidden">
      <div className="container relative mx-auto text-center py-24 md:py-32 px-6">
        {/* Animated background elements */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-radial from-orange-500 to-transparent pointer-events-none"
        />
        
        {/* Floating shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, x: i % 2 === 0 ? -20 : 20, rotate: i * 45 }}
              animate={{ 
                y: [0, 50, 0],
                x: i % 2 === 0 ? [-20, 20, -20] : [20, -20, 20],
                rotate: i * 45 + 360
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute opacity-10"
              style={{
                top: `${20 + i * 20}%`,
                left: `${i * 30}%`,
                width: "4rem",
                height: "4rem",
                background: "linear-gradient(45deg, #ff6b00, transparent)",
                border: "2px solid rgba(255,107,0,0.3)",
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%"
              }}
            />
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <motion.h2
            variants={childVariants}
            transition={{ duration: 0.8, ease: "backOut" }}
            className="text-4xl md:text-5xl xl:text-6xl font-extrabold mb-6 md:mb-8 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent leading-tight"
          >
            <span className="inline-block">Building Blazing-Fast</span>
            <br />
            <span className="inline-block mt-2">Web Experiences</span>
          </motion.h2>

          <motion.p
            variants={childVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-lg md:text-xl mb-10 md:mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed"
          >
            We craft modern, scalable web applications using cutting-edge technologies. 
            Empowering startups, brands, and innovative businesses to thrive in the digital landscape.
          </motion.p>

          <motion.div
            variants={childVariants}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-center gap-4 md:gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300"
            >
              Get Started
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-700 hover:border-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:text-orange-500 transition-all duration-300"
            >
              View Portfolio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;