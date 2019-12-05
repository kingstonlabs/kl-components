import PropTypes from "prop-types"
import React, {Component} from "react"

import "./Paragraph.scss"


class Paragraph extends Component {
  /*
  * Renders a paragraph with BEM styling
  */
  render () {
    const {
      modifiers=[],
      ...props
    } = this.props

    let paragraphClassModifiers = modifiers.map(
      modifier => "paragraph--" + modifier
    ).join(" ")

    return (
      <p className={`paragraph ${ paragraphClassModifiers }`} {...props}/>
    )
  }
}


Paragraph.propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.string)
}


export default Paragraph
