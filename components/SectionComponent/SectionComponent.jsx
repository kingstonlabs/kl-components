import PropTypes from "prop-types"
import React, {Component} from "react"

import ClientLogos from "../ClientLogos/ClientLogos"
import Columns from "../Columns/Columns"
import ContactForm from "../ContactForm/ContactForm"
import Grid from "../Grid/Grid"
import Hero from "../Hero/Hero"
import Portfolio from "../Portfolio/Portfolio"
import SideImage from "../SideImage/SideImage"
import Quote from "../Quote/Quote"


class SectionComponent extends Component {
  /*
  * Renders a section of the relevant type
  */
  render () {
    const {
      layout,
      ...props
    } = this.props

    switch(layout) {
    case "hero":
      return <Hero {...props}/>
    case "grid":
      return <Grid {...props}/>
    case "portfolio":
      return <Portfolio {...props}/>
    case "columns":
      return <Columns {...props}/>
    case "side image":
      return <SideImage {...props}/>
    case "quote":
      return <Quote {...props}/>
    case "contact form":
      return <ContactForm {...props}/>
    case "client logos":
      return <ClientLogos {...props}/>
    default:
      return ""
    }
  }
}


SectionComponent.propTypes = {
  layout: PropTypes.oneOf([
    "hero",
    "grid",
    "portfolio",
    "columns",
    "side image",
    "quote",
    "contact form",
    "client logos"
  ]),
}


export default SectionComponent
