import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Code2, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      setIsMenuOpen(false);
    }
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Fungsi untuk cek active menu
  const isActive = (path: string) => {
    // Jika link mengarah ke route spesifik tanpa hash
    if (!path.includes("#")) {
      return location.pathname === path;
    }
    // Jika link menggunakan hash, cek apakah pathname sama dan hash sama
    const [basePath, hash] = path.split("#");
    return (
      location.pathname === basePath &&
      location.hash.toLowerCase() === `#${hash.toLowerCase()}`
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/#hero"
          className="flex items-center gap-2 text-primary-800 font-heading font-bold text-xl"
          onClick={() => setIsMenuOpen(false)}
        >
          <Code2 size={28} className="text-primary-600" />
          <span>Tajoki</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/#hero"
            className={`font-medium transition-colors ${
              isActive("/#hero")
                ? "text-primary-600 font-semibold"
                : "text-gray-700 hover:text-primary-600"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Beranda
          </Link>
          <Link
            to="/#services"
            className={`font-medium transition-colors ${
              isActive("/#services")
                ? "text-primary-600 font-semibold"
                : "text-gray-700 hover:text-primary-600"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Layanan
          </Link>
          <Link
            to="/#testimonials"
            className={`font-medium transition-colors ${
              isActive("/#testimonials")
                ? "text-primary-600 font-semibold"
                : "text-gray-700 hover:text-primary-600"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Testimoni
          </Link>
          <Link
            to="/#faq"
            className={`font-medium transition-colors ${
              isActive("/#faq")
                ? "text-primary-600 font-semibold"
                : "text-gray-700 hover:text-primary-600"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            to="/projects"
            className={`font-medium transition-colors ${
              isActive("/projects")
                ? "text-primary-600 font-semibold"
                : "text-gray-700 hover:text-primary-600"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Project Siap Pakai
          </Link>
          <Link
            to="/tracking"
            className={`font-medium text-lg transition-colors ${
              isActive("/tracking")
                ? "text-primary-600 font-semibold"
                : "text-gray-700 hover:text-primary-600"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Tracking Order
          </Link>
          <Link
            to="/#order"
            className="btn btn-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            Pesan Sekarang
          </Link>
        </nav>

        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="container py-5">
          <div className="flex justify-between items-center mb-10">
            <Link
              to="/#hero"
              className="flex items-center gap-2 text-primary-800 font-heading font-bold text-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <Code2 size={28} className="text-primary-600" />
              <span>Tajoki</span>
            </Link>
            <button onClick={toggleMenu}>
              <X size={24} className="text-gray-700" />
            </button>
          </div>

          <div className="flex flex-col space-y-6">
            <Link
              to="/#hero"
              className={`font-medium text-lg transition-colors ${
                isActive("/#hero")
                  ? "text-primary-600 font-semibold"
                  : "text-gray-700 hover:text-primary-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Beranda
            </Link>
            <Link
              to="/#services"
              className={`font-medium text-lg transition-colors ${
                isActive("/#services")
                  ? "text-primary-600 font-semibold"
                  : "text-gray-700 hover:text-primary-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Layanan
            </Link>
            <Link
              to="/#testimonials"
              className={`font-medium text-lg transition-colors ${
                isActive("/#testimonials")
                  ? "text-primary-600 font-semibold"
                  : "text-gray-700 hover:text-primary-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Testimoni
            </Link>
            <Link
              to="/#faq"
              className={`font-medium text-lg transition-colors ${
                isActive("/#faq")
                  ? "text-primary-600 font-semibold"
                  : "text-gray-700 hover:text-primary-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/projects"
              className={`font-medium text-lg transition-colors ${
                isActive("/projects")
                  ? "text-primary-600 font-semibold"
                  : "text-gray-700 hover:text-primary-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Project Siap Pakai
            </Link>
            <Link
              to="/tracking"
              className={`font-medium text-lg transition-colors ${
                isActive("/tracking")
                  ? "text-primary-600 font-semibold"
                  : "text-gray-700 hover:text-primary-600"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Tracking Order
            </Link>
            <Link
              to="/#order"
              className="btn btn-primary w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Pesan Sekarang
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
