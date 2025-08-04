import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Leaf, Globe } from 'lucide-react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Globe,
      title: "Climate Change Advocacy",
      description: "Successful advocacy campaigns raising awareness about climate change in local communities",
      year: "2023"
    },
    {
      icon: Users,
      title: "Climate Sessions",
      description: "Climate sessions hosted under US Consulate & RELO Pakistan projects, acknowledged on official sites",
      year: "2023"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Alternatives",
      description: "Production of sustainable alternatives to plastic products, reducing environmental impact",
      year: "2024"
    },
    {
      icon: Award,
      title: "NIC Peshawar Cohort 12",
      description: "Selected for prestigious NIC Peshawar incubation program, Cohort 12",
      year: "2024"
    }
  ];

  const stats = [
    { number: "49+", label: "Tons of Materials Repurposed" },
    { number: "100+", label: "Local Artisans Supported" },
    { number: "500+", label: "Eco-Products Created" },
    { number: "50+", label: "Climate Sessions Conducted" }
  ];

  return (
    <section id="achievements" className="py-20 bg-emerald-50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">Our Achievements</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building a sustainable future through innovation, education, and community engagement
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-lg p-6 text-center shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200"></div>
          
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <motion.div
                  className="bg-white rounded-lg p-6 shadow-lg"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <achievement.icon className="h-8 w-8 text-emerald-600 mr-3" />
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-800 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </motion.div>
              </div>
              
              <div className="w-2/12 flex justify-center">
                <motion.div 
                  className="w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 * index + 0.3 }}
                ></motion.div>
              </div>
              
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;