import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'
import { SocialNav } from 'components'
import MenuIcon from 'react-icons/lib/md/menu'
import urlJoin from 'url-join'
import {
  activeNavigation, link, navBar, navBarContent, bigNav, navElement, navList,
  navIcon, socialNav, displayNone,
} from './styles.module.css'

export default function TopNav ({language, me, navElements, onClick, fullNav}) {
  return (
    <nav className={navBar}>
      <div className={navBarContent}>
        <div className={`${bigNav} ${!fullNav && displayNone}`}>
          <ul className={navList}>
            {
              navElements.map((element, index) => {
                return (
                  <li key={`nt${index}`} className={navElement}>
                    <Link
                      exact={true}
                      activeClassName={activeNavigation}
                      className={link}
                      to={urlJoin(language, element.slug)}>
                      <FormattedMessage id={element.label}/>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          <div className={socialNav}>
            <SocialNav me={me}/>
          </div>
        </div>
        <div className={`${navIcon} ${fullNav && displayNone}`} onClick={onClick}>
          <MenuIcon/>
        </div>
      </div>
    </nav>
  )
}
TopNav.propTypes = {
  language: PropTypes.string.isRequired,
  me: PropTypes.object.isRequired,
  navElements: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  fullNav: PropTypes.bool.isRequired,
}
