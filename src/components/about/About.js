import "./about.scss";
import React, { useState, useEffect } from "react";
import "../../core/core.scss";

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='about-wrapper'>
        <div className='top-wrapper'>
          <div className='left'>
            <h1 className='title highlight'>About</h1>
            <div className='information'>
              <div className='dropdown'>
                <h2>Who am I?</h2>
                <p>
                  My name is Ethan Cannelongo. I'm an{" "}
                  <strong>
                    undergraduate computer science major at Liberty University
                  </strong>{" "}
                  with a cognate in Web and Mobile Development
                  <br />
                  <br />
                  I'm skilled in full-stack web and app development using a
                  variety of modern frameworks and technologies, such as React,
                  React Native, NodeJS, and Sass.
                  <br />
                  <br />
                  My desires and passions in my career are to leverage my
                  skills, knowledge and experience to provide integrity and
                  quality in the work I perform.
                </p>
              </div>
            </div>
          </div>

          <div className='right'>
            <div className='image-container'>
              <img src='./assets/headshot.png' alt='' />
            </div>
          </div>
        </div>
        <div className='bottom-wrapper'>
          <div className='dropdown'>
            <h2>My Story</h2>
            <p>
              My experience in computer science and programming began in the 8th
              grade, where I started experimenting with PowerPoint and its
              developer features, such as using VBA to create macros. This
              propelled me to dive deeper into learning different programming
              languages. I quickly picked up the C# language and UI/UX design
              and utilized those skills to teach myself mobile app development.
              <br /> <br /> I constantly desired to grow in my knowledge of
              programming, so I expanded my toolset into several other languages
              and frameworks, including Swift and iOS Development, website
              development, and software development with C++. I started to pick
              up work as a freelance website and application developer in 2019,
              where I leveraged my skills to add value to companies and teams as
              well as deliver projects to multiple clients. An example of my
              work was developing and distributing a complete iPad OS
              application for the Merck pharmaceutical company.
              <br /> <br /> I've since focused on becoming proficient in
              full-stack website and mobile development using React and React
              Native as the front-end frameworks and Node.JS as the back-end
              language, as well as their related technologies. <br /> <br /> I
              have greatly enjoyed being able to learn new technologies and
              skills and utilizing them in my endeavor to build quality projects
              and I look forward to adding value to any future project that
              comes my way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
