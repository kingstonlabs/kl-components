import PropTypes from "prop-types"
import React, {Component} from "react"

import "./Flourish.scss"


class Flourish extends Component {
  /*
  * Renders a flourish
  */
  render () {
    const {
      category="default"
    } = this.props

    return (
      <div className={`flourish flourish--${category}`}></div>
    )
  }
}


Flourish.propTypes = {
  category: PropTypes.string
}


export default Flourish
