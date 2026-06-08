import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from './ui/card';
import { MessageSquare, Palette, Users, Code } from 'lucide-react';

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      icon: MessageSquare,
      title: 'Communication',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Strategic Communication', level: 90 },
        { name: 'Public Speaking', level: 85 },
        { name: 'Brand Management', level: 85 },
        { name: 'Negotiation', level: 80 },
      ],
    },
    {
      icon: Palette,
      title: 'Creative',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Video Editing', level: 95 },
        { name: 'Videography', level: 90 },
        { name: 'Photography', level: 85 },
        { name: 'Creative Directing', level: 85 },
        { name: 'Graphic Design', level: 80 },
      ],
    },
    {
      icon: Users,
      title: 'Management',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Event Organizing', level: 90 },
        { name: 'Project Planning', level: 88 },
        { name: 'People Management', level: 85 },
      ],
    },
    {
      icon: Code,
      title: 'Software',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Canva', level: 95 },
        { name: 'Google Workspace', level: 92 },
        { name: 'CapCut', level: 90 },
        { name: 'MS Office', level: 90 },
        { name: 'OBS Studio', level: 85 },
        { name: 'Filmora', level: 85 },
        { name: 'Lightroom', level: 85 },
        { name: 'Photoshop', level: 80 },
        { name: 'VS Code', level: 45 },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-24 bg-gradient-to-b from-[#0d1525] to-[#0B1020]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="bg-[#F8FAFC]/5 backdrop-blur-md border-[#F8FAFC]/10 p-8 h-full hover:bg-[#F8FAFC]/10 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F8FAFC]">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-[#F8FAFC]/80 text-sm font-medium">
                          {skill.name}
                        </span>
                        <span className="text-[#3B82F6] text-sm font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-[#F8FAFC]/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};