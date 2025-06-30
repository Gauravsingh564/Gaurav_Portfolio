import React from 'react';
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import { HiMail, HiArrowUp } from 'react-icons/hi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      url: 'https://linkedin.com/in/gaurav-singh-b37a6221a',
      color: 'bg-neu-blue'
    },
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: 'https://github.com/Gauravsingh564',
      color: 'bg-neu-black'
    },
    {
      name: 'Email',
      icon: <HiMail size={24} />,
      url: 'mailto:emailtogaurav30@gmail.com',
      color: 'bg-neu-pink'
    }
  ];

  return (
    <footer className="bg-neu-black text-neu-white border-t-8 border-neu-white relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-mono font-bold mb-4">
                {'<Gaurav Singh/>'}
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                ML/AI Engineer and Computer Vision Researcher passionate about solving real-world problems 
                through intelligent algorithms and innovative AI solutions.
              </p>
            </div>
            
            <div className="bg-yellow-400 border-4 border-neu-white text-neu-black p-4 inline-block transform -rotate-1">
              <p className="font-mono font-bold text-sm">
                "Building the future with AI, one algorithm at a time."
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono font-bold text-xl mb-6 text-neu-white">
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-neu-white font-mono transition-colors duration-200 hover:translate-x-2 transform inline-block"
                  >
                    → {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="font-mono font-bold text-xl mb-6 text-neu-white">
              CONNECT
            </h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-neu-white p-3 border-4 border-neu-white hover:shadow-neu-sm transition-all duration-200 hover:translate-x-1 hover:translate-y-1 inline-flex items-center gap-3 w-full`}
                >
                  {social.icon}
                  <span className="font-mono font-bold">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-4 border-neu-white my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-300 font-mono">
              © {currentYear} Gaurav Singh. All rights reserved.
            </p>

          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="bg-neu-white text-neu-black p-3 border-4 border-neu-white hover:shadow-neu-sm transition-all duration-200 hover:translate-x-1 hover:translate-y-1 group"
            aria-label="Back to top"
          >
            <HiArrowUp size={24} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 right-8 w-6 h-6 bg-neu-pink border-2 border-neu-white transform rotate-45 animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-8 left-8 w-4 h-4 bg-neu-green border-2 border-neu-white animate-bounce hidden lg:block"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
    </footer>
  );
};

export default Footer;
