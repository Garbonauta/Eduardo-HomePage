import React from 'react'
import PropTypes from 'prop-types'
import { SlideMenu, SlideMenuLink, SocialNav } from 'components'
import { FormattedMessage } from 'react-intl'
import urlJoin from 'url-join'
import { linkList, listItem, link, findMe } from './styles.module.css'

export default function MobileMenu ({language, me, navElements, modalClose, visible, closeMenuAction}) {
  return (
    <SlideMenu visible={visible} modalClose={modalClose} closeMenuAction={closeMenuAction}>
      <ul className={linkList}>
        {
          navElements.map((element, index) => {
            return (
              <li key={`slm${index}`} className={listItem}>
                <SlideMenuLink
                  exact={true}
                  className={link}
                  to={urlJoin(language, element.slug)}
                  onClick={closeMenuAction}>
                  <FormattedMessage id={element.label}/>
                </SlideMenuLink>
              </li>
            )
          })
        }
      </ul>
      <hr/>
      <span className={findMe}>
        <FormattedMessage id='mobileMenu.findMe'/>
        {':'}
      </span>
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
