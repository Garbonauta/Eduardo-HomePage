import React from 'react'
import PropTypes from 'prop-types'
import Close from 'react-icons/lib/md/close'
import { menu, slideIn, slideOut, menuContent, closeSign } from './styles.module.css'

export default function SlideMenu ({visible, modalClose, closeMenuAction, children}) {
  return (
    <div id='slider-menu' className={`${menu} ${visible ? slideIn : (modalClose ? slideOut : '')}`}>
      <Close className={closeSign} onClick={closeMenuAction}/>
      <div className={menuContent}>
        {children}
      </div>
    </div>
  )
}
SlideMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
  modalClose: PropTypes.bool.isRequired,
  closeMenuAction: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}
