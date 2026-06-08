import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from './ui/card';
import { Briefcase, TrendingUp } from 'lucide-react';

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Jogjagamers Community',
      role: 'Junior In-Game Helper',
      period: '2021 - 2023',
      achievements: [
        'Assisted community members with in-game queries and technical support',
        'Moderated gaming events and tournaments',
        'Built strong community engagement through active participation',
      ],
      skills: ['Community Management', 'Customer Service', 'Problem Solving'],
    },
    {
      company: 'BATIK PANCAWATI ID',
      role: 'Volunteer Social Media Manager',
      period: '2024 - 2025',
      achievements: [
        'Managed social media content strategy and posting schedule',
        'Increased social media engagement by creating compelling visual content',
        'Coordinated with team to maintain brand consistency',
      ],
      skills: ['Social Media Management', 'Content Creation', 'Brand Strategy'],
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-24 bg-gradient-to-b from-[#0d1525] to-[#0B1020]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            >
              <Card className="bg-[#F8FAFC]/5 backdrop-blur-md border-[#F8FAFC]/10 p-8 hover:bg-[#F8FAFC]/10 transition-all hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center">
                      <Briefcase className="text-white" size={28} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#F8FAFC] mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-[#3B82F6] font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <span className="mt-2 md:mt-0 inline-block px-4 py-2 bg-[#3B82F6]/20 text-[#3B82F6] rounded-full text-sm font-semibold">
                        {exp.period}
                      </span>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="text-[#3B82F6]" size={18} />
                        <h4 className="text-sm font-semibold text-[#F8FAFC]/60 uppercase tracking-wide">
                          Key Achievements
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0"></div>
                            <span className="text-[#F8FAFC]/80">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm border border-[#3B82F6]/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};