import React, { useEffect, useState } from "react";

import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import product from "../../assets/images/Product.png";
import api from "../../assets/images/api.png";
import list from "../../assets/images/list.png";
import c4 from "../../assets/images/c4.png";

import "./index.scss";

const About = () => {
  const aboutArray = "My Works".split("");

  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterclassName={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <div className="card-container">
            <div className="card">
              <div className="img">
                <img src={product} alt="Product Project" />
              </div>
              <div className="desc">
                CRUD OPERTION Using [<span className="tech-tag"> HTML5</span>,{" "}
                <span className="tech-tag"> CSS3</span>,
                <span className="tech-tag"> JavaScript</span>,{" "}
                <span className="tech-tag"> Bootstrap 5</span>,{" "}
                <span className="tech-tag"> ES6</span> ].
              </div>
              <div className="btns">
                <button>
                  <a
                    href="https://github.com/Ahmed2211998/crud-opertion"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </button>
                <button>
                  <a
                    href="https://ahmed2211998.github.io/crud-opertion/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={c4} alt="Product Project" />
              </div>
              <div className="desc">
                C4 EVENTS Using [<span className="tech-tag"> HTML5</span>,{" "}
                <span className="tech-tag"> CSS3</span>,{" "}
                <span className="tech-tag"> Bootstrap 5</span>,{" "}
                <span className="tech-tag"> JavaScript</span> ,
                <span className="tech-tag"> ES6</span> ]. I did the project from
                the beginning to the last update on my own (in Arabic and
                English)
              </div>
              <div className="btns">
                <button disabled>
                  <a
                    href="https://github.com/Ahmed2211998"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </button>
                <button>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="http://85.93.89.54:8057/home.html#"
                  >
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={api} alt="Api Project" />
              </div>
              <div className="desc">
                PROJECT API Using [<span className="tech-tag"> HTML5</span>,{" "}
                <span className="tech-tag"> CSS3</span>,
                <span className="tech-tag"> JavaScript</span>,{" "}
                <span className="tech-tag"> Bootstrap 5</span>,{" "}
                <span className="tech-tag"> AJAX</span> ].
              </div>
              <div className="btns">
                <button>
                  <a
                    href="https://github.com/Ahmed2211998/Ahmed2211998-apiumore.github.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </button>
                <button>
                  <a
                    href="https://ahmed2211998.github.io/Ahmed2211998-apiumore.github.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={list} alt="Product Project" />
              </div>
              <div className="desc">
                TODO TASK PROJECT Using [
                <span className="tech-tag"> HTML5</span>,{" "}
                <span className="tech-tag"> CSS3</span>,{" "}
                <span className="tech-tag"> JavaScript</span> ].
              </div>
              <div className="btns">
                <button>
                  <a
                    href="https://github.com/Ahmed2211998/Ahmed2211998-todolist.github.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </button>
                <button>
                  <a
                    href="https://ahmed2211998.github.io/Ahmed2211998-todolist.github.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
