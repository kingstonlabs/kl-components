import PropTypes from "prop-types"
import React, {Component} from "react"

import "./Heading.scss"


class Heading extends Component {
  /*
  * Renders a heading of a given level - level 0 renders a span tag
  */
  render () {
    const {
      level=1,
      modifiers=[],
      children,
      ...props
    } = this.props
    const classModifiers = modifiers.map(
      modifier => "heading--" + modifier
    ).join(" ")
    const Tag = (level == "0") ? "span" : "h" + level

    return (
      <Tag {...props} className={`heading ${ classModifiers }`}>{children}</Tag>
    )
  }
}


Heading.propTypes = {
  level: PropTypes.number,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node
}


export default Heading
