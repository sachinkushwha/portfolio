import React from "react";
import { MessageSquare, Users, Clock, Zap } from "react-feather";

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold mb-4">My Skills</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Technical Skills */}
                    <div data-aos="fade-right">
                        <h3 className="text-xl font-semibold mb-6 text-gray-700">Technical Skills</h3>
                        <div className="space-y-6">
                            {[
                                { name: "HTML/CSS", level: 90 },
                                { name: "JavaScript", level: 85 },
                                { name: "Node.js+Express", level: 80 },
                                { name: "React", level: 70 },
                                { name: "UI/UX Design", level: 60 },
                            ].map((skill) => (
                                <div key={skill.name}>
                                    <div className="flex justify-between mb-2">
                                        <span className="font-medium">{skill.name}</span>
                                        <span>{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div
                                            className="skill-bar bg-indigo-600 h-2.5 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Professional Skills */}
                    <div data-aos="fade-left">
                        <h3 className="text-xl font-semibold mb-6 text-gray-700">Professional Skills</h3>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: <MessageSquare className="text-indigo-600" />, title: "Communication", desc: "Clear and effective communication with teams and clients" },
                                { icon: <Users className="text-indigo-600" />, title: "Teamwork", desc: "Collaborative approach to problem solving" },
                                { icon: <Clock className="text-indigo-600" />, title: "Time Management", desc: "Efficient workflow and deadline adherence" },
                                { icon: <Zap className="text-indigo-600" />, title: "Creativity", desc: "Innovative solutions to technical challenges" },
                            ].map((skill) => (
                                <div key={skill.title} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-indigo-600">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                                            {skill.icon}
                                        </div>
                                        <h4 className="font-medium">{skill.title}</h4>
                                    </div>
                                    <p className="text-gray-600 text-sm">{skill.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Tools & Technologies */}
                <div className="mt-16" data-aos="fade-up">
                    <h3 className="text-xl font-semibold mb-6 text-center text-gray-700">Tools & Technologies</h3>
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
                            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
                            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
                            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
                            //   { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
                            //   { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma" },
                            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
                            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
                            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", alt: "Postman" },
                            { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },


                        ].map((tool) => (
                            <div key={tool.alt} className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center">
                                <img src={tool.src} alt={tool.alt} className="w-8" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SkillsSection;
