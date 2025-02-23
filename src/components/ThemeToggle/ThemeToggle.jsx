import React from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectTheme } from "../../features/theme/theme";

const ThemeToggle = ({ isMobile = false }) => {
  const isLight = useSelector(selectTheme);
  const dispatch = useDispatch();

  const baseClasses = `inline-flex items-center justify-center p-2 rounded-full
    hover:text-blue-500 focus:outline-none transition-all duration-300
    ${isLight ? "text-gray-700" : "text-gray-200"}`;

  const mobileClasses =
    "fixed bottom-6 right-6 bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm z-[1001]";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => dispatch(toggleTheme())}
      className={`${baseClasses} ${isMobile ? mobileClasses : ""}`}
    >
      {isLight ? (
        <svg
          className="w-6 h-6 text-gray-800 hover:text-yellow-500 transition-colors"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="5" className="fill-current" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-gray-200 hover:text-blue-400 transition-colors"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            className="fill-current"
          />
        </svg>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
