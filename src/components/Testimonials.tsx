import React, { useState, useEffect } from "react";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";

type TestimonialType = {
  id: number;
  name: string;
  role: string;
  image?: string;
  rating: number;
  text: string;
};

const Testimonials: React.FC = () => {
  const testimonials: TestimonialType[] = [
    {
      id: 1,
      name: "NAD (Iniisal)",
      role: "Mahasiswa Teknik Informatika",
      rating: 5,
      text: "trusted abiezzzz⭐️⭐️⭐️⭐️ cepet juga ngerjainnyaa makanya balik lagi😁🤩",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setActiveIndex(
      (current) => (current - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={18}
        className={
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section id="testimonials" className="section bg-primary-800 text-white">
      <div className="container">
        <div className="section-title">
          <h2 className="text-white mb-3">Apa Kata Mereka?</h2>
          <p className="text-primary-100 max-w-2xl mx-auto">
            Lihat bagaimana Tajoki telah membantu mahasiswa dan pelajar
            menyelesaikan tugas pemrograman mereka dengan hasil yang memuaskan.
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 p-6 md:p-8"
                >
                  <div className="mx-10 card text-gray-800 p-6 md:p-8">
                    <div className="flex flex-wrap gap-4 items-center mb-4">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-14 h-14 object-cover rounded-full"
                        />
                      ) : (
                        <div className="w-14 h-14 rounded-full bg-primary-700 text-white flex items-center justify-center font-bold text-lg">
                          {testimonial.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div>
                        <div className="font-medium text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                      <div className="flex ml-auto">
                        {renderStars(testimonial.rating)}
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-primary-800 shadow-md hover:bg-white transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-primary-800 shadow-md hover:bg-white transition-all"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-white scale-125" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
