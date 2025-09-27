import React from "react";
import { Award, Book } from "react-feather";

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-gray-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row items-center">

                    {/* Image */}
                    <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center" data-aos="fade-right">
                        <img
                            src="aboutme.png"
                            alt="Working"
                            className="rounded-lg shadow-lg w-full max-w-md"
                        />
                    </div>

                    {/* Text & Cards */}
                    <div className="md:w-2/3 md:pl-12" data-aos="fade-left">
                        <p className="text-lg text-gray-600 mb-6">
                            I am a 4th-year B.Tech CSE student with strong expertise in the MERN stack and hands-on experience in building
                            real-world projects.I am now seeking an internship or full-time opportunity where I can apply and grow my
                            backend development skills while contributing to impactful projects.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            I believe in writing clean, efficient code and creating intuitive user interfaces. When I'm not coding,
                            you can find me  reading tech blogs, or experimenting with new web technologies.
                        </p>

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                            {/* Experience Card */}
                            {/* <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <Award className="text-indigo-600" />
                  </div>
                  <h3 className="font-semibold text-lg">Experience</h3>
                </div>
                <p className="text-gray-600">5+ years working with startups and tech companies</p>
              </div> */}

                            {/* Education Card */}
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <div className="flex items-center mb-4">
                                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                        <Book className="text-indigo-600" />
                                    </div>
                                    <h3 className="font-semibold text-lg">Education</h3>
                                </div>
                                <p className="text-gray-600">B.tech in Computer Science & Engineering from Amritsar Group of Colleges</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
