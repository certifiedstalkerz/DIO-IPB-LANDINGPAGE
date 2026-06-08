import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from './ui/card';
import { Mail, Linkedin, Instagram, Github, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'diosatriawibisono@gmail.com',
      href: 'mailto:diosatriawibisono@gmail.com',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/diosw',
      href: 'https://www.linkedin.com/in/diosw/',
      color: 'from-blue-600 to-blue-400',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@diosw_',
      href: 'http://instagram.com/diosw_/',
      color: 'from-purple-600 to-pink-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '/certifiedstalkerz',
      href: 'https://github.com/certifiedstalkerz',
      color: 'from-gray-700 to-gray-500',
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-b from-[#0d1525] to-[#0B1020]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full mb-6"></div>
          <p className="text-[#F8FAFC]/70 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl font-bold text-[#F8FAFC]">
              Get in Touch
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="block"
                data-testid={`contact-link-${link.label.toLowerCase()}`}
              >
                <Card className="bg-[#F8FAFC]/5 backdrop-blur-md border-[#F8FAFC]/10 p-6 hover:bg-[#F8FAFC]/10 transition-all hover:scale-[1.03] group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <link.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-grow min-w-0">
                      <div className="text-sm text-[#F8FAFC]/60 mb-1">
                        {link.label}
                      </div>
                      <div className="text-[#F8FAFC] font-semibold truncate">
                        {link.value}
                      </div>
                    </div>
                    <ArrowUpRight
                      className="text-[#F8FAFC]/40 group-hover:text-[#3B82F6] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0"
                      size={20}
                    />
                  </div>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
