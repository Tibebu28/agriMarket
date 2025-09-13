import React from 'react'
import { Sprout, Mail, Phone, MapPin, } from 'lucide-react'
import { FaTelegram, FaFacebook, FaGithub, FaYoutube, FaFacebookF } from "react-icons/fa";
import Home from "../pages/Home.jsx"

export default function Footer() {
  return (
    <>
    <style>
      {`
      
      .footer {
      background-color: white;
      color: gray;
      display: flex;
      }
      
      .first a{
      text-decoration: none;
      color: gray;
      }
      .links{
      display: flex;
      flex-direction: column;
      margin: 0px 100px;
      font-size: 18px;
      }
      .copy{
      font-size: 22px;
      margin: 50px 0px 0px 50px
      }
      .contact{
      display: flex;
      flex-direction: column;
      font-size: 18px;
      }
      `}
    </style>
    
    <footer className="footer">
  
      
          {/* Logo & Description */}
          
            <div className="first" style={{display:"flex",flexDirection:"column",margin:"20px 0px 0px 100px",fontSize:"20px"}}>
             
              <span style={{fontWeight:"bold"}} > <Sprout />AgriMarket</span>
              <a href="https://github.com/Tibebu28/agriMarket.git" target='_blank'><FaGithub/>  Github</a>
              <a href="https://t.me/Agrimarket09" target='_blank'><FaTelegram/>  Telegram</a>
              <a href="https://www.youtube.com/@hvduhvdvvvdv" target='_blank'><FaYoutube/>  YouTube</a>
              
            
             </div>

          {/* Quick Links */}

          <div className="links" style={{color:"gray",textDecoration:"none",marginTop:"20px"}}>
          <h3 style={{margin:"0px"}}>Quick Links</h3>  
          <a href="/" style={{textDecoration:"none",color:"gray"}}>Home</a>
          <a href="/about"style={{textDecoration:"none",color:"gray"}}>About</a>
          <a href="#why" style={{textDecoration:"none",color:"gray"}}>Why choose</a>
          <a href="#how"style={{textDecoration:"none",color:"gray"}}>How works</a>
          </div>

          {/* Contact Info */}
          <div className="contact">
            <h3 className="footer-h3" style={{marginBottom:"0px",fontWeight:"bold"}}>Contact Us</h3>
                <span className="text"><Mail/>agrimarket@gmail.com</span>
                <span className="text"><Phone/>251951253648</span>
                <span className="text"><MapPin/>Agri Market, Addis Abeba</span>
          </div>


        <div className="copy">
          <p className="footer-p">&copy; 2025 AgriMarket. All rights reserved.</p>
        </div>
    </footer>
    </>
  )
}
