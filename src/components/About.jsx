import React from 'react';
import { HiAcademicCap, HiBriefcase, HiLightBulb } from 'react-icons/hi';

const About = () => {
  return (
    <section id="about" className="neu-section bg-neu-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-neu-black mb-6">
            ABOUT <span className="text-neu-blue">ME</span>
          </h2>
          <div className="w-32 h-2 bg-neu-black mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-8">
            <div className="neu-card">
              <p className="text-lg leading-relaxed text-neu-black font-medium">
                I'm an <span className="font-bold text-neu-blue">M.Tech Computer Science</span> student specializing in Computer Vision, with strong expertise in Machine Learning and Deep Learning. My research focuses on real-world applications like object detection, person re-identification, and image recognition.
              </p>
            </div>
            
            <div className="neu-card bg-yellow-100">
              <p className="text-lg leading-relaxed text-neu-black font-medium">
                I'm passionate about building <span className="font-bold text-neu-pink">advanced AI models</span> and exploring innovative, efficient solutions in visual perception tasks.
              </p>
            </div>

            {/* Current Position */}
            <div className="neu-card bg-neu-blue text-neu-white">
              <div className="flex items-center gap-3 mb-3">
                <HiBriefcase size={24} />
                <h3 className="font-mono font-bold text-xl">CURRENT POSITION</h3>
              </div>
              <p className="font-bold text-lg">Project Assistant, Graphic Era</p>
              <p className="font-mono">Nov 2024 – Present</p>
            </div>
          </div>

          {/* Research Areas */}
          <div className="space-y-6">
            <div className="neu-card bg-neu-green text-neu-white">
              <div className="flex items-center gap-3 mb-6">
                <HiLightBulb size={24} />
                <h3 className="font-mono font-bold text-xl">RESEARCH AREAS</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Deep Learning',
                  'Person Re-ID',
                  'Object Tracking',
                  'Real-World AI'
                ].map((area, index) => (
                  <div
                    key={index}
                    className="bg-neu-white text-neu-black border-4 border-neu-black p-3 text-center font-mono font-bold text-sm transform hover:scale-105 transition-transform duration-200"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="neu-card bg-neu-pink text-neu-white">
              <div className="flex items-center gap-3 mb-3">
                <HiAcademicCap size={24} />
                <h3 className="font-mono font-bold text-xl">EDUCATION</h3>
              </div>
              <p className="font-bold text-lg">M.Tech in Computer Science</p>
              <p className="font-mono">Specialization: Computer Vision & AI</p>
            </div>

            {/* Fun geometric element */}
            <div className="hidden lg:block relative">
              <div className="w-32 h-32 bg-yellow-400 border-4 border-neu-black shadow-neu transform rotate-12 absolute -right-8 -top-8"></div>
              <div className="w-24 h-24 bg-neu-blue border-4 border-neu-black shadow-neu transform -rotate-12"></div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default About;
