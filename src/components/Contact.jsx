import React, { useState } from 'react';
import { HiMail, HiUser, HiChatAlt, HiPaperAirplane, HiExternalLink } from 'react-icons/hi';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_iz8qr38', 'template_yhiavo8', e.target, 'ochyHQ1-0p_I2FbIa')
      .then(
        (result) => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
          setIsSubmitting(false);
        },
        (error) => {
          alert('Failed to send message. Please try again later.');
          setIsSubmitting(false);
        }
      );
  };

  const contactInfo = [
    {
      icon: <HiMail size={24} />,
      label: 'Email',
      value: 'emailtogaurav30@gmail.com',
      link: 'mailto:emailtogaurav30@gmail.com',
      color: 'bg-neu-blue'
    },
    {
      icon: <FaLinkedin size={24} />,
      label: 'LinkedIn',
      value: 'gaurav-singh-b37a6221a',
      link: 'https://linkedin.com/in/gaurav-singh-b37a6221a',
      color: 'bg-neu-green'
    },
    {
      icon: <FaGithub size={24} />,
      label: 'GitHub',
      value: 'Gauravsingh564',
      link: 'https://github.com/Gauravsingh564',
      color: 'bg-neu-pink'
    }
  ];

  return (
    <section id="contact" className="neu-section bg-neu-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-mono font-bold text-neu-black mb-4 md:mb-6">
            GET IN <span className="text-neu-blue">TOUCH</span>
          </h2>
          <div className="w-20 md:w-32 h-2 bg-neu-black mx-auto mb-4 md:mb-6"></div>
          <p className="text-lg md:text-xl font-mono text-neu-gray max-w-3xl mx-auto px-2">
            Ready to collaborate on your next AI/ML project? Let's discuss how we can solve problems together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12">
          {/* Contact Form */}
          <div className="neu-card p-4 md:p-6">
            <div className="bg-neu-black text-neu-white p-3 md:p-4 -m-4 md:-m-6 mb-4 md:mb-6 border-4 border-neu-black">
              <h3 className="font-mono font-bold text-lg md:text-xl flex items-center gap-3">
                <HiChatAlt size={20} className="md:w-6 md:h-6" />
                Send Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <label className="block font-mono font-bold text-neu-black mb-2 text-sm md:text-base">
                    NAME *
                  </label>
                  <div className="relative">
                    <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neu-gray" size={18} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="neu-input w-full pl-10 text-sm md:text-base py-2 md:py-3"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono font-bold text-neu-black mb-2 text-sm md:text-base">
                    EMAIL *
                  </label>
                  <div className="relative">
                    <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neu-gray" size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="neu-input w-full pl-10 text-sm md:text-base py-2 md:py-3"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-mono font-bold text-neu-black mb-2 text-sm md:text-base">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="neu-input w-full text-sm md:text-base py-2 md:py-3"
                  placeholder="Project collaboration, consultation, etc."
                />
              </div>

              <div>
                <label className="block font-mono font-bold text-neu-black mb-2 text-sm md:text-base">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="neu-input w-full resize-none text-sm md:text-base py-2 md:py-3 md:rows-6"
                  placeholder="Tell me about your project, requirements, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`neu-button w-full flex items-center justify-center gap-2 py-3 md:py-4 text-sm md:text-base ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 md:h-5 md:w-5 border-b-2 border-neu-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <HiPaperAirplane size={18} className="md:w-5 md:h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 md:space-y-6">
            <div className="neu-card bg-yellow-100 p-4 md:p-6">
              <h3 className="font-mono font-bold text-lg md:text-xl text-neu-black mb-3 md:mb-4">
                Let's Connect!
              </h3>
              <p className="text-neu-black leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or simply chat about the latest developments in AI and Computer Vision.
              </p>
              <div className="font-mono text-xs md:text-sm text-neu-gray">
                ⚡ Usually responds within 24 hours
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3 md:space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-card group hover:shadow-neu-lg transition-all duration-300 transform hover:-translate-y-1 block p-3 md:p-4"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`${contact.color} text-neu-white p-2 md:p-3 border-4 border-neu-black flex-shrink-0`}>
                      {React.cloneElement(contact.icon, { size: 20 })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-mono font-bold text-neu-black text-sm md:text-base">
                        {contact.label}
                      </div>
                      <div className="text-neu-gray font-medium text-xs md:text-sm truncate">
                        {contact.value}
                      </div>
                    </div>
                    <HiExternalLink className="text-neu-gray group-hover:text-neu-black transition-colors flex-shrink-0" size={18} />
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="neu-card bg-neu-green text-neu-white p-4 md:p-6">
              <h4 className="font-mono font-bold text-base md:text-lg mb-2 md:mb-3">Current Availability</h4>
              <div className="space-y-2 text-xs md:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neu-white rounded-full flex-shrink-0"></div>
                  <span>Open to freelance projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neu-white rounded-full flex-shrink-0"></div>
                  <span>Research collaborations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neu-white rounded-full flex-shrink-0"></div>
                  <span>Technical consultations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fun geometric elements */}
        <div className="hidden lg:block absolute right-20 top-1/4 w-8 h-8 bg-neu-pink border-4 border-neu-black animate-bounce"></div>
        <div className="hidden lg:block absolute left-20 bottom-1/4 w-12 h-12 bg-neu-blue border-4 border-neu-black transform rotate-45 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Contact;
