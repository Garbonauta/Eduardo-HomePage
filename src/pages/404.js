import React from 'react'
import { pageContent } from 'sharedStyles/styles.module.css'

const pageContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  textAlign: 'center',
  height: '80vh',
}
const headerStyle = {
  fontSize: '5rem',
}
export default function NotFoundPage () {
  return (
    <div className={pageContent} style={pageContentStyle}>
      <h1 style={headerStyle}>{'404'}</h1>
      <h2>{'PAGE NOT FOUND'}</h2>
    </div>
  )
}
