import React from 'react'
import PropTypes from 'prop-types'
import { menu, slideIn, slideOut, menuContent } from './styles.module.css'

export default function SlideMenu ({visible, modalClose, children}) {
  return (
    <div id='slider-menu' className={`${menu} ${visible ? slideIn : (modalClose ? slideOut : '')}`}>
      <div className={menuContent}>
        {children}
      </div>
    </div>
  )
}
SlideMenu.propTypes = {
  visible: PropTypes.bool.isRequired,
  modalClose: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
}
