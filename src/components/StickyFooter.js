import React from "react";
import "./Sticky.css";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <section class="social-media">
      <div class="social-media-wrap">
        <div class="social-icons">
          <Link
            class="social-icon-link facebook"
            to="/"
            target="_blank"
            aria-label="Facebook"
          >
            <i class="fab fa-facebook-f" />
          </Link>
          <Link
            class="social-icon-link instagram"
            to="/"
            target="_blank"
            aria-label="Instagram"
          >
            <i class="fab fa-instagram" />
          </Link>
          <Link
            class="social-icon-link youtube"
            to="/"
            target="_blank"
            aria-label="Youtube"
          >
            <i class="fab fa-youtube" />
          </Link>
          <Link
            class="social-icon-link twitter"
            to="/"
            target="_blank"
            aria-label="Twitter"
          >
            <i class="fab fa-twitter" />
          </Link>
          <Link
            class="social-icon-link twitter"
            to="/https://www.facebook.com/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <i class="fab fa-linkedin" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Footer;
