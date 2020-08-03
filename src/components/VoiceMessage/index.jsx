import React from 'react'
import PropTypes from 'prop-types'

import StyledVoiceMessage from './style'
import Button from '../Button'
import Icon from '../Icon'

import { ReactComponent as Play } from 'assets/icons/play.svg'
import { ReactComponent as Wave } from 'assets/icons/wave.svg'
import { useTheme } from 'styled-components'
import Text from '../Text'

/**
 * 语音气泡组件
 * @param children
 * @param time 语音时常
 * @param type 语音发送人 none || mine
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function VoiceMessage({ children, time, type, ...rest }) {
  const theme = useTheme()

  return (
    <StyledVoiceMessage type={type} {...rest}>
      <Button size="40px">
        <Icon
          icon={Play}
          color="white"
          width={14}
          height={16}
          style={{ transform: 'translateX(1px)' }}
        />
      </Button>
      <Icon icon={Wave} width="100%" height="100%" color={theme.primaryColor} />
      <Text bold>{time}</Text>
    </StyledVoiceMessage>
  )
}

VoiceMessage.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(['mine']),
  time: PropTypes.string
}

export default VoiceMessage
