import React from "react";
import { ExternalLink, GitHub } from "react-feather";

const ProjectsSection = () => {
  const projects = [
    {
      title: "shyampur bazar",
      desc: "Transformed my village’s local market into an online platform to support local shopkeepers and bring digital access to rural customers.",
      img: "shyampur.png",
      tech: ["React", "Node.js", "MongoDB","Express.js"],
      liveLink: "https://shyampurbazar.vercel.app/",
      sourceLink: "#",
      delay: 0,
    },
    {
      title: "Chat Application",
      desc: "Built a real-time chat application using MERN stack and Socket.IO for instant communication.",
      img: "chatapp.jpg",
      tech: ["React", "Node.js", "MongoDB"],
      liveLink: "https://socketio-q6x1.vercel.app/",
      sourceLink: "#",
      delay: 0,
    },
    {
      title: "UnivPaperHub",
      desc: "A web-based platform where students can upload and access previous year question papers of their college.",
      img: "univ.png",
      tech: ["EJS", "Node.js+Express", "Tailwind CSS", "Cloudinary", "MongoDB"],
      liveLink: "https://univpaperhub.onrender.com/",
      sourceLink: "#",
      delay: 100,
    },
    {
      title: "Physiotherapy Clinic Website",
      desc: "Developed a responsive and user-friendly website for a physiotherapy clinic featuring service listings, appointment booking functionality, and direct contact via phone number for easy patient communication",
      img: "clinic.png",
      tech: ["React", "Node.js+Express",],
      liveLink: "https://drkalimphysio.vercel.app/",
      sourceLink: "#",
      delay: 200,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300"
              data-aos="fade-up"
              data-aos-delay={project.delay}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a target="_blank"
                    href={project.liveLink}
                    className="text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                  </a>
                  <a
                    href={project.sourceLink}
                    className="text-gray-600 hover:text-gray-800 flex items-center"
                  >
                    <GitHub className="w-4 h-4 mr-1" /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12" data-aos="fade-up">
          <a target="_blank"
            href="https://github.com/sachinkushwha"
            className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition inline-flex items-center"
          >
            <GitHub className="w-5 h-5 mr-2" /> View All Projects on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
