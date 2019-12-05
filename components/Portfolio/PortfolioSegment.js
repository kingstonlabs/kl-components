import PropTypes from "prop-types"
import React, {Component} from "react"

import Heading from "../Heading/Heading"
import PreviewCompatibleImage from "../PreviewCompatibleImage"

import "./PortfolioSegment.scss"


class PortfolioSegment extends Component {
  /*
  * Renders a portfolio segment
  */
  constructor () {
    super()
    this.el = React.createRef()
    this.titleEl = React.createRef()
    this.textEl = React.createRef()
    this.state = {
      active: false,
      fullHeight: "",
      titleHeight: ""
    }

    this.toggle = this.toggle.bind(this)
    this.activate = this.activate.bind(this)
    this.deactivate = this.deactivate.bind(this)
  }

  componentDidMount () {
    this.setState({
      fullHeight: this.el.current.offsetHeight,
      titleHeight: this.titleEl.current.clientHeight,
      active: false
    })
  }

  deactivate () {
    this.setState({active: false})
  }

  activate () {
    this.setState({active: true})
  }

  toggle () {
    this.setState({active: !this.state.active})
  }

  render () {
    const {
      heading=null,
      content=null,
      image=null,
      isInfoBox
    } = this.props

    return (
      <div
        className="portfolio-segment"
        onMouseEnter={this.activate}
        onMouseLeave={this.deactivate}
        onClick={this.toggle}
        ref={this.el}
        style={{height: this.state.fullHeight}}
      >
        <div className="portfolio-segment__content">
          <div className="portfolio-segment__image">
            <PreviewCompatibleImage image={image} style={{position: "absolute"}} isBackground={true}/>
          </div>
          <div
            className={`portfolio-segment__caption ${isInfoBox ? "portfolio-segment__caption--info-box" : ""}`}
            style={
              this.state.active || isInfoBox ?
                {height: this.state.fullHeight} :
                {height: this.state.titleHeight}
            }
          >
            <div className="portfolio-segment__title" ref={this.titleEl}>
              <Heading level={2} modifiers={["major", "no-margin"]}>{heading}</Heading>
            </div>
            <div className="portfolio-segment__text" ref={this.textEl}>
              {content ? content.split("\n\n").map((para, i) => <p key={i}>{para}</p>) : ""}
            </div>
          </div>
        </div>
      </div>
    )
  }
}


PortfolioSegment.propTypes = {
  id: PropTypes.string,
  heading: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.object,
  isInfoBox: PropTypes.bool,
}


export default PortfolioSegment
