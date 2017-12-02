import React from 'react'
import PropTypes from 'prop-types'
import NavContainer from '../../containers/Nav/NavContainer'
import Footer from '../../components/Footer/Footer'
import Overlay from '../Overlay/Overlay'
import MobileMenuContainer from '../../containers/MobileMenu/MobileMenuContainer'
import { mainContainer, contentContainer, pageContainer, footerPadding } from './styles.module.css'

const mql = window.matchMedia(`(min-width: 800px)`)

class Layout extends React.Component {
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
    modalClose: false,
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
      modalClose: true,
    })
  }

  render () {
    const {languages, me, socialHeader, navElements} = this.props
    return (
      <div className={mainContainer}>
        <div className={contentContainer}>
          <header>
            <NavContainer
              me={me} navElements={navElements} onClick={this.openMobileMenu}
              fullNav={this.state.fullNav}/>
          </header>
          <div className={pageContainer}>
            {this.props.children()}
            <div className={footerPadding}/>
          </div>
          <Footer me={me} languages={languages}/>
        </div>
        <MobileMenuContainer
          me={me} navElements={navElements} socialHeader={socialHeader}
          visible={this.state.menuVisible} modalClose={this.state.modalClose} closeMenuAction={this.closeMobileMenu}/>
        <Overlay visible={this.state.menuVisible} onClick={this.closeMobileMenu}/>
      </div>
    )
  }
}

export default Layout
