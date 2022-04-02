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
                  <br /> As an experienced full-stack web developer, its my
                  passion to express my creativity in developing robust,
                  interactive and responsive websites and application with
                  integrity and quality.
                  <br />
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
              Since 8th grade, I've had a constant desire to grow in my
              knowledge of programming. Starting from simply experimenting with
              the Visual Basic language in devloping macros for PowerPoint, I
              was propelled to dive deeper and quickly picked up the C#, C++ and
              Swift programming languages as well as the nature of UI/UX design,
              which I utilized to teach myself mobile app development.
              <br /> <br />
              After expanding my knowlede of the computer science realm, I
              focused my efforts into expressing my creativity through creating
              full-stack solutions in devloping cross-platform mobile websites
              and applications. I was able to pick up work as a freelancer in
              creating web and mobile applications for clients. Through my
              experience, I have developed a strong understanding of the
              importance of quality and integrity in the development of
              software.
              <br /> <br />
              Currently, I'm proficient in the MERN stack (MongoDB, ExpressJS,
              React, Node) to develop web and mobile applications that utilize
              the latest technologies, such as Next.JS, Redux, Docker, GraphQL
              and Socket.io, allowing myself to express my creativity throughout
              the development process, from design to implementation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
