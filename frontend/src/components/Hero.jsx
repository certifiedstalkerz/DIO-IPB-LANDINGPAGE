import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/diosw/', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/certifiedstalkerz', label: 'GitHub' },
    { icon: Instagram, href: 'http://instagram.com/diosw_/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:diosatriawibisono@gmail.com', label: 'Email' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Star Field Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1020] via-[#0d1525] to-[#0B1020]">
        <div className="stars absolute inset-0"></div>
        <div className="stars2 absolute inset-0"></div>
        <div className="stars3 absolute inset-0"></div>
      </div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B1020]/50 to-[#0B1020]"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
              <img
                src="https://customer-assets.emergentagent.com/job_dio-media/artifacts/yleqfwfb_GAMBAR%20ATAS.jpeg"
                alt="Dio Satria Wibisono"
                className="relative w-full h-full object-cover rounded-full border-4 border-white/10"
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-[#F8FAFC] mb-4 tracking-tight"
          >
            DIO SATRIA WIBISONO
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-6"
          >
            <h2 className="text-xl md:text-2xl text-[#F8FAFC]/80 mb-2">
              Digital Communication & Media Student
            </h2>
            <p className="text-lg text-[#F8FAFC]/60">
              Content Creator • Video Editor • Event Organizer
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-3xl text-[#F8FAFC]/70 text-lg leading-relaxed mb-10 px-4"
          >
            Passionate about digital communication, creative media, branding,
            storytelling, and event management. Currently pursuing a degree at IPB
            University while building experience in media production, social media
            strategy, and professional communication.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-6 text-lg rounded-lg transition-all hover:scale-105"
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#F8FAFC]/20 text-[#F8FAFC] hover:bg-[#F8FAFC]/10 px-8 py-6 text-lg rounded-lg transition-all hover:scale-105"
              onClick={() => window.open('https://drive.google.com/file/d/1ruch6hw9limgjpwtFz6pcsUSx0w3KZkp/view?usp=sharing', '_blank')}
            >
              Download CV
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-[#F8FAFC]/5 backdrop-blur-sm border border-[#F8FAFC]/10 flex items-center justify-center text-[#F8FAFC]/60 hover:text-[#3B82F6] hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/10 transition-all hover:scale-110"
                whileHover={{ y: -4 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-[#F8FAFC]/40" size={32} />
        </motion.div>
      </div>
    </section>
  );
};