import React from 'react'
import logo from './images/footerLogo.svg'
import './styles/footer.css'

const Footer = () => {
    
  return (
    <footer>
        <div className="left">
           
            <div className="footer-text">
                <div className="footer-logo">
                    <img src={logo} alt="huddle logo" />
                </div>
                <div className="info">
                    <p><i className="material-icons">location_on</i>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, sint. Blanditiis molestiae veritatis sunt voluptate, sapiente exercitationem molestias! Illo, illum!</p>
                </div>

                <div className="info">
                   <p><i className="material-icons">local_phone</i> +1-543-123-4567 </p>
                </div>
               
               <div className="info">
                <p><i className="material-icons">email</i>info@huddle.com</p>
               </div>
            </div>
        </div>

        <div className="footer-links">
            <div className="left-links">
                <button>About Us</button>
                <button>What We Do</button>
                <button>FAQ</button>
            </div>
            <div className="right-links">
                <button>Careers</button>
                <button>Blog</button>
                <button>Contact Us</button>
            </div>
        </div>

        <div className="socials">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="copy">
           <p>&copy;Copyright 2022 Huddle. All rights reserved. </p> 
        </div>
    </footer>
  )
}

export default Footer