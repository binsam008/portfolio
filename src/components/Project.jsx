import { ArrowRight, ExternalLink, Github } from "lucide-react";
import project1 from "../assets/Project/project1.png";
import project2 from "../assets/Project/project2.png";
import project3 from "../assets/Project/project3.png";
import project4 from "../assets/Project/project4.png";
import project5 from "../assets/Project/project5.png";
import project6 from "../assets/Project/project6.png";

const projects = [
  {
    id: 1,
    title: "Well-Reach Logistics",
    description: "A beautiful landing page app using React and Tailwind.",
    image: project1,
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://www.wellreachlogisticsbh.com/",
    githubUrl: "https://github.com/binsam008/projects",
  },
  {
    id: 2,
    title: "chat application",
    description:
      "A real-time chat application built with React, ChatEngine",
    image: project2,
    tags: ["React", "ChatEngine"],
  },
  {
    id: 3,
    title: "Humeny",
    description:
      "care taker app for elderly people, built with React and tailwindcss",
    image: project3,
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://takecare-ten.vercel.app/",
    githubUrl: "https://github.com/binsam008/my-project",
  },
  {
    id: 4,
    title:"E-commerce App",
    description: "A fully functional e-commerce app built with html,css,php,sql.",
    image: project4,
    tags: ["HTML", "CSS", "PHP", "SQL"],
  },
  {
    id: 5,
    title: "Captainz-Esports",
    description: "A landing page for an esports team, built with Html, CSS, and JavaScript.",
    image: project5,
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://captainzesports.vercel.app/",
    githubUrl: "https://github.com/binsam008/cnz"
  },
  {
    id: 6,
    title:"Ztech digitals",
    description: "A landing page for a digital marketing agency, built with React and TailwindCSS.",
    image: project6,
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://ztechdigitals.vercel.app/",
    githubUrl: "https://github.com/binsam008/ztechdigitals"
  },
  
];

export const Project = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/binsam008"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};