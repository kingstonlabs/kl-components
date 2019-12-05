import PropTypes from "prop-types"
import React, {Component} from "react"

import PreviewCompatibleImage from "../PreviewCompatibleImage"

import "./Diagonal.scss"


class Diagonal extends Component {
  /*
  * Renders a diagonal image
  */
  render () {
    const {
      image=null,
      mobileImage=null
    } = this.props

    return (
      <div className="diagonal">
        {image ?
          <div className="diagonal__image">
            <PreviewCompatibleImage image={image} mobileImage={mobileImage}/>
            <div className="diagonal__fade">
            </div>
          </div> :
          null
        }
        <div className="diagonal__inner">
        </div>
      </div>
    )
  }
}


Diagonal.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mobileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}


export default Diagonal
