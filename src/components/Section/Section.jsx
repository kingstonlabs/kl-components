import PropTypes from "prop-types"
import React, {Component} from "react"

import "./Section.scss"


class Section extends Component {
  /*
  * Renders a section with BEM styles
  */
  render () {
    const {
      modifiers=[],
      children=null,
      image=null,
      style={},
      ...props
    } = this.props

    let sectionClassModifiers = modifiers.map(
      modifier => "section--" + modifier
    ).join(" ")

    if (image) {
      style.backgroundImage = `url(${
        image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`
    }

    return (
      <section {...props} style={style} className={`section ${ sectionClassModifiers }`}>
        <div className="section__content">
          {children}
        </div>
      </section>
    )
  }
}


Section.propTypes = {
  id: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.node,
  style: PropTypes.object
}


export default Section
