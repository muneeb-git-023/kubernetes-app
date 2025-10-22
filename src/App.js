import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaBolt, FaMagic } from "react-icons/fa";
import "./App.css"; 

function App() {
  const features = [
    {
      icon: <FaGlobe className="text-blue-500 text-4xl mb-4" />,
      title: "Global Reach",
      text: "Connect with people around the world seamlessly.",
    },
    {
      icon: <FaBolt className="text-yellow-500 text-4xl mb-4" />,
      title: "Fast Performance",
      text: "Experience lightning-fast load times and smooth UX.",
    },
    {
      icon: <FaMagic className="text-purple-500 text-4xl mb-4" />,
      title: "Beautiful Design",
      text: "Sleek, modern, and responsive design for any device.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 bg-white shadow-md sticky top-0">
        <h1 className="text-2xl font-bold text-blue-600">ModernApp</h1>
        <div className="space-x-4">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          Build the Future with <span className="text-blue-600">ModernApp</span>
        </motion.h2>
        <p className="max-w-xl mx-auto text-gray-600 mb-8">
          A modern one-page React template for your next project or startup.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
        <div className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-50 rounded-2xl shadow-md text-center hover:shadow-lg transition"
            >
              {f.icon}
              <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
              <p className="text-gray-600">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to get started?</h3>
        <p className="text-gray-600 mb-8">
          Join thousands of creators building with ModernApp.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} ModernApp. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
