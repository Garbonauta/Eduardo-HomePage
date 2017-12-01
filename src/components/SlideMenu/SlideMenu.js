import React from 'react'
import PropTypes from 'prop-types'
import Close from 'react-icons/lib/fa/close'
import { menu, slideIn, slideOut, menuContent, closeSign } from './styles.module.css'

class SlideMenu extends React.Component {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    closeMenuAction: PropTypes.func.isRequired,
  }
  state = {
    initialLoad: true,
  }
  componentDidMount = () => {
    this.state.initialLoad && this.setState({initialLoad: false})
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    if (this.state.initialLoad) {
      return false
    }
    return true
  }

  render () {
    const {visible, children, closeMenuAction} = this.props
    return (
      <div className={menu}>
        <div className={visible ? slideIn : (!this.state.initialLoad ? slideOut : '')}>
          <Close className={closeSign} onClick={closeMenuAction}/>
          <div className={menuContent}>
            {children}
          </div>
        </div>
      </div>
    )
  }
}

export default SlideMenu
