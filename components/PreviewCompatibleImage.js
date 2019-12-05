import React from "react"
import PropTypes from "prop-types"

import FluidImage from "./SmartImage/FluidImage"
import BackgroundImage from "./SmartImage/BackgroundImage"


const PreviewCompatibleImage = ({image, mobileImage, className, isBackground=false, ...props}) => {
  if (!image) return null

  if (typeof image === "string") {
    // Preview image from string
    return (
      <div className={className}>
        <img {...props} src={image} alt="" style={{"maxWidth": "100%"}}/>
      </div>
    )
  } else if (isBackground) {
    return <BackgroundImage image={image} mobileImage={mobileImage} className={className} {...props}/>
  } else {
    return <FluidImage image={image} mobileImage={mobileImage} className={className} {...props}/>
  }
}

PreviewCompatibleImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  mobileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
  isBackground: PropTypes.bool,
}

export default PreviewCompatibleImage
