// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaRocket, FaUsers, FaCode, FaChartLine } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialFloat from '../components/SocialFloat';

const About = () => {
  const stats = [
    { icon: <FaRocket />, value: "150+", label: "Projects Launched" },
    { icon: <FaUsers />, value: "98%", label: "Client Satisfaction" },
    { icon: <FaCode />, value: "500k+", label: "Lines of Code" },
    { icon: <FaChartLine />, value: "4.8/5", label: "Average Rating" }
  ];

  const team = [
    { name: "Kwame Ansah", role: "Lead Developer", bio: "React & Firebase expert with 8+ years experience" },
    { name: "Ama Boateng", role: "UI/UX Designer", bio: "Tailwind CSS wizard and accessibility advocate" },
    { name: "Kofi Mensah", role: "DevOps Engineer", bio: "Cloud infrastructure and security specialist" }
  ];

  return (
    <>
      <Helmet>
        <title>About Us | FireStack Studio</title>
        <meta 
          name="description" 
          content="Learn about FireStack Studio - Ghana's premier web development agency specializing in React, Firebase, and modern web technologies." 
        />
      </Helmet>

      <Header />
      <main className="bg-gradient-to-b from-[#0D0D0D] to-[#1E1E2F] text-white">
        <section className="max-w-7xl mx-auto px-6 py-24">
          {/* Hero Section */}
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
              Building Digital Futures
            </motion.h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From Accra to the world - we craft web experiences that convert.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1A1A2E]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center"
              >
                <div className="text-3xl text-orange-500 mb-4">{stat.icon}</div>
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-[#1A1A2E]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center"
                >
                  <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-6" />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-orange-400 mb-4">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-[#1A1A2E]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-12"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Principles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Performance First", content: "Code optimized for speed and scalability" },
                { title: "Client-Centric", content: "Transparent communication and collaboration" },
                { title: "Future-Proof", content: "Architected for growth and evolution" }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-2xl text-orange-500 mb-4">0{index + 1}</div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 px-12 py-5 rounded-2xl font-semibold text-lg transition-colors"
            >
              Get Started Now
            </motion.a>
          </motion.div>
        </section>
      </main>
      <SocialFloat />
      <Footer />
    </>
  );
};

export default About;