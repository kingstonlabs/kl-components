import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"


const FluidImage = ({image, mobileImage, className, ...props}) => {
  if (!!image || !!image.childImageSharp) {
    if (!!mobileImage && !!mobileImage.childImageSharp) {
      // Image with art-directed mobile image for smaller screens
      let {alt="", childImageSharp} = image
      let imageSources =  [
        mobileImage.childImageSharp.fluid,
        {
          ...childImageSharp.fluid,
          media: `(min-width: 800px)`,
        },
      ]
      return (
        <Img {...props} fluid={imageSources} alt={alt} className={className}/>
      )
    } else {
      let {alt="", childImageSharp} = image
      return (
        <Img {...props} fluid={childImageSharp.fluid} alt={alt} className={className}/>
      )
    }
  } else {
    return null
  }
}


FluidImage.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  mobileImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
}


export default FluidImage
