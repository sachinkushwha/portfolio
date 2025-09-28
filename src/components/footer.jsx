import React from "react";
import { Send, GitHub, Linkedin, Twitter, Instagram } from "react-feather";

const Footer = () => {
    const socialLinks = [
        { icon: <GitHub />, link: "https://github.com/sachinkushwha" },
        { icon: <Linkedin />, link: "https://www.linkedin.com/in/sachin-kushwaha-859124259/" },
        { icon: <Twitter />, link: "https://x.com/SachinKush57887?t=CIKKpe6siia0LLfjWpG3dQ&s=09" },
        { icon: <Instagram />, link: "https://www.instagram.com/sachinkushwaha.com_?igsh=MWk2Ym1zOG1keTNiZA==" },
    ];

    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 gradient-text">Sachin kushwaha</h3>
                        <p className="text-gray-400">
                            Creating beautiful, functional websites with a focus on user experience.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {["home", "about", "skills", "projects", "contact"].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} className="text-gray-400 hover:text-white transition">
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Services</h4>
                        <ul className="space-y-2">
                            {["Web Development", "UI/UX Design", "Frontend Consulting", "Responsive Design"].map((service, index) => (
                                <li key={index} className="text-gray-400">{service}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                        <p className="text-gray-400 mb-4">
                            Subscribe to my newsletter for the latest updates.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 rounded-l-lg text-gray-900 w-full"
                            />
                            <button
                                type="submit"
                                className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition flex items-center justify-center"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">© 2025 <a href="https://jynetra.vercel.app/">Jynetra</a>. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {socialLinks.map((social, index) => (
                            <a key={index} href={social.link} className="text-gray-400 hover:text-white transition">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
