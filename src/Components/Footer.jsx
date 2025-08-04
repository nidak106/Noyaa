import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' }
  ];

  const sustainabilityLinks = [
    { name: 'Our Mission', href: '#about' },
    { name: 'Climate Impact', href: '#achievements' },
    { name: 'Local Artisans', href: '#about' },
    { name: 'Sustainability Report', href: '#' }
  ];

  return (
    <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-emerald-400" />
              <span className="text-2xl font-bold">Noyaa</span>
            </div>
            <p className="text-emerald-200 mb-6 leading-relaxed">
              Transforming waste into wonder through sustainable craftsmanship and women-led innovation.
            </p>
            
            {/* Impact Counter */}
            <motion.div 
              className="bg-emerald-800 rounded-lg p-4 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <h4 className="font-semibold mb-2 text-emerald-300">Our Impact</h4>
              <p className="text-2xl font-bold text-white">49+ Tons</p>
              <p className="text-sm text-emerald-200">Materials Repurposed So Far</p>
            </motion.div>
            
            <div className="flex items-center space-x-2 text-emerald-300">
              <MapPin size={16} />
              <span className="text-sm">Peshawar, Pakistan</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-emerald-300">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-emerald-200 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Sustainability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-emerald-300">Sustainability</h3>
            <ul className="space-y-3">
              {sustainabilityLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-emerald-200 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-emerald-300">Stay Connected</h3>
            <p className="text-emerald-200 mb-4 text-sm">
              Get updates on new products and our sustainability journey.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-emerald-800 border border-emerald-700 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-white placeholder-emerald-300"
              />
              <motion.button
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-emerald-800 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-emerald-200 text-sm">
              <span>© 2024 Noyaa. All rights reserved.</span>
              <span>•</span>
              <span>Made with <Heart className="inline h-4 w-4 text-red-400" /> for our planet</span>
            </div>
            
            <div className="bg-emerald-800 px-4 py-2 rounded-full">
              <span className="text-emerald-300 text-sm font-semibold">
                NIC Peshawar • Cohort 12
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;