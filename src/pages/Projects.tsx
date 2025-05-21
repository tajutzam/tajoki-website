import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import loadingAnimation from "../jsons/maintaince.json";
import Lottie from "lottie-react";
import Maintaince from "../components/Maintaince";

type ProjectsProps = {
  isUnderMaintenance?: boolean;
};

type Technology = {
  name: string;
  color: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  price: string;
  category: string;
};

const Projects: React.FC<ProjectsProps> = ({ isUnderMaintenance = false }) => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "Sistem manajemen toko online dengan analitik penjualan, manajemen produk, dan laporan keuangan. Dibangun menggunakan React dan Node.js.",
      image:
        "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: [
        { name: "React", color: "bg-blue-500" },
        { name: "Node.js", color: "bg-green-500" },
        { name: "MongoDB", color: "bg-emerald-500" },
        { name: "Express", color: "bg-gray-600" },
      ],
      price: "Rp 12.000.000",
      category: "Web Development",
    },
    {
      id: 2,
      title: "Aplikasi Manajemen Klinik",
      description:
        "Sistem informasi klinik untuk mengelola jadwal dokter, rekam medis pasien, dan administrasi. Menggunakan Flutter untuk aplikasi mobile lintas platform.",
      image:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: [
        { name: "Flutter", color: "bg-blue-400" },
        { name: "Firebase", color: "bg-yellow-500" },
        { name: "GetX", color: "bg-purple-500" },
      ],
      price: "Rp 15.000.000",
      category: "Mobile Development",
    },
    {
      id: 3,
      title: "Sistem Prediksi Cuaca",
      description:
        "Model machine learning untuk prediksi cuaca berdasarkan data historis. Diimplementasikan menggunakan Python dan scikit-learn.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: [
        { name: "Python", color: "bg-yellow-600" },
        { name: "scikit-learn", color: "bg-blue-600" },
        { name: "Pandas", color: "bg-purple-600" },
        { name: "Flask", color: "bg-gray-600" },
      ],
      price: "Rp 8.000.000",
      category: "Machine Learning",
    },
    {
      id: 4,
      title: "Sistem Manajemen Perpustakaan",
      description:
        "Aplikasi web untuk mengelola peminjaman buku, katalog, dan member perpustakaan. Dibangun dengan Laravel dan MySQL.",
      image:
        "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      technologies: [
        { name: "Laravel", color: "bg-red-500" },
        { name: "MySQL", color: "bg-blue-500" },
        { name: "Bootstrap", color: "bg-purple-500" },
        { name: "jQuery", color: "bg-blue-400" },
      ],
      price: "Rp 10.000.000",
      category: "Web Development",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Proyek Terbaru
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Beberapa proyek terbaik yang kami kerjakan, disesuaikan dengan
            kebutuhan Anda.
          </p>
        </div>

        <div className="">
          {isUnderMaintenance ? (
            <Maintaince />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: project.id * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-56 overflow-hidden rounded-t-2xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-4 right-4 bg-white text-sm text-gray-800 px-3 py-1 rounded-full shadow-sm font-medium">
                      {project.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 text-xs font-medium text-white rounded-full ${tech.color}`}
                        >
                          {tech.name}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-lg font-semibold text-primary-600">
                        {project.price}
                      </span>
                      <button
                        onClick={() => openModal(project)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-full transition-colors duration-300"
                      >
                        Pesan Sekarang
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-lg p-6 relative animate-fade-in-up">
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Pesan: {selectedProject.title}
            </h3>
            <p className="text-gray-500 mb-4">{selectedProject.category}</p>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.querySelector("#name") as HTMLInputElement)
                  .value;
                const email = (form.querySelector("#email") as HTMLInputElement)
                  .value;
                const note = (
                  form.querySelector("#note") as HTMLTextAreaElement
                ).value;

                const message =
                  `*Pesanan Proyek*\n\n` +
                  `*Judul:* ${selectedProject.title}\n` +
                  `*Kategori:* ${selectedProject.category}\n` +
                  `*Harga:* ${selectedProject.price}\n\n` +
                  `*Nama:* ${name}\n` +
                  `*Email:* ${email}\n` +
                  `*Catatan:* ${note}`;

                const phoneNumber = "6285175286933";
                const encodedMessage = encodeURIComponent(message);
                const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

                window.open(waUrl, "_blank");
              }}
            >
              <div>
                <label className="text-sm font-medium text-gray-700">
                  Nama Anda
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Masukkan nama"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  placeholder="Masukkan email"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Catatan Tambahan / Nego Harga
                </label>
                <textarea
                  id="note"
                  className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  rows={3}
                  placeholder="Tulis pesan atau penawaran harga di sini..."
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition"
                >
                  Kirim via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
