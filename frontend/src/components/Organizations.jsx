import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from './ui/card';
import { Building2, Calendar } from 'lucide-react';

export const Organizations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const organizations = [
    {
      name: 'Bismania Community',
      role: 'Active Member',
      period: '2020 - Present',
      responsibilities: [
        'Participated in bus enthusiast meetups and events',
        'Contributed to community photography and documentation',
        'Engaged in transportation culture discussions',
      ],
      achievements: [
        'Built network with transportation enthusiasts',
        'Developed photography skills through community projects',
      ],
    },
    {
      name: 'OSIS SMA PESAT',
      role: 'Student Council Member',
      period: '2020 - 2023',
      responsibilities: [
        'Organized school-wide events and activities',
        'Represented student voice in school meetings',
        'Coordinated with teachers and administration',
      ],
      achievements: [
        'Successfully led multiple school events',
        'Improved student engagement through creative initiatives',
      ],
    },
    {
      name: 'MICRO IT HMV',
      role: 'Member',
      period: '2024 - Present',
      responsibilities: [
        'Participate in IT and media-related projects',
        'Collaborate on digital content creation',
        'Support organizational technology initiatives',
      ],
      achievements: [
        'Enhanced technical and creative skills',
        'Contributed to campus digital media projects',
      ],
    },
  ];

  return (
    <section id="organizations" ref={ref} className="py-24 bg-[#0B1020]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Organizational Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {organizations.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <Card className="bg-[#F8FAFC]/5 backdrop-blur-md border-[#F8FAFC]/10 p-8 hover:bg-[#F8FAFC]/10 transition-all">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center">
                      <Building2 className="text-white" size={28} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-[#F8FAFC] mb-1">
                          {org.name}
                        </h3>
                        <p className="text-lg text-[#3B82F6] font-semibold">
                          {org.role}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 flex items-center gap-2">
                        <Calendar className="text-[#3B82F6]" size={16} />
                        <span className="text-[#F8FAFC]/60 text-sm">
                          {org.period}
                        </span>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[#F8FAFC]/60 uppercase tracking-wide mb-2">
                        Responsibilities
                      </h4>
                      <ul className="space-y-1">
                        {org.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0"></div>
                            <span className="text-[#F8FAFC]/70 text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-sm font-semibold text-[#F8FAFC]/60 uppercase tracking-wide mb-2">
                        Achievements
                      </h4>
                      <ul className="space-y-1">
                        {org.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-2 flex-shrink-0"></div>
                            <span className="text-[#F8FAFC]/70 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
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