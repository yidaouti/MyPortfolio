import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { BsPerson, BsBriefcase, BsGear, BsEnvelope, BsBook, BsFileEarmarkText, BsHouse } from 'react-icons/bs'; // Added House icon for Home
import profilpic from '../assets/Profile Picture.png';

const socialLinks = [
  { href: "https://www.linkedin.com", icon: <FaLinkedin size={24} />, color: "text-blue-400 hover:text-blue-500" },
  { href: "https://www.github.com", icon: <FaGithub size={24} />, color: "text-gray-300 hover:text-gray-400" },
  { href: "https://www.facebook.com", icon: <FaFacebook size={24} />, color: "text-blue-400 hover:text-blue-500" },
  { href: "https://www.instagram.com", icon: <FaInstagram size={24} />, color: "text-pink-400 hover:text-pink-500" },
  { href: "https://wa.me/yourwhatsappnumber", icon: <FaWhatsapp size={24} />, color: "text-green-400 hover:text-green-500" }
];

const navLinks = [
  { href: "#home", label: "Home", icon: <BsHouse className="mr-2 text-gray-300 font-bold" /> },
  { href: "#about", label: "About", icon: <BsPerson className="mr-2 text-gray-300 font-bold" /> },
  { href: "#projects", label: "Projects", icon: <BsBriefcase className="mr-2 text-gray-300 font-bold" /> },
  { href: "#skills", label: "Skills", icon: <BsGear className="mr-2 text-gray-300 font-bold" /> },
  { href: "#education", label: "Education", icon: <BsBook className="mr-2 text-gray-300 font-bold" /> },
  { href: "#resume", label: "Resume", icon: <BsFileEarmarkText className="mr-2 text-gray-300 font-bold" /> },
  { href: "#contact", label: "Contact", icon: <BsEnvelope className="mr-2 text-gray-300 font-bold" /> }
];

const Sidenav = ({ activeLink }) => {
  return (
    <aside className="h-screen sticky top-0 bg-slate-800 w-80 p-8 shadow-lg flex flex-col items-center border-r border-gray-700">
      {/* Profile Section */}
      <div className="mb-8 flex flex-col items-center">
        <img 
          src={profilpic} 
          alt="Profile" 
          className="w-28 h-28 rounded-full mb-4 border-4 border-blue-500"
        />
        <h2 className="text-xl font-semibold text-white">Yousef Idaouti</h2>
        <div className="flex space-x-4 mt-4">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.href} className={social.color}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Horizontal Rule */}
      <hr className="w-full border-gray-700 mb-8" />

      {/* Navigation Links */}
      <nav className="w-full">
        <ul className="space-y-4 ">
          {navLinks.map((link, index) => (
            <li key={index} className="flex items-center  ">
              <span className={`mr-2 text-gray-300 text-xl  ${activeLink === link.href ? 'text-blue-500' : ''}`}>
                {React.cloneElement(link.icon, { className: `text-gray-300 ` })}
              </span>
              <a 
                href={link.href} 
                className={`block w-full p-3 text-lg text-gray-300 hover:text-sky-500 rounded transition-colors duration-200 ${
                  activeLink === link.href ? 'text-white' : ''
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidenav;
