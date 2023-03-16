import React, { useEffect } from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";


const Navbar = () => {

    // const googleTranslateElementInit = () => {
    //     new window.google.translate.TranslateElement(
    //       {
    //         pageLanguage: "en",
    //         autoDisplay: false
    //       },
    //       "google_translate_element"
    //     );
    //   };
    
    //   useEffect(() => {
        
    //     var addScript = document.createElement("script");
    //     addScript.setAttribute(
    //       "src",
    //       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    //     );
    //     document.body.appendChild(addScript);
    //     window.googleTranslateElementInit = googleTranslateElementInit;
    //     console.log(document.getElementById("goog-gt-"))
        
    //     return ()=>{
    //         console.log(document.getElementById("goog-gt-"))
    //         addScript.remove();
    //     }
        
    //   }, []);


    
  return (
    <nav className='nav-bar'>
        <div className='nav-logo'>
            <Link className='pre-link' to="/home"><img width="65px" height="60px" src={logo}/></Link>
        </div>
        <ul className='nav-items'>
            <li className='nav-item'><Link className='pre-link' to="/home">Home</Link></li>
            <li className='nav-item'><Link className='pre-link' to="/community">Community</Link></li>
            <li className='nav-item'><Link className='pre-link' to="/marketplace">Marketplace</Link></li>
            <li className='nav-item'><Link className='pre-link' to="/rental">Rental</Link></li>
            <li className='nav-item'><Link className='pre-link' to="/updates">Updates</Link></li>
        </ul>

        <div className='nav-options'>
            <div id="google_translate_element"></div>
            <button className='logout-btn'>Logout</button>
        </div>
    </nav>
  )
}

export default React.memo(Navbar);