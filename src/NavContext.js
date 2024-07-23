// NavContext.js
import React, { createContext, useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const NavContext = createContext();

export const useNav = () => useContext(NavContext);

export const NavProvider = ({ children }) => {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
  };

  const navigate = useNavigate();

  const scrollTo = (section) => {
    if (sectionRefs[section].current) {
      sectionRefs[section].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateTo = (section) => {
    navigate('/');
    setTimeout(() => scrollTo(section), 100);
  };

  return (
    <NavContext.Provider value={{ scrollTo, navigateTo, sectionRefs }}>
      {children}
    </NavContext.Provider>
  );
};
