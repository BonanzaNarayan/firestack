import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { FaBolt, FaChartLine, FaCode, FaComments, FaFire, FaMobileAlt, FaRocket } from 'react-icons/fa';
import { FaBullseye, FaEye, FaCheckCircle } from 'react-icons/fa';
import Footer from '../components/Footer';
import SocialFloat from '../components/SocialFloat';
import { desc } from 'framer-motion/client';

const Home = () => {
  const services = [
    {
      icon: <FaBolt />,
      title: "Fast Web Dev",
      description: "Lightning-fast websites using modern tech stacks like React and Next.js with TypeScript optimization.",
    },
    {
      icon: <FaCode />,
      title: "Custom Web Apps",
      description: "Full-stack SaaS solutions built with scalable architectures using Firebase, Node.js, and serverless tech.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile-First Design",
      description: "Responsive designs with adaptive UI components that deliver flawless experiences across all devices.",
    },
    {
      icon: <FaRocket />,
      title: "Startup Launchpad",
      description: "Rapid MVP development with CI/CD pipelines and cloud infrastructure for seamless scaling.",
    },
  ];

  // Pakeges
  const packages = [
    {
      name: "Starter Website",
      description: "Perfect for personal brands and small businesses",
      icon: <FaRocket size={32} />,
      url: "/pricing",
    },
    {
      name: "Business Web App",
      description: "Ideal for growing businesses with dynamic needs",
      icon: <FaChartLine size={32} />,
      url: "/pricing",
    },
    {
      name: "Premium SaaS Platform",
      description: "Enterprise-grade solutions for scale",
      icon: <FaFire size={32} />,
      url: "/pricing",
    },
  ];

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { 
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };

  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />

        {/* Services Section */}
        <section id="services" className="relative bg-gradient-to-b from-[#0D0D0D] to-[#1E1E2F] py-24 px-6">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')]" />
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
            >
              Our Expertise
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  className="group relative bg-[#1A1A2E]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl text-3xl text-white">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-100">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Packages */}
        <section className="relative bg-gradient-to-b from-[#090327] to-[#1E1E2F] py-24 px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-stripes.png')]" />
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-7xl mx-auto"
          >
            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
            >
              Our Packages
            </motion.h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {
                packages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    className="group relative bg-[#1A1A2E]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <div className="mb-6 flex justify-center">
                        <div className="p-4 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl text-3xl text-white">
                          {pkg.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-4 text-gray-100">{pkg.name}</h3>
                      <p className="text-gray-400 leading-relaxed">{pkg.description}</p>
                      <a href={pkg.url} className="text-orange-500 hover:underline mt-4 block">Learn More</a>
                    </div>
                  </motion.div>
                ))
              }
            </div>
          </motion.div>
        </section>

        {/* Mission and Vision */}

        <section className="relative bg-[#0D0D0D] py-24 px-6 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: i * 120 }}
                    animate={{ 
                    scale: [0, 1, 0],
                    rotate: i * 120 + 360
                    }}
                    transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: "linear"
                    }}
                    className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-3xl"
                />
                ))}
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
                >
                Our Core Beliefs
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                {/* Mission Card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative bg-[#1A1A2E]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                    <div className="mb-6 flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl">
                        <FaBullseye className="text-2xl text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-100">Our Mission</h3>
                    </div>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        To empower businesses through cutting-edge digital solutions that combine 
                        blazing performance with exceptional user experiences.
                    </p>
                    <div className="space-y-3">
                        {['Performance First', 'User-Centric Design', 'Scalable Architecture'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-300">
                            <FaCheckCircle className="text-orange-500" />
                            <span className="text-sm">{item}</span>
                        </div>
                        ))}
                    </div>
                    </div>
                </motion.div>

                {/* Vision Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative bg-[#1A1A2E]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-300"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                    <div className="mb-6 flex items-center gap-4">
                        <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl">
                        <FaEye className="text-2xl text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-100">Our Vision</h3>
                    </div>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        To revolutionize web development by setting new standards in speed, 
                        accessibility, and maintainability for next-generation applications.
                    </p>
                    <div className="space-y-3">
                        {['Industry Leadership', 'Continuous Innovation', 'Community Impact'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-300">
                            <FaCheckCircle className="text-orange-500" />
                            <span className="text-sm">{item}</span>
                        </div>
                        ))}
                    </div>
                    </div>
                </motion.div>
                </div>
            </div>
        </section>

        {/* Call to Action Section */}
            <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative bg-gradient-to-tr from-[#0D0D0D] to-[#1a1a2e] py-24 px-6 text-center overflow-hidden"
            >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: i * 120 }}
                    animate={{ 
                    scale: [0, 1, 0],
                    rotate: i * 120 + 360
                    }}
                    transition={{
                    duration: 15 + i * 5,
                    repeat: Infinity,
                    ease: "linear"
                    }}
                    className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-orange-500/20 to-transparent rounded-full blur-lg"
                />
                ))}
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.h2
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
                >
                Ready to Ignite Your Vision?
                </motion.h2>
                
                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
                >
                Let's collaborate to create something extraordinary. Whether you're scaling up or starting fresh, we've got your back.
                </motion.p>

                <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row justify-center gap-6"
                >
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/projects"
                    className="bg-gradient-to-br from-orange-500 to-amber-600 hover:from-orange-400 hover:to-amber-500 px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl shadow-orange-500/20 hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                    <FaRocket className="text-xl" />
                    Explore Our Work
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/contact"
                    className="border-2 border-gray-700 hover:border-orange-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:text-orange-500 transition-all duration-300 flex items-center justify-center gap-2"
                >
                    <FaComments className="text-xl" />
                    Start Conversation
                </motion.a>
                </motion.div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                    key={i}
                    initial={{ 
                        opacity: 0,
                        x: Math.random() * 100 - 50,
                        y: Math.random() * 100 - 50
                    }}
                    animate={{
                        opacity: [0, 0.3, 0],
                        y: [0, -100],
                    }}
                    transition={{
                        duration: 2 + Math.random() * 4,
                        repeat: Infinity,
                        delay: Math.random() * 2
                    }}
                    className="absolute w-1 h-1 bg-orange-500 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}
                    />
                ))}
                </div>
            </div>
        </motion.section>
      </main>
      <SocialFloat />
    <Footer />
    </>
  );
};

export default Home;