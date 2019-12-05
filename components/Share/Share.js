import React from "react"
import PropTypes from "prop-types"
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share"
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "react-share"

import "./Share.scss"

const Share = ({
  twitterHandle,
  url,
  title,
  tags,
  small=false,
  greyscale=false,
}) => (
  <div className={`post-social ${small ? "post-social--small": ""}`}>
    <FacebookShareButton url={url}>
      <FacebookIcon size={small ? 32 : 64 } iconBgStyle={greyscale ? {fill: "#444444"} : null} round={true}/>
    </FacebookShareButton>

    <TwitterShareButton
      url={url}
      title={title}
      via={twitterHandle}
      hashtags={tags}
    >
      <TwitterIcon size={small ? 32 : 64 } iconBgStyle={greyscale ? {fill: "#444444"} : null} round={true}/>
    </TwitterShareButton>

    <LinkedinShareButton url={url} title={title}>
      <LinkedinIcon size={small ? 32 : 64 } iconBgStyle={greyscale ? {fill: "#444444"} : null} round={true}/>
    </LinkedinShareButton>

    <WhatsappShareButton url={url} title={title}>
      <WhatsappIcon size={small ? 32 : 64 } iconBgStyle={greyscale ? {fill: "#444444"} : null} round={true}/>
    </WhatsappShareButton>
  </div>
)

Share.propTypes = {
  twitterHandle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  small: PropTypes.bool,
  greyscale: PropTypes.bool,
}

Share.defaultProps = {
  tags: [],
}

export default Share

