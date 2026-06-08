import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from './ui/card';
import { Trophy, Star, Film, Users } from 'lucide-react';

export const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Film,
      title: 'Short Movie Favorite Nomination',
      description: 'Nominated for favorite short movie for outstanding storytelling and production quality',
      year: '2023',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Leadership Excellence',
      description: 'Led multiple successful projects and teams across various organizational initiatives',
      year: '2024',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Trophy,
      title: 'Event Management Achievement',
      description: 'Successfully managed large-scale events including Festival Budaya Nusantara XVI',
      year: '2024',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Star,
      title: 'Social Media Management Success',
      description: 'Increased engagement and brand visibility through strategic social media campaigns',
      year: '2024',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="achievements" ref={ref} className="py-24 bg-[#0B1020]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Achievements & Recognition
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="bg-[#F8FAFC]/5 backdrop-blur-md border-[#F8FAFC]/10 p-8 h-full hover:bg-[#F8FAFC]/10 transition-all hover:scale-[1.02] group">
                <div className="relative">
                  {/* Glowing Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                  
                  {/* Icon */}
                  <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-6`}>
                    <achievement.icon className="text-white" size={32} />
                  </div>
                </div>

                {/* Year Badge */}
                <span className="inline-block px-3 py-1 bg-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold rounded-full mb-4">
                  {achievement.year}
                </span>

                {/* Content */}
                <h3 className="text-2xl font-bold text-[#F8FAFC] mb-3">
                  {achievement.title}
                </h3>
                <p className="text-[#F8FAFC]/70 leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};