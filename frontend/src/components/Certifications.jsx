import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from './ui/card';
import { Award, Download, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCert, setSelectedCert] = useState(null);
  const [filter, setFilter] = useState('all');

  const certificates = [
    {
      title: 'Sertifikat Kode Kiddo Coding School',
      issuer: 'Kode Kiddo Coding School',
      description: 'Programming Course - SMA Advance',
      date: '2020',
      category: 'Creative',
      thumbnail: 'https://customer-assets.emergentagent.com/job_dio-media/artifacts/1fqd2a28_thumbnail_kodekiddo.jpg',
      pdf: 'https://customer-assets.emergentagent.com/job_dio-media/artifacts/yovqe2qw_Sertifikat_Kode_Kiddo_SMA.pdf',
    },
    {
      title: 'Sertifikat Komputer',
      issuer: 'SMA PESAT Kota Bogor',
      description: 'Computer Training From SMA PESAT KOTA BOGOR',
      date: '2024',
      category: 'Creative',
      thumbnail: 'https://customer-assets.emergentagent.com/job_dio-media/artifacts/624ki90z_thumbnail_komputer.jpg',
      pdf: 'https://customer-assets.emergentagent.com/job_dio-media/artifacts/olroxa8m_SERTIFIKAT%20KOMPUTER.pdf',
    },
    {
      title: 'English Certificate - Global House',
      issuer: 'Global House National Olympic Committee',
      description: 'Score: 750 - Issued by Global House National Olympic Committee - Malang, Indonesia.',
      date: '2023',
      category: 'Communication',
      thumbnail: 'https://customer-assets.emergentagent.com/job_dio-media/artifacts/hso6mqms_thumbnail_english.jpg',
      pdf: 'https://customer-assets.emergentagent.com/job_dio-media/artifacts/n2dfdv86_%5BSERTIF%5D%20English%20Global%20House.pdf',
    },
  ];

  const categories = ['all', 'Communication', 'Creative'];
  const filteredCerts = filter === 'all' ? certificates : certificates.filter(cert => cert.category === filter);

  return (
    <section id="certifications" ref={ref} className="py-24 bg-gradient-to-b from-[#0d1525] to-[#0B1020]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Certifications & Credentials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full"></div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? 'default' : 'outline'}
              className={`${
                filter === category
                  ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
                  : 'border-[#F8FAFC]/20 text-[#F8FAFC] hover:bg-[#F8FAFC]/10'
              } rounded-full px-6 transition-all`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredCerts.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="bg-[#F8FAFC]/5 backdrop-blur-md border-[#F8FAFC]/10 overflow-hidden hover:scale-[1.02] transition-all group">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cert.thumbnail}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-[#0B1020]/70 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center">
                      <Award className="text-white" size={20} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold rounded-full mb-3">
                    {cert.category}
                  </span>
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-[#F8FAFC]/60 text-sm mb-1">{cert.issuer}</p>
                  {cert.description && (
                    <p className="text-[#F8FAFC]/50 text-xs mb-2 italic">{cert.description}</p>
                  )}
                  <p className="text-[#F8FAFC]/40 text-xs mb-4">{cert.date}</p>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-[#3B82F6]/10 hover:bg-[#3B82F6]/20 text-[#3B82F6] border border-[#3B82F6]/20"
                      onClick={() => setSelectedCert(cert)}
                    >
                      <Eye size={16} className="mr-2" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-[#F8FAFC]/5 hover:bg-[#F8FAFC]/10 text-[#F8FAFC] border border-[#F8FAFC]/10"
                      onClick={() => window.open(cert.pdf, '_blank')}
                    >
                      <Download size={16} className="mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0d1525] border border-[#F8FAFC]/10 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start p-6 border-b border-[#F8FAFC]/10">
              <div>
                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-[#F8FAFC]/60">{selectedCert.issuer}</p>
                <p className="text-[#F8FAFC]/40 text-sm">{selectedCert.date}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  className="bg-[#3B82F6] hover:bg-[#2563EB] text-white"
                  onClick={() => window.open(selectedCert.pdf, '_blank')}
                >
                  <Download size={16} className="mr-2" />
                  Download
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-[#F8FAFC] hover:bg-[#F8FAFC]/10"
                  onClick={() => setSelectedCert(null)}
                >
                  ×
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-hidden bg-white">
              <iframe
                src={selectedCert.pdf}
                title={selectedCert.title}
                className="w-full h-full min-h-[70vh]"
                style={{ border: 'none' }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};