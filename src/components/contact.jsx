import React, { useState } from "react";
import { Mail, MapPin, Clock, GitHub, Linkedin, Twitter, Instagram, Send } from "react-feather";

const ContactSection = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    msg: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormdata({
      ...formdata, [name]: value
    })
  }
  const handlesubmit =async (e) => {
    e.preventDefault();
    const CHAT_ID = import.meta.env.VITE_CHAT_ID;
    const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const response=await fetch(url,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        chat_id: CHAT_ID,
                text: `msg from portfolio:\nName: ${formdata.name}\nEmail: ${formdata.email}\nSub: ${formdata.subject}\nmsg: ${formdata.msg}`
      })
    })
    const result=await response.json();
    if(result.ok){
      alert('Thank you for reaching out.\n We will respond to your message as soon as possible.\n Wishing you a wonderful day!');
    }else{
      alert('something went worng\nplease try again');
    }

    setFormdata({
      name: "",
      email: "",
      subject: "",
      msg: ""
    })
  }
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row">

          {/* Contact Info */}
          <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Mail className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:hello@alexcarter.dev" className="text-indigo-600 hover:text-indigo-800">
                    sachinkushawaha349@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <MapPin className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-gray-600">Gopalganj,Bihar</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                  <Clock className="text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium">Availability</h4>
                  <p className="text-gray-600">Monday to Friday, 9am - 5pm </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-10 mb-6">Follow Me</h3>
            <div className="flex space-x-4">
              {[{ icon: <GitHub className="text-gray-700" />, link: "#" },
              { icon: <Linkedin className="text-gray-700" />, link: "#" },
              { icon: <Twitter className="text-gray-700" />, link: "#" },
              { icon: <Instagram className="text-gray-700" />, link: "#" }].map((social, index) => (
                <a key={index} href={social.link} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-indigo-100 transition">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 md:pl-12" data-aos="fade-left">
            <form id="contact-form" onSubmit={handlesubmit} className="space-y-6">
              {[
                { id: "name", label: "Name", type: "text", },
                { id: "email", label: "Email", type: "email" },
                { id: "subject", label: "Subject", type: "text" },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formdata[field.id]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="msg"
                  rows="5"
                  value={formdata.msg}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="cursor-pointer w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" /> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
