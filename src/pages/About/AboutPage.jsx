import React from 'react';
import './AboutPage.css'

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import cv from '../../cv/cv.pdf';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
import imgabout from '../../img/home.jpg';

const About = () => {

  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>

      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />
              
              <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo cv buttonDownload">
                  <FormattedMessage
                      id='btn-cv'
                      defaultMessage='Download CV'
                  />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id='about-info-1'
                  defaultMessage="Hi, I'm Lucas Ferreyra, a student at the Coder House; I consider myself a person passionate about programming and web development since in 2020 I had the opportunity to get to know this world of the front-end and I was able to create my first web page only using HTML and CSS from there, I felt a great passion for web development, since you can do amazing things knowing how to use HTML, CSS, JavaScript and to this day I still feel that same passion when I create a web page."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id='about-info-2'
                    defaultMessage='I consider myself a self-taught person since I like to be constantly learning day by day, both new technologies and new development methods that help me polish and raise my level of learning.'
                  />
                </p>

                <p>
                  <FormattedMessage
                    id='about-info-3'
                    defaultMessage="I have experience working as a freelance web designer and developer, which gave me the opportunity to work on many interesting projects, adapting to the client's needs and budget, which allowed me to improve my skills and knowledge; Additionally, I have also had the opportunity to be part of some online and face-to-face courses that helped me enrich my skills and learn a little more about this beautiful world of web development."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div className="custom-btn btn-codigo" id="btn-hide" onClick={readMore}><span>Read more</span></div>
              </div>
            </div>

          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="HTML" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" title="HTML5" />
                <h2 className="skill-name">HTML</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-1'
                    defaultMessage='More than a year of professional experience in this language, allows me to perform without problems in the industry.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="CSS" className="skills-img icon-li" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" title="CSS3" />
                <h2 className="skill-name">CSS</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-2'
                    defaultMessage='More than a year of work experience in this language, I use it daily to develop web designs and interfaces.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="Js" className="skills-img icon-li" src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" title="Java Script" />
                <h2 className="skill-name">Javascript</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-3'
                    defaultMessage='A year of experience using it in the front-end and back-end branch, allowed me to familiarize myself with the language, and include it in my work projects.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="Sass" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" title="Sass" />
                <h2 className="skill-name">Sass</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-4'
                    defaultMessage='One year using this preprocessor in the professional field, I include it in many of my projects since it allows me a better structured code.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-down" data-aos-delay="300">
                <img alt="Bootstrap" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" title="Bootstrap" />
                <h2 className="skill-name">Bootstrap</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-5'
                    defaultMessage='Less than a year using this framework, even so, I used it in countless work projects, which allowed me to get to know it for the most part.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="jQuery" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" title="jQuery" />
                <h2 className="skill-name">jQuery</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-6'
                    defaultMessage='A year using this bookstore in the personal and work environment, it is one of the bookstores that I use and manipulate the most.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-right" data-aos-delay="300">
                <img alt="react" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" title="jQuery" />
                <h2 className="skill-name">ReactJs</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-7'
                    defaultMessage='More than a year using this JavaScript framework, carrying out multiple personal and work projects.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-up" data-aos-delay="300">
                <img alt="nodejs" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" title="jQuery" />
                <h2 className="skill-name">NodeJs</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-8'
                    defaultMessage='It is the cross-platform runtime environment that I use to make my web applications scalable.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="express" className="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" title="jQuery" />
                <h2 className="skill-name">Express</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-9'
                    defaultMessage='It is a framework that I use mostly to be able to manage my APIs in the best way and my http execution model.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="express" className="skills-img" src="https://previews.dropbox.com/p/thumb/AB7eA9T7N7Kk1uH7c7_LP1y2PCfihhN7E4hkLmzlXof6hKf2hhGhcJAG22u0X_TxcJKOFi1Co1fnZS3BLshDOKTcSaC__Q2GJ3N5VvRhxk-HzbzxXMfw1pKfYiSuATZpv_DU_jthzRJ8Et2fed01w4FWIwZ_n4ffIMLP-ONUF_qLgDr3EC9J95JoE45lCfwn8UNkmyFaOCzO_4H-pIqAp4dqq1TSKVPpTKX5EAHKQu4_Wwc1hm7u0O0SApYTJYZ_NV6pUFN60X5rmqqv4sdCt6iQ5J8E6WDYrjP2tlp3aIi0MNSvPd579Y22EOJfWn_WMzhabXsVZ0nsm0iY6JKm0_WomHzdbzsP8HCODNo4PW445n8liqG9DopP6tvCzK40B8Q/p.jpeg" title="jQuery" />
                <h2 className="skill-name">Seguridad Informatica</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-10'
                    defaultMessage='Understanding of the fundamental concepts of computer security, protecting your information through data encryption, preventing attacks, configuring the network in a secure way, applying the use of password managers.'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="express" className="skills-img" src="https://previews.dropbox.com/p/thumb/AB7a_SNlzvhdw21SNbwYDYpDefOZpq0pvEB01MaQ2v4HjP1X8rIQJnspnrFOUSTPgCmlgroGparSPz1T75mPxEGw4keABj7sleFzb0jo2dMnkjXVMxYnLNV0fSISXOLs1Pu697udB8QtVjq_beYrYgcf3GuGI0hWVgJkwTqgOt09_c4jk-oOm144n5kzmoac1Z4iDy8qcgmqnYj5LlcUBdcTRgCzrMrKNRghJz6uEec-uts0_VLVFNytc4uaOVD-vX1Yi-BMSpWdGpQfoES-XWiMltBQ5wMbPt8cy9cQq3i6u6etqpVZ_9xAPvlYGgOr6wN5Inw58mvKwm6Jt7yDHLth-IjVg6qsvs71fhROrWgfyHm0udeKvyNS-O7QO5LYhu0/p.jpeg" title="jQuery" />
                <h2 className="skill-name">Wordpress</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-11'
                    defaultMessage='fundamentals and programming in WordPress'
                  />
                </p>
              </div>
              <div className="skill-card" data-aos="flip-left" data-aos-delay="300">
                <img alt="express" className="skills-img" src="https://previews.dropbox.com/p/thumb/AB4SyhBVHKMbnQp97cbeiJC237whq-bNgKtqY6bT9i4oDrfXHjxQnKUe_jtq9hPm2T1tlthDNLlaFhYatVy-7kGMZ_ML_BVimd9Iyn69Y5bcrWa3KLtXh9oh-ItwO-PrDNUean3ls3wdHN3E5vhS_LmnlVcu3bvI5lA-6Bk3nbrTIeirbyDA3pDu0r-aLkY5VmYVnMg7Fmc2Az_7V5P9aEq1L5nL68dPXJPLs-eqq_8nxIFGnO2hkRiQTB0tEhfAlceusxEdO6qosfHgO9NuCjB0ZBAvJuqy46eMkHB89KvBZdNErti3F3yG2QiOoWrFTnk-PfhMA96KG2kbZfbDIVH-NjEMxC6KgUn9VwnaTQhUxz9pQgAKF4b-LfbB1tz6n48/p.jpeg" title="jQuery" />
                <h2 className="skill-name">Tecnico en PC y Redes</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id='about-skills-12'
                    defaultMessage='Knowledge in installation of network systems and computers in LAN and WAN networks. Operate computers in the preparation and cleaning of all hardware and software equipment.'
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />

    </div>
  )
}
export default About;