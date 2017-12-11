import React from 'react'
import PropTypes from 'prop-types'
import TopNav from '../../components/TopNav/TopNav'
import Footer from '../../components/Footer/Footer'
import Overlay from '../../components/Overlay/Overlay'
import MobileMenu from '../../components/MobileMenu/MobileMenu'
import ScrollToTopContainer from '../ScrollToTop/ScrollToTopContainer'
import { mainContainer, contentContainer, pageContainer, footerPadding } from './styles.module.css'
import 'prismjs-okaidia-theme/prism-okaidia.css'

const mql = window.matchMedia(`(min-width: 800px)`)

class App extends React.Component {
  static propTypes = {
    languages: PropTypes.array.isRequired,
    me: PropTypes.object.isRequired,
    navElements: PropTypes.array.isRequired,
    socialHeader: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
  }
  state = {
    mql: mql,
    menuVisible: false,
    overflowClose: false,
  }
  componentWillMount = () => {
    mql.addListener(this.mediaQueryChanged)
    this.setState({mql: mql, fullNav: mql.matches})
  }
  componentWillUnmount = () => {
    this.state.mql.removeListener(this.mediaQueryChanged)
  }
  mediaQueryChanged = () => {
    this.setState({fullNav: this.state.mql.matches})
    this.state.fullNav && this.state.menuVisible && this.setState({menuVisible: false})
  }
  openMobileMenu = () => {
    this.setState({menuVisible: true})
  }
  closeMobileMenu = () => {
    this.setState({
      menuVisible: false,
      overflowClose: true,
    })
  }

  render () {
    const {languages, me, socialHeader, navElements} = this.props
    return (
      <div className={mainContainer}>
        <div className={contentContainer}>
          <header>
            <TopNav
              me={me} navElements={navElements} onClick={this.openMobileMenu}
              fullNav={this.state.fullNav}/>
          </header>
          <div className={pageContainer}>
            {this.props.children()}
            <div className={footerPadding}/>
          </div>
          <Footer me={me} languages={languages}/>
          <ScrollToTopContainer/>
        </div>
        <MobileMenu
          me={me} navElements={navElements} socialHeader={socialHeader}
          visible={this.state.menuVisible} modalClose={this.state.overflowClose} closeMenuAction={this.closeMobileMenu}/>
        <Overlay visible={this.state.menuVisible} onClick={this.closeMobileMenu}/>
      </div>
    )
  }
}

export default App
