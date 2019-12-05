import React from "react"
import { Link } from "gatsby"

import logo from "../../img/text-logo-white.svg"
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share"
import "./Footer.scss"


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__main">
          <div className="social-links">
            <a href="https://www.facebook.com/kingstonlabs/" aria-label="Kingston Labs on Facebook" arget="_blank" rel="noopener noreferrer">
              <FacebookIcon size={64} iconBgStyle={{fill: "none"}}/>
            </a>
            <a href="https://twitter.com/kingstonlabs" aria-label="Kingston Labs on Twitter" target="_blank" rel="noopener noreferrer">
              <TwitterIcon size={64} iconBgStyle={{fill: "none"}}/>
            </a>
            <a href="https://www.linkedin.com/company/kingston-labs/" aria-label="Kingston Labs on LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon size={64} iconBgStyle={{fill: "none"}}/>
            </a>
          </div>
          <Link className="footer__logo-link" title="Home" to="/">
            <img src={logo} className="footer__logo" alt="Kingston Labs" height="30"/>
          </Link>
        </div>
        <div className="footer__subfooter">
          <nav className="sub-nav">
            <ul className="sub-nav__menu">
              <li className="sub-nav__menu-item">
                <Link to="/privacy" className="sub-nav__link">
                  Privacy
                </Link>
              </li>
              <li className="sub-nav__menu-item">
                <Link to="/site-terms" className="sub-nav__link">
                  Site Terms
                </Link>
              </li>
            </ul>
          </nav>
          <span>
            Kingston Labs &copy; {(new Date().getFullYear())}
          </span>
        </div>
      </footer>
    )
  }
}


export default Footer
