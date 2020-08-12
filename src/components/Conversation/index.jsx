/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import PropTypes from 'prop-types'
import { useSpring } from 'react-spring'

import StyledConversation, { Conversations, MyChatBubble } from './style'
import TitleBar from '../TitleBar'
import ChatBubble from '../ChatBubble'
import VoiceMessage from '../VoiceMessage'
import Emoji from '../Emoji'
import Footer from '../Footer'

import face from '../../assets/images/face-male-2.jpg'

function Conversation({ children, ...rest }) {
  // 标题栏动画
  const tBarAnimeProps = useSpring({
    opacity: 1,
    transform: 'translate3D(0px, 0px, 0px)',
    from: { opacity: 0, transform: 'translate3d(0px, -50px, 0px)' }, // 起始位置
    delay: 400,
  })

  // 聊天内容区域动画
  const conversationAnimeProps = useSpring({
    opacity: 1,
    transform: 'translate3D(0px, 0px, 0px)',
    from: { opacity: 0, transform: 'translate3d(50px, 0px, 0px)' }, // 起始位置
    delay: 400,
  })

  // 底部栏动画
  const footerAnimeProps = useSpring({
    opacity: 1,
    transform: 'translate3D(0px, 0px, 0px)',
    from: { opacity: 0, transform: 'translate3d(0px, 50px, 0px)' }, // 起始位置
    delay: 550,
  })

  return (
    <StyledConversation {...rest}>
      <TitleBar
        avatarSrc={face}
        name="小土豆"
        status="online"
        time="3小时前"
        animeProps={tBarAnimeProps}
      />
      <Conversations style={conversationAnimeProps}>
        <ChatBubble time="昨天 下午14:26">Hi 醉渔，忙什么呢</ChatBubble>
        <MyChatBubble time="昨天 下午14:28">
          Hello 啊！最新就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！
        </MyChatBubble>
        <ChatBubble time="昨天 下午16:30">
          <VoiceMessage time="01:24" />
        </ChatBubble>
        <MyChatBubble time="昨天 下午16:30">
          明天约一把王者荣耀，不连赢5把不罢休 🤘
          <Emoji label="smile">😊</Emoji>
        </MyChatBubble>
      </Conversations>
      <Footer animeProps={footerAnimeProps} />
    </StyledConversation>
  )
}

Conversation.propTypes = {
  children: PropTypes.any,
}

export default Conversation
