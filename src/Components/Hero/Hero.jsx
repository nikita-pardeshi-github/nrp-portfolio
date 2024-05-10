import React, {useEffect} from "react";
import './Hero.css'
import nrp_profile from '../../assets/nrp.jpg'
import nrp_github from '../../assets/github.png'
import nrp_linkedin from '../../assets/linkedin.png'


const Hero = () => {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }, []);
    
    document.title = 'Nikita Pardeshi'
    return (
        <div className="hero">
            <img style={{ width: 220, height: 230, borderRadius: '50%' }} src={nrp_profile} alt=""></img>
            <div className="hero-brief">
                <h2>Hi, I am Nikita Pardeshi</h2>
                <br></br>
                <p>Software developer based in USA</p>
                <ul className="social-handle">
                    <li><a class="social-me" href="https://www.linkedin.com/in/nikita-pardeshi-5bab10157/">
                        <img src={nrp_linkedin} alt="Linked In" ></img>
                    </a></li>
                    <li><a class="social-me" href="https://github.com/nikita-pardeshi-github">
                        <img src={nrp_github} alt="Github" ></img>
                    </a></li>
                </ul>
            </div>
        </div>
    )
};

export default Hero;