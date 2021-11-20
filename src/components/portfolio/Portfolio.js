import './portfolio.scss'
import '../../core/core.scss';
import React, {useState, useEffect} from 'react'
import PortfolioCategory from '../portfolioCategory/PortfolioCategory';
import {frontend} from '../../portfolioData'
import PortfoiloPopup from '../popups/PortfoiloPopup';

const Portfolio = (props) => {
  const [activeCategory, setActiveCategory] = useState("frontend")
  const [portfolioData, setPortfolioData] = useState([])

  const categories = [
    {
      id: "frontend",
      title: "Front-end"
    },
    {
      id: "backend",
      title: "Back-end"
    },
    {
      id: "wordpress",
      title: "Wordpress"
    },
    {
      id: "mobile",
      title: "Mobile"
    },
    {
      id: "uidesigns",
      title: "UI-Designs"
    },
  ]

  useEffect(() => {
    switch (activeCategory) {
      case "frontend" :
        setPortfolioData(frontend)
        break;

      case "backend" :
        setPortfolioData(frontend)
        break;

      case "wordpress" :
        setPortfolioData(frontend)
        break;
        
      case "uidesigns" :
        setPortfolioData(frontend)
        break;
    }
  }, [activeCategory]) //<- whenever activeCategory is changed

  return (
  <div className='portfolio' id="portfolio">
    <div className='section-wrapper'>
       <h1 className="title highlight">Portfolio</h1>
       <ul>
         {categories.map(category => (
           <PortfolioCategory id={category.id} title={category.title} active={activeCategory === category.id} setActiveCategory={setActiveCategory} key={category.id}/>
         ))}
       </ul>
    
       <div className="container">
        {portfolioData.map(data => (
          <div className="item" key={data.id}>
            <img src={data.img} alt="" />
            <h3 onClick={()=>props.setActivePortfolioItem(data)}>{data.title}</h3>
          </div>
        ))}
       </div>
        
      
    </div>
    {/* {(props.activePortfolioItem !== "") && (
        <PortfoiloPopup item={activePortfolioItem} setActiveItem={setPortfolioActiveItem}/>
      )} */}
  </div>
  )
}

export default Portfolio
