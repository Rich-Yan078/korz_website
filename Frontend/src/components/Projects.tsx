import { MapPin } from 'lucide-react';
import { ProjectShowcase } from '../types';

interface ProjectsProps {
  projects: ProjectShowcase[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Избранные <span className="text-blue-600">Проекты</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Откройте, как наши решения для вентиляции преобразуют пространства в престижных проектах
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl h-96 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 text-blue-400 mb-3">
                  <MapPin size={18} />
                  <span className="text-sm">{project.location}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
