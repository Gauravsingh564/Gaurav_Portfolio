import React from 'react';
import { HiEye, HiExternalLink, HiCode } from 'react-icons/hi';

const Projects = () => {
  const projects = [
    {
      title: 'Hybrid Re-ID Model',
      description: 'Combines Swin Transformer + VGG16 for accurate video-based person re-identification with state-of-the-art performance.',
      technologies: ['PyTorch', 'CNNs', 'Transformers', 'Computer Vision'],
      color: 'bg-neu-blue',
      year: '2024',
      githubLink: 'https://github.com/Gauravsingh564/Video_Based_Person-Re-ID_vgg-swin'
    },
    {
      title: 'DishCovery',
      description: 'Food classification app with real-time nutrition info using Streamlit + Deep Learning. Trained on Food-101 dataset.',
      technologies: ['Python', 'Streamlit', 'Transformers', 'Food-101'],
      color: 'bg-neu-green',
      year: '2025',
      githubLink: 'https://github.com/Gauravsingh564/DishCovery'
    },
    {
      title: 'Heart Disease Prediction',
      description: 'Logistic regression model for medical risk analysis with high accuracy in predicting cardiovascular disease risk.',
      technologies: ['Pandas', 'Python', 'Scikit-learn', 'ML'],
      color: 'bg-neu-pink',
      year: '2024',
      githubLink: 'https://github.com/Gauravsingh564/Heart_Disease_Prediction'
    },
    {
      title: "Parkinson's Detection",
      description: "SVM model using voice data for early detection of Parkinson's disease with advanced feature engineering.",
      technologies: ['Python', 'SVM', 'Feature Engineering', 'Audio Processing'],
      color: 'bg-yellow-400',
      year: '2024',
      githubLink: 'https://github.com/Gauravsingh564/Parkinson_Disease_Prediction'
    }
  ];

  return (
    <section id="projects" className="neu-section bg-neu-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-neu-black mb-6">
            MY <span className="text-neu-blue">PROJECTS</span>
          </h2>
          <div className="w-32 h-2 bg-neu-black mx-auto mb-6"></div>
          <p className="text-xl font-mono text-neu-gray max-w-3xl mx-auto">
            Featured projects showcasing my expertise in ML/AI and Computer Vision
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="neu-card group hover:shadow-neu-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Project Header */}
              <div className={`${project.color} text-neu-white p-4 -m-6 mb-6 border-4 border-neu-black`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <HiCode size={24} />
                    <h3 className="font-mono font-bold text-xl">{project.title}</h3>
                  </div>
                  <span className="font-mono text-sm opacity-80">{project.year}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="space-y-6">
                <p className="text-neu-black leading-relaxed font-medium">
                  {project.description}
                </p>

                {/* Technologies */}
                <div>
                  <h4 className="font-mono font-bold text-neu-black mb-3">TECH STACK:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-neu-black text-neu-white px-3 py-1 text-sm font-mono font-bold border-2 border-neu-black hover:bg-neu-white hover:text-neu-black transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => window.open(project.githubLink, '_blank')}
                    className="neu-button flex items-center gap-2 text-sm"
                  >
                    <HiExternalLink size={16} />
                    GitHub
                  </button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-2 right-2 w-4 h-4 bg-yellow-400 border-2 border-neu-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="neu-card bg-gray-100 inline-block">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div>
                <h3 className="font-mono font-bold text-xl text-neu-black mb-2">
                  Want to see more?
                </h3>
                <p className="text-neu-gray">
                  Check out my GitHub for additional projects and contributions
                </p>
              </div>
              <a
                href="https://github.com/Gauravsingh564"
                target="_blank"
                rel="noopener noreferrer"
                className="neu-button flex items-center gap-2"
              >
                <HiExternalLink size={20} />
                View GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Additional geometric elements */}
        <div className="hidden lg:block absolute right-10 top-1/2 w-16 h-16 bg-neu-pink border-4 border-neu-black transform rotate-45 animate-pulse"></div>
        <div className="hidden lg:block absolute left-10 bottom-20 w-12 h-12 bg-neu-green border-4 border-neu-black animate-bounce"></div>
      </div>
    </section>
  );
};

export default Projects;
