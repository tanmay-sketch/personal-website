import ProjectCard from "./ProjectCard";
import projectsData from '@/lib/projects.json';

export default function Projects() {
  // Create a copy of the array and reverse it
  const reversedProjects = [...projectsData].reverse();
  
  return (
    <section className="w-full py-24 container mx-auto px-6 relative z-20">
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Projects</h2>
        <p className="text-white/70">Check out some of my projects here</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {reversedProjects.map((project) => (
          <div key={project.id} className="h-full flex-1">
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              duration={project.duration}
              tags={project.tags}
              background={project.background}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
} 