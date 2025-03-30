import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/3 flex justify-center">
            <img 
              src="/assets/images/profile.jpg" 
              alt="profile" 
              className="rounded-full w-64 h-64 object-cover border-4 border-blue-500 shadow-lg hover:scale-105 transition-transform"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-lg mb-4 text-gray-700">
              Passionate developer with interest in Machine Learning and IoT.
            </p>
            <p className="text-lg mb-6 text-gray-700">
              Specializing in instrumentation and computational application.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition">
                Download CV
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded transition">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;