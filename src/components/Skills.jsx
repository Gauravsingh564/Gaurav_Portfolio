import React from 'react';
import { HiCode, HiCog, HiDatabase } from 'react-icons/hi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: <HiCode size={24} />,
      skills: ['Python', 'Java', 'SQL', 'Machine Learning', 'Deep Learning', 'PyTorch', 'OpenCV', 'AI Agents'],
      color: 'bg-neu-blue'
    },
    {
      title: 'Tools & Platforms',
      icon: <HiCog size={24} />,
      skills: ['Git', 'GitHub', 'Google Colab', 'Kaggle', 'n8n', 'Jupyter', 'VS Code', 'Docker'],
      color: 'bg-neu-pink'
    },
    {
      title: 'Specializations',
      icon: <HiDatabase size={24} />,
      skills: ['Computer Vision', 'Object Detection', 'Person Re-ID', 'Image Recognition', 'CNN', 'Transformers', 'Feature Engineering', 'Model Optimization'],
      color: 'bg-neu-green'
    }
  ];

  return (
    <section id="skills" className="neu-section bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-neu-black mb-6">
            MY <span className="text-neu-blue">SKILLS</span>
          </h2>
          <div className="w-32 h-2 bg-neu-black mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="neu-card group hover:shadow-neu-lg transition-all duration-300">
              {/* Header */}
              <div className={`${category.color} text-neu-white p-4 -m-6 mb-6 border-4 border-neu-black`}>
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h3 className="font-mono font-bold text-lg">{category.title}</h3>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-neu-white border-2 border-neu-black p-3 font-mono font-bold text-sm text-center hover:bg-neu-black hover:text-neu-white transition-all duration-200 transform hover:scale-105 cursor-default"
                    style={{
                      animationDelay: `${skillIndex * 100}ms`
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Level Indicators */}
        <div className="mt-16">
          <h3 className="text-2xl font-mono font-bold text-center mb-8 text-neu-black">
            PROFICIENCY LEVELS
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: 'Python & Machine Learning', level: 90, color: 'bg-neu-blue' },
              { skill: 'Computer Vision', level: 85, color: 'bg-neu-green' },
              { skill: 'Deep Learning (PyTorch)', level: 88, color: 'bg-neu-pink' },
              { skill: 'Data Science & Analytics', level: 82, color: 'bg-yellow-400' }
            ].map((item, index) => (
              <div key={index} className="neu-card">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono font-bold text-neu-black">{item.skill}</span>
                  <span className="font-mono font-bold text-neu-black">{item.level}%</span>
                </div>
                
                <div className="w-full bg-gray-200 border-2 border-neu-black h-6">
                  <div
                    className={`h-full ${item.color} border-r-2 border-neu-black transition-all duration-1000 ease-out`}
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications or additional info */}
        <div className="mt-16 text-center">
          <div className="neu-card bg-yellow-100 inline-block transform -rotate-1">
            <p className="font-mono font-bold text-neu-black">
              🎯 Currently expanding expertise in: 
              <span className="text-neu-blue"> Transformer Models & MLOps</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


