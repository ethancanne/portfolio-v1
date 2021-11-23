import './App.scss';
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Testamonials from './components/testamonials/Testamonials';
import Contact from './components/contact/Contact';
import React, {useState, useEffect} from 'react';
import Menu from './components/menu/Menu';
import 'regenerator-runtime/runtime.js';
import PortfoiloPopup from './components/popups/PortfoiloPopup';
import Proficiencies from './components/proficiencies/Proficiencies'
import Footer from './components/footer/Footer'

const App = props => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topBarOpaque, setTopBarOpaque] = useState(false);
  const [activePortfolioItem, setActivePortfolioItem] = useState("")

  const handleScroll = () => {
    const sections = document.querySelector('.sections');
    const position = sections.scrollTop;
    if (position > 1) {
      setTopBarOpaque(true);
    } else {
      setTopBarOpaque(false);
    }
  };

  return (
    <div className='App'>
      <Topbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        topBarOpaque={topBarOpaque}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {(activePortfolioItem !== "") && (
        <PortfoiloPopup item={activePortfolioItem} setActiveItem={setActivePortfolioItem}/>
      )}
      <div
        className='sections'
        onScroll={() => {
          handleScroll();
        }}>
        <Intro />
        <About />
        <Portfolio setActivePortfolioItem={setActivePortfolioItem}/>
        <Proficiencies/>
        {/* <Testamonials /> */}
        <Contact />
        <Footer/>
      </div>
    </div>
  );
};

export default App;
