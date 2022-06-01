import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import WordCloud from './wordcloud';

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            Expert in front-end development including technologies like
            <span class="tech-tag"> HTML5</span>,
            <span class="tech-tag"> CSS3</span>,
            <span class="tech-tag"> JavaScript</span>,
            <span class="tech-tag"> jQuery</span>,
            <span class="tech-tag"> ES6</span>,
            <span class="tech-tag"> Bootstrap 5</span>,
            <span class="tech-tag"> Sass</span>,
            <span class="tech-tag"> Git</span>
            , etc.
          </p>
          <p>
            Strong understanding of web and programming principles; with a focus
            on writing secure, responsive, accessible and performant code.
          </p>
          <p>
            Self-starter with ability to manage your own time, take ownership,
            and find solutions to problems with little support.
          </p>
          <p>
            Ability to understand and translate non-technical requirements and
            ask the right questions.
          </p>
          <p>Strong written and oral communication skills</p>
          
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default Skills
