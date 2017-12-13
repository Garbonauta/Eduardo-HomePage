import React from 'react'
import { FormattedMessage } from 'react-intl'
import { container } from './styles.module.css'

export default function NoPost () {
  return (
    <div className={container}>
      <FormattedMessage id='posts.noPosts'/>
    </div>
  )
}
