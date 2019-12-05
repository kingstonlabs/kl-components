import PropTypes from "prop-types"
import React, {Component} from "react"
import {uniqueId} from "lodash"

import scrollToElement from "../../utils/PageScroller"

import "./PageDownControl.scss"
import downArrow from "../../img/icons/down_arrow.png"


class PageDownControl extends Component {
  /*
  * A page down control, showing a down arrow which scrolls to an element
  *
  * If a pageDownHash is supplied, the page will scroll to that element,
  * otherwise it will scroll down to itself.
  */
  constructor() {
    super()
    this.id = uniqueId("pd-")
    this.pageDown = this.pageDown.bind(this)
  }

  pageDown(e) {
    const {pageDownHash=this.id} = this.props
    const target = document.getElementById(pageDownHash)

    e.preventDefault()

    scrollToElement(target)
  }

  render () {
    const {pageDownHash=this.id} = this.props

    return (
      <div id={this.id} className="page-down-control">
        <a
          className="page-down-control__button"
          onClick={this.pageDown} href={`#${ pageDownHash }`}
        >
          <img className="page-down-control__icon" src={downArrow} alt="page down button"/>
        </a>
      </div>
    )
  }
}


PageDownControl.propTypes = {
  pageDownHash: PropTypes.string
}


export default PageDownControl
