import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { ProjectShowcase } from '../types';

interface ProjectsProps {
  projects: ProjectShowcase[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Наши <span className="text-yellow-600">Проекты</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Реализованные проекты с индивидуальными вентиляционными решениями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== CARD ===== */

function ProjectCard({ project }: { project: ProjectShowcase }) {
  const [index, setIndex] = useState(0);
  const total = project.images.length;

  /* ===== авто-слайд ===== */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(interval);
  }, [total]);

  const prev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  return (
    <div className="relative overflow-hidden rounded-2xl h-96 shadow-lg group">
      {/* ===== SLIDER ===== */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {project.images.map((img, i) => (
          <div key={i} className="relative min-w-full h-full">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-full object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* text */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <MapPin size={16} />
                <span className="text-sm">{img.location}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {img.title}
              </h3>

              
            </div>
          </div>
        ))}
      </div>

      {/* ===== ARROWS ===== */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                   bg-black/40 hover:bg-black/70 text-white
                   p-2 rounded-full transition"
      >
        <ChevronLeft size={22} />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                   bg-black/40 hover:bg-black/70 text-white
                   p-2 rounded-full transition"
      >
        <ChevronRight size={22} />
      </button>

      {/* ===== DOTS ===== */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {project.images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all
              ${i === index ? 'bg-yellow-500 scale-125' : 'bg-white/60'}
            `}
          />
        ))}
      </div>
    </div>
  );
}
