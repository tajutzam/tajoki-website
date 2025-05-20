// Services.tsx

import React from "react";
import {
  Code,
  FileCode,
  Globe,
  FolderKanban,
  Database,
  BrainCircuit,
  Server,
  Monitor,
} from "lucide-react";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  popular?: boolean;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  price,
  popular,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      className="relative p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
    >
      {popular && (
        <div className="absolute -top-3 right-4 bg-accent-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
          Populer
        </div>
      )}
      <div className="w-12 h-12 flex items-center justify-center bg-primary-100 text-primary-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <div className="text-sm font-semibold text-accent-600 mb-4">
        {price === "-//-" ? "Hubungi untuk nego harga" : `Mulai dari ${price}`}
      </div>
      <button
        onClick={() =>
          document
            .getElementById("order")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="w-full text-sm font-medium bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-xl transition-colors duration-300"
      >
        Pesan Layanan
      </button>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={22} />,
      title: "Tugas Dasar Pemrograman",
      description:
        "Solusi untuk tugas dasar seperti Python, Java, C++, dan bahasa pemrograman popular lainnya.",
      price: "Rp 25.000",
      popular: true,
    },
    {
      icon: <FileCode size={22} />,
      title: "Proyek Algoritma & Struktur Data",
      description:
        "Implementasi algoritma kompleks dan struktur data untuk tugas kuliah maupun proyek akhir.",
      price: "Rp 50.000",
    },
    {
      icon: <Globe size={22} />,
      title: "Web Development",
      description:
        "Pengembangan website modern dengan React, Vue, dan framework lainnya.",
      price: "Rp 500.000",
      popular: true,
    },
    {
      icon: <Monitor size={22} />,
      title: "Mobile App Development",
      description:
        "Aplikasi Android/iOS menggunakan Flutter, React Native, atau native development.",
      price: "Rp 500.000",
      popular: true,
    },
    {
      icon: <Database size={22} />,
      title: "Database & SQL",
      description:
        "Desain database, optimasi query SQL, serta integrasi backend.",
      price: "Rp 200.000",
    },
    {
      icon: <BrainCircuit size={22} />,
      title: "Machine Learning & AI",
      description:
        "Pembuatan model ML, prediksi data, dan analitik menggunakan Python.",
      price: "Rp 900.000",
    },
    {
      icon: <Server size={22} />,
      title: "Backend Development",
      description:
        "Layanan backend dengan Node.js, Laravel, Django, dan lainnya.",
      price: "Rp 300.000",
      popular: true,
    },
    {
      icon: <FolderKanban size={22} />,
      title: "Proyek Khusus",
      description:
        "Diskusikan proyek unik Anda bersama tim kami untuk solusi terbaik.",
      price: "-//-",
    },
  ];

  return (
    <section id="services" className="section bg-gray-50 py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-primary-800 mb-4">
            Layanan Kami
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Pilih layanan joki coding sesuai kebutuhan Anda, dari tugas dasar
            hingga proyek skala besar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
              popular={service.popular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
