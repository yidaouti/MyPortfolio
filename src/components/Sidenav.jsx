import React, { useState } from 'react';
import { FiHome, FiMenu, FiX } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaWhatsapp ,FaCode } from 'react-icons/fa';
import { BsPerson, BsBriefcase, BsGear, BsBook, BsFileEarmarkText, BsEnvelope } from 'react-icons/bs';
import profilpic from '../assets/Profile Picture.png';

const SideNav = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white sticky top-0">
      {/* Sidenav */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isNavExpanded ? 'w-52' : 'w-16'
        } flex flex-col justify-between p-2 bg-gray-900`}
      >
        {/* Profile Section */}
        <div className={`flex flex-col items-center ${isNavExpanded ? '' : 'items-center'}`}>
          {/* Profile Picture */}
          <img
            src={profilpic}
            alt="Profile"
            className={`transition-all duration-300 rounded-full ${isNavExpanded ? 'h-16 w-16' : 'h-12 w-12'}`}
          />

          {/* Name below the image */}
          <h1
            className={`mt-3 text-lg font-bold text-center transition-opacity duration-300 ${
              isNavExpanded ? 'opacity-100' : 'hidden'
            } delay-200`}
          >
            Yousef Idaouti
          </h1>

          {/* Social Media Icons */}
          <div
            className={`mt-2 flex space-x-3 transition-opacity duration-300 ${
              isNavExpanded ? 'opacity-100' : 'hidden'
            } delay-200`}
          >
            <a href="https://www.linkedin.com/in/yousef-idaouti/" className="hover:text-blue-400">
              <FaLinkedin size={16} /> {/* LinkedIn Icon */}
            </a>
            <a href="https://github.com/yidaouti" className="hover:text-gray-500">
              <FaGithub  size={16} /> {/* github Icon */}
            </a>
            <a href="https://www.facebook.com/youssef.idaouti.1" className="hover:text-blue-800">
              <FaFacebook size={16} /> {/* facebook Icon */}
            </a>
            <a href="https://www.instagram.com/chakcha_64" className="hover:text-pink-600">
              <FaInstagram  size={16} /> {/* Instagram Icon */}
            </a>
            <a href="https://wa.me/212636960514 " className="hover:text-green-600">
              <FaWhatsapp  size={16} /> {/* whatsapp Icon */}
            </a>
          </div>

          {/* Line Breaker */}
          <hr
            className={`w-full mt-4 border-t-2 border-gray-700 transition-opacity duration-300 ${
              isNavExpanded ? 'opacity-100' : 'hidden'
            } delay-200`}
          />
        </div>

        {/* Navigation Links */}

        <nav className="space-y-3 mt-3">
          <a href="#home" className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
            <FiHome size={19} />
            {isNavExpanded && <p className='ml-3'>Home</p>}
                    
            
          </a>
          <a href="#about" className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
            <BsPerson size={19} />
            
            {isNavExpanded && <p className='ml-3'>about</p>}

          </a>
          <a href="#projects" className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
            <BsBriefcase size={19} />
            
            {isNavExpanded && <p className='ml-3'>projects</p>}

          </a>
          <a href="#skills" className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
            <FaCode size={19} />
            
            {isNavExpanded && <p className='ml-3'>skills</p>}

          </a>
          <a href="#education" className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
            <BsBook size={19} />
            
            {isNavExpanded && <p className='ml-3'>education</p>}

          </a>

          <a href="#resume" className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
            <BsFileEarmarkText size={19} />
            
            {isNavExpanded && <p className='ml-3'>resume</p>}

          </a>

          <a href="#contact" className="flex items-center p-2 hover:bg-gray-700 rounded-lg">
            <BsEnvelope size={19} />
            
            {isNavExpanded && <p className='ml-3'>contact</p>}

          </a>
        </nav>

        {/* Hamburger Toggle Button at the Bottom */}
        <button onClick={toggleNav} className="p-2 hover:bg-gray-700 rounded-lg mr-auto">
          {isNavExpanded ? <FiX size={19} /> : <FiMenu size={19} />}
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow  h-full">
        {props.content} {/* This will render the Home component */}
      </div>
    </div>
  );
};

export default SideNav;
