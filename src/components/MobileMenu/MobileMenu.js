import React from 'react'
import PropTypes from 'prop-types'
import { SlideMenu, SlideMenuLink, SocialNav } from 'components'
import { linkList, link } from './styles.module.css'

function getSocialHeaderbyLang (language) {
  switch (language) {
    case 'en':
      return 'Find me on:'
    case 'es':
      return 'Encuéntrame en:'
    default:
      return null
  }
}

export default function MobileMenu ({language, me, navElements, modalClose, visible, closeMenuAction}) {
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
      <span>{getSocialHeaderbyLang(language)}</span>
      <SocialNav me={me}/>
    </SlideMenu>
  )
}
MobileMenu.propTypes = {
  language: PropTypes.string.isRequired,
  me: PropTypes.object.isRequired,
  navElements: PropTypes.array.isRequired,
  visible: PropTypes.bool.isRequired,
  modalClose: PropTypes.bool.isRequired,
  closeMenuAction: PropTypes.func.isRequired,
}
