import PropTypes from "prop-types"
import React, {Component} from "react"

import Flourish from "../Flourish/Flourish"
import Heading from "../Heading/Heading"
import PreviewCompatibleImage from "../PreviewCompatibleImage"

import "./SideImage.scss"


class SideImage extends Component {
  /*
  * Renders a side image
  */
  render () {
    const {
      id,
      heading=null,
      byline=null,
      date=null,
      content=null,
      modifiers=[],
      flourishes=[],
      image=null,
      link=null,
      style="default",
      children=null,
    } = this.props

    let styleModifiers = modifiers
    styleModifiers.push(style)
    let sideImageClassModifiers = styleModifiers.map(
      modifier => "side-image--" + modifier
    ).join(" ")
    let hasExternalLink = link && link.location.includes("://")
    let linkTarget = hasExternalLink ? "_blank" : null
    let linkRel = hasExternalLink ? "noopener" : null

    return (
      <section id={id} className={`side-image ${ sideImageClassModifiers }`}>
        {flourishes ? flourishes.map((flourish, i) => <Flourish key={i} category={flourish}/>) : ""}
        <div className="side-image__content">
          <div className="side-image__text">
            <div className="side-image__text-inner">
              {heading ? <Heading level={1} modifiers={byline ? ["leader"] : ["major"]}>{heading}</Heading> : ""}
              {byline ? <Heading level={0} modifiers={["major"]}>{byline}</Heading> : ""}
              {date ? <Heading level={0} modifiers={["date"]}>{date}</Heading> : ""}
              {content ? content.split("\n\n").map((para, i) => <p key={i}>{para}</p>) : ""}
              {children}
              {link && link.text ?
                <a className="link link--major" href={link.location} target={linkTarget} rel={linkRel}>{link.text}</a>
                : ""
              }
            </div>
          </div>
          <div className="side-image__image">
            <div className="side-image__image-inner">
              <PreviewCompatibleImage image={image}/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}


SideImage.propTypes = {
  id: PropTypes.string,
  heading: PropTypes.string,
  byline: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  flourishes: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  link: PropTypes.shape({
    text: PropTypes.string,
    location: PropTypes.string
  }),
  style: PropTypes.string,
  children: PropTypes.node,
}


export default SideImage
