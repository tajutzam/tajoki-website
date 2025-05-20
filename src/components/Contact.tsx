import React from "react";
import {
  MessageSquare,
  Mail,
  Instagram,
  Clock,
  MapPin,
  X,
  TwitterIcon,
  XIcon,
} from "lucide-react";

const ContactCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  action: string;
  href: string;
}> = ({ icon, title, description, action, href }) => {
  return (
    <div className="card p-6 flex flex-col items-center text-center">
      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4 text-primary-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
      >
        {action}
      </a>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2 className="text-primary-800 mb-3">Hubungi Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ada pertanyaan? Silakan hubungi kami melalui salah satu kontak di
            bawah ini. Tim kami siap membantu Anda 7 hari seminggu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContactCard
            icon={<MessageSquare size={24} />}
            title="WhatsApp"
            description="Respon cepat untuk pertanyaan dan konsultasi"
            action="Chat Sekarang"
            href="https://wa.me/6285175286933"
          />

          <ContactCard
            icon={<Mail size={24} />}
            title="Email"
            description="Kirim detail tugas atau pertanyaan lengkap"
            action="tajoki.id@gmail.com"
            href="mailto:tajoki.id@gmail.com"
          />

          <ContactCard
            icon={<Instagram size={24} />}
            title="Instagram"
            description="Ikuti update dan promo terbaru kami"
            action="@tajoki_id"
            href="https://instagram.com/tajoki_id"
          />

          <ContactCard
            icon={<TwitterIcon size={24} />}
            title="Twiter (X)"
            description="Lihat lebih banyak testi di sini"
            action="@tajoki_id"
            href="https://x.com/tajoki_id"
          />
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-primary-800 mb-4">
              Kenapa Memilih Tajoki?
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white flex-shrink-0">
                  <Check size={14} />
                </div>
                <div>
                  <h4 className="font-medium">Kualitas Terjamin</h4>
                  <p className="text-gray-600">
                    Semua tugas dikerjakan oleh programmer profesional dengan
                    pengalaman bertahun-tahun.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white flex-shrink-0">
                  <Check size={14} />
                </div>
                <div>
                  <h4 className="font-medium">Tepat Waktu</h4>
                  <p className="text-gray-600">
                    Kami menghargai deadline Anda dan selalu menyelesaikan tugas
                    sebelum tenggat waktu.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white flex-shrink-0">
                  <Check size={14} />
                </div>
                <div>
                  <h4 className="font-medium">Revisi Tanpa Batas</h4>
                  <p className="text-gray-600">
                    Kami akan merevisi tugas hingga Anda benar-benar puas dengan
                    hasilnya.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center text-white flex-shrink-0">
                  <Check size={14} />
                </div>
                <div>
                  <h4 className="font-medium">Harga Bersahabat</h4>
                  <p className="text-gray-600">
                    Biaya jasa yang terjangkau dengan kualitas dan layanan
                    terbaik.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Tajoki team working"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <MapPin size={20} className="text-primary-600 inline mr-2" />
              <span className="font-medium">Jawa Timur, Indonesia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add the Check icon component since it's used but not imported
const Check: React.FC<{ size: number }> = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

export default Contact;
