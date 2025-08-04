import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What makes Noyaa's products sustainable?",
      answer: "All our products are made from repurposed and recycled materials including glass, wood, and packaging materials. We work with local artisans to transform waste into beautiful, functional items, reducing environmental impact while supporting the community."
    },
    {
      question: "How do you ensure the quality of handcrafted products?",
      answer: "Each product goes through a rigorous quality check process. Our skilled local artisans follow traditional crafting techniques combined with modern sustainability practices. We maintain high standards while preserving the unique character of handmade items."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we are focusing on serving the Pakistani market. However, we are working on expanding our shipping capabilities to serve international customers. Stay tuned for updates on our international shipping options."
    },
    {
      question: "How can I support local artisans through Noyaa?",
      answer: "By purchasing our products, you directly support local artisans and their families. We ensure fair wages and provide skill development opportunities. You can also follow our social media to learn more about the artisans behind each product."
    },
    {
      question: "What is your return and exchange policy?",
      answer: "We stand behind the quality of our handcrafted products. If you're not satisfied with your purchase, we offer exchanges within 30 days of delivery. Each case is handled individually to ensure customer satisfaction while respecting the handmade nature of our products."
    },
    {
      question: "How does Noyaa contribute to climate change awareness?",
      answer: "Beyond creating sustainable products, we actively participate in climate change advocacy campaigns and educational sessions. We collaborate with organizations like the US Consulate and RELO Pakistan to spread awareness about environmental issues and sustainable living practices."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-emerald-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our mission, products, and sustainable practices
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.01 }}
              >
                <motion.button
                  className="w-full px-6 py-6 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  onClick={() => toggleFAQ(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <h3 className="text-lg font-semibold text-emerald-800 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 border-t border-emerald-100">
                        <motion.p
                          className="text-gray-600 leading-relaxed pt-4"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-4">Still have questions?</p>
          <motion.button
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;