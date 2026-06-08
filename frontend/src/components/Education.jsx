import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, BookOpen } from 'lucide-react';

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const courses = [
    'Business Communication',
    'Event Organizer',
    'Film & Video Production',
    'Audiovisual Editing',
    'Digital Photography',
    'Graphic Design',
  ];

  return (
    <section id="education" ref={ref} className="py-24 bg-[#0B1020]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] to-[#8B5CF6]"></div>

            {/* Education Item */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative pl-24 pb-12"
            >
              {/* Icon */}
              <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center border-4 border-[#0B1020]">
                <GraduationCap className="text-white" size={28} />
              </div>

              {/* Content */}
              <div className="bg-[#F8FAFC]/5 backdrop-blur-md border border-[#F8FAFC]/10 rounded-2xl p-8 hover:bg-[#F8FAFC]/10 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[#F8FAFC] mb-2">
                      IPB University
                    </h3>
                    <p className="text-lg text-[#3B82F6] font-semibold">
                      Digital Communication & Media
                    </p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-4 py-2 bg-[#3B82F6]/20 text-[#3B82F6] rounded-full text-sm font-semibold">
                      2024 - Present
                    </span>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="text-[#3B82F6]" size={20} />
                    <h4 className="text-lg font-semibold text-[#F8FAFC]">
                      Relevant Coursework
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {courses.map((course, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
                        <span className="text-[#F8FAFC]/80">{course}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};