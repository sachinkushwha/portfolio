import React from "react";
import { Code } from "react-feather"; // Feather icon

const HomeSection = () => {
    return (
        <section id="home" className="min-h-screen flex items-center pt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col md:flex-row items-center">

                    {/* Left Text Content */}
                    <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            Hi, I'm <span className="gradient-text"> Sachin kushwaha</span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-6">
                            MERN Developer
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 max-w-lg">
                            I build exceptional digital experiences that are fast, accessible, and visually appealing.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                            >
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* Right Image Content */}
                    <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                                <img
                                    src="/sachin1.jpg"
                                    alt="Alex Carter"
                                    className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-white"
                                />
                            </div>

                            {/* Floating Icon */}
                            {/* <div className="absolute -bottom-5 -right-5 bg-white p-3 rounded-full shadow-lg">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                  <Code className="text-white" />
                </div>
              </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeSection;
