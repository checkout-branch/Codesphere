import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';  // Import icons for the hamburger and close buttons
import classes from "./Header.module.scss";
import "aos/dist/aos.css";
import AOS from "aos";

const Headers = () => {
  const [activeTab, setActiveTab] = useState(null);  // To store the clicked tab
  const [isNavOpen, setIsNavOpen] = useState(false);  // To track if the navbar is open
  useEffect(() => {
    AOS.init();
})
  // Handle click to change the active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Toggle the navbar visibility
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={classes.wrap}     data-aos="fade-down">
      {/* Hamburger Icon */}
      <div className={classes.hamburger} onClick={toggleNav}>
        {isNavOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      {/* Navbar Items */}
      <div className={`${classes.navbar} ${isNavOpen ? classes.navbarOpen : ''}`}>
        <div 
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="100"
          className={`${classes.navbar_text} ${activeTab === 'home' ? classes.active : ''}`} 
          onClick={() => handleTabClick('home')}
        >
          HOME
        </div>
        <div 
         data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="300"
          className={`${classes.navbar_text} ${activeTab === 'about' ? classes.active : ''}`} 
          onClick={() => handleTabClick('about')}
        >
          ABOUT US
        </div>
        <div 
         data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="500"
          className={`${classes.navbar_text} ${activeTab === 'projects' ? classes.active : ''}`} 
          onClick={() => handleTabClick('projects')}
        >
          PROJECTS
        </div>
        <div 
         data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="700"
          className={`${classes.logo} ${classes.navbar_text} ${activeTab === 'logo' ? classes.active : ''}`} 
          onClick={() => handleTabClick('logo')}
        >
          LOGO
        </div>
        <div 
         data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="800"
          className={`${classes.navbar_text} ${activeTab === 'blog' ? classes.active : ''}`} 
          onClick={() => handleTabClick('blog')}
        >
          BLOG
        </div>
        <div 
         data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
          className={`${classes.navbar_text} ${activeTab === 'career' ? classes.active : ''}`} 
          onClick={() => handleTabClick('career')}
        >
          CAREER
        </div>
        <div 
         data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1200"
          className={`${classes.contact_us} ${classes.navbar_text} ${activeTab === 'contact' ? classes.active : ''}`} 
          onClick={() => handleTabClick('contact')}
        >
          CONTACT US
        </div>
      </div>
    </div>
  );
}

export default Headers;
