import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { FormattedMessage } from 'react-intl'
import { SocialNav, NavIcon } from 'components'
import urlJoin from 'url-join'
import {
  activeNavigation, link, navBar, navBarContent, bigNav, navElement, navList,
  navIcon, socialNav, iconShow,
} from './styles.module.css'

export default function TopNav ({language, me, navElements, onClick, mobileVisible}) {
  return (
    <nav className={navBar}>
      <div className={navBarContent}>
        <div className={bigNav}>
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
        <div className={`${navIcon} ${mobileVisible && iconShow}`} onClick={onClick}>
          <NavIcon navMenuOpen={mobileVisible} />
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
  mobileVisible: PropTypes.bool.isRequired,
}
