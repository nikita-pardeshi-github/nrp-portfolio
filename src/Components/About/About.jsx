import React from 'react'
import './About.css'
import { useEffect } from 'react';


const About = () => {
 
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  document.title = 'About Nikita Pardeshi'

  return (
    <div className='about'>
      <div className="about-title">
        <h3>Software Developer, Automation Tester, & QA Engineer</h3>
      </div>
      <div className="about-me">
        <p>
          Experienced Quality Assurance Engineer with over 7 years of proficiency
          in automation testing, transitioning into a software development role.
          Demonstrated expertise in leveraging testing knowledge to contribute effectively
          to the development process. Skilled in Python, Django, Flask, and React.js,
          with a focus on web development and data-related tasks.
          Proficient in agile methodologies, code reviews, and CI/CD pipelines
          to ensure project success.
        </p>
        <br></br>
        <h4>Roles:</h4>
        <br></br>
        <p>Junior Software Developer | Automation Tester | QA Tester</p>
        <br></br>
        <h4>Skills:</h4>
        <ul>
          <br></br>
          <li>Languages: Python, JavaScript, C programming</li>
          <li>Web Development: Django, Flask, React.js, HTML/CSS</li>
          <li>Testing Tools: Selenium, Appium, LoadRunner</li>
          <li>Git, GitHub</li>
          <li>Agile Methodologies</li>
          <li>Hands on experience on docker and kubernetes</li>
          <li>Writing test scripts using python, shell</li>
        </ul>
        <br></br>
        <h4>Personal Interests:</h4>
        <br></br>
        <p>
          I find fulfillment in various activities. Cooking lets me explore my creativity,
          while biking keeps me active and adventurous. I enjoy listening to podcasts
          about spirituality and life, which inspire me and broaden my horizons.
          Reading is another passion of mine, offering me escape and insight into different worlds.
          Additionally, I dedicate time to volunteering, where I contribute to causes close to
          my heart and make a positive impact in my community. I also love learning new things,
          whether it's picking up a new skill or delving into topics that interest me.
          These diverse interests enrich my life and bring balance to my daily routine.
        </p>
      </div>
    </div>
  )
}

export default About;
