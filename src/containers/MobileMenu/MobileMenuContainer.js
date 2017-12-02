import React from 'react'
import PropTypes from 'prop-types'
import SlideMenu from '../../components/SlideMenu/SlideMenu'
import SlideMenuLink from '../../components/SlideMenuLink/SlideMenuLink'
import Github from 'react-icons/lib/fa/github'
import LinkedIn from 'react-icons/lib/fa/linkedin'
import { linkList, link, socialEntry, socialIcon, socialList } from './styles.module.css'

export default function MobileMenuContainer ({me, navElements, socialHeader, modalClose, visible, closeMenuAction}) {
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
      <ul className={socialList}>
        <li className={socialEntry}>
          <a className={socialIcon} href={me.github}>
            <Github/>
          </a>
        </li>
        <li className={socialEntry}>
          <a className={socialIcon} href={me.linkedIn}>
            <LinkedIn/>
          </a>
        </li>
      </ul>
    </SlideMenu>
  )
}
MobileMenuContainer.propTypes = {
  me: PropTypes.object.isRequired,
  navElements: PropTypes.array.isRequired,
  socialHeader: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  modalClose: PropTypes.bool.isRequired,
  closeMenuAction: PropTypes.func.isRequired,
}
