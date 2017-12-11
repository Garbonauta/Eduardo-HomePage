import React from 'react'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'

class ScrollToTopContainer extends React.Component {
  state = {
    scrollY: 0,
  }
  componentDidMount = () => {
    window.addEventListener('scroll', this.setScrollY)
  }
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.setScrollY)
  }
  visible = () => {
    return this.state.scrollY > 200
  }
  setScrollY = () => {
    this.setState({
      scrollY: window.scrollY,
    })
  }
  render () {
    return <ScrollToTop visible={this.visible()} />
  }
}

export default ScrollToTopContainer
