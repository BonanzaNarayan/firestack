import React from 'react';
import { motion } from 'framer-motion';
import { FaFire, FaRocket, FaChartLine, FaTools, FaShieldAlt, FaCreditCard, FaHandshake, FaCheckCircle } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SocialFloat from '../components/SocialFloat';

const Pricing = () => {
  const packages = [
    {
      title: "Starter Website",
      price: "GHS 1,500 – 2,500",
      icon: <FaRocket size={32} />, 
      features: [
        "1–5 Responsive Pages",
        "Basic Email Contact Form",
        "Basic SEO Setup",
        "Netlify Hosting",
        "3 Week Delivery"
      ],
      description: "Perfect for personal brands and small businesses"
    },
    {
      title: "Business Web App",
      price: "GHS 3,500 – 6,500",
      icon: <FaChartLine size={32} />, 
      features: [
        "All Features from Starter Plan",
        "5+ Pages",
        "User Authentication",
        "Firestore Integration",
        "File Uploads",
        "Admin Dashboard",
        "1–2 Weeks Delivery"
      ],
      description: "Ideal for growing businesses with dynamic needs"
    },
    {
      title: "Premium SaaS Platform",
      price: "GHS 8,000 – 15,000+",
      icon: <FaFire size={32} />, 
      features: [
        "All Features from Business Plan",
        "Payment Gateway Integration",
        "Advanced Firestore Structure",
        "Cloud Functions",
        "Role-Based Access",
        "3–5+ Weeks Delivery"
      ],
      description: "Enterprise-grade solutions for scale"
    }
  ];
  
  const addOns = [
    { feature: "Payment Gateway", price: "GHS 600 – 1,000" },
    { feature: "Admin Dashboard", price: "GHS 800 – 1,500" },
    { feature: "Blog/CMS", price: "GHS 600 – 1,200" },
    { feature: "Email Notifications", price: "GHS 400 – 800" },
    { feature: "Google Maps", price: "GHS 300 – 800" },
    { feature: "WhatsApp Widget", price: "Free – 200" }
  ];
  
  const firebasePricing = [
    { resource: "Firestore Reads/Writes", free: "50K reads, 20K writes", paid: "~GHS 0.06 / 100K reads" },
    { resource: "Storage", free: "1GB", paid: "~GHS 0.23 / GB" },
    { resource: "Auth", free: "10K logins", paid: "~GHS 0.06 / 10K" },
    { resource: "Hosting", free: "1GB + 10GB bandwidth", paid: "Usage-based" }
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
      <Helmet>
        <title>Web Development Pricing | FireStack Studio</title>
        <meta 
          name="description" 
          content="Transparent pricing for web development services in Ghana. Get custom quotes for React, Firebase, and full-stack web applications. Startups to enterprise solutions." 
        />
        <meta 
          name="keywords" 
          content="web development pricing, firebase costs, ghana web design rates, react js development cost, saas pricing"
        />
      </Helmet>

      <Header />
      <main className="bg-gradient-to-b from-[#0D0D0D] to-[#1E1E2F] text-white">
        <section className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-20"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
            >
              Transparent Development Pricing
            </motion.h1>
            <p className="text-xl text-gray-300">Fair rates for quality web solutions • Based in Ghana</p>
          </motion.div>

          {/* Pricing Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-[#1A1A2E]/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl text-2xl">
                    {pkg.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{pkg.title}</h2>
                </div>
                <p className="text-orange-400 text-xl mb-4">{pkg.price}</p>
                <p className="text-gray-400 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <FaCheckCircle className="text-orange-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Addons Table */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Additional Services</h2>
            <div className="rounded-2xl overflow-hidden border border-gray-800">
              <table className="w-full">
                <thead className="bg-gray-900/50">
                  <tr>
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-right">Price (GHS)</th>
                  </tr>
                </thead>
                <tbody>
                  {addOns.map((addon, index) => (
                    <tr 
                      key={index}
                      className="border-t border-gray-800 hover:bg-gray-900/20 transition-colors"
                    >
                      <td className="py-4 px-6">{addon.feature}</td>
                      <td className="py-4 px-6 text-right">{addon.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Firebase Pricing */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Firebase Hosting Costs</h2>
            <div className="rounded-2xl overflow-hidden border border-gray-800">
              <table className="w-full">
                <thead className="bg-gray-900/50">
                  <tr>
                    <th className="py-4 px-6 text-left">Resource</th>
                    <th className="py-4 px-6">Free Tier</th>
                    <th className="py-4 px-6">Paid Tier</th>
                  </tr>
                </thead>
                <tbody>
                  {firebasePricing.map((item, index) => (
                    <tr 
                      key={index}
                      className="border-t border-gray-800 hover:bg-gray-900/20 transition-colors"
                    >
                      <td className="py-4 px-6">{item.resource}</td>
                      <td className="py-4 px-6 text-center">{item.free}</td>
                      <td className="py-4 px-6 text-center">{item.paid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center bg-gray-900/30 rounded-2xl p-12 border border-gray-800"
          >
            <FaHandshake className="text-4xl text-orange-500 mb-6 mx-auto" />
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a personalized quote or schedule a technical consultation
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <motion.button
              onClick={()=> window.location.href = '/quote'}
                whileHover={{ scale: 1.05 }}
                className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Request Custom Quote
              </motion.button>
              <motion.button
              onClick={()=> window.location.href = '/contact'}
                whileHover={{ scale: 1.05 }}
                className="border border-gray-700 hover:border-orange-500 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Book Discovery Call
              </motion.button>
            </div>
          </motion.div>
        </section>
      </main>
      <SocialFloat />
      <Footer />
    </>
  );
};

export default Pricing;