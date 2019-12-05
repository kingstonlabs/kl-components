import React from "react"
import PropTypes from "prop-types"

import "./BackgroundImage.scss"


const BackgroundImage = ({image, className}) => {
  if (!!image || !!image.childImageSharp) {
    let {alt="", childImageSharp} = image
    return (
      <div className="bg-image">
        <img src={childImageSharp.fluid.src} alt={alt} className={className}/>
      </div>
    )
  } else {
    return null
  }
}


BackgroundImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  className: PropTypes.string,
}


export default BackgroundImage
