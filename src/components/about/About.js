import './about.scss';
import React, {useState, useEffect} from 'react';
import '../../core/core.scss';


const About = () => {
  return (
    <div className='about' id="about">
      <div className='about-wrapper'>
      
      <div className="top-wrapper">
        <div className='left'>
            <h1 className="title highlight">About</h1>
            <div className="information">
              <h2>Who am I?</h2>
              <p>My name is Ethan Cannelongo.  I'm an <strong>undergraduate computer science major at Liberty University</strong> with a cognate in Web and Mobile Development<br/><br/>I'm proficient in full-stack web and app development and have experience in multiple other areas of computer science, including cyber security, software engineering, and computer networks.<br/><br/>My desire and passion is to leverage my skills, knowledge and experience to provide integrity and quality in the work I do with any project I come across.
              </p>
            </div>
          </div>
        
          <div className="right">
            <div className="image-container">
              <img src="./assets/headshot.png" alt="" />
            </div>
          </div>
        
        </div>
        <div className="bottom-wrapper"> 
          <h2>My Story</h2>
          <p>I've been programming since I was a freshman in high school, where I first started experimenting with developing macros in PowerPoint, which propelled me to dive deeper into learning different programming languages.  I quickly picked up the C# language and UI/UX design and utilized those skills to teach myself mobile app development with Xamarin.<br/><br/>Every day I desired to grow in my knowledge of programming and I expanded my toolset into several other languages and frameworks, including Swift and iOS Development, full-stack web development using the MERN-stack, and Software development with C++.<br/><br/>I started picking up work as a freelance website and application developer in 2019, where I've gained experience working with teams and clients, leveraging my skills to deliver quality projects.<br/><br/>I have enjoyed learning and building every project that I've come across and I'm continuing to pursue this passion as my career goal.
          </p>
        </div>
      </div>


          
    </div>
  );
};

export default About;
