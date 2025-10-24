import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  popular?: boolean;
  isCenter: boolean;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  price,
  popular,
  isCenter,
}) => {
  return (
    <div
      className={`relative bg-white border rounded-2xl shadow-sm transition-all duration-500 ${isCenter
        ? "scale-110 border-blue-500 shadow-xl z-10 p-8"
        : "scale-90 opacity-75 border-gray-200 p-6"
        }`}
    >
      {popular && isCenter && (
        <div className="absolute -top-3 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
          Populer
        </div>
      )}
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 transition-all duration-300 ${isCenter
          ? "bg-blue-600 text-white"
          : "bg-blue-100 text-blue-600"
          }`}
      >
        {icon}
      </div>
      <h3 className={`font-semibold text-gray-800 mb-2 ${isCenter ? "text-xl" : "text-lg"}`}>
        {title}
      </h3>
      <p className={`text-gray-600 leading-relaxed mb-4 ${isCenter ? "text-sm" : "text-xs"}`}>
        {description}
      </p>
      <div className={`font-semibold text-blue-600 mb-4 ${isCenter ? "text-base" : "text-sm"}`}>
        {price === "-//-" ? "Hubungi untuk nego harga" : `Mulai dari ${price}`}
      </div>
      {isCenter && (
        <button
          onClick={() =>
            document
              .getElementById("order")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="w-full text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-xl transition-colors duration-300"
        >
          Pesan Layanan
        </button>
      )}
    </div>
  );
};

// Icons as SVG components
const CodeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const FileCodeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const MonitorIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const BrainIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const FolderIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

const Services: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      icon: <CodeIcon />,
      title: "Tugas Dasar Pemrograman",
      description:
        "Solusi untuk tugas dasar seperti Python, Java, C++, dan bahasa pemrograman popular lainnya.",
      price: "Rp 25.000",
      popular: true,
    },
    {
      icon: <FileCodeIcon />,
      title: "Proyek Algoritma & Struktur Data",
      description:
        "Implementasi algoritma kompleks dan struktur data untuk tugas kuliah maupun proyek akhir.",
      price: "Rp 50.000",
    },
    {
      icon: <GlobeIcon />,
      title: "Web Development",
      description:
        "Pengembangan website modern dengan React, Vue, dan framework lainnya.",
      price: "Rp 500.000",
      popular: true,
    },
    {
      icon: <MonitorIcon />,
      title: "Mobile App Development",
      description:
        "Aplikasi Android/iOS menggunakan Flutter, React Native, atau native development.",
      price: "Rp 500.000",
      popular: true,
    },
    {
      icon: <DatabaseIcon />,
      title: "Database & SQL",
      description:
        "Desain database, optimasi query SQL, serta integrasi backend.",
      price: "Rp 200.000",
    },
    {
      icon: <BrainIcon />,
      title: "Machine Learning & AI",
      description:
        "Pembuatan model ML, prediksi data, dan analitik menggunakan Python.",
      price: "Rp 900.000",
    },
    {
      icon: <ServerIcon />,
      title: "Backend Development",
      description:
        "Layanan backend dengan Node.js, Laravel, Django, dan lainnya.",
      price: "Rp 300.000",
      popular: true,
    },
    {
      icon: <FolderIcon />,
      title: "Proyek Khusus",
      description:
        "Diskusikan proyek unik Anda bersama tim kami untuk solusi terbaik.",
      price: "-//-",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false);
  };

  const getVisibleServices = () => {
    const prev = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    const next = currentIndex === services.length - 1 ? 0 : currentIndex + 1;
    return [prev, currentIndex, next];
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const visibleIndices = getVisibleServices();

  return (
    <section id="services" className="relative bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Pilih layanan joki coding sesuai kebutuhan Anda, dari tugas dasar
            hingga proyek skala besar.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards */}
          <div className="flex items-center justify-center gap-8 px-4 min-h-[480px]">
            {visibleIndices.map((serviceIndex, position) => (
              <div
                key={serviceIndex}
                className={`transition-all duration-500 ${position === 1 ? "w-full max-w-md" : "w-full max-w-sm"
                  }`}
              >
                <ServiceCard
                  icon={services[serviceIndex].icon}
                  title={services[serviceIndex].title}
                  description={services[serviceIndex].description}
                  price={services[serviceIndex].price}
                  popular={services[serviceIndex].popular}
                  isCenter={position === 1}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200 z-20"
            aria-label="Previous"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200 z-20"
            aria-label="Next"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`transition-all duration-300 rounded-full ${index === currentIndex
                ? "w-8 h-2 bg-blue-600"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() =>
              document
                .getElementById("order")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Lihat Semua Layanan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;