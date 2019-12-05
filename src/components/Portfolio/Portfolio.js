import PropTypes from "prop-types"
import React, {Component} from "react"

import Flourish from "../Flourish/Flourish"
import Heading from "../Heading/Heading"

import PortfolioSegment from "./PortfolioSegment"

import "./Portfolio.scss"


class Portfolio extends Component {
  /*
  * Renders a portfolio section
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
    let portfolioClassModifiers = styleModifiers.map(
      modifier => "portfolio--" + modifier
    ).join(" ")
    let visibleSegments = segments.filter(segment => segment.visible !== false)

    return (
      <section id={id} className={`portfolio ${ portfolioClassModifiers }`}>
        {flourishes ? flourishes.map((flourish, i) => <Flourish key={i} category={flourish}/>) : ""}
        <div className="portfolio__header">
          {heading ? <Heading level={1} modifiers={byline ? ["leader"] : ["major"]}>{heading}</Heading> : ""}
          {byline ? <Heading level={0} modifiers={["major"]}>{byline}</Heading> : ""}
          {content ? content.split("\n\n").map((para, i) => <p key={i}>{para}</p>) : ""}
          {children}
        </div>
        <div className="portfolio__content">
          {
            visibleSegments.map((segment, index) => (
              <PortfolioSegment key={index} {...segment}/>
            ))
          }
          <PortfolioSegment
            heading="Interested in working with us?"
            content="Send us a message to find out how we could help with your project"
            isInfoBox={true}
          />
        </div>
      </section>
    )
  }
}


Portfolio.propTypes = {
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


export default Portfolio
