import PropTypes from "prop-types"
import React, {Component} from "react"

import Heading from "../../components/Heading/Heading"

import "./PageTitle.scss"


class PageTitle extends Component {
  /*
  * Renders a page title
  */
  render () {
    const {
      modifiers=[],
      children=null,
      style={},
      ...props
    } = this.props

    let pagetitleClassModifiers = modifiers.map(
      modifier => "page-title--" + modifier
    ).join(" ")

    return (
      <div {...props} style={style} className={`page-title ${ pagetitleClassModifiers }`}>
        <Heading level={1} modifiers={["major", "centred"]}>{children}</Heading>
      </div>
    )
  }
}


PageTitle.propTypes = {
  id: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  style: PropTypes.object
}


export default PageTitle
