import React from 'react'
import PropTypes from 'prop-types'
import { pageContainer, footerPadding } from './styles.module.css'
import Nav from '../components/Nav/Nav'
import Footer from '../components/Footer/Footer'
import Helmet from 'react-helmet'

export default function indexLayout ({children, data}) {
  const {contentfulMe: me} = data
  return (
    <div>
      <Helmet title={me.fullName}/>
      <header>
        <Nav me={me}/>
      </header>
      <div className={pageContainer}>
        {children()}
        <div className={footerPadding}/>
      </div>
      <Footer me={me}/>
    </div>
  )
}
indexLayout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query NavQuery {
    contentfulMe {
      fullName
      github
      linkedIn
    }
  }
`
