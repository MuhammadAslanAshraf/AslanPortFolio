import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "7 Eagle",
    description: "7 Eagle Group, a company that specializes in helping veterans and skillbridgers find careers. They offer personalized coaching, access to a vast employer network, and a proven track record of success in transitioning military personnel into civilian roles",
    image: "/projects/7eagle.png",
    tags: ["MERN Stack","Tailwind Css","JWT..",],
    // demoUrl: "https://wether-app-lac.vercel.app",
    githubUrl: "https://github.com/MuhammadAslanAshraf/WetherApp",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "A modern booking system with secure login and responsive UI.This project is built with the MERN Stack (MongoDB, Express, React, Node.js). Integrated Stripe for secure payment processing. It is a practice working project to explore full-stack development and payment integration. Key features include booking management, authentication, and responsive design.",
    image: "/projects/project2.png",
    tags: ["React.js", "Javascript", "Node.js",'MongoDB','Tailwind Css'],
    demoUrl: "https://frontend-booking-ecru.vercel.app",
    githubUrl: "https://github.com/MuhammadAslanAshraf/frontend-booking",
  },
  {
    id: 3,
    title: "BeMultilingual",
    description:
      "Dubbing Services Platform – Contributed as a developer on a Next.js-based application offering dubbing services for YouTubers, Film & TV, and Businesses. The platform supports 40+ languages and is trusted by creators, studios, and global brands.",
    image: "/projects/beMulti.png",
    tags: ["Next.js"],
    demoUrl: "https://bemultilingual.ca",
    githubUrl: "https://github.com/MuhammadAslanAshraf",
  },{
    id: 4,
    title: "DocumentReview.Law's",
    description:
      "Dubbing Services Platform – Contributed as a developer on a Next.js-based application offering.",
    image: "/projects/docReview.png",
    tags: ["React.js","Javascript","Tailwind Css","WebSocket"],
    // demoUrl: "",
    githubUrl: "https://github.com/MuhammadAslanAshraf",
  },
];

export const ProjectsSection = () => {
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
            href="https://github.com/MuhammadAslanAshraf"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
