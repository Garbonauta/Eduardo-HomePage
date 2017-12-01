import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import App from '../components/App/App'

export default function IndexTemplate ({ children, data }) {
  return (
    <div>
      <Helmet >
        <title>{data.contentfulPerson.fullName}</title>
      </Helmet>
      <App data={data}>
        {children}
      </App>
    </div>
  )
}
IndexTemplate.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query IndexQuery {
    contentfulPerson(fullName: {eq: "Eduardo Moreno"}) {
      fullName
      github
      linkedIn
    }
  }
`
