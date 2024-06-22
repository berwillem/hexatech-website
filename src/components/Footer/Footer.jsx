import React from 'react';
import './Footer.css';
import hexatech from '../../assets/Hexatech.png';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {

    //Direction Facebook
    const onclickF = () => {
        window.location.href = 'https://www.facebook.com';
    };
    //Direction Instagram
    const onclickI = () => {
        window.location.href = 'https://www.instagram.com';
    };

    //Direction Linkedin
    const onclickL = () => {
        window.location.href = 'https://www.linkedin.com';
    };

    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='description'>
                    <figure>
                        <img className="footer-logo" src={hexatech} alt="Hexatech logo" />
                    </figure>
                    Our team of seasoned developers specializes in crafting cutting-edge web and mobile solutions powered by artificial intelligence, designed to help businesses thrive in the digital landscape.
                </div>

                <div className='vertical-line'></div>

                <div className='footer-buttons'>
                    <button  className='footer-button'>Contact us</button>
                    <button className='footer-button'>About us</button>
                    <button className='footer-button'>Services</button>
                </div>

                <div className='vertical-line'></div>

                <div className='footer-icons'>
                    <FaFacebook onClick={onclickF} className='footer-icon' />
                    <FaInstagram onClick={onclickI} className='footer-icon' />
                    <FaLinkedin onClick={onclickL} className='footer-icon' />
                </div>
            </div>
        </div>
    );
}

export default Footer;
