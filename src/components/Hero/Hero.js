import PropTypes from "prop-types"
import React, {Component} from "react"

import Diagonal from "../Diagonal/Diagonal"
import Flourish from "../Flourish/Flourish"
import Heading from "../Heading/Heading"
import ImageBackground from "../ImageBackground/ImageBackground"

import "./Hero.scss"


class Hero extends Component {
  /*
  * Renders a hero section
  */
  render () {
    const {
      id,
      heading=null,
      byline=null,
      content=null,
      modifiers=[],
      flourishes=[],
      image=null,
      mobileImage=null,
      link=null,
      diagonal=false,
      children=null,
    } = this.props

    let heroClassModifiers = modifiers.map(
      modifier => "hero--" + modifier
    ).join(" ")

    if (diagonal) {
      heroClassModifiers += " hero--diagonal"
    } else {
      heroClassModifiers += " hero--bg-image"
    }

    let hasExternalLink = link && link.location.includes("://")
    let linkTarget = hasExternalLink ? "_blank" : null
    let linkRel = hasExternalLink ? "noopener" : null

    return (
      <section id={id} className={`hero ${heroClassModifiers}`}>
        {flourishes ? flourishes.map((flourish, i) => <Flourish key={i} category={flourish}/>) : ""}
        <div className="hero__content">
          {diagonal ? <Diagonal image={image} mobileImage={mobileImage}/> : <ImageBackground image={image} mobileImage={mobileImage}/>}
          <div className="hero__text">
            {heading ? <Heading level={1} modifiers={byline ? ["leader"] : ["major"]}>{heading}</Heading> : ""}
            {byline ? <Heading level={0} modifiers={["hero-byline"]}>{byline}</Heading> : ""}
            <div className="hero__caption">{content ? content.split("\n\n").map((para, i) => <p key={i}>{para}</p>) : ""}</div>
            {children}
            {link && link.text ?
              <a className={`link link--${link.style}`} href={link.location} target={linkTarget} rel={linkRel}>{link.text}</a>
              : ""
            }
          </div>
        </div>
      </section>
    )
  }
}


Hero.propTypes = {
  id: PropTypes.string,
  heading: PropTypes.string,
  byline: PropTypes.string,
  content: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  flourishes: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mobileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  link: PropTypes.shape({
    text: PropTypes.string,
    location: PropTypes.string,
    style: PropTypes.string
  }),
  diagonal: PropTypes.bool,
  children: PropTypes.node
}


export default Hero
