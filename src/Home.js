import Header from "./Header";
import "./Home.css";
import PlatoLogo from "./platoscience-logo.png"; 
import RMITLogo from "./rmit.png"
import TwendeeLogo from "./twendee.png"
import NABLogo from "./nab.jpg";

export default function Home() {
    return (
        <div>
            <Header/>
            <section id="intro">
                <div className="intro-text">
                    <div className="name">
                    <h1>HA THUY CHI</h1>
                    </div>
                    <div className="position">
                    <p>
                        Hi, My name is Chi, I am recent graduate Information Technology student at RMIT University. 
                        <br/>I’ve worked with JavaScript and Django to build APIs and backend features for academic and real-world projects. 
                        I enjoy learning practical technologies and improving my problem-solving skills through hands-on development.
                    </p>
                    </div>
                </div>
            </section>
            <section id="about">
                <h2>About Me</h2>
                <p>
                    I’m recent graduate Information Technology student at <strong>RMIT University</strong>, focusing on backend and web development.  
                    I speak <strong>English</strong> and <strong>Vietnamese</strong>.
                </p>
                <ul>
                    <li><strong>Education:</strong> Bachelor of IT, RMIT University Vietnam</li>
                    <li><strong>Languages:</strong> English, Vietnamese</li>
                    <li><strong>Skills:</strong> JavaScript, TypeScript, Django, Node.js, React</li>
                    <li><strong>Database and tools:</strong> PostgreSQL, MySQL, RESTful APIs, JWT, Swagger, Git</li>
                    {/* <li>Check out my code on <a href="https://github.com/Ha-ThuyChi">Github</a>!</li> */}
                </ul>
            </section>
            <section id="projects">
                <h2>Projects and Experience</h2>
                <div className="projects">
                    <div className="project1">
                        <div className="name-project">
                            NAB Innovation Centre Vietnam - WeCamp Program - Software Engineer (Dec 2025 - March 2026)
                        </div>

                        <div className="intro-project">
                            <ul>
                                <li>
                                    Trained in JavaScript, React, Node.js, Express, SQL/NoSQL databases, testing fundamentals, and SDLC practices
                                </li>

                                <li>
                                    Applied DSA concepts, Big-O analysis, and coding exercises to improve problem-solving and code efficiency
                                </li>

                                <li>
                                    Worked with Agile/Scrum workflows, Git version control, and collaborative software development
                                </li>
                            </ul>

                        </div>
                        <div className="skill-in-project">
                            <p><strong>Key Learnings:</strong></p>
                            <ul>
                                <li>JS Foundation</li>
                                <li>Data Structure & Algorithms</li>
                                <li>OS and Networking basics</li>
                                <li>React, Node.js, database with SQL and NoSQL</li>
                                <li>SDLC Development Process</li>
                            </ul>
                        </div>
                        {/* <div className="link">
                            <p>
                                <strong>Project link: </strong><a className="project-link" href="https://www.rmitvn-showcase.com/ccrt">Individualized Brain Stimulation</a>
                            </p>
                        </div> */}
                        <div className="project-logo-container">
                            <img className="project-logo-sticker" src={NABLogo} alt="NAB Innovation Centre Vietnam Logo" />
                        </div>
                    </div>
                    <div className="project2">
                        <div className="name-project">
                            Individualized Brain Stimulation - RMIT University & PlatoScience (Mar 2025 - Sep 2025)
                            <span className="project-position">Backend Developer</span>
                        </div>

                        <div className="intro-project">
                            <p>
                                <strong>I. What is this project about?</strong><br/>
                                This project focuses on human mental health and is a collaboration between <strong>RMIT University's Capstone team</strong> and <strong>PlatoScience</strong>. 
                                It provides an individualized application to track patients' mental conditions and recommend the most suitable protocols. 
                                Users can connect the app to PlatoScience's headset for <strong>tDCS treatment</strong>. 
                                The application also continuously monitors and updates users' wellness progress throughout the treatment.
                                Some core funtions:
                            </p>
                            <ul>
                                <li>Authentication</li>
                                <li>Assessment related features (Create an assessment, Reassess, Stop an assessment, etc)</li>
                                <li>Protocols features (Select a protocol, Check-in daily, Generate top 3 protocols, etc)</li>
                            </ul>

                        </div>
                        <div className="skill-in-project">
                            <p><strong>II. Skills:</strong></p>
                            <ul>
                                <li>Programming Languages & Frameworks: Django REST Framework, React Native</li>
                                <li>Database: PostgreSQL</li>
                                <li>Tools: Swagger, Serializers, JWT, MVC pattern</li>
                            </ul>
                        </div>
                        <div className="link">
                            <p>
                                <strong>Project link: </strong><a className="project-link" href="https://www.rmitvn-showcase.com/ccrt">Individualized Brain Stimulation</a>
                            </p>
                        </div>
                        <div className="project-logo-container">
                            <img className="project-logo-sticker" src={RMITLogo} alt="RMIT Logo" />
                            <img className="project-logo-sticker" src={PlatoLogo} alt="PlatoScience Logo" />
                        </div>
                    </div>
                  <div className="project3">
                    <div className="name-project">
                        JavaScript Dev Intern - Twendee Software (Sep 2024 - Nov 2024)
                    </div>
                    <div className="intro-project">
                        <p>
                            During my internship at <strong>Twendee Software</strong>, 
                            I developed <strong>API endpoints</strong> using <strong>NestJS, PostgreSQL, Prisma,</strong> and <strong>Swagger</strong>, 
                            implementing core user workflows.  
                            I also contributed to frontend development with <strong>ReactJS</strong> and <strong>NextJS</strong>, 
                            and integrated APIs into client-side applications.  
                        </p>
                    </div>
                    <div className="skill-in-project">
                        <p><strong>Key Learnings:</strong></p>
                        <ul>
                            <li>Programming Languages & Frameworks: NestJS, ReactJS, NextJS</li>
                            <li>Database: PostgreSQL, Prisma</li>
                            <li>Tools: Swagger, JWT, RESTful APIs</li>
                        </ul>
                    </div>
                    <div className="project-logo-container">
                        <img className="project-logo-sticker" src={TwendeeLogo} alt="Twendee" />
                    </div>
                {/* <div className="link">
                    <p>
                        <u>Link:</u><br/>
                        <a className="project-link" href="https://github.com/Ha-ThuyChi/ecommerce-platform.git">GitHub link</a><br/>
                        <a className="project-link" href="#">Project link: #</a>
                    </p>
                </div> */}
                </div>
                {/* <div className="project3">
                    <div className="name-project">
                        Anime Goods Website (Size: 2) Jun 2024 - Aug 2024
                    </div>
                    <div className="intro-project">
                        <p>
                            <strong>I. What is this project about?</strong><br/>
                            An <strong>e-commerce platform</strong> focused on anime goods, supporting 3 types of users: 
                            <strong>buyers, sellers, and administrators</strong>.  
                            I worked as both <strong>Backend Developer</strong> and <strong>Frontend Developer (API integration & HTML structure)</strong>.  
                            Some key contributions:
                        </p>
                        <ul>
                            <li>Developed RESTful APIs using <strong>Node.js</strong> and <strong>Express</strong> for user interactions.</li>
                            <li>Managed database operations with <strong>Sequelize</strong> and <strong>MySQL</strong>.</li>
                            <li>Handled API integrations and frontend structure to support backend workflows.</li>
                            <li>Implemented <strong>Authentication & Authorization</strong> to protect user data and enforce role-based actions.</li>
                        </ul>
                    </div>
                    <div className="skill-in-project">
                        <p><strong>II. Skills:</strong></p>
                        <ul>
                            <li>Programming Languages & Frameworks: Node.js (Express), ReactJS</li>
                            <li>Database: MySQL with Sequelize</li>
                            <li>Tools: RESTful APIs, JWT, CSS</li>
                        </ul>

                    </div>
                    <div className="link">
                        <p>
                            <u>Link:</u><br/>
                            <a className="project-link" href="https://github.com/Ha-ThuyChi/ecommerce-platform.git">GitHub link</a><br/>
                        
                        </p>
                    </div>
                </div> */}
            </div>
            </section>
            <section id="resume">
                <h2>Resume: </h2> <a href="/files/Ha Thuy Chi - Software Engineer.pdf" download className="resume-link">Download My Resume</a>
            </section>
            <section id="contact">
                <h2>Get in touch with me via:</h2>
                <div className="social-links">
                    <a className="contact-btn linkedin" href="https://www.linkedin.com/in/your-linkedin-id" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a className="contact-btn gmail" href="https://mail.google.com/mail/?view=cm&to=chi.hathuy15@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-envelope"></i> Gmail
                    </a>
                    <a className="contact-btn phone" href="tel:+84813966019">
                        <i className="fas fa-phone"></i> Phone
                    </a>
                    <a className="contact-btn github" href="https://github.com/Ha-ThuyChi">
                        <i className="fa-brands fa-github"></i> GitHub
                    </a>
                </div>
            </section>

        </div>
    )
}