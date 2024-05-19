import React, { useState, useEffect } from 'react'
import '../styles/NavBar.css'
import logo from '../assets/ALORIX.svg'

const NavBar: React.FC = () => {
   const [hideTopBar, setHideTopBar] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [activePage, setActivePage] = useState('home');
 
   useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY > 50) {
         setHideTopBar(true);
       } else {
         setHideTopBar(false);
       }
     };
 
     window.addEventListener('scroll', handleScroll);
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);

   const handleLinkClick = ( page: string ) => {
    setActivePage(page);
    setIsMenuOpen(false);
  };
 
   return (
     <div>
       <div className={`top-bar ${hideTopBar ? 'hidden' : ''}`}>
         <p>
           <a href="mailto:info@baltserviss.lv"><i className="fa fa-envelope"></i> info@baltserviss.lv</a>
           {' | '}
           <a href="tel:+37128343001"><i className="fa fa-phone"></i> +371 28 343 001</a>
         </p>
       </div>
       <header className="navbar">
         <div className="navbar__logo">
           <a href="/">ALORIX</a>
         </div>
         <nav className={`navbar__links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" className={activePage === 'home' ? 'active' : ''} onClick={() => handleLinkClick('home')}>Home</a>
          <a href="#about" className={activePage === 'about' ? 'active' : ''} onClick={() => handleLinkClick('about')}>About</a>
          <a href="#catalog" className={activePage === 'catalog' ? 'active' : ''} onClick={() => handleLinkClick('catalog')}>Catalog</a>
          <a href="#team" className={activePage === 'team' ? 'active' : ''} onClick={() => handleLinkClick('team')}>Team</a>
          <a href="#contact" className={activePage === 'contact' ? 'active' : ''} onClick={() => handleLinkClick('contact')}>Contact</a>
         </nav>
         <div className="navbar__toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
           <i className="fa fa-bars"></i>
         </div>
       </header>
     </div>
   );
 };
 

export default NavBar