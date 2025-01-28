import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import vaughnPaulgerLogo from '../assets/vaughnPaulgerLogo.png';
import vaughnPaulgerResume from '../assets/Vaughn-Paulger-Resume.pdf';
import '../styles/home.scss';
import Experience from './Experience';

const Home = () => {
  const location = useLocation();
  const [homePage, setHomePage] = useState(
    location.pathname === '/' ? true : false
  );
  const [experiencePage, setExperiencePage] = useState(
    location.pathname === '/experience' ? true : false
  );
  const [contactPage, setContactPage] = useState(
    location.pathname === '/contact' ? true : false
  );

  return (
    <div className={`home ${homePage ? '' : 'experience contact'}`}>
      <NavLink
        className='home__navLogo'
        to='/'
        onClick={() => {
          setHomePage(true);
          setExperiencePage(false);
          setContactPage(false);
        }}
      >
        <h1 alt='Vaughn Paulger'>
          <img
            className='home__navLogo_logo'
            src={vaughnPaulgerLogo}
            alt='Vaughn Paulger'
          />
        </h1>
        <h2 className='home__navLogo_title'>Full Stack Developer</h2>
      </NavLink>
      <div className='home__navBox'></div>
      <div className='home__navItems'>
        <div className='home__navItems_container'>
          <a
            href='https://www.linkedin.com/in/vaughn-paulger/'
            target='_blank'
            rel='noreferrer'
            className='home__navLink'
          >
            About
          </a>
          <NavLink
            className='home__navLink'
            to='/experience'
            onClick={() => {
              setHomePage(false);
              setContactPage(false);
              if (homePage) {
                setTimeout(() => {
                  setExperiencePage(true);
                }, '1000');
              } else {
                setExperiencePage(true);
              }
            }}
          >
            Experience
          </NavLink>
          <a
            className='home__navLink'
            href='mailto:vaughn.paulger@gmail.com'
          >
            Contact
          </a>
        </div>
      </div>
      <div className='experience_slider contact_container'>
        {experiencePage && <Experience />}
        {contactPage && (
          <div className='contact_containerText'>
            Say hello,
            <br />
            <a
              className='contactEmail'
              href='mailto:vaughn.paulger@gmail.com'
            >
              vaughn.paulger@gmail.com
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
