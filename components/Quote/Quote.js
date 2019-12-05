import PropTypes from "prop-types"
import React, {Component} from "react"

import Flourish from "../Flourish/Flourish"

import "./Quote.scss"


class Quote extends Component {
  /*
  * Renders a quote section with BEM styles
  */
  render () {
    const {
      id,
      content,
      attribution,
      modifiers=[],
      flourishes=[],
      children=null,
      style="default"
    } = this.props

    let QuoteClassModifiers = modifiers.map(
      modifier => "quote--" + modifier
    ).join(" ")

    return (
      <aside id={id} className={`quote ${ QuoteClassModifiers } quote--${style}`}>
        {flourishes ? flourishes.map((flourish, i) => <Flourish key={i} category={flourish}/>) : ""}
        <div className="quote__content">
          <blockquote className="quote__text">
            {content ? content.split("\n\n").map((para, i) => <p key={i}>{para.trim()}</p>) : ""}
            {children}
            <cite className="quote__citation">{attribution}</cite>
          </blockquote>
        </div>
      </aside>
    )
  }
}


Quote.propTypes = {
  id: PropTypes.string,
  content: PropTypes.string,
  attribution: PropTypes.string,
  style: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  flourishes: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node
}


export default Quote
