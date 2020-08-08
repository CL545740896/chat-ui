import React, { useState } from 'react'
import PropTypes from 'prop-types'

import StyledFooter, { IconContainer, StyledPopoverContent } from './style'
import { useTheme } from 'styled-components'
import Input from '../Input'
import Icon from '../Icon'
import Button from '../Button'
import Emoji from '../Emoji'
import Popover from '../Popover'

import { ReactComponent as Clip } from 'assets/icons/clip.svg'
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg'
import { ReactComponent as MicrophoneIcon } from 'assets/icons/microphone.svg'
import { ReactComponent as PlaneIcon } from 'assets/icons/plane.svg'
import { ReactComponent as OptionsIcon } from 'assets/icons/options.svg'

/**
 * 聊天底部栏
 * @param children
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */
function Footer({ children, ...rest }) {
  const [emojiIconActive, setEmojiIconActive] = useState(false)
  const theme = useTheme()
  return (
    <StyledFooter {...rest}>
      <Input
        placeholder="输入想和对方说的话"
        prefixIcon={<Icon icon={Clip} />}
        suffixIcon={
          <IconContainer>
            <Popover
              content={<PopoverContent />}
              offset={{ x: '-25%' }}
              onVisible={() => setEmojiIconActive(true)}
              onHide={() => setEmojiIconActive(false)}
            >
              <Icon
                icon={SmileIcon}
                color={emojiIconActive ? undefined : theme.inactiveColor}
              />
            </Popover>
            <Icon icon={MicrophoneIcon} />
            <Button diameter="52px">
              <Icon
                icon={PlaneIcon}
                color="white"
                style={{ transform: 'translateX(-2px)' }}
              />
            </Button>
          </IconContainer>
        }
      />
    </StyledFooter>
  )
}

{
  /* eslint-disable jsx-a11y/accessible-emoji */
}

function PopoverContent(props) {
  return (
    <StyledPopoverContent>
      <Emoji label="smile">😊</Emoji>
      <Emoji label="grinning">😄</Emoji>
      <Emoji label="thumbup">👍</Emoji>
      <Emoji label="indexfingerup">🤘</Emoji>
      <Emoji label="ok">👌</Emoji>
      <Emoji label="handsputtogether">🙏</Emoji>
      <Emoji label="smilewithsunglasses">😎</Emoji>
      <Emoji label="flexedbicep">💪</Emoji>
      <Icon icon={OptionsIcon} style={{ marginLeft: '24px' }} />
    </StyledPopoverContent>
  )
}

Footer.propTypes = {
  children: PropTypes.any,
}

export default Footer
