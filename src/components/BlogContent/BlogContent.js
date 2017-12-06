import React from 'react'
import PropTypes from 'prop-types'
import lozad from 'lozad'

class BlogContent extends React.Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  componentDidMount () {
    const observer = lozad()
    observer.observe()
  }

  render () {
    return (
      <section dangerouslySetInnerHTML={{__html: this.props.content}}/>
    )
  }
}

export default BlogContent
