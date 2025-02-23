import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectTheme } from "../../../features/theme/theme";
import ImageCube from "../../../components/3D/ImageCube";

// Import all 6 images
import image1 from "../../../assets/images/beggar.jpg";
import image2 from "../../../assets/images/beutifugirl.jpg";
import image3 from "../../../assets/images/centonhand.jpg";
import image4 from "../../../assets/images/cryingchiled.jpg";
import image5 from "../../../assets/images/cryingchiled2.jpg";
import image6 from "../../../assets/images/cryingwomenblack.jpg";

const HeroSection = () => {
  const isLight = useSelector(selectTheme);

  const cubeImages = [
    image1, // beggar.jpg
    image2, // beutifugirl.jpg
    image3, // centonhand.jpg
    image4, // cryingchiled.jpg
    image5, // cryingchiled2.jpg
    image6, // cryingwomenblack.jpg
  ];

  return (
    <div
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* Background with Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80" />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-900/95 to-gray-800/90"
          initial={{ x: "-100%" }}
          animate={{ x: !isLight ? "0%" : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Animated Particles Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className={`absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
              !isLight ? "bg-gray-400" : "bg-white"
            }`}
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 text-white space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.span
              className="inline-block text-blue-400 font-semibold text-sm sm:text-base uppercase tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              Empowering Through Opportunity
            </motion.span>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Transform a Life
              <motion.span
                className="block mt-2 text-blue-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Through Business
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Your donation isn't just charity—it's an investment in someone's
              future. Help us empower individuals to break free from poverty by
              starting their own sustainable businesses.
            </motion.p>

            {/* Impact Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">
                  100%
                </div>
                <div className="text-sm text-gray-300">Goes to Business</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">
                  $2.5K
                </div>
                <div className="text-sm text-gray-300">Average Grant</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">
                  85%
                </div>
                <div className="text-sm text-gray-300">Success Rate</div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button
                className="w-full sm:w-auto px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 
                  bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center gap-2 group"
              >
                Donate Now
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button
                className="w-full sm:w-auto px-8 py-4 border-2 border-blue-400/30 rounded-lg font-medium
                  text-white hover:bg-blue-600/10 transition-all duration-300"
              >
                See Success Stories
              </button>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Cube */}
          <motion.div
            className="w-full lg:w-1/2 mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageCube images={cubeImages} />
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-16 sm:w-24 h-16 sm:h-24 rounded-full opacity-20 bg-blue-400"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 sm:w-32 h-20 sm:h-32 rounded-full opacity-20 bg-blue-500"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div
          className={`w-6 sm:w-8 h-10 sm:h-12 border-2 rounded-full flex justify-center ${
            !isLight ? "border-gray-300" : "border-white"
          }`}
        >
          <motion.div
            className={`w-1 h-2 sm:h-3 rounded-full mt-2 ${
              !isLight ? "bg-gray-300" : "bg-white"
            }`}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
