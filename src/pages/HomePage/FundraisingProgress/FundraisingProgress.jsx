import React from "react";
import { motion } from "framer-motion";

const FundraisingProgress = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-white">Current Campaign</h3>

        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-gray-300">
            <span>Raised: $8,240</span>
            <span>Goal: $10,000</span>
          </div>
          <div className="h-4 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "82.4%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="text-center p-4 bg-white/5 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">247</p>
            <p className="text-gray-300">Donors</p>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-xl">
            <p className="text-3xl font-bold text-purple-400">14</p>
            <p className="text-gray-300">Days Left</p>
          </div>
        </div>

        {/* Recent Donors */}
        <div className="space-y-2">
          <h4 className="text-white font-medium">Recent Supporters</h4>
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-white/20"
              />
            ))}
            <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-white text-sm">
              +42
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FundraisingProgress;
