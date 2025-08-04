import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const founders = [
    {
      name: "Zohra",
      role: "Co-Founder & CEO",
      image: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Passionate about sustainable design and women's empowerment."
    },
    {
      name: "Ifra",
      role: "Co-Founder & Creative Director",
      image: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Leading our creative vision and product development."
    },
    {
      name: "Najma",
      role: "Co-Founder & Operations",
      image: "https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      bio: "Ensuring smooth operations and community partnerships."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-emerald-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed border-l-4 border-emerald-600 pl-6 bg-white p-8 rounded-lg shadow-lg">
              "Every year in Pakistan, 49 tons of reusable materials go into waste — including glass, wood, and packaging material. For us, it's more than just recycling. It's about telling a story through design. Here at Noyaa, we create handcrafted pieces with love, by our very own local artists, made with repurposed materials."
            </blockquote>
          </div>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-emerald-800 mb-12">Meet Our Founders</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-emerald-800 mb-2">{founder.name}</h4>
                  <p className="text-emerald-600 font-semibold mb-3">{founder.role}</p>
                  <p className="text-gray-600">{founder.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-emerald-800 text-white rounded-xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            To transform waste into wonder, empower local artisans, and create a sustainable future through beautiful, handcrafted products that tell stories of hope, innovation, and environmental responsibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;