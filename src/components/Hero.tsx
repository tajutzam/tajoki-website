import React, { useState, useEffect, useRef } from "react";
import { Code, Terminal, Users, ChevronRight, CheckCircle } from "lucide-react";

interface MousePosition {
  x: number;
  y: number;
}

const Hero: React.FC = () => {
  const [currentWord, setCurrentWord] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [displayText, setDisplayText] = useState<string>("");
  const [charIndex, setCharIndex] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const words: string[] = ["Tajoki", "Kualitas Terbaik", "Harga Terjangkau", "Tepat Waktu"];

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
  }, [charIndex, currentWord, isTyping]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setMousePosition({ x: rotateY, y: rotateX });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-white px-4 py-20"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-white" />

      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">

            {/* Main Heading */}
            <div className="space-y-3 mt-5">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Solusi Tugas Coding Anda dengan
              </h1>

              {/* Typewriter Effect */}
              <div className="flex items-center gap-2 min-h-[60px]">
                <span className="text-4xl lg:text-5xl font-bold text-blue-600">
                  {displayText}
                </span>
                <span className="inline-block w-1 h-10 bg-blue-600 animate-pulse" />
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Kami membantu mahasiswa dan pelajar menyelesaikan tugas programming dengan kualitas terbaik, tepat waktu, dan harga yang bersahabat.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToOrder}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
              >
                Pesan Sekarang
                <ChevronRight size={18} />
              </button>

              <button
                onClick={scrollToServices}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
              >
                Lihat Layanan
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {[
                { icon: Users, text: "500+ Klien", subtext: "Puas" },
                { icon: Code, text: "15+ Bahasa", subtext: "Pemrograman" },
                { icon: Terminal, text: "Revisi", subtext: "Tanpa Batas" },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <stat.icon size={24} className="text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{stat.text}</p>
                    <p className="text-xs text-gray-600">{stat.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative perspective-1000">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale3d(1.02, 1.02, 1.02)`,
              }}
            >
              {/* Code Editor Mockup */}
              <div className="p-6 space-y-4">
                {/* Editor Header */}
                <div className="flex items-center gap-2 pb-4 border-b border-blue-500">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-blue-200 text-sm ml-2 font-mono">solution.ts</span>
                </div>

                {/* Code Lines */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex gap-4">
                    <span className="text-blue-300">1</span>
                    <span className="text-blue-200">
                      <span className="text-purple-300">function</span>{" "}
                      <span className="text-yellow-300">needHelp</span>() {"{"}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-blue-300">2</span>
                    <span className="text-blue-200 pl-4">
                      <span className="text-purple-300">const</span>{" "}
                      <span className="text-blue-200">solution</span> ={" "}
                      <span className="text-yellow-300">callTajoki</span>();
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-blue-300">3</span>
                    <span className="text-blue-200 pl-4">
                      <span className="text-purple-300">return</span>{" "}
                      <span className="text-blue-200">solution</span>;
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-blue-300">4</span>
                    <span className="text-blue-200">{"}"}</span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-blue-300">5</span>
                    <span className="text-blue-200" />
                  </div>
                  <div className="flex gap-4">
                    <span className="text-blue-300">6</span>
                    <span className="text-blue-200">
                      <span className="text-blue-200">console.</span>
                      <span className="text-yellow-300">log</span>
                      <span className="text-blue-200">(</span>
                      <span className="text-yellow-300">needHelp</span>
                      <span className="text-blue-200">());</span>
                    </span>
                  </div>
                </div>

                {/* Terminal Output */}
                <div className="mt-6 p-4 bg-gray-900 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400 text-xs font-mono">Output:</span>
                  </div>
                  <p className="text-green-400 font-mono text-sm">
                    "Solusi Terpecahkan ✓"
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-green-500 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Online
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 -right-8 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;