import React from 'react'
import PropTypes from 'prop-types'
import { TopNav, Footer, Overlay, MobileMenu } from 'components'
import 'prismjs-okaidia-theme/prism-okaidia.css'
import { mainContainer, contentContainer, pageContainer } from './styles.module.css'

const mql = window.matchMedia(`(min-width: 800px)`)

class App extends React.Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    languages: PropTypes.array.isRequired,
    me: PropTypes.object.isRequired,
    navElements: PropTypes.array.isRequired,
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
    const { currentLanguage, languages, me, navElements } = this.props
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
          </div>
          <Footer me={me} languages={languages}/>
        </div>
        <MobileMenu
          language={currentLanguage}
          me={me}
          navElements={navElements}
          visible={this.state.menuVisible}
          modalClose={this.state.overflowClose}
          closeMenuAction={this.closeMobileMenu}/>
        <Overlay visible={this.state.menuVisible} onClick={this.closeMobileMenu}/>
      </div>
    )
  }
}

export default App
