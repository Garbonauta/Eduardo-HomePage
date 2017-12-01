import React from 'react'
import PropTypes from 'prop-types'

function WelcomeBanner ({ data }) {
  return (
    <div>
      <div>{data.contentfulPerson.fullName}</div>
      <div>{data.contentfulPerson.jobTitle}</div>
    </div>
  )
}
WelcomeBanner.propTypes = {
  data: PropTypes.object.isRequired,
}

export default function IndexPage ({ data }) {
  return (
    <WelcomeBanner data={data}/>
  )
}
IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query HomeQuery {
    contentfulPerson {
      fullName
      jobTitle
    }
  }
`
