import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTheme } from "./features/theme/theme";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";

// // Lazy load other pages for better performance
// const OurMission = React.lazy(() => import("./pages/OurMission/OurMission"));
// const SuccessStories = React.lazy(() =>
//   import("./pages/SuccessStories/SuccessStories")
// );
// const Team = React.lazy(() => import("./pages/Team/Team"));
// const OneTime = React.lazy(() => import("./pages/Donate/OneTime"));
// const Monthly = React.lazy(() => import("./pages/Donate/Monthly"));
// const Projects = React.lazy(() => import("./pages/Projects/Projects"));
// const Impact = React.lazy(() => import("./pages/Impact/Impact"));
// const Contact = React.lazy(() => import("./pages/Contact/Contact"));

const App = () => {
  const isLight = useSelector(selectTheme);

  return (
    <Router>
      <div
        className={`min-h-screen ${
          isLight ? "bg-gray-50" : "bg-gray-900 text-white"
        }`}
      >
        <NavBar />
        <React.Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/our-mission" element={<OurMission />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/team" element={<Team />} />
            <Route path="/one-time" element={<OneTime />} />
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </React.Suspense>
      </div>
    </Router>
  );
};

export default App;
