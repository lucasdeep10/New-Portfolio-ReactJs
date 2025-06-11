import React from 'react';
import '../../pages/About/AboutPage.css'
import { Link } from 'react-router-dom';
import cv from '../../cv/cv.pdf';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const About = () => (
    <section className="sobre-mi" id="sobre-mi">
        <h2 className="heading">
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h2>

        <div className="row container">
            <div className="columns" data-aos="fade-right" data-aos-delay="300">
                <h3>
                    <FormattedMessage
                        id='im'
                        defaultMessage='who I am'
                    />
                </h3>
                <h4>
                    <FormattedMessage
                        id='description'
                        defaultMessage='My name is Lucas Ferreyra and I am a full stack developer.'
                    />
                </h4>
                <p>
                    <FormattedMessage
                        id='my-description'
                        defaultMessage='I have been working on web designing and web development for 2 years. Constantly updating the technologies I already master, but also looking to learn new technologies to enrich my skills and improve my good practices as a developer.'
                    />
                </p>
                <ul>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='years'
                                    defaultMessage='Age:'
                                />
                            </span>
                            29
                        </p>
                    </li>
                    <li>
                        <p>
                            <span>
                                Hobbies:{" "}
                            </span>
                                Chess, Football and Programming
                        </p>
                    </li>
                    <li>
                        <p><span>Email:</span> lucasferreyra6991@gmail.com</p>
                    </li>
                    <li>
                        <p>
                            <span>
                                <FormattedMessage
                                    id='from'
                                    defaultMessage='From:'
                                />
                            </span>
                            Victoria, Entre Rios, Argentina
                        </p>
                    </li>
                </ul>
                <div className="mas-info">
                    <a href={cv} target="_blank" rel="noopener noreferrer" download="cv.pdf" className="btn-codigo buttonDownload">
                        <FormattedMessage
                            id='btn-cv'
                            defaultMessage='Download CV'
                        />
                    </a>
                    <div className='mas-info-btn'>
                    <Link to="/about">
                        <ButtomGet/>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="columns col-skill" data-aos="fade-left" data-aos-delay="650">
                <h3>skills</h3>
                <h4>Front-End</h4>
                <div className="skill">
                    <div>
                        <img alt="HTML" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" />
                        <h5>HTML</h5>
                    </div>
                    <div>
                        <img alt="CSS" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" />
                        <h5>CSS</h5>
                    </div>
                    <div>
                        <img alt="Js" className="icons-skils" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg" />
                        <h5>JavaScript</h5>
                    </div>
                    <div>
                        <img alt="Sass" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                        <h5>Sass</h5>
                    </div>
                    <div>
                        <img alt="Bootstrap" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        <h5>Bootstrap</h5>
                    </div>
                    <div>
                        <img alt="Nextjs" className="icons-skils" src="https://www.dropbox.com/scl/fi/8lbykiz5ir9pa8qyhqh90/pngwing.com-4.png?rlkey=fnm80fpcmbgs81qdvzzyaqiz4&st=vab52jar&dl=1" />
                        <h5>Next JS</h5>
                    </div>
                    <div>
                        <img alt="jQuery" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" />
                        <h5>jQuery</h5>
                    </div>
                    <div>
                        <img alt="React" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <h5>React</h5>
                    </div>
                    <div>
                        <img alt="Typescript" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                        <h5>Typescript</h5>
                    </div>
                </div>
                <h4>Back-End</h4>
                <div className="skill">
                    <div>
                        <img alt="Nodejs" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <h5>NodeJs</h5>
                    </div>
                    <div>
                        <img alt="express" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                        <h5>Express</h5>
                    </div>
                    <div>
                        <img alt="sql" className="icons-skils" src="https://www.dropbox.com/scl/fi/7lkwhtphzhcvmswv83n6f/database_4248340.png?rlkey=w6llngrtz7zk1b6d4a848qk0m&st=xw8th2v1&dl=1" />
                        <h5>Sql</h5>
                    </div>
                    <div>
                        <img alt="mongodb" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                        <h5>MongodDB</h5>
                    </div>
                    <div>
                        <img alt="php" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
                        <h5>PHP</h5>
                    </div>
                     <div>
                        <img alt="python" className="icons-skils" src="https://www.dropbox.com/scl/fi/afsiz273bxvucyxnmqfno/python_5968350.png?rlkey=anawg2j5xfic7je33xhkw2v1s&st=wwic4f36&dl=1" />
                        <h5>Python</h5>
                    </div>
                </div>
                <h4>
                    <FormattedMessage
                        id='tools'
                        defaultMessage='Tools'
                    />
                </h4>
                <div className="skill">
                    <div>
                        <img alt="figma" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" title="figma" />
                        <h5>Figma</h5>
                    </div>
                    <div>
                        <img alt="seguridad" className="icons-skils" src="https://cdn.jsdelivr.net/gh/lucasdeep10/img-docs@main/kisspng-safety-computer-icons-security-safe-5ab63a203ca451_7558683915218918722484-transformed.png" title="Ciberseguridad" />
                        <h5>Seguridad Informatica</h5>    
                    </div>
                    <div>
                        <img alt="Visual Studio Code" className="icons-skils" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png" title="Visual Studio Code" />
                        <h5>VS Code</h5></div>
                    <div>
                        <img alt="git" className="icons-skils" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" title="git" />
                        <h5>Git</h5>
                    </div>
                    <div>
                        <img alt="docker" className="icons-skils" src="https://www.dropbox.com/scl/fi/7lkwhtphzhcvmswv83n6f/database_4248340.png?rlkey=w6llngrtz7zk1b6d4a848qk0m&st=tlmjxmde&dl=1" />
                        <h5>Docker</h5>
                    </div>
                     <div>
                        <img alt="postman" className="icons-skils" src="https://www.dropbox.com/scl/fi/v599wxmfczlv5dqzzblax/pngwing.com.png?rlkey=t41r4nhpgb9pyh2j1hn2zq7q7&st=us8xmrsc&dl=1" />
                        <h5>Postman</h5>
                    </div>
                     <div>
                        <img alt="n8n" className="icons-skils" src="https://www.dropbox.com/scl/fi/wi1wgzgu0t164yubo22uu/pngwing.com-1.png?rlkey=23mmuk2hrlkg933l89o1yyskl&st=uupydp9s&dl=1" />
                        <h5>n8n</h5>
                    </div>
                    <div>
                        <img alt="github" className="icons-skils" src="https://www.dropbox.com/scl/fi/c9gnot3l4mouti4nvzth9/pngwing.com-6.png?rlkey=agfgb483licd1rkey3f4868pq&st=al7z8vx4&dl=1" />
                        <h5>Git Hub</h5>
                    </div>
                    <div>
                        <img alt="JSON" className="icons-skils" src="https://www.dropbox.com/scl/fi/zcnxqgjpquvcdr9w9qfev/pngwing.com-7.png?rlkey=djs80ziu08leo9ywm5rpvutwp&st=5ebmxqke&dl=1" />
                        <h5>Json</h5>
                    </div>
                    <div>
                        <img alt="crm" className="icons-skils" src="https://www.dropbox.com/scl/fi/9kn75li5do6q9eqk611zq/pngwing.com-9.png?rlkey=fsjuqzb78pu1x7heqi91s25xv&st=6fwmlal3&dl=1" />
                        <h5>CRM</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default React.memo(About);
