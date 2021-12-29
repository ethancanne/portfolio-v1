import "./portfolio.scss";
import "../../core/core.scss";
import React, { useState, useEffect } from "react";
import PortfolioCategory from "../portfolioCategory/PortfolioCategory";
import {
  frontend,
  backend,
  fullstack,
  mobile,
  design,
} from "../../portfolioData";

const Portfolio = props => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [portfolioData, setPortfolioData] = useState([]);

  const categories = [
    {
      id: "frontend",
      title: "Front-end",
    },
    {
      id: "backend",
      title: "Back-end",
    },
    {
      id: "fullstack",
      title: "Full-stack",
    },
    {
      id: "mobile",
      title: "Mobile",
    },
    {
      id: "design",
      title: "Design",
    },
  ];

  useEffect(() => {
    switch (activeCategory) {
      case "frontend":
        setPortfolioData(frontend);
        break;

      case "backend":
        setPortfolioData(backend);
        break;

      case "fullstack":
        setPortfolioData(fullstack);
        break;

      case "mobile":
        setPortfolioData(mobile);
        break;

      case "design":
        setPortfolioData(design);
        break;
    }
  }, [activeCategory]); //<- whenever activeCategory is changed

  return (
    <div className='portfolio' id='portfolio'>
      <div className='section-wrapper'>
        <h1 className='title highlight'>Portfolio</h1>
        <ul>
          {categories.map(category => (
            <PortfolioCategory
              id={category.id}
              title={category.title}
              active={activeCategory === category.id}
              setActiveCategory={setActiveCategory}
              key={category.id}
            />
          ))}
        </ul>

        <div className='container'>
          {portfolioData.map(data => (
            <div
              className='item'
              key={data.id}
              onClick={() => props.setActivePortfolioItem(data)}>
              <img src={data.img} alt='' />
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
      {/* {(props.activePortfolioItem !== "") && (
        <PortfoiloPopup item={activePortfolioItem} setActiveItem={setPortfolioActiveItem}/>
      )} */}
    </div>
  );
};

export default Portfolio;
