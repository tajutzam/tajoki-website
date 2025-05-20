import React from "react";
import { Code2, Instagram, Mail, MessageSquare } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Code2 size={28} className="text-primary-300" />
              <span className="font-heading font-bold text-xl">Tajoki</span>
            </div>
            <p className="text-primary-200">
              Solusi terpercaya untuk tugas pemrograman Anda. Kami membantu
              mahasiswa dan pelajar menyelesaikan tugas coding dengan kualitas
              kode terbaik.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="https://instagram.com/tajoki.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <MessageSquare size={18} />
              </a>
              <a
                href="mailto:tajoki.id@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center hover:bg-primary-700 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Layanan</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Tugas Dasar Pemrograman
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Proyek Algoritma
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Mobile App Development
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Database & SQL
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Link Cepat</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("hero")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Layanan
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("testimonials")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Testimoni
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("order")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Pesan Jasa
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-primary-200 hover:text-white transition-colors"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <MessageSquare
                  size={18}
                  className="text-primary-300 flex-shrink-0 mt-1"
                />
                <span className="text-primary-200">
                  <a
                    href="https://wa.me/62851752869330"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    +62 812-3456-7890
                  </a>
                </span>
              </li>
              <li className="flex gap-2">
                <Mail
                  size={18}
                  className="text-primary-300 flex-shrink-0 mt-1"
                />
                <span className="text-primary-200">
                  <a
                    href="mailto:tajoki.id@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    tajoki.id@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex gap-2">
                <Instagram
                  size={18}
                  className="text-primary-300 flex-shrink-0 mt-1"
                />
                <span className="text-primary-200">
                  <a
                    href="https://instagram.com/tajoki_id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    @tajoki.id
                  </a>
                </span>
              </li>
              <li className="flex gap-2 pt-3">
                <button
                  onClick={() =>
                    document
                      .getElementById("order")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="btn btn-primary py-2 px-4"
                >
                  Pesan Sekarang
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-300 text-sm">
            &copy; {currentYear} Tajoki. All rights reserved.
          </div>
          <div className="text-primary-300 text-sm">
            <span>Dibuat dengan ❤️ untuk para mahasiswa dan pelajar</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
