import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, ExternalLink, ArrowRight } from "lucide-react";
import tweet from "../jsons/tweet.json";

type TweetTestimonial = {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  verified?: boolean;
  text: string;
  date: string;
  tweetUrl: string;
  viewCount?: number;
  images?: string[];
};

const Testimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TweetTestimonial[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTweets = async () => {
      setIsLoading(true);
      try {
        const data = tweet;

        const formattedTestimonials: TweetTestimonial[] = data.map((tweet: any) => ({
          id: tweet.id,
          name: tweet.author?.name ?? "Tidak diketahui",
          username: tweet.author?.userName ?? "",
          avatar: tweet.author?.profilePicture ?? undefined,
          verified: tweet.author?.isVerified ?? false,
          text: tweet.text,
          date: new Date(tweet.createdAt).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
          tweetUrl: tweet.url,
          viewCount: tweet.viewCount ?? 0,
          images:
            tweet.extendedEntities?.media
              ?.filter((m: any) => m.type === "photo")
              ?.map((m: any) => m.media_url_https) ?? [],
        }));

        setTestimonials(formattedTestimonials);
      } catch (error) {
        console.error("Error loading tweet.json:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTweets();
  }, []);

  useEffect(() => {
    if (isPaused || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const goToNext = () => setActiveIndex((current) => (current + 1) % testimonials.length);
  const goToPrev = () =>
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);

  if (isLoading) {
    return (
      <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 text-gray-600">
            <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4zm2 5.29A7.96 7.96 0 014 12H0c0 3.04 1.13 5.82 3 7.94l3-2.65z"
              />
            </svg>
            <span>Memuat testimoni...</span>
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">Belum ada testimoni tersedia.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Cerita nyata dari pengguna Tajoki — langsung dari Twitter.
          </p>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, idx) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 bg-white">
                  <div className="p-8 md:p-10 border-t-4 border-blue-500">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full border"
                        />
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="font-bold text-gray-900">
                              {testimonial.name}
                            </span>
                            {testimonial.verified && (
                              <svg
                                className="w-4 h-4 text-blue-500"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M22.5 12.5c0-1.58-.88-2.95-2.15-3.6..." />
                              </svg>
                            )}
                          </div>
                          <span className="text-gray-500 text-sm">
                            @{testimonial.username}
                          </span>
                        </div>
                      </div>
                      <svg
                        className="w-6 h-6 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26..." />
                      </svg>
                    </div>

                    {/* Text */}
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      {testimonial.text}
                    </p>

                    {/* Images */}
                    {testimonial.images && testimonial.images.length > 0 && (
                      <div
                        className={`grid ${testimonial.images.length > 1 ? "grid-cols-2" : "grid-cols-1"
                          } gap-3 mb-4`}
                      >
                        {testimonial.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`Gambar tweet ${testimonial.username}`}
                            className="rounded-xl border border-gray-200 hover:opacity-90 transition"
                          />
                        ))}
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                      <span className="text-gray-500 text-sm">{testimonial.date}</span>
                      <div className="flex items-center gap-4 text-gray-500 text-sm">
                        {testimonial.viewCount !== undefined && (
                          <div className="flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.94 7.523 5 12 5s8.27 2.94 9.54 7c-1.27 4.06-5.06 7-9.54 7s-8.27-2.94-9.54-7z"
                              />
                            </svg>
                            <span>{testimonial.viewCount}</span>
                          </div>
                        )}
                        <a
                          href={testimonial.tweetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
                        >
                          <span>Lihat Tweet</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* ✅ Tombol “Lihat semua testimoni” di terakhir */}
                    {idx === testimonials.length - 1 && (
                      <div className="mt-8 flex justify-center">
                        <a
                          href="/testimonials"
                          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
                        >
                          <span>Lihat Semua Testimoni</span>
                          <ArrowRight className="w-5 h-5" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigasi */}
          {testimonials.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-white hover:border-blue-600 hover:text-blue-600 shadow-lg transition-all"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-gray-300 flex items-center justify-center text-gray-700 hover:bg-white hover:border-blue-600 hover:text-blue-600 shadow-lg transition-all"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          {/* Dots */}
          {testimonials.length > 1 && (
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all rounded-full ${index === activeIndex
                    ? "w-8 h-2 bg-blue-600"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
