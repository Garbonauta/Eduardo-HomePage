import React from 'react'
import PropTypes from 'prop-types'
import NavContainer from '../../containers/Nav/NavContainer'
import Footer from '../../components/Footer/Footer'
import Overlay from '../Overlay/Overlay'
import MobileMenuContainer from '../../containers/MobileMenu/MobileMenuContainer'
import { mainContainer, contentContainer, pageContainer, footerPadding } from './styles.module.css'
const mql = window.matchMedia(`(min-width: 800px)`)

class App extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  }
  state = {
    mql: mql,
    menuVisible: false,
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
  }
  openMobileMenu = () => {
    this.setState({menuVisible: true})
  }
  closeMobileMenu = () => {
    this.setState({menuVisible: false})
  }
  render () {
    const {contentfulPerson: me} = this.props.data
    return (
      <div className={mainContainer}>
        <div className={contentContainer}>
          <header>
            <NavContainer me={me} onClick={this.openMobileMenu} fullNav={this.state.fullNav}/>
          </header>
          <div className={pageContainer}>
            {this.props.children()}
            <div className={footerPadding}/>
          </div>
          <Footer me={me}/>
        </div>
        <MobileMenuContainer me={me} visible={this.state.menuVisible} closeMenuAction={this.closeMobileMenu}/>
        <Overlay visible={this.state.menuVisible} onClick={this.closeMobileMenu}/>
      </div>
    )
  }
}

export default App
