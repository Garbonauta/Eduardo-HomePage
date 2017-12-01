import React from 'react'
import PropTypes from 'prop-types'

function WelcomeBanner ({data: {contentfulHome: home, contentfulPerson: person}}) {
  return (
    <div>
      <div>{home.bannerText}</div>
      <div>{person.fullName}</div>
      <div>{person.jobTitle}</div>
    </div>
  )
}

WelcomeBanner.propTypes = {
  data: PropTypes.object.isRequired,
}

export default function IndexPage ({data}) {
  return (
    <WelcomeBanner data={data}/>
  )
}
IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query HomeEnQuery {
    contentfulPerson {
      fullName
      jobTitle
    }
    contentfulHome(node_locale: {eq: "en-US"}) {
      bannerText
    }
  }
`
