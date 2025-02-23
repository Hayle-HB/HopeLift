import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme, selectTheme } from "../../features/theme/theme";
import { FaHeart } from "react-icons/fa";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const isLight = useSelector(selectTheme);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About",
      dropdown: [
        { name: "Our Mission", href: "/our-mission" },
        { name: "Success Stories", href: "/success-stories" },
        { name: "Our Team", href: "/team" },
        { name: "Our Impact", href: "/impact" },
        { name: "Partners", href: "/partners" },
      ],
    },
    {
      name: "Donate",
      dropdown: [
        { name: "One-time Donation", href: "/one-time" },
        { name: "Monthly Giving", href: "/monthly" },
        { name: "Corporate Giving", href: "/corporate" },
        { name: "Current Projects", href: "/projects" },
        { name: "Fundraise", href: "/fundraise" },
      ],
    },
    {
      name: "Resources",
      dropdown: [
        { name: "Blog", href: "/blog" },
        { name: "News", href: "/news" },
        { name: "Reports", href: "/reports" },
        { name: "FAQ", href: "/faq" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`fixed w-full z-[1000] transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-lg" : "bg-transparent"
      } top-0`}
    >
      {/* Background with Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-b ${
            isLight
              ? "from-white to-blue-50/40"
              : "from-gray-900 to-gray-800/40"
          }`}
        />
        <motion.div
          className="absolute inset-0 bg-gray-900"
          initial={{ x: "100%" }}
          animate={{ x: !isLight ? "0%" : "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>

      {/* Navbar Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Updated Logo with Animations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center space-x-2"
          >
            <svg
              className="h-10 w-10"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Updated Gradient definitions */}
              <defs>
                <linearGradient
                  id="logoGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#FF0000" }}>
                    <animate
                      attributeName="stop-color"
                      values="#FF0000; #FF4444; #FF0000"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%" style={{ stopColor: "#FF4444" }}>
                    <animate
                      attributeName="stop-color"
                      values="#FF4444; #FF8888; #FF4444"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Animated heart shape */}
              <motion.path
                d="M32 56.5c-1.5 0-3-.5-4.3-1.4-10.4-7.4-16.8-12.5-19.6-15.2-4.2-3.9-6.1-7.5-6.1-11.6 0-4 1.3-7.4 3.9-10.2 2.6-2.8 6-4.2 10.1-4.2 3.1 0 5.9.9 8.4 2.7 2.5 1.8 4.2 4.2 5.1 7.1h5c.9-2.9 2.6-5.3 5.1-7.1 2.5-1.8 5.3-2.7 8.4-2.7 4.1 0 7.5 1.4 10.1 4.2 2.6 2.8 3.9 6.2 3.9 10.2 0 4.1-1.9 7.7-6.1 11.6-2.8 2.7-9.2 7.8-19.6 15.2-1.3.9-2.8 1.4-4.3 1.4z"
                fill="url(#logoGradient)"
                filter="url(#glow)"
              >
                <animate
                  attributeName="d"
                  values="
                    M32 56.5c-1.5 0-3-.5-4.3-1.4-10.4-7.4-16.8-12.5-19.6-15.2-4.2-3.9-6.1-7.5-6.1-11.6 0-4 1.3-7.4 3.9-10.2 2.6-2.8 6-4.2 10.1-4.2 3.1 0 5.9.9 8.4 2.7 2.5 1.8 4.2 4.2 5.1 7.1h5c.9-2.9 2.6-5.3 5.1-7.1 2.5-1.8 5.3-2.7 8.4-2.7 4.1 0 7.5 1.4 10.1 4.2 2.6 2.8 3.9 6.2 3.9 10.2 0 4.1-1.9 7.7-6.1 11.6-2.8 2.7-9.2 7.8-19.6 15.2-1.3.9-2.8 1.4-4.3 1.4z;
                    M32 54.5c-1.5 0-3-.5-4.3-1.4-10.4-7.4-16.8-12.5-19.6-15.2-4.2-3.9-6.1-7.5-6.1-11.6 0-4 1.3-7.4 3.9-10.2 2.6-2.8 6-4.2 10.1-4.2 3.1 0 5.9.9 8.4 2.7 2.5 1.8 4.2 4.2 5.1 7.1h5c.9-2.9 2.6-5.3 5.1-7.1 2.5-1.8 5.3-2.7 8.4-2.7 4.1 0 7.5 1.4 10.1 4.2 2.6 2.8 3.9 6.2 3.9 10.2 0 4.1-1.9 7.7-6.1 11.6-2.8 2.7-9.2 7.8-19.6 15.2-1.3.9-2.8 1.4-4.3 1.4z;
                    M32 56.5c-1.5 0-3-.5-4.3-1.4-10.4-7.4-16.8-12.5-19.6-15.2-4.2-3.9-6.1-7.5-6.1-11.6 0-4 1.3-7.4 3.9-10.2 2.6-2.8 6-4.2 10.1-4.2 3.1 0 5.9.9 8.4 2.7 2.5 1.8 4.2 4.2 5.1 7.1h5c.9-2.9 2.6-5.3 5.1-7.1 2.5-1.8 5.3-2.7 8.4-2.7 4.1 0 7.5 1.4 10.1 4.2 2.6 2.8 3.9 6.2 3.9 10.2 0 4.1-1.9 7.7-6.1 11.6-2.8 2.7-9.2 7.8-19.6 15.2-1.3.9-2.8 1.4-4.3 1.4z"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </motion.path>

              {/* Animated arrow */}
              <motion.path
                d="M32 20l8 8M32 20l-8 8M32 20v24"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
              >
                <animate
                  attributeName="d"
                  values="
                    M32 20l8 8M32 20l-8 8M32 20v24;
                    M32 10l8 8M32 10l-8 8M32 10v24;
                    M32 0l8 8M32 0l-8 8M32 0v24;
                    M32 -10l8 8M32 -10l-8 8M32 -10v24"
                  dur="1.5s"
                  repeatCount="indefinite"
                />
              </motion.path>
            </svg>

            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              HopeLift
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.dropdown && handleDropdownEnter(index)}
                onMouseLeave={handleDropdownLeave}
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.dropdown ? (
                    <button
                      className={`font-medium py-2 flex items-center gap-1 relative group/item transition-all duration-300 ${
                        isLight
                          ? "text-gray-700 hover:text-blue-600"
                          : "text-gray-300 hover:text-blue-400"
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 
                          ${activeDropdown === index ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-full transition-all duration-300" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`font-medium py-2 relative group/item transition-all duration-300 ${
                        isLight
                          ? "text-gray-700 hover:text-blue-600"
                          : "text-gray-300 hover:text-blue-400"
                      }`}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-full transition-all duration-300" />
                    </Link>
                  )}
                </motion.div>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 top-full pt-2 w-56"
                  >
                    <div
                      className={`rounded-xl shadow-lg ${
                        isLight ? "bg-white/95" : "bg-gray-800/95"
                      } backdrop-blur-sm overflow-hidden`}
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className={`block px-4 py-3 text-sm relative transition-all duration-300 ${
                            isLight
                              ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50/80"
                              : "text-gray-300 hover:text-blue-400 hover:bg-gray-700/50"
                          } group/subitem`}
                        >
                          <span className="relative z-10 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 transition-opacity duration-300 group-hover/subitem:opacity-100" />
                            {subItem.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}

            {/* Theme Toggle Button - Updated with new icons */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => dispatch(toggleTheme())}
              className={`inline-flex items-center justify-center p-2 rounded-md
                hover:text-blue-500 focus:outline-none transition-colors duration-300
                ${isLight ? "text-gray-700" : "text-gray-200"}`}
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
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md
                hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors
                ${isLight ? "text-gray-700" : "text-gray-200"}`}
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-between">
                <span
                  className={`block w-6 h-0.5 transform transition-all duration-300
                  ${isLight ? "bg-gray-600" : "bg-gray-200"}
                  ${isMenuOpen ? "rotate-45 translate-y-2.5" : ""}`}
                />
                <span
                  className={`block w-6 h-0.5 transition-all duration-300
                  ${isLight ? "bg-gray-600" : "bg-gray-200"}
                  ${isMenuOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block w-6 h-0.5 transform transition-all duration-300
                  ${isLight ? "bg-gray-600" : "bg-gray-200"}
                  ${isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={
            isMenuOpen
              ? { height: "auto", opacity: 1 }
              : { height: 0, opacity: 0 }
          }
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div
            className={`px-2 pt-2 pb-3 space-y-1 ${
              isLight ? "bg-white/95" : "bg-gray-800/95"
            } backdrop-blur-lg rounded-b-lg shadow-lg`}
          >
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === index ? null : index
                        )
                      }
                      className={`w-full flex items-center justify-between px-4 py-2 text-base font-medium rounded-md
                        ${
                          isLight
                            ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                            : "text-gray-200 hover:text-blue-400 hover:bg-gray-700/50"
                        }`}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <motion.div
                      initial={false}
                      animate={
                        activeDropdown === index
                          ? { height: "auto", opacity: 1 }
                          : { height: 0, opacity: 0 }
                      }
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pr-2 py-2 space-y-1">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`block px-4 py-2 text-sm rounded-md
                              ${
                                isLight
                                  ? "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                                  : "text-gray-300 hover:text-blue-400 hover:bg-gray-700/50"
                              }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`block px-4 py-2 text-base font-medium rounded-md
                      ${
                        isLight
                          ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                          : "text-gray-200 hover:text-blue-400 hover:bg-gray-700/50"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Theme Toggle */}
            <div className="px-4 py-2">
              <button
                onClick={() => dispatch(toggleTheme())}
                className={`flex items-center space-x-2 w-full px-4 py-2 text-base font-medium rounded-md
                  ${
                    isLight
                      ? "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      : "text-gray-200 hover:text-blue-400 hover:bg-gray-700/50"
                  }`}
              >
                <span>Theme</span>
                {isLight ? (
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5"
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
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default NavBar;
