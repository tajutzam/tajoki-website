import React, { useState, useEffect } from "react";
import {
  Code,
  Terminal,
  Users,
  Sparkles,
  Zap,
  Award,
  ChevronRight,
} from "lucide-react";

import heroLottie from "../public/hero.json";
import Lottie from "lottie-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentWord, setCurrentWord] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const words = [
    "Tajoki",
    "Kualitas Terbaik",
    "Harga Terjangkau",
    "Tepat Waktu",
  ];

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const currentWordText = words[currentWord];

    if (isTyping) {
      if (charIndex < currentWordText.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentWordText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (charIndex > 0) {
        const timer = setTimeout(() => {
          setDisplayText(currentWordText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setCurrentWord((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [charIndex, currentWord, isTyping, words]);

  const scrollToOrder = () => {
    const orderSection = document.getElementById("order");
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: heroLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 mt-10"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl -top-20 -left-20 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.5}px, ${
              mousePosition.y * 0.5
            }px)`,
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.3}px, ${
              -mousePosition.y * 0.3
            }px)`,
            animationDelay: "1s",
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-300/40 rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="group inline-block">
              <div className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full font-medium text-sm border border-blue-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Sparkles size={16} className="animate-spin" />
                <span>#1 Jasa Joki Coding Terpercaya</span>
                <Award size={16} className="text-yellow-500" />
              </div>
            </div>

            {/* Main Heading with Enhanced Typography */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                <span className="block">Solusi Tugas</span>
                <span className="block bg-gradient-to-r  bg-clip-text">
                  Coding Anda
                </span>
                <span className="block">dengan</span>
              </h1>

              {/* Enhanced Typewriter Effect */}
              <div className="flex items-center space-x-2">
                <span className="text-4xl lg:text-5xl bg-gradient-to-r text-primary-600 bg-clip-text font-bold">
                  {displayText}
                </span>
                <span className="inline-block w-1 h-12 bg-purple-500 animate-pulse" />
              </div>
            </div>

            {/* Enhanced Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Kami membantu mahasiswa dan pelajar menyelesaikan tugas
              programming dengan
              <span className="font-semibold text-blue-600">
                {" "}
                kualitas kode terbaik
              </span>
              ,<span className="font-semibold text-blue-600"> tepat waktu</span>
              , dan
              <span className="font-semibold text-blue-600">
                {" "}
                harga bersahabat
              </span>
              .
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToOrder}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Zap size={20} />
                  Pesan Sekarang
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                onClick={scrollToServices}
                className="group px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-purple-500 hover:text-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white/80 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  Lihat Layanan
                  <ChevronRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              {[
                { icon: Users, text: "500+ Klien Puas", color: "blue" },
                { icon: Code, text: "15+ Bahasa Pemrograman", color: "purple" },
                { icon: Terminal, text: "Revisi Tanpa Batas", color: "pink" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r ${
                      stat.color === "blue"
                        ? "from-blue-100 to-blue-200"
                        : stat.color === "purple"
                        ? "from-purple-100 to-purple-200"
                        : "from-pink-100 to-pink-200"
                    }`}
                  >
                    <stat.icon
                      size={20}
                      className={`${
                        stat.color === "blue"
                          ? "text-blue-600"
                          : stat.color === "purple"
                          ? "text-purple-600"
                          : "text-pink-600"
                      } group-hover:scale-110 transition-transform`}
                    />
                  </div>
                  <span className="font-medium text-gray-700">{stat.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div
              className="relative z-10 group"
              style={{
                transform: `perspective(1000px) rotateX(${
                  mousePosition.y * 0.5
                }deg) rotateY(${mousePosition.x * 0.5}deg)`,
              }}
            >
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-white to-gray-50 shadow-2xl rounded-3xl overflow-hidden border-4 border-white group-hover:shadow-3xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Lottie
                  animationData={heroLottie}
                  autoplay={true}
                  loop={true}
                />
                {/* <img
                  src="https://blog.rilidigital.com/wp-content/uploads/2024/12/Menciptakan-Berbagai-Teknologi-Melalui-Coding.jpg"
                  alt="Programmer coding"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                /> */}

                {/* Overlay Elements */}
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 animate-pulse">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  Online
                </div>
              </div>

              {/* Enhanced Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full opacity-60 animate-pulse" />
              <div
                className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-60 animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute top-1/3 -right-12 w-16 h-16 bg-gradient-to-br from-pink-200 to-yellow-300 rounded-full opacity-60 animate-bounce"
                style={{ animationDelay: "1s" }}
              />
              <div
                className="absolute bottom-1/3 -left-12 w-20 h-20 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full opacity-60 animate-bounce"
                style={{ animationDelay: "1.5s" }}
              />

              {/* Code Snippets Floating */}
              <div className="absolute top-8 -left-8 bg-gray-900 text-green-400 px-3 py-2 rounded-lg text-xs font-mono shadow-lg animate-float">
                {'{ "status": "coding" }'}
              </div>
              <div
                className="absolute bottom-16 -right-12 bg-blue-600 text-white px-3 py-2 rounded-lg text-xs font-mono shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                console.log("ready!")
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full p-1">
          <div className="w-1 h-3 bg-gray-400 rounded-full animate-pulse" />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Hero;
