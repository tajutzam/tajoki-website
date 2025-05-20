import React, { useState, useRef, useEffect } from "react";

const faqList = [
  {
    question: "Apa itu layanan joki coding?",
    answer:
      "Layanan joki coding adalah jasa bantuan untuk menyelesaikan tugas atau proyek pemrograman sesuai dengan kebutuhan Anda.",
  },
  {
    question: "Bahasa pemrograman apa saja yang didukung?",
    answer:
      "Kami mendukung berbagai bahasa pemrograman seperti Python, Java, C++, JavaScript, PHP, dan lainnya.",
  },
  {
    question: "Apakah hasil coding bisa direvisi?",
    answer:
      "Tentu! Kami memberikan revisi gratis selama masih sesuai dengan permintaan awal.",
  },
  {
    question: "Bagaimana cara memesan layanan?",
    answer:
      "Klik tombol 'Pesan Layanan' di halaman utama dan isi formulir pemesanan yang tersedia.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section bg-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="section-title text-center mb-10">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">FAQ</h2>
          <p className="text-gray-600">
            Berikut adalah beberapa pertanyaan yang sering ditanyakan terkait layanan kami.
          </p>
        </div>

        <div className="space-y-4">
          {faqList.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <span className="text-primary-600 text-2xl">{isActive ? "-" : "+"}</span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden`}
                  style={{
                    maxHeight: isActive ? "200px" : "0",
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <div className="mt-2 text-gray-600">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
