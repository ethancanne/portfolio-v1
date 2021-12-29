import "./intro.scss";
import React, { useState, useEffect, useRef } from "react";
import "../../core/core.scss";
import { KeyboardArrowDown } from "@material-ui/icons";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1000,
      strings: [
        "Front-End Development",
        "Back-End Development",
        "Mobile Development",
        "UX/UI-Design",
      ],
    });
  }, []);

  return (
    <div className='intro' id='intro'>
      <div className='overlay'></div>
      <div className='intro-wrapper'>
        <h2>Hi there, I'm</h2>
        <h1 className='highlight'>Ethan Cannelongo</h1>
        <h3>
          Skilled in <span ref={textRef}></span>
        </h3>
        <a href='#about'>
          <KeyboardArrowDown className='icon' />
        </a>
      </div>
    </div>
  );
};

export default Intro;
