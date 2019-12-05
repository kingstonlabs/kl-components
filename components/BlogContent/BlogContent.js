import PropTypes from "prop-types"
import React, {Component} from "react"
import Prism from "prismjs"


class BlogContent extends Component {
  componentDidMount() {
    Prism.highlightAll()
  }

  render () {
    return <div>{this.props.children}</div>
  }
}

BlogContent.propTypes = {
  children: PropTypes.node,
}


export default BlogContent
