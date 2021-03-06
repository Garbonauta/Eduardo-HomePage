import React from 'react'
import PropTypes from 'prop-types'
import { TopNav, Footer, Overlay, MobileMenu } from 'components'
import { mainContainer, contentContainer, pageContainer } from './styles.module.css'

class Layout extends React.Component {
  static propTypes = {
    currentLanguage: PropTypes.string.isRequired,
    languages: PropTypes.array.isRequired,
    me: PropTypes.object.isRequired,
    navElements: PropTypes.array.isRequired,
    children: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
  }
  state = {
    menuVisible: false,
    overflowClose: false,
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
    const {currentLanguage, languages, me, navElements, history, location, match} = this.props
    return (
      <div className={mainContainer}>
        <div className={contentContainer}>
          <header>
            <TopNav
              language={currentLanguage}
              me={me}
              navElements={navElements}
              onClick={this.state.menuVisible ? this.closeMobileMenu : this.openMobileMenu}
              fullNav={true}
              mobileVisible={this.state.menuVisible}/>
          </header>
          <div className={pageContainer}>
            {this.props.children({
              history,
              location,
              match,
            })}
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

export default Layout
