import React, { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const aboutArray = 'About Me'.split('')
  const exArray = 'Experience'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I'm Front end Developer, with 2 years of experience graduated from
            the Faculty of Science CS Department of Computer Science.
          </p>
          <p>
            I have alit of training courses in finding and developing innovative
            solutions and providing better service.
          </p>
          <p>
            I always work on self-development in terms of work and personality.
            Also I have a different way of thinking, and insistence on the
            desired result in the task. I’m Always thinking outside the box and
            eager to develop myself in the shortest possible time what makes me
            so curious to achieve my career goals.
          </p>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={exArray}
              idx={15}
            />
          </h1>
          <p>
            <div className="tech-tag">
              2021 TO NOW FRONT END -DEVELOPER 6 SIGMA CODE{" "}
            </div>
            Working in the company made me have some experience in dealing with
            the work team, which made me an easy developer. It made me
            disciplined in my time and behavior inside and outside work. Effort
            is a lot of moral qualities
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}

export default About
