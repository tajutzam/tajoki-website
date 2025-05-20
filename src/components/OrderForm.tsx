import React, { useState } from "react";
import { Send, Check, Info } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  deadline: string;
  budget: string;
  description: string;
  bahasa: string;
};

const OrderForm: React.FC = () => {
  const initialFormData: FormData = {
    name: "",
    email: "",
    phone: "",
    service: "",
    deadline: "",
    budget: "",
    description: "",
    bahasa: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Nama harus diisi";
    if (!formData.email.trim()) {
      newErrors.email = "Email harus diisi";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Nomor telepon harus diisi";
    if (!formData.service) newErrors.service = "Silakan pilih layanan";
    if (!formData.deadline) newErrors.deadline = "Deadline harus diisi";
    if (!formData.bahasa) newErrors.bahasa = "Bahasa Pemograman harus diisi";

    if (!formData.description.trim())
      newErrors.description = "Deskripsi tugas harus diisi";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when field is being edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const { name, phone, service, deadline, budget, description, bahasa } =
        formData;

      const message = `
Halo Admin 👋
 
Saya *${name}* tertarik menggunakan jasa joki coding.

Berikut detail kebutuhan saya:

*Nomor WhatsApp:* ${phone}
*Layanan:* ${service}
*Deadline:* ${deadline}
*Budget:* ${budget || "-"}
*Bahasa Pemograman :* ${bahasa || "-"}

*Deskripsi Pekerjaan:*
${description.trim()}

Mohon konfirmasi lebih lanjut. Terima kasih 🙏
    `.trim();

      const phoneNumber = "6285175286933";
      const encodedMessage = encodeURIComponent(message);
      const waUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      window.open(waUrl, "_blank");
      setFormData(initialFormData);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="order" className="section">
      <div className="container">
        <div className="section-title">
          <h2 className="text-primary-800 mb-3">Pesan Jasa Joki Coding</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Isi formulir di bawah ini untuk memesan jasa joki coding. Tim kami
            akan segera menghubungi Anda untuk diskusi lebih lanjut.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {isSubmitted ? (
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-success-500 rounded-full mx-auto flex items-center justify-center text-white mb-6">
                <Check size={36} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Pemesanan Berhasil!
              </h3>
              <p className="text-gray-600 mb-6">
                Terima kasih telah memesan jasa Tajoki. Tim kami akan segera
                menghubungi Anda melalui WhatsApp atau Email untuk diskusi lebih
                lanjut.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="btn btn-primary"
              >
                Pesan Lagi
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Nama Lengkap*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.name ? "border-error-500" : "border-gray-300"
                    } focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors`}
                    placeholder="Masukkan nama lengkap"
                  />
                  {errors.name && (
                    <p className="mt-1 text-error-500 text-sm">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.email ? "border-error-500" : "border-gray-300"
                    } focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors`}
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-error-500 text-sm">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Nomor WhatsApp*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? "border-error-500" : "border-gray-300"
                    } focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors`}
                    placeholder="08xxxxxxxxxx"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-error-500 text-sm">
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Jenis Layanan*
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.service ? "border-error-500" : "border-gray-300"
                    } focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors`}
                  >
                    <option value="">Pilih Jenis Layanan</option>
                    <option value="basic">Tugas Dasar Pemrograman</option>
                    <option value="algorithm">
                      Proyek Algoritma & Struktur Data
                    </option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="database">Database & SQL</option>
                    <option value="ml">Machine Learning & AI</option>
                    <option value="backend">Backend Development</option>
                    <option value="custom">Proyek Khusus</option>
                  </select>

                  {errors.service && (
                    <p className="mt-1 text-error-500 text-sm">
                      {errors.service}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="deadline"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Deadline*
                  </label>
                  <input
                    type="date"
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.deadline ? "border-error-500" : "border-gray-300"
                    } focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors`}
                  />
                  {errors.deadline && (
                    <p className="mt-1 text-error-500 text-sm">
                      {errors.deadline}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Budget (opsional)
                  </label>
                  <input
                    type="number"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                    placeholder="Rp xxx.xxx"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="language"></label>
                <select
                  id="language"
                  name="bahasa"
                  value={formData.bahasa}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.bahasa ? "border-error-500" : "border-gray-300"
                  } focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors`}
                >
                  <option value="">Pilih Bahasa Pemograman</option>
                  <option value="php">PHP</option>
                  <option value="js">Java Script</option>
                  <option value="java">Java</option>
                  <option value="kotlin">Kotlin</option>
                  <option value="golang">Golang</option>
                  <option value="lainya">Lainya (taro di Deskripsi)</option>
                </select>
                {errors.deadline && (
                  <p className="mt-1 text-error-500 text-sm">{errors.bahasa}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Deskripsi Tugas*
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.description ? "border-error-500" : "border-gray-300"
                  } focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors`}
                  placeholder="Jelaskan detail tugas yang ingin dikerjakan, teknologi yang digunakan, dan kebutuhan khusus lainnya."
                ></textarea>
                {errors.description && (
                  <p className="mt-1 text-error-500 text-sm">
                    {errors.description}
                  </p>
                )}
              </div>

              <div className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg mb-6">
                <Info
                  size={20}
                  className="text-primary-600 flex-shrink-0 mt-0.5"
                />
                <p className="text-sm text-gray-600">
                  Setelah mengisi formulir kamu akan diarahkan ke wa admin,
                  untuk berdiskusi lebih lanjut terkait tugas kamu!
                </p>
              </div>

              <button
                type="submit"
                className="btn btn-accent w-full flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Kirim Pesanan
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
