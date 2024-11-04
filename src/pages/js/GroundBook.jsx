import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../css/Houserent.css";
import gcitgb from '../images/gcitgb.jpeg';
import gfl from '../images/gfl.jpeg';
import glf from '../images/glf.jpeg';

const GroundBook = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <div className="houserentContainer">
        <div className="houserentContentWrapper">
          <div className="button">
            <a href="/Landing">
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </a>
          </div>
          <h2>GCIT Ground Booking</h2>
          <div className="innerCOntent">
            <h3>Project Overview</h3>
            <p>
              The Product: A website designed to streamline the process of
              booking the GCIT ground for sports activities, events, and
              gatherings at Gyalpozhing College of Information Technology.
            </p>
            <p> Project Duration: [14th February - 25th May]</p>
            <div className="projectImage">
              <img src={gcitgb} alt="" />
            </div>
            <div className="problem">
              <h3>The Problem</h3>
              <p>
                The Problem: Students, faculty, and community members face
                challenges in booking the GCIT ground due to unclear procedures,
                limited information about availability, and lack of a
                centralized booking platform.
              </p>
            </div>
            <div className="goal">
              <h3>The Goal</h3>
              <p>
                The Goal: Create a website that allows users to view ground
                availability, book time slots, and communicate with ground
                administrators, all while providing a seamless online
                experience.
              </p>
            </div>
            <div className="role">
              <h3>My Role</h3>
              <p>
                As the Product Manager for the GCIT Ground Booking website, I
                led the project from conception to launch, ensuring we delivered
                a user-friendly and efficient platform for booking the ground
                online.
              </p>
            </div>
            <div className="Responsibilities">
              <h3>Responsibilities</h3>
              <p>
                User Experience Design: Worked with the UX/UI design team to
                develop an intuitive layout and interface that meets the needs
                of students, faculty, and community users.
              </p>
              <p>
                Customer Support: Established an online support system to
                address user inquiries and resolve issues. Gathered and analyzed
                user feedback to continuously improve the website.
              </p>
              <p>
                Feature Development: Defined and prioritized website features
                based on user feedback and organizational objectives to ensure
                functionality and ease of use.
              </p>
            </div>
            <div className="target">
              <h3>Target Audience</h3>
              <p>
                A web-based platform targeting students, faculty, and community
                members to simplify the booking process for the GCIT ground.
              </p>
            </div>

            <div className="researchll">
              <h3>User Research</h3>
              <p>
                Conducted interviews and created empathy maps to understand the
                needs of our target audience. Key user groups included students,
                event organizers, and faculty members. Research showed that
                users wanted easy access to information on ground availability,
                flexible scheduling options, and straightforward communication
                with the ground management team.
              </p>
              <h4>Personas</h4>
              <p>Created personas to represent our key user groups, such as:</p>
              <p>Student: Seeks to reserve the ground for sports practices.</p>
              <p>
                Event Organizer: Needs to book the ground for community or
                college-wide events.
              </p>
              <p>
                Faculty Member: Requires the ground for academic or
                extracurricular activities.
              </p>
            </div>
            <div className="lf">
              <h3>Low-Fidelity Wireframes</h3>
              <div className="lfImage">
                <img src={glf} alt="" />
              </div>
            </div>

            <div className="us">
              <h3>Usability Study</h3>
              <p>
                Conducted two rounds of usability studies to refine the website
                design. The first round focused on initial wireframe layouts,
                while the second round evaluated a high-fidelity prototype.
              </p>

              <h4>Finding 1</h4>
              <ul>
                <li>
                  Finding 1: Users wanted filtering options for available dates,
                  time slots, and types of events (e.g., sports, community
                  events).
                </li>
              </ul>
              <h4>Finding 2</h4>
              <ul>
                <li>
                  Finding 2: Users requested a messaging feature to directly
                  communicate with the ground management team.
                </li>
              </ul>
              <h4>Finding 3</h4>
              <ul>
                <li>
                  Finding 3: Users needed clear booking terms and conditions and
                  an option to view and manage their booking history.
                </li>
              </ul>
            </div>
            <div className="High-Fidelity">
              <h3>High-Fidelity Prototype</h3>
              <div className="highImage">
                <img src={gfl} alt="" />
              </div>
            </div>
            <div className="Accessibility">
              <h3>Accessibility</h3>
              <ul>
                <li>
                  Inclusive Design: Ensured the website meets accessibility
                  standards, providing features like keyboard navigation and
                  screen reader compatibility.
                </li>
                <li>
                  Simple Navigation: Designed a clear, intuitive navigation
                  system to help users easily find information.
                </li>
                <li>
                  Detailed Information: Included thorough descriptions of the
                  ground, terms of use, and booking policies to support informed
                  decision-making.
                </li>
              </ul>
            </div>
            <div className="Takeaways">
              <h3>Takeaways</h3>
              <ul>
                <li>
                  Impact: The website provides a centralized, user-friendly
                  platform for booking and managing ground reservations, greatly
                  improving access and convenience for users.
                </li>
                <li>
                  What I Learned: Early design ideas are a foundation, but user
                  feedback and usability testing are essential to refine the
                  user experience.
                </li>
              </ul>
            </div>
            <div className="NextSteps">
              <h3>Next Steps</h3>
              <ul>
                <li>
                  Additional Usability Studies: Conduct further studies to
                  ensure that user pain points have been addressed and the
                  website meets user needs.
                </li>
                <li>
                  Expanded User Research: Continue researching user preferences
                  and trends to identify potential improvements in the booking
                  experience.
                </li>
                <li>
                  Collaboration with Developers: Work closely with the
                  development team to build and test the back-end functionality
                  for real-time booking and notifications.
                </li>
              </ul>
            </div>
          </div>
          <div className="scroll-up" onClick={scrollToTop}>
            <span>↑</span>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>
            &copy; {new Date().getFullYear()} Yeshi Jimba. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default GroundBook;
