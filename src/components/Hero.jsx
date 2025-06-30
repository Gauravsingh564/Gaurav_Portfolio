import React from 'react';
import { HiArrowDown, HiMail, HiEye } from 'react-icons/hi';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-neu-white relative overflow-hidden pt-16">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-neu-pink border-4 border-neu-black transform rotate-45 animate-float"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-neu-green border-4 border-neu-black transform rotate-45 animation-delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-20 h-20 bg-neu-blue border-4 border-neu-black transform rotate-45 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-8 h-8 bg-neu-black border-4 border-neu-black"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex items-center justify-center h-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold text-neu-black leading-tight">
                GAURAV
                <span className="text-neu-blue">SINGH</span>
              </h1>
              
              <div className="bg-yellow-400 border-4 border-neu-black shadow-neu p-4 inline-block transform -rotate-1 lg:w-full">
                <p className="font-mono font-bold text-sm md:text-base text-neu-black uppercase tracking-wider">
                  ML/AI ENGINEER | COMPUTER VISION RESEARCHER
                </p>
              </div>
              
              <div className="bg-neu-white border-4 border-neu-black shadow-neu p-6 transform rotate-1">
                <p className="font-mono text-lg md:text-xl text-neu-black">
                  "Solving visual perception problems through intelligent algorithms."
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <button
                onClick={() => scrollToSection('projects')}
                className="neu-button flex items-center gap-2 group"
              >
                <HiEye className="group-hover:scale-110 transition-transform" />
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="neu-button-outline flex items-center gap-2 group"
              >
                <HiMail className="group-hover:scale-110 transition-transform" />
                Contact Me
              </button>
            </div>
          </div>


        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="bg-neu-black text-neu-white p-3 border-4 border-neu-black shadow-neu hover:shadow-neu-sm transition-all duration-200"
          >
            <HiArrowDown size={24} />
          </button>
        </div>
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </section>
  );
};

export default Hero;
