import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Tomato is a fast and reliable food delivery website that connects customers with their favorite restaurants. It offers a wide range of cuisines, allowing users to explore and order meals conveniently from the comfort of their homes. With real-time order tracking and secure payment options, Tomato ensures a seamless dining experience tailored to every craving.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivey</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
              <li>070188 5056</li>
              <li>rmkrr99@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>CopyRIGHT 2024 @ Tomato.com -All Right Reserved</p>
    </div>
  )
}

export default Footer