import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import FundraisingProgress from "./FundraisingProgress/FundraisingProgress";

const HomePage = () => {
  return (
    <main className="relative sm:mt-0">
      {/* Hero Section */}
      <div className="w-full mt-[60px] sm:mt-0">
        <HeroSection />
      </div>

      {/* Fundraising Progress Section */}
      <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Current Progress
            </h2>
            <p className="text-xl text-gray-300">
              Together, we're making a difference. Track our impact in
              real-time.
            </p>
          </div>
          <FundraisingProgress />
        </div>
      </section>

      {/* Other sections will be added here */}
      {/* Success Stories Section */}
      {/* How It Works Section */}
      {/* Get Involved Section */}
      {/* Impact Section */}
      {/* Testimonials Section */}
    </main>
  );
};

export default HomePage;
