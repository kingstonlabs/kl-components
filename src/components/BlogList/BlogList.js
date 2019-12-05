import React from "react"
import PropTypes from "prop-types"

import BlogListItem from "./BlogListItem"

import "./BlogList.scss"


class BlogList extends React.Component {
  render() {
    const { posts } = this.props
    return (
      <ol className="blog-list">
        {
          posts && posts.map(({node: post}) => (
            <BlogListItem
              key={post.id}
              title={post.frontmatter.title}
              subtitle={post.frontmatter.subtitle}
              date={post.frontmatter.date}
              summary={post.frontmatter.summary}
              image={post.frontmatter.listingImage}
              slug={post.fields.slug}
            />
          ))
        }
      </ol>
    )
  }
}

BlogList.propTypes = {
  posts: PropTypes.array,
}

export default BlogList
