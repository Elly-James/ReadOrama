import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebook, 
  faTwitter, 
  faLinkedin, 
  faInstagram 
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          {/* For Business Section */}
          <div className="sb_footer-links-div">
            <h4>Collaborators</h4>
            <a href="Heily"><p>Heily</p></a>
            <a href="Hollidah"><p>Hollidah</p></a>
            <a href="Hydan"><p>Hydan</p></a>
            <a href="Edith"><p>Edith</p></a>
            <a href="Elly"><p>Elly</p></a>
            

          </div>

          
          {/* Resources Section */}
          <div className="sb_footer-links-div">
            <h4>Resources</h4>
            <a href="/resource"><p>Shipping</p></a>
            <a href="/resource"><p>Testimonials</p></a>
            <a href="/resource"><p>Returns</p></a>
            <a href="/resource"><p>Order Status</p></a>
          </div>

          {/* Partners Section */}
          <div className="sb_footer-links-div">
            <h4>Partners</h4>
            <a href="https://www.somanami.co.ke/shop" target="_blank"><p>Somanami</p></a>
            <a href="https://scholar.google.com/" target="_blank"><p>Google Scholar</p></a>
            <a href="https://pubmed.ncbi.nlm.nih.gov/" target="_blank"><p>PubMed</p></a>
            <a href="https://openlibrary.org/" target="_blank"><p>Open Library</p></a>
            <a href="https://forum.mhut.org/"  target="_blank"><p>Library Genesis</p></a>
          </div>

          {/* Company Section */}
          <div className="sb_footer-links-div">
            <h4>Company</h4>
            <a href="/about"><p>About Us</p></a>
            <a href="/press"><p>Press</p></a>
            <a href="/career"><p>Career</p></a>
            <a href="/contact"><p>Contact Us</p></a>
          </div>

          {/* Social Media Section */}
          <div className="sb_footer-links-div">
            <h4>Follow Us On</h4>
            <div className="socialmedia">
              <a href="#"><FontAwesomeIcon icon={faFacebook} className="social-icon" /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} className="social-icon" /></a>
              <a href="#"><FontAwesomeIcon icon={faLinkedin} className="social-icon" /></a>
              <a href="https://www.instagram.com/"  target="_blank"><FontAwesomeIcon icon={faInstagram} className="social-icon" /></a>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} ReadOrama. All right reserved.</p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;