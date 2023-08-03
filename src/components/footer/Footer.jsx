import React from 'react';
import gpt3Logo from '../../assets/logo.svg';
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import './footer.css';

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <a className="footer-btn" href='#contact'>
      <p>Request Early Access</p>
    </a>

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>NDANG ESSI Pierre Junior, <br /> Fullstack Developper</p>
      </div>
      <div className="footer-links_div">
        <h4 className='text-secondary'>Links</h4>
        <p>Experience</p>
        <p>Resume</p>
        <p>Projects</p>
      </div>
      <div className="footer-links_div">
        <h4 className='text-secondary'>About me</h4>
        <p>About </p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4 className='text-secondary'>Get in touch</h4>
        <p>Yaounde Cameroun</p>
        <p>+237 6 90 74 37 37</p>
        <p>nessipjunior@gmail.com</p>
      </div>
    </div>

    <div className="footer-copyright flex flex-col justify-center w-4/5 items-center">
      <p className='text-secondary'>Developped by @EssiJunior.</p>
      <div className='links w-1/5 flex justify-evenly items-center mt-3'> 
        <a href='#'><FaGithub /></a>
        <a href='#'><FaLinkedin /></a>
        <a href='#'><FaTwitter /></a>
      </div>
    </div>
  </div>
);

export default Footer;
