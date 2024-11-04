import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../css/Houserent.css";
import bbmockup from '../images/bbmockup.jpeg';
import bhf from '../images/bhf.png';
import boto from '../images/boto.jpeg';
import bwf from '../images/bwf.jpeg';
import paper from "../images/paper.jpeg";
import p1 from "../images/persona1.jpeg";
import p2 from "../images/persona2.jpeg";
import sitemap from "../images/sitemap.jpeg";

const FlowerSell = () => {
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
          <h2>Botanical Bliss: Flower Selling Platform</h2>
          <div className="innerCOntent">
            <h3>Project Overview</h3>
            <p>
              The Product: An online platform designed to simplify the process
              of purchasing and delivering various types of flowers for all
              occasions.
            </p>
            <p> Project Duration: [14th February - 25th May]</p>
            <div className="projectImage">
              <img src={boto} alt="" />
            </div>
            <div className="problem">
              <h3>The Problem</h3>
              <p>
                The Problem: Customers face challenges in finding fresh,
                high-quality flowers online with limited delivery options and
                unclear information on flower care.
              </p>
            </div>
            <div className="goal">
              <h3>The Goal</h3>
              <p>
                The Goal: Develop a user-friendly website that allows users to
                browse flower selections, place orders, and receive care tips,
                while ensuring a seamless shopping experience.
              </p>
            </div>
            <div className="role">
              <h3>My Role</h3>
              <p>
                My Role As the Product Manager for Botanical Bliss, I led the
                project from conception to launch, ensuring we delivered an
                engaging and efficient platform for flower enthusiasts.
              </p>
            </div>
            <div className="Responsibilities">
              <h3>Responsibilities</h3>
              <p>
                User Experience Design: Collaborated with the UX/UI design team
                to create intuitive interfaces that cater to flower buyers’
                unique needs.
              </p>
              <p>
                Customer Support: Established customer support processes to
                address user inquiries and issues effectively. Collected and
                analyzed user feedback to continuously enhance the platform.
              </p>
              <p>
                Feature Development: Defined and prioritized website features
                based on user feedback and business objectives.
              </p>
            </div>
            <div className="target">
              <h3>Target Audience</h3>
              <p>
                A mobile application designed to simplify the process of
                finding, renting, and managing apartments in Bhutan.
              </p>
            </div>

            <div className="research">
              <h3>User Research</h3>
              <p>
                I conducted interviews and created empathy maps to understand
                the target audience. Key user groups identified include young
                professionals and families looking for rental properties. The
                research confirmed that convenience, transparency, and
                accessibility are vital for renters. Users expressed a need for
                detailed property information, flexible viewing options, and
                straightforward communication with landlords.
              </p>
              <h4>Personas</h4>
              <div className="personaImage">
                <img src={p1} alt="" />
                <img src={p2} alt="" />
              </div>
            </div>
            <div className="sitemap">
              <h3>Site Map</h3>
              <div className="sitemapImage">
                <img src={sitemap} alt="" />
              </div>
            </div>
            <div className="paperwireframe">
              <h3>Paper Wireframe</h3>
              <div className="paperwireframeImage">
                <img src={paper} alt="" />
              </div>
            </div>
            <div className="lf">
              <h3>Low-Fidelity Wireframes</h3>
              <div className="lfImage">
                <img src={bwf} alt="" />
              </div>
            </div>

            <div className="us">
              <h3>Usability Study</h3>
              <p>
                I conducted two rounds of usability studies. The first round
                guided initial wireframe designs, while the second focused on a
                high-fidelity prototype, highlighting areas needing refinement.
              </p>

              <h4>Finding 1</h4>
              <ul>
                <li>
                  Users want to filter flower options by type, occasion, and
                  price.
                </li>
                <li>
                  Users need a chat feature to communicate with landlords
                  directly.
                </li>
              </ul>
              <h4>Finding 2</h4>
              <ul>
                <li>Users require clear rental terms and conditions.</li>
                <li>Users want an easy way to schedule apartment viewings.</li>
              </ul>
            </div>
            <div className="mockup">
              <h3>Mockups</h3>
              <div className="mockImage">
                <img src={bbmockup} alt="" />
                <img src={boto} alt="" />
              </div>
            </div>
            <div className="High-Fidelity">
              <h3>High-Fidelity Prototype</h3>
              <div className="highImage">
                <img src={bhf} alt="" />
              </div>
            </div>
            <div className="Accessibility">
              <h3>Accessibility</h3>
              <ul>
                <li>
                  Provided options for users with disabilities to easily access
                  product information.
                </li>
                <li>Ensured navigation was straightforward and intuitive.</li>
                <li>
                  Included detailed property descriptions and high-quality
                  images to aid decision-making.
                </li>
              </ul>
            </div>
            <div className="Takeaways">
              <h3>Takeaways</h3>
              <ul>
                <li>
                  Impact: The app significantly improves users' ability to find
                  and rent apartments, demonstrating a commitment to meeting
                  customer needs.
                </li>
                <li>
                  Initial design concepts are just starting points; continuous
                  user feedback and usability studies are essential for refining
                  the platform.
                </li>
              </ul>
            </div>
            <div className="NextSteps">
              <h3>Next Steps</h3>
              <ul>
                <li>
                  Conduct additional usability studies to confirm that
                  identified pain points have been resolved.
                </li>
                <li>
                  Perform further user research to uncover new trends and
                  preferences in the floral market.
                </li>
                <li>
                  Collaborate with developers to initiate back-end integration
                  for the platform.
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

export default FlowerSell;
