import React from 'react'
import PropTypes from 'prop-types'
import { ShareButtons, generateShareIcon } from 'react-share'
import { socialRow, flexRow, label, icon } from './styles.module.css'

function getLabelByLanguage (language) {
  switch (language) {
    case 'en':
      return 'Share:'
    case 'es':
      return 'Compartir:'
    default:
      return null
  }
}

export default function BlogSocial ({language, url, title, summary}) {
  const {
    FacebookShareButton,
    TwitterShareButton,
    RedditShareButton,
    LinkedinShareButton,
  } = ShareButtons

  const FacebookIcon = generateShareIcon('facebook')
  const TwitterIcon = generateShareIcon('twitter')
  const RedditIcon = generateShareIcon('reddit')
  const LinkedinIcon = generateShareIcon('linkedin')

  const iconProps = {
    size: 36,
    round: true,
  }

  return (
    <div className={socialRow}>
      <div>
        <p className={label}>{getLabelByLanguage(language)}</p>
        <div className={flexRow}>
          <FacebookShareButton
            url={url}
            className={icon}
            quote={summary}>
            <FacebookIcon {...iconProps} />
          </FacebookShareButton>
          <TwitterShareButton
            url={url}
            className={icon}
            title={title}>
            <TwitterIcon {...iconProps} />
          </TwitterShareButton>
          <RedditShareButton
            url={url}
            className={icon}
            title={title}>
            <RedditIcon {...iconProps} />
          </RedditShareButton>
          <LinkedinShareButton
            url={url}
            className={icon}
            title={title}
            description={summary}>
            <LinkedinIcon {...iconProps}/>
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  )
}
BlogSocial.propTypes = {
  language: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
}
