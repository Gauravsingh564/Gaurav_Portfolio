import React from 'react';
import { HiEye, HiChartBar } from 'react-icons/hi';
import { FaBrain } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: 'ML/AI Engineering',
      icon: <FaBrain size={40} />,
      description: 'Custom machine learning solutions, model development, and AI system architecture for real-world applications.',
      features: [
        'Custom ML Model Development',
        'AI System Architecture',
        'Model Optimization & Deployment',
        'Performance Tuning'
      ],
      color: 'bg-neu-blue'
    },
    {
      title: 'Computer Vision Solutions',
      icon: <HiEye size={40} />,
      description: 'Advanced computer vision systems including object detection, tracking, and person re-identification solutions.',
      features: [
        'Object Detection & Tracking',
        'Person Re-Identification',
        'Image Recognition Systems',
        'Video Analytics'
      ],
      color: 'bg-neu-green'
    },
    {
      title: 'Data Science & Predictive Modeling',
      icon: <HiChartBar size={40} />,
      description: 'End-to-end data science solutions from data analysis to predictive modeling and business intelligence.',
      features: [
        'Predictive Analytics',
        'Data Mining & Analysis',
        'Statistical Modeling',
        'Business Intelligence'
      ],
      color: 'bg-neu-pink'
    }
  ];

  return (
    <section id="services" className="neu-section bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-neu-black mb-6">
            MY <span className="text-neu-blue">SERVICES</span>
          </h2>
          <div className="w-32 h-2 bg-neu-black mx-auto mb-6"></div>
          <p className="text-xl font-mono text-neu-gray max-w-3xl mx-auto">
            Specialized AI/ML services to solve complex real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="neu-card group hover:shadow-neu-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Service Header */}
              <div className={`${service.color} text-neu-white p-6 -m-6 mb-6 border-4 border-neu-black text-center`}>
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="font-mono font-bold text-xl">{service.title}</h3>
              </div>

              {/* Service Content */}
              <div className="space-y-6">
                <p className="text-neu-black leading-relaxed font-medium">
                  {service.description}
                </p>

                {/* Features */}
                <div>
                  <h4 className="font-mono font-bold text-neu-black mb-4">KEY FEATURES:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-neu-black"
                      >
                        <div className="w-2 h-2 bg-neu-black transform rotate-45"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full neu-button-outline text-center"
                  >
                    Learn More
                  </button>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-400 border-2 border-neu-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform rotate-45"></div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-mono font-bold text-center mb-12 text-neu-black">
            MY <span className="text-neu-blue">PROCESS</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Analysis', desc: 'Understanding requirements and data analysis' },
              { step: '02', title: 'Design', desc: 'Model architecture and solution design' },
              { step: '03', title: 'Development', desc: 'Implementation and training' },
              { step: '04', title: 'Deployment', desc: 'Testing, optimization and delivery' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="neu-card bg-neu-black text-neu-white mb-4">
                  <div className="text-3xl font-mono font-bold mb-2">{process.step}</div>
                  <div className="font-mono font-bold">{process.title}</div>
                </div>
                <p className="text-sm text-neu-gray font-medium">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="neu-card bg-yellow-100 inline-block transform rotate-1">
            <h3 className="font-mono font-bold text-xl text-neu-black mb-4">
              Ready to start your AI project?
            </h3>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="neu-button"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
