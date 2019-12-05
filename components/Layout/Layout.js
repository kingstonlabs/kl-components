import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"

import Footer from "../Footer/Footer"
import LinkScroller from "../LinkScroller/LinkScroller"
import Navbar from "../Navbar/Navbar"

import "../../styles/main.scss"

import useSiteMetadata from "../SiteMetadata"
import "./Layout.scss"


const TemplateWrapper = ({ children }) => {
  const { title, description, siteUrl, fbAppId } = useSiteMetadata()

  return (
    <LinkScroller>
      <div className="layout">
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta property="fb:app_id" content={fbAppId}/>
          <meta name="description" content={description}/>
          <meta property="og:description" content={description}/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content={title}/>
          <meta property="og:url" content={`${siteUrl}/`}/>
          <meta property="og:image" content={`${siteUrl}/img/og-image.jpg`}/>
          <meta property="og:image:height" content="1810"/>
          <meta property="og:image:width" content="2715"/>

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/img/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/favicon-16x16.png"
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href="/img/safari-pinned-tab.svg"
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <link rel="preconnect dns-prefetch" href="https://fonts.googleapis.com" crossOrigin/>
          <link rel="preconnect dns-prefetch" href="https://fonts.gstatic.com" crossOrigin/>
          <link rel="preconnect dns-prefetch" href="https://connect.facebook.net" crossOrigin/>
          <link rel="preconnect dns-prefetch" href="https://www.facebook.com" crossOrigin/>
        </Helmet>
        <Navbar />
        <div className="content">{children}</div>
        <Footer />
      </div>
    </LinkScroller>
  )
}


TemplateWrapper.propTypes = {
  children: PropTypes.node
}


export default TemplateWrapper
