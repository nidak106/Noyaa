import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Heart, ShoppingBag } from 'lucide-react';

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      id: 1,
      name: "Reclaimed Wood Planters",
      description: "Beautiful planters crafted from reclaimed wood, perfect for indoor gardens",
      image: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: "Coming Soon",
      rating: 4.9,
      isNew: true
    },
    {
      id: 2,
      name: "Upcycled Glass Vases",
      description: "Elegant vases made from repurposed glass bottles with artistic designs",
      image: "https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: "Coming Soon",
      rating: 4.8,
      isNew: true
    },
    {
      id: 3,
      name: "Eco-Friendly Tote Bags",
      description: "Handwoven tote bags made from recycled materials by local artisans",
      image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: "Coming Soon",
      rating: 4.9,
      isNew: false
    },
    {
      id: 4,
      name: "Bamboo Kitchenware Set",
      description: "Sustainable bamboo kitchen utensils and containers for eco-conscious cooking",
      image: "https://images.pexels.com/photos/4039921/pexels-photo-4039921.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: "Coming Soon",
      rating: 4.7,
      isNew: true
    },
    {
      id: 5,
      name: "Recycled Paper Notebooks",
      description: "Handbound notebooks made from recycled paper with beautiful cover designs",
      image: "https://images.pexels.com/photos/159832/book-address-book-learning-learn-159832.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: "Coming Soon",
      rating: 4.8,
      isNew: false
    },
    {
      id: 6,
      name: "Artisan Soap Collection",
      description: "Natural, plastic-free soaps made with organic ingredients and zero waste packaging",
      image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      price: "Coming Soon",
      rating: 5.0,
      isNew: true
    }
  ];

  return (
    <section id="products" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our collection of handcrafted, eco-friendly products made with love by local artisans
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New
                  </div>
                )}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className="h-6 w-6 text-white bg-black/20 rounded-full p-1" />
                </motion.div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-emerald-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-emerald-600">
                    {product.price}
                  </span>
                  <motion.button
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShoppingBag size={18} />
                    <span>Notify Me</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;