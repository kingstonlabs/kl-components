import PropTypes from "prop-types"
import React, {Component} from "react"

import "./LinkScroller.scss"


class LinkScroller extends Component {
  /*
  * Adds link scrolling functionality to children
  *
  * Clicking a hash link will animate scrolling to that link
  */

  componentDidMount () {
    // Add smooth scroll to hash links
    if (typeof window !== "undefined") {
      const SmoothScroll = require("smooth-scroll")
      new SmoothScroll(
        "a[href*=\"#\"]",
        {
          speed: 300,
          easing: "easeInOutCubic",
        }
      )
    }
  }

  render () {
    return (
      <div className="link-scroller">
        {this.props.children}
      </div>
    )
  }
}


LinkScroller.propTypes = {
  children: PropTypes.node,
}


export default LinkScroller
