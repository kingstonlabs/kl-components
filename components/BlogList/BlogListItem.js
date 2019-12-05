import React from "react"
import PropTypes from "prop-types"

import Heading from "../Heading/Heading"
import PreviewCompatibleImage from "../PreviewCompatibleImage"


class BlogListItem extends React.Component {
  render() {
    const { title, subtitle, date, summary, image, slug } = this.props

    return (
      <li className="blog-list-item">
        <div className="blog-list-item__text">
          <div className="blog-list-item__text-inner">
            {title ? <Heading level={2} modifiers={subtitle ? ["leader"] : ["major"]}>{title}</Heading> : ""}
            {subtitle ? <Heading level={0} modifiers={["major"]}>{subtitle}</Heading> : ""}
            {date ? <Heading level={0} modifiers={["date"]}>{date}</Heading> : ""}
            {summary ? summary.split("\n\n").map((para, i) => <p key={i}>{para}</p>) : ""}
            <a className="link link--major" href={slug}>Read more</a>
          </div>
        </div>
        <div className="blog-list-item__image">
          <div className="blog-list-item__image-inner">
            <a href={slug}>
              <PreviewCompatibleImage image={image}/>
            </a>
          </div>
        </div>
      </li>
    )
  }
}

BlogListItem.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  summary: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  slug: PropTypes.string,
}

export default BlogListItem
