import React from 'react'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>B.Tech Computer Science (UG) <br /><i>NIT Kurukshetra</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>7.0</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Full Stack Web Development</li>
                      <li>Data Structures & Algorithms</li>
                      <li>Machine Learning</li>
                      <li>Cloud Computing</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I'm a <b>Computer Science undergraduate</b> at NIT Kurukshetra with a strong interest in full-stack web development and problem-solving. 
                    I enjoy building efficient, user-friendly applications and contributing to open-source projects. 
                    Passionate about continuous learning, I'm working to deepen my skills in cloud technologies and machine learning.
                    With expertise in React.js, Node.js, and MongoDB, I'm always ready to face new challenges and contribute to innovative projects.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About