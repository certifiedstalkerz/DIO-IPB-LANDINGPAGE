import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from './ui/card';
import { Target, Users, Calendar, Sparkles } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: Target, label: 'Projects Completed', value: '15+' },
    { icon: Users, label: 'Organizations Joined', value: '5+' },
    { icon: Calendar, label: 'Events Managed', value: '10+' },
    { icon: Sparkles, label: 'Creative Works', value: '30+' },
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-to-b from-[#0B1020] to-[#0d1525]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/30 to-[#8B5CF6]/30 rounded-2xl blur-3xl"></div>
              <img
                src="https://customer-assets.emergentagent.com/job_dio-media/artifacts/rvcttk2k_GAMBAR%20BAWAH.jpeg"
                alt="Dio Satria Wibisono"
                className="relative w-full h-full object-cover rounded-2xl border border-[#F8FAFC]/10"
              />
            </div>
          </motion.div>

          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-[#F8FAFC]/80 text-lg leading-relaxed">
                I am a Digital Communication & Media student at{' '}
                <span className="text-[#3B82F6] font-semibold">IPB University</span>{' '}
                with a strong interest in communication, digital media, content creation, branding, and media production.
              </p>
              <p className="text-[#F8FAFC]/80 text-lg leading-relaxed">
                Throughout my academic and organizational experiences, I have developed skills in video editing, digital content development, event management, and strategic communication. I enjoy working on projects that require creativity, collaboration, and problem-solving to deliver meaningful and engaging media experiences.
              </p>
              <p className="text-[#F8FAFC]/80 text-lg leading-relaxed">
                I am committed to continuously improving my professional capabilities through hands-on projects, leadership opportunities, and real-world experiences. My goal is to build a career in the media and broadcasting industry while contributing through innovative communication strategies, impactful storytelling, and high-quality content production.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <Card className="bg-[#F8FAFC]/5 backdrop-blur-md border-[#F8FAFC]/10 p-6 text-center hover:bg-[#F8FAFC]/10 transition-all hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#3B82F6]/20 to-[#8B5CF6]/20 flex items-center justify-center">
                    <stat.icon className="text-[#3B82F6]" size={24} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#F8FAFC] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-[#F8FAFC]/60">{stat.label}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};