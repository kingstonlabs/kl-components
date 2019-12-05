import PropTypes from "prop-types"
import React, {Component} from "react"

import Flourish from "../Flourish/Flourish"
import Heading from "../Heading/Heading"

import "./Columns.scss"


class Columns extends Component {
  /*
  * Renders a columns section
  */
  render () {
    const {
      id,
      heading=null,
      byline=null,
      content=null,
      modifiers=[],
      flourishes=[],
      children=null,
      style="default"
    } = this.props

    let styleModifiers = modifiers
    styleModifiers.push(style)
    let columnsClassModifiers = styleModifiers.map(
      modifier => "columns--" + modifier
    ).join(" ")

    return (
      <section id={id} className={`columns ${ columnsClassModifiers }`}>
        {flourishes ? flourishes.map((flourish, i) => <Flourish key={i} category={flourish}/>) : ""}
        <div className="columns__header">
          {heading ? <Heading level={1} modifiers={byline ? ["leader"] : ["major"]}>{heading}</Heading> : ""}
          {byline ? <Heading level={0} modifiers={["major"]}>{byline}</Heading> : ""}
        </div>
        <div className="columns__content">
          {content ? content.split("\n\n").map((para, i) => <p key={i}>{para}</p>) : ""}
          {children}
        </div>
      </section>
    )
  }
}


Columns.propTypes = {
  id: PropTypes.string,
  heading: PropTypes.string,
  byline: PropTypes.string,
  content: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  flourishes: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node,
  style: PropTypes.string
}


export default Columns
