import React from "react"
import { Link } from "gatsby"

import logo from "../../img/text-logo-white.svg"
import "./Navbar.scss"


class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: "",
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState({active: !this.state.active})
  }

  render() {
    return (
      <nav
        className="navbar"
        aria-label="main-navigation"
      >
        <div className="navbar__inner">
          <div className="navbar__main">
            <div className="navbar__brand">
              <Link to="/" className="navbar__logo-link" title="Logo">
                <img src={logo} className="navbar__logo" alt="Kingston Labs" height="40"/>
              </Link>
            </div>

            {/* Hamburger menu */}
            <div
              className={`navbar__burger navbar__burger--${(this.state.active) ? "active" : "inactive"}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span/>
              <span/>
              <span/>
            </div>
          </div>

          <div className={`navbar__menu-wrapper navbar__menu-wrapper--${(this.state.active) ? "active" : "inactive"}`}>
            <ul id="navMenu" className={`navbar__menu navbar__menu--${(this.state.active) ? "active" : "inactive"}`}>
              <li className="navbar__item navbar__item--sidebar-only">
                <Link className="navbar__link" activeClassName="navbar__link--active" to="/">
                  Home
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" activeClassName="navbar__link--active" to="/about">
                  About
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" activeClassName="navbar__link--active" to="/portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link" activeClassName="navbar__link--active" partiallyActive={true} to="/blog">
                  Blog
                </Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__cta" activeClassName="navbar__cta--active" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}


export default Navbar
