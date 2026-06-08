import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from './ui/card';
import { useState } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Catatan Akhir Sekolah',
      role: 'Video Editor',
      description: 'A heartfelt documentary-style video project capturing the final moments and memories of high school students.',
      image: 'https://customer-assets.emergentagent.com/job_dio-media/artifacts/pfiwayk5_CATATAN%20AKHIR%20SEKOLAH.jpg',
      skills: ['Video Editing', 'Storytelling', 'Post Production'],
    },
    {
      title: 'The Fearless Leader Webinar',
      role: 'Operator & Event Concept Team',
      description: 'Leadership webinar event focused on empowering young leaders with practical skills and inspiring stories.',
      image: 'https://customer-assets.emergentagent.com/job_dio-media/artifacts/2oupcpj7_The%20Fearless%20Leader%20Webinar.jpg',
      skills: ['Event Management', 'Technical Operation', 'Concept Development'],
    },
    {
      title: 'Setelah Kita Berpisah',
      role: 'Editor & Post Production',
      description: 'An emotional short film exploring themes of friendship, separation, and moving forward.',
      image: 'https://customer-assets.emergentagent.com/job_dio-media/artifacts/rdq8420h_Setelah%20Kita%20Berpisah.jpg',
      skills: ['Video Editing', 'Color Grading', 'Sound Design'],
    },
    {
      title: 'Program Kampus Desa',
      role: 'Project Leader',
      description: 'Community development program connecting university students with rural communities for mutual learning and growth.',
      image: 'https://customer-assets.emergentagent.com/job_dio-media/artifacts/clys6hpu_Program%20Kampus%20Desa.jpg',
      skills: ['Project Management', 'Community Engagement', 'Leadership'],
    },
    {
      title: 'Festival Budaya Nusantara XVI',
      role: 'Head of Logistics Division',
      description: 'Large-scale cultural festival celebrating Indonesian heritage with multiple performance stages and exhibitions.',
      image: 'https://customer-assets.emergentagent.com/job_dio-media/artifacts/tcebieke_Festival%20Budaya%20Nusantara%20XVI.jpeg',
      skills: ['Logistics Management', 'Team Coordination', 'Event Planning'],
    },
    {
      title: 'ORMAWA EXPO 2025',
      role: 'Logistics Staff',
      description: 'Campus organization expo showcasing student activities, achievements, and recruiting new members.',
      image: 'https://customer-assets.emergentagent.com/job_dio-media/artifacts/5sif6vi1_ORMAWA%20EXPO%202025.jpeg',
      skills: ['Event Support', 'Resource Management', 'Team Collaboration'],
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-24 bg-[#0B1020]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
            Project Showcase
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] mx-auto rounded-full"></div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card
                className="bg-[#F8FAFC]/5 backdrop-blur-md border-[#F8FAFC]/10 overflow-hidden hover:scale-[1.02] transition-all cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-[#0B1020]/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-3 py-1 bg-[#3B82F6] text-white text-xs font-semibold rounded-full mb-2">
                      {project.role}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#F8FAFC]/70 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.slice(0, 2).map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-xs rounded border border-[#3B82F6]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-[#0d1525] border border-[#F8FAFC]/10 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </Button>
            </div>
            <div className="p-8">
              <span className="inline-block px-4 py-2 bg-[#3B82F6] text-white text-sm font-semibold rounded-full mb-4">
                {selectedProject.role}
              </span>
              <h3 className="text-3xl font-bold text-[#F8FAFC] mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-[#F8FAFC]/80 text-lg leading-relaxed mb-6">
                {selectedProject.description}
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#F8FAFC]/60 uppercase tracking-wide mb-3">
                  Skills Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.skills.map((skill, idx) => (
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
          </motion.div>
        </div>
      )}
    </section>
  );
};