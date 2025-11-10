import React, { useState } from "react";
import {
  ArrowRight,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projectImages = (folder: string, count: number) => {
  return Array.from({ length: count }, (_, i) => `/${folder}/${i + 1}.png`);
};

type Technology = {
  name: string;
  color: string;
};

type Project = {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: Technology[];
  price: string;
  category: string;
  demoUrl: string;
};

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Aplikasi Absensi",
      description:
        "Sistem Absensi dan Management Mahasiswa",
      images: projectImages("absensi", 2),
      technologies: [
        { name: "Laravel", color: "bg-red-500" },
        { name: "Mysql", color: "bg-green-500" },
      ],
      price: "Rp 700.000",
      category: "Web App",
      demoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleOrder = (project: Project) => {
    const phoneNumber = "6285175286933";
    const message = `Halo! Saya tertarik dengan proyek *${project.title}* (${project.category}) seharga ${project.price}.`;
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(waUrl, "_blank");
  };

  const nextImage = () => {
    if (!selectedProject) return;
    setDirection(1);
    setCurrentImage((prev) => (prev + 1) % selectedProject.images.length);
  };

  const prevImage = () => {
    if (!selectedProject) return;
    setDirection(-1);
    setCurrentImage(
      (prev) =>
        (prev - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Proyek Siap Pakai</h2>
          <p className="text-gray-500 mt-2">
            Pilih proyek yang sesuai kebutuhanmu. Lihat demo atau detailnya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="relative">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              <div className="flex-1 p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <span className="font-semibold text-blue-600 text-sm">
                    {project.price}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setCurrentImage(0);
                      }}
                      className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600"
                    >
                      <PlayCircle size={16} />
                      Lihat Detail
                    </button>
                    <button
                      onClick={() => handleOrder(project)}
                      className="flex items-center gap-1 text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-md"
                    >
                      Pesan <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Slideshow */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key="modal"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-2xl shadow-xl max-w-2xl w-full overflow-hidden mx-4"
            >
              {/* Tombol Close */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-full p-2 z-10"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Gambar dengan animasi slide */}
              <div className="relative h-72 bg-gray-100 overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentImage}
                    src={selectedProject.images[currentImage]}
                    alt="project"
                    custom={direction}
                    initial={{
                      x: direction > 0 ? 100 : -100,
                      opacity: 0,
                    }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{
                      x: direction > 0 ? -100 : 100,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute w-full h-full object-cover"
                  />
                </AnimatePresence>

                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies.map((t, i) => (
                    <span
                      key={i}
                      className={`text-xs font-medium text-white px-3 py-1 rounded-full ${t.color}`}
                    >
                      {t.name}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="font-semibold text-blue-600">
                    {selectedProject.price}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() =>
                        window.open(selectedProject.demoUrl, "_blank")
                      }
                      className="flex items-center gap-1 text-sm text-gray-700 hover:text-blue-600"
                    >
                      <PlayCircle size={16} />
                      Lihat Demo
                    </button>
                    <button
                      onClick={() => handleOrder(selectedProject)}
                      className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm hover:bg-blue-700"
                    >
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
