import React, { useState } from "react";
import "./Proficiences.scss";
import ProficiencyCard from "./ProficiencyCard";

const Proficiencies = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const proficiences = [
    {
      title: "Front-end development",
      description:
        "With over 4 years of experience in creating front-end experiences using a variety of cutting-edge technologies, I have the appropriate skills to utilize the React and React Native frameworks to design and develop beautiful, functional, and responsive websites and applications.",
      technologies: ["React", "React Native", "Redux", "Next.js", "Sass"],
      backgroundImg: "../../assets/code.png",
    },
    {
      title: "Back-end development",
      description:
        "Beginning 2 years ago with the foundations of PHP, my back-end experience has and grown to utilize the powerful and fast Node.js language to craft quality back-end solutions, such as designing REST APIs and SQL/NoSQL Databases, and utilizing WebSocket technology.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Socket.io"],
      backgroundImg: "../../assets/back-end.png",
    },
    {
      title: "Software development",
      description:
        "My entire experience in programming has taught me the essential aspects of devloping software individually and on an agile team.  I'm knowledgeable with each of the phases of software development, best practices used in industry and the technologies that can make any project successful.",
      technologies: ["Swift", "JavaScript", "C++", "C#", "Python"],
      backgroundImg: "../../assets/full-stack.png",
    },
    {
      title: "UI/UX Design",
      description:
        "I have over 5 years of experience in designing user-interfaces and experiences.  I aim to create interfaces which users find easy to use with a modern feel that can enable anyone to quicky adapt to.  I am skilled in creating  responsive visual interface designs with visual hierarchy, typography, color theory, animation, and accessibility.",
      technologies: ["PowerPoint", "Sass", "Material Design"],
      backgroundImg: "../../assets/design.png",
    },
  ];

  const handleClick = way => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < proficiences.length - 1 ? currentSlide + 1 : 0
        );
  };
  return (
    <div className='proficiences' id='skills'>
      <div
        className='slider'
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {proficiences.map(p => (
          <div className='container'>
            <ProficiencyCard proficiency={p} />
          </div>
        ))}
      </div>
      <button
        className='arrow-right arrow'
        onClick={() => handleClick("right")}>
        {" "}
        {"<"}
      </button>
      <button className='arrow-left arrow' onClick={() => handleClick("left")}>
        {" "}
        {"<"}
      </button>
    </div>
  );
};

export default Proficiencies;
