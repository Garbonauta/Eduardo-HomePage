import React from 'react'
import PropTypes from 'prop-types'
import SlideMenu from '../SlideMenu/SlideMenu'
import SlideMenuLink from '../SlideMenuLink/SlideMenuLink'
import SocialNav from '../SocialNav/SocialNav'
import { linkList, link } from './styles.module.css'

export default function MobileMenu ({me, navElements, socialHeader, modalClose, visible, closeMenuAction}) {
  return (
    <SlideMenu visible={visible} modalClose={modalClose} closeMenuAction={closeMenuAction}>
      <ul className={linkList}>
        {
          navElements.map(element => {
            return (
              <li key={element.title}>
                <SlideMenuLink
                  exact={true}
                  className={link}
                  to={element.slug}
                  onClick={closeMenuAction}>
                  {element.displayText}
                </SlideMenuLink>
              </li>
            )
          })
        }
      </ul>
      <hr/>
      <span>{socialHeader}</span>
      <SocialNav me={me}/>
    </SlideMenu>
  )
}
MobileMenu.propTypes = {
  me: PropTypes.object.isRequired,
  navElements: PropTypes.array.isRequired,
  socialHeader: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  modalClose: PropTypes.bool.isRequired,
  closeMenuAction: PropTypes.func.isRequired,
}
