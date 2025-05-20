import React from 'react';
import { 
  Code, FileCode, Globe, FolderKanban, Database, 
  BrainCircuit, Server, Monitor 
} from 'lucide-react';

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, price }) => {
  return (
    <div className="card p-6 flex flex-col">
      <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4 text-primary-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="mt-auto">
        <div className="text-accent-600 font-semibold mb-4">
          Mulai dari {price}
        </div>
        <button 
          onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full btn btn-primary"
        >
          Pesan Layanan
        </button>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code size={24} />,
      title: 'Tugas Dasar Pemrograman',
      description: 'Solusi untuk tugas dasar seperti Python, Java, C++, dan bahasa pemrograman popular lainnya.',
      price: 'Rp 25.000'
    },
    {
      icon: <FileCode size={24} />,
      title: 'Proyek Algoritma & Struktur Data',
      description: 'Implementasi algoritma kompleks dan struktur data untuk tugas kuliah maupun proyek akhir.',
      price: 'Rp 50.000'
    },
    {
      icon: <Globe size={24} />,
      title: 'Web Development',
      description: 'Pengembangan website dengan HTML, CSS, JavaScript, React, Angular, Vue, dan framework lainnya.',
      price: 'Rp 500.000'
    },
    {
      icon: <Monitor size={24} />,
      title: 'Mobile App Development',
      description: 'Pembuatan aplikasi mobile dengan React Native, Flutter, atau native Android/iOS development.',
      price: 'Rp 500.000'
    },
    {
      icon: <Database size={24} />,
      title: 'Database & SQL',
      description: 'Perancangan database, query SQL, dan integrasi dengan aplikasi untuk berbagai kebutuhan.',
      price: 'Rp 200.000'
    },
    {
      icon: <BrainCircuit size={24} />,
      title: 'Machine Learning & AI',
      description: 'Implementasi model machine learning, pengolahan data, dan analisis menggunakan Python.',
      price: 'Rp 900.000'
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      description: 'Pengembangan backend dengan Node.js, Django, Flask, Laravel, dan teknologi server lainnya.',
      price: 'Rp 500.000'
    },
    {
      icon: <FolderKanban size={24} />,
      title: 'Proyek Khusus',
      description: 'Solusi untuk tugas atau proyek khusus yang membutuhkan penanganan spesial dan diskusi lebih lanjut.',
      price: '-//-'
    }
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2 className="text-primary-800 mb-3">Layanan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menawarkan berbagai layanan joki coding untuk membantu Anda menyelesaikan 
            tugas pemrograman dengan kualitas terbaik.
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;