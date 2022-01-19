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
                  My name is Ethan Cannelongo. I am currently an undergraduate
                  senior at Liberty University graduating in May of 2022 with
                  <strong>
                    a bachelors in Computer Science - Web and Mobile
                    Programming.
                  </strong>
                  <br />
                  <br />
                  As an experienced full-stack web developer, building
                  state-of-the-art, easy to use, user-friendly websites and
                  applications is truly a passion of mine. I'm proficient in
                  utilizing React and React Native to design professional user
                  experiences; NodeJS and Express to craft back-end solutions,
                  such as designing REST APIs and SQL/NoSQL Databases; as well
                  as integrating many of their related technologies.
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
              My experience in computer science and programming began while I
              was in 8th grade, where I experimented with Visual Basic to
              develop macros for PowerPoint. This experience propelled me to
              dive deeper into the realm of programming. I quickly picked up the
              C# language and UI/UX design and utilized those skills to teach
              myself mobile app development.
              <br /> <br /> In response to a constant desire to grow in my
              knowledge of programming, I expanded my toolset into several other
              languages and frameworks, including Swift and iOS Development,
              website development with React and NodeJS, and software
              development with C++. In 2019, I picked up work as a freelance
              website and application developer, where I leveraged these skills
              to add value to individuals, companies, and teams in delivering
              projects to my clients. An example of my work was developing and
              distributing a complete iPad OS application for the Merck
              pharmaceutical company.
              <br /> <br />
              I've since focused on developing full-stack websites and mobile
              applications using React and React Native as the front-end
              frameworks and NodeJS as the back-end language, as well as their
              related technologies. I have worked on several projects focused
              specifically on developing front-end and back-end architectures,
              such as designing REST APIs and SQL/NoSQL Databases, utilizing
              WebSocket technology, and creating professional user experiences
              in React. <br /> <br /> I have greatly enjoyed being able to learn
              new technologies and skills and utilizing them in my endeavor to
              develop and implement quality solutions, and I look forward to
              adding value to any future project that comes my way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
