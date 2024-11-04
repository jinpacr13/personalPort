import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import "../css/Landing.css";
import bbb from '../images/fllll.jpg';
import ground from '../images/ground.jpg';
import house from "../images/house.jpg";
import jimba from "../images/jimba.jpeg";
import logo from '../images/logo.png';

const Landing = () => {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome, I'm Yeshi Jimba</h1>
            <p>Web Developer | Designer | Creator</p>
            <a href="#about" className="cta-button">
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-image">
            <img src={jimba} alt="About Me" />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              My name is Yeshi Jimba, and I’m from Bhutan, currently in my
              fourth year studying full stack development. Over the years, I’ve
              developed a deep passion for coding and programming. I enjoy the
              challenge of building dynamic applications that offer seamless
              front-end user experiences and strong back-end functionality. With
              skills in both client-side and server-side technologies, I work on
              web and mobile apps from start to finish, using frameworks like
              React for responsive designs and Node.js for handling complex
              data. Coding, for me, is about creating solutions that enhance
              everyday tasks and help businesses thrive. I value the creativity,
              collaboration, and continuous learning that come with working in
              tech, and I’m eager to keep growing as a developer and
              contributing to the industry.
            </p>
            <div className="education">
              <h3>Education</h3>
              <ul>
                <li>
                  <span>
                    Wamrong Lower Secondary School (2007-2016) : Studied at
                    WLSS, Trashigang, Bhutan
                  </span>
                  <br />
                </li>
                <li>
                  <span>
                    Tashitse Higher Secondary School (2017-2020) : Graduated 12
                    from THSS, Trashigang, Bhutan
                  </span>
                  <br />
                </li>
                <li>
                  <span>
                    GCIT(2021-2025) Currently pursuing Bachelor of Computer
                    Science in Full Stack Development at GCIT,Bhutan.
                  </span>
                  <br />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill-item">
            <h3>1. Front-End Development Skills:</h3>
            <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>Responsive Design</li>
              <li>Front-End Frameworks/Libraries</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3>2. Back-End Development Skills:</h3>
            <ul>
              <li>Database Management</li>
              <li>Server-Side Languages</li>
              <li>API Development</li>
              <li>Authentication/Authorization</li>
              <li>Security</li>
            </ul>
          </div>
        </div>
        <div className="skill-items">
          <h3>3. Other Skills & Tools:</h3>
          <ul>
            <li>Version Control</li>
            <li>DevOps & Deployment</li>
            <li>Problem-Solving</li>
            <li>Agile Methodologies</li>
            <li>Collaboration</li>
          </ul>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <h2>Portfolio</h2>
        <div className="project-cards">
          <div className="project-card">
            <a href="/HouserentApp" className="project-link">
              <img src={house} alt="House Project" />
              <div className="title-box-wrapper">
                <p className="project-title">Apartment rental app</p>
              </div>
            </a>
          </div>
          <div className="project-card">
            <a href="/FlowerSell" className="project-link">
              <img src={bbb} alt="Jimba Project" />
              <div className="title-box-wrapper">
                <p className="project-title">Botonical Bliss</p>
              </div>
            </a>
          </div>
          <div className="project-card">
            <a href="/GroundBook" className="project-link">
              <img src={ground} alt="Jimba Project 2" />
              <div className="title-box-wrapper">
                <p className="project-title">GCIT Ground booking</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="socia-icons">
          <span>
            <FaEnvelope size={20} style={{ color: "white" }} />
            <span style={{ marginLeft: "8px", color: "white" }}>
              jinpacr13@gmail.com
            </span>
          </span>
          <br />
          <span>
            <FaPhone size={20} style={{ color: "white" }} />
            <span style={{ marginLeft: "8px", color: "white" }}>17957908</span>
          </span>
        </div>

        <div className="social-iconsss">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook
              size={40}
              style={{ color: "white", marginRight: "15px" }}
            />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram
              size={40}
              style={{ color: "white", marginRight: "15px" }}
            />
          </a>
          <a
            href="https://wa.me/your_number"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp
              size={40}
              style={{ color: "white", marginRight: "15px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              size={40}
              style={{ color: "white", marginRight: "15px" }}
            />
          </a>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} Yeshi Jimba. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
