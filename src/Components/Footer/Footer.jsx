import React from 'react';
import nrp_github from '../../assets/github.png'
import nrp_linkedin from '../../assets/linkedin.png'
import { useLocation } from 'react-router-dom';
import top_arrow from '../../assets/top_arrow.png';
import './Footer.css'

const Footer = ()=> {
    const location = useLocation()
    const handleTopArrowBtnClick = () =>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })};
    
    if(location.pathname === '/about'){
        return(
            <div className="footer-class">
                <hr></hr>
                
                <ul className="social-handle">
                        <li><a class="social-me" href="https://www.linkedin.com/in/nikita-pardeshi-5bab10157/">
                            <img src={nrp_linkedin} alt="Linked In" ></img>
                        </a>
                        </li>
                        <li><a class="social-me" href="https://github.com/nikita-pardeshi-github">
                            <img src={nrp_github} alt="Github" ></img>
                        </a>
                        </li>
                        <img id="top-arrow" src={top_arrow} onClick={handleTopArrowBtnClick}></img>
                </ul>
                {/* <img id="top-arrow" src={top_arrow} onClick={handleTopArrowBtnClick}></img> */}

            </div>

        )
    }
    return null;
}

export default Footer;