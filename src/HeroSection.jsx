import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import FlippingLogo from './FlippingLogo';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FlippingLogo />
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4 leading-tight">
            Software Developer & ML Enthusiast
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Senior Computer Science student at Texas A&M University,
            passionate about developing scalable systems and advancing
            machine learning.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/rxhxl-sxngh"
              className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-singh3253/"
              className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=rahul.do.singh@gmail.com&tf=1"
              className="text-gray-400 hover:text-indigo-600 transition-colors duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;