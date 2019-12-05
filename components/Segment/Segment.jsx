import PropTypes from "prop-types"
import React, {Component} from "react"

import "./Segment.scss"


class Segment extends Component {
  /*
  * Renders a segment with BEM styles
  *
  * Segments should be used as children of sections.
  */
  render () {
    const {
      modifiers=[],
      contentModifiers=[],
      children=null,
      ...props
    } = this.props

    let segmentClassModifiers = modifiers.map(
      modifier => "segment--" + modifier
    ).join(" ")

    let contentClassModifiers = contentModifiers.map(
      modifier => "segment__content--" + modifier
    ).join(" ")

    return (
      <div className={`segment ${ segmentClassModifiers }`} {...props}>
        <div className={`segment__content ${ contentClassModifiers }`}>
          {children}
        </div>
      </div>
    )
  }
}


Segment.propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.string),
  contentModifiers: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node
}


export default Segment
