import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Images
import project1 from '../assets/realestate.png';
import project2 from '../assets/real.png';
import project3 from '../assets/cbs.png';
import project4 from '../assets/p2p.png';
import SocialFloat from '../components/SocialFloat';

const Projects = () => {
  const projects = [
    {
      title: "Real Estate Web App",
      description: "Full-stack real estate market place with Firebase integration and admin panel",
      tech: ["React", "Firebase", "Tailwind", "Node.js"],
      image: project1,
      links: [
        // { type: "github", url: "#" },
        { type: "live", url: "https://real-estate-sample.netlify.app/" }
      ]
    },
    {
      title: "CBS Link",
      description: "A Job Finder web app with a user-friendly interface and powerful search features",
      tech: ["Next.js", "Express.Js", "Chart.js", "Firebase"],
      image: project3,
      links: [
        { type: "live", url: "https://cbslink.netlify.app/" }
      ]
    },
    {
      title: "P2P E-Store",
      description: "An online store where users can sell products",
      tech: ["React", "Firebase", "Tailwind"],
      image: project4,
      links: [
        // { type: "github", url: "#" },
        { type: "live", url: "https://localbazer.netlify.app/" }
      ]
    },
    {
      title: "Legacy Homes",
      description: "Full stack real estate with admin panel and real-time analytics and a CMS",
      tech: ["React", "Express.Js", "Tailwind", "Firebase"],
      image: project2,
      links: [
        { type: "demo", url: "https://legacyhomes.netlify.app/" }
      ]
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
        <title>Our Projects | FireStack Studio</title>
        <meta 
          name="description" 
          content="Explore our portfolio of web development projects built with React, Firebase, and modern web technologies. See our work in e-commerce, SaaS, and enterprise solutions." 
        />
      </Helmet>

      <Header />
      <main className="bg-gradient-to-b from-[#0D0D0D] to-[#1E1E2F] text-white">
        <section className="max-w-7xl mx-auto px-6 py-24">
          {/* Projects Header */}
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
              Our Code in Action
            </motion.h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real-world solutions built with modern technologies. Each project tells a story of technical excellence and user-centric design.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}
                className="group relative bg-[#1A1A2E]/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FaCode className="text-orange-500 text-xl" />
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="text-xs bg-gray-800/50 text-gray-400 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.links.map((link, i) => (
                      <motion.a
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        href={link.url}
                        className="flex items-center gap-2 text-sm bg-gray-800/50 hover:bg-orange-500/10 px-4 py-2 rounded-lg border border-gray-700 hover:border-orange-500 transition-all"
                      >
                        {link.type === "github" && <FaGithub />}
                        {link.type === "live" && <FaExternalLinkAlt />}
                        {link.type === "case-study" && <FaRocket />}
                        {link.type === "demo" && "View Demo"}
                        {!["demo"].includes(link.type) && link.type.replace("-", " ")}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-24 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl p-12 border border-gray-800 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <FaRocket className="text-4xl text-orange-500 mb-6 mx-auto" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Launch Your Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's turn your vision into a high-performance web application. 97% client satisfaction rate.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="/contact"
                  className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-semibold transition-colors flex items-center gap-2 justify-center"
                >
                  <FaCode />
                  Start Your Project
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="/projects"
                  className="border border-gray-700 hover:border-orange-500 px-8 py-4 rounded-xl font-semibold transition-colors flex items-center gap-2 justify-center"
                >
                  <FaExternalLinkAlt />
                  View Case Studies
                </motion.a>
              </div>
              <p className="text-sm text-gray-400 mt-6">
                24-hour response time • Free technical consultation
              </p>
            </div>
          </motion.section>
        </section>
      </main>
      <SocialFloat />
      <Footer />
    </>
  );
};

export default Projects;