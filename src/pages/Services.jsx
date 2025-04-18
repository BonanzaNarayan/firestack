import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import { FaCogs, FaServer, FaPalette, FaCloud, FaLock, FaMobileAlt, FaRocket, FaTools, FaComments, FaRegClock  } from 'react-icons/fa';
import Footer from '../components/Footer';
import SocialFloat from '../components/SocialFloat';

function Services() {
  const services = [
    {
      icon: <FaCogs />,
      title: "Full-Stack Web Development",
      description: "End-to-end web application development using modern stacks: React, Next.js, Node.js, and Firebase. Enterprise-grade architecture with CI/CD pipelines.",
      keywords: ["web development", "react development", "full stack programming"]
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive UI/UX Design",
      description: "Mobile-first interfaces with Tailwind CSS and Framer Motion. WCAG 2.1 compliant accessibility audits and performance optimization.",
      keywords: ["responsive design", "UI/UX services", "mobile optimization"]
    },
    {
      icon: <FaServer />,
      title: "Backend API Development",
      description: "REST & GraphQL APIs built with Node.js, Express, and Firebase. Features include JWT authentication, rate limiting, and automated documentation.",
      keywords: ["API development", "backend services", "node.js programming"]
    },
    {
      icon: <FaCloud />,
      title: "Firebase Integration",
      description: "Complete Firebase solutions including Firestore NoSQL databases, Cloud Functions, Authentication, and real-time updates.",
      keywords: ["firebase development", "cloud integration", "serverless architecture"]
    },
    {
      icon: <FaLock />,
      title: "Security Solutions",
      description: "End-to-end encryption, role-based access control, and GDPR compliance audits. Regular penetration testing and security hardening.",
      keywords: ["web security", "data protection", "cybersecurity services"]
    },
    {
      icon: <FaRocket />,
      title: "Startup MVP Development",
      description: "Rapid prototyping and minimum viable product development. From concept to market in 4-6 weeks with scalable architecture.",
      keywords: ["MVP development", "startup tech", "saas prototyping"]
    },
    {
      icon: <FaPalette />,
      title: "Design Systems & Branding",
      description: "Custom design systems with component libraries, style guides, and brand identity packages. Figma-to-code implementation.",
      keywords: ["UI design", "brand identity", "design systems"]
    },
    {
      icon: <FaTools />,
      title: "Performance Optimization",
      description: "Core Web Vitals optimization, database indexing, and cloud infrastructure tuning. Monthly maintenance plans available.",
      keywords: ["web performance", "SEO optimization", "site maintenance"]
    }
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
        <title>Web Development Services | FireStack Studio</title>
        <meta 
          name="description" 
          content="Comprehensive web development services including full-stack development, UI/UX design, Firebase integration, and startup MVP solutions. Enterprise-grade web applications built with modern tech stacks." 
        />
        <meta 
          name="keywords" 
          content={services.flatMap(service => service.keywords).join(', ')}
        />
        <link rel="canonical" href="https://firestackstudio.com/services" />
      </Helmet>

      <Header />
      <main className="bg-gradient-to-b from-[#0D0D0D] to-[#1E1E2F] min-h-screen">
        <section className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent"
            >
              Comprehensive Web Solutions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              We deliver enterprise-grade web applications and digital experiences. Serving startups to Fortune 500 companies, our full-cycle development process ensures pixel-perfect implementation with measurable results.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <h2 className="text-xl font-bold mb-4 text-gray-100">{service.title}</h2>
                  <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.keywords.map((keyword, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-gray-800/50 text-gray-400 px-3 py-1 rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-100">
              Development FAQs
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "What tech stack do you primarily use?",
                  answer: "Our core stack includes React/Next.js for frontend, Node.js/Express for backend, and Firebase/PostgreSQL for databases. We also specialize in Tailwind CSS, TypeScript, and Docker deployments."
                },
                {
                  question: "How do you ensure code quality?",
                  answer: "All projects include ESLint/Prettier setup, unit testing with Jest, end-to-end testing via Cypress, and mandatory code reviews before deployment."
                },
                {
                  question: "What about ongoing maintenance?",
                  answer: "We offer monthly retainer plans including security updates, performance monitoring, and priority support. All clients receive detailed documentation."
                }
              ].map((faq, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/30 p-6 rounded-xl border border-gray-800"
                >
                  <h3 className="text-lg font-semibold text-orange-400 mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <ServiceCTA />

      </main>
      <SocialFloat />
      <Footer />
    </>
  );
}

export default Services;


const ServiceCTA = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative bg-gradient-to-br from-[#0D0D0D] to-[#1a1a2e] py-24 px-6 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: i * 90 }}
            animate={{ 
              scale: [0, 1, 0],
              rotate: i * 90 + 360
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-64 h-64 bg-gradient-to-r from-orange-500/20 to-transparent rounded-full blur-xl"
            style={{
              top: `${20 + i * 15}%`,
              left: `${i * 25}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
            Ready to Accelerate Your Digital Growth?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join 200+ startups and enterprises who've scaled successfully with our development expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-orange-500/30 transition-all"
          >
            <FaRocket className="text-4xl text-orange-500 mb-6 mx-auto" />
            <h3 className="text-xl font-semibold mb-4">Start a Project</h3>
            <p className="text-gray-400 mb-6">Launch your idea with our 360° development package</p>
            <motion.button
            onClick={()=> window.location.href = '/contact'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-xl font-semibold transition-colors"
            >
              Launch Now
            </motion.button>
          </motion.div>

          
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 flex items-center justify-center gap-4 text-gray-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Current availability: 6 project slots</span>
          </div>
          <span>•</span>
          <span>98% client satisfaction</span>
        </motion.div>
      </div>
    </motion.section>
  );
};