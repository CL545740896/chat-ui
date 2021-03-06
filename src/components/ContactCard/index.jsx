import React from 'react'
import PropTypes from 'prop-types'

import StyledContactCard, { Intro, Name } from './style'
import Avatar from '../Avatar'

function ContactCard({
  avatarSrc,
  name,
  intro,
  status,
  statusText,
  children,
  ...rest
}) {
  return (
    <StyledContactCard {...rest}>
      <Avatar src={avatarSrc} status={status} />
      <Name>{name}</Name>
      <Intro>{intro}</Intro>
    </StyledContactCard>
  )
}

ContactCard.propTypes = {
  children: PropTypes.any,
}

export default ContactCard
