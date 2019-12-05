import PropTypes from "prop-types"
import React, {Component} from "react"

import Flourish from "../Flourish/Flourish"
import Heading from "../Heading/Heading"
import PreviewCompatibleImage from "../PreviewCompatibleImage"

import "./Grid.scss"


class Grid extends Component {
  /*
  * Renders a grid section
  */
  render () {
    const {
      id,
      heading=null,
      byline=null,
      content=null,
      modifiers=[],
      flourishes=[],
      segments=[],
      style="default",
      children=null,
    } = this.props

    let styleModifiers = modifiers
    styleModifiers.push(style)
    let gridClassModifiers = styleModifiers.map(
      modifier => "grid--" + modifier
    ).join(" ")

    return (
      <section id={id} className={`grid ${ gridClassModifiers }`}>
        {flourishes ? flourishes.map((flourish, i) => <Flourish key={i} category={flourish}/>) : ""}
        <div className="grid__header">
          {heading ? <Heading level={1} modifiers={byline ? ["leader"] : ["major"]}>{heading}</Heading> : ""}
          {byline ? <Heading level={0} modifiers={["major"]}>{byline}</Heading> : ""}
          {content ? content.split("\n\n").map((para, i) => <p key={i}>{para}</p>) : ""}
          {children}
        </div>
        <div className="grid__content">
          {
            segments.filter(segment => segment.visible !== false).map((segment, index) => (
              <div key={index} className="grid-segment grid-segment--third">
                <div className="grid-segment__content">
                  <div className={`grid-segment__image grid-segment__image--${segment.imageStyle}`}>
                    <PreviewCompatibleImage image={segment.image}/>
                  </div>
                  <Heading level={2} modifiers={["major"]}>{segment.heading}</Heading>
                  {segment.subheading ? <Heading level={0} modifiers={["lower-minor"]}>{segment.subheading }</Heading> : ""}
                  {segment.content ? segment.content.split("\n\n").map((para, i) => <p key={i}>{para}</p>) : ""}
                </div>
                <div className="grid-segment__footer">
                  {segment.link && segment.link.text ?
                    <a className={`link link--${segment.link.style}`} href={segment.link.location}>{segment.link.text}</a> :
                    ""
                  }
                </div>
              </div>
            ))
          }
        </div>
      </section>
    )
  }
}


Grid.propTypes = {
  id: PropTypes.string,
  heading: PropTypes.string,
  byline: PropTypes.string,
  content: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  flourishes: PropTypes.arrayOf(PropTypes.string),
  segments: PropTypes.arrayOf(PropTypes.object),
  style: PropTypes.string,
  children: PropTypes.node,
}


export default Grid
