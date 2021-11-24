import React, {useState, useEffect} from 'react';
import {Mail, Phone, LinkedIn} from '@material-ui/icons';
import './topbar.scss';

const Topbar = ({menuOpen, setMenuOpen, topBarOpaque}) => {

  return (
    <>
      <div className={'background ' + (menuOpen && 'active')}></div>
      <div
        className={
          'topbar ' +
          (menuOpen && 'active ') +
          ((topBarOpaque && !menuOpen) && ' opaque')
        }>
        <div className='wrapper'>
          <div className='left'>
            <div className='logo'>
              <a href='#intro' className='name'>
                Ethan Cannelongo<br/>
              </a>
              <p>Web Developer</p>
            </div>
            <div className='itemContainer'>
              <Mail className='icon' />
              <span>ethancannelongo@gmail.com</span>
              <LinkedIn className='icon' />
              <span>
                <a href='https://www.linkedin.com/in/ethan-cannelongo/'>
                  https://www.linkedin.com/in/ethan-cannelongo/
                </a>
              </span>
            </div>
          </div>
          <div className='right'>
            <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
