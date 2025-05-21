import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Tracking from "./pages/Tracking";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/projects"
              element={<Projects isUnderMaintenance={true} />}
            />
            <Route
              path="/tracking"
              element={<Tracking isUnderMaintaince={true} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
