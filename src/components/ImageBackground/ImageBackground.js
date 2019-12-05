import PropTypes from "prop-types"
import React, {Component} from "react"

import PreviewCompatibleImage from "../PreviewCompatibleImage"

import "./ImageBackground.scss"


class ImageBackground extends Component {
  /*
  * Renders an image background
  */
  render () {
    const {
      image=null,
      mobileImage=null
    } = this.props

    return (
      <div className="image-background">
        {image ? <PreviewCompatibleImage image={image} mobileImage={mobileImage}/>:null}
      </div>
    )
  }
}


ImageBackground.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  mobileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}


export default ImageBackground
