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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-neu-black mb-6">
            GET IN <span className="text-neu-blue">TOUCH</span>
          </h2>
          <div className="w-32 h-2 bg-neu-black mx-auto mb-6"></div>
          <p className="text-xl font-mono text-neu-gray max-w-3xl mx-auto">
            Ready to collaborate on your next AI/ML project? Let's discuss how we can solve problems together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="neu-card">
            <div className="bg-neu-black text-neu-white p-4 -m-6 mb-6 border-4 border-neu-black">
              <h3 className="font-mono font-bold text-xl flex items-center gap-3">
                <HiChatAlt size={24} />
                Send Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono font-bold text-neu-black mb-2">
                    NAME *
                  </label>
                  <div className="relative">
                    <HiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neu-gray" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="neu-input w-full pl-10"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono font-bold text-neu-black mb-2">
                    EMAIL *
                  </label>
                  <div className="relative">
                    <HiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neu-gray" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="neu-input w-full pl-10"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block font-mono font-bold text-neu-black mb-2">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="neu-input w-full"
                  placeholder="Project collaboration, consultation, etc."
                />
              </div>

              <div>
                <label className="block font-mono font-bold text-neu-black mb-2">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="neu-input w-full resize-none"
                  placeholder="Tell me about your project, requirements, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`neu-button w-full flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-neu-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <HiPaperAirplane size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="neu-card bg-yellow-100">
              <h3 className="font-mono font-bold text-xl text-neu-black mb-4">
                Let's Connect!
              </h3>
              <p className="text-neu-black leading-relaxed mb-6">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or simply chat about the latest developments in AI and Computer Vision.
              </p>
              <div className="font-mono text-sm text-neu-gray">
                ⚡ Usually responds within 24 hours
              </div>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neu-card group hover:shadow-neu-lg transition-all duration-300 transform hover:-translate-y-1 block"
                >
                  <div className="flex items-center gap-4">
                    <div className={`${contact.color} text-neu-white p-3 border-4 border-neu-black`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-mono font-bold text-neu-black">
                        {contact.label}
                      </div>
                      <div className="text-neu-gray font-medium">
                        {contact.value}
                      </div>
                    </div>
                    <HiExternalLink className="text-neu-gray group-hover:text-neu-black transition-colors" size={20} />
                  </div>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="neu-card bg-neu-green text-neu-white">
              <h4 className="font-mono font-bold text-lg mb-3">Current Availability</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neu-white rounded-full"></div>
                  <span>Open to freelance projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neu-white rounded-full"></div>
                  <span>Research collaborations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-neu-white rounded-full"></div>
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
