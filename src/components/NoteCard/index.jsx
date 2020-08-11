import React from 'react'
import PropTypes from 'prop-types'

import StyledNoteCard, {
  NoteExcerpt,
  NoteImage,
  NotePublishTime,
  NoteTitle,
} from './style'

function NoteCard({ image, title, excerpt, publishedAt, children, ...rest }) {
  return (
    <StyledNoteCard {...rest}>
      <NoteImage src={image} />
      <NoteTitle>{title}</NoteTitle>
      <NoteExcerpt>{excerpt}</NoteExcerpt>
      <NotePublishTime>{publishedAt}</NotePublishTime>
    </StyledNoteCard>
  )
}

NoteCard.propTypes = {
  children: PropTypes.any,
}

export default NoteCard
