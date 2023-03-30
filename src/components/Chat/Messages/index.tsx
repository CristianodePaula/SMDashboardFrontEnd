import InputChat from '../InputChat'
import Message from '../Message'
import MessageBar from '../MessageBar'
import './sMessages.scss'

const Messages = () => {
  return (
    <div className='messages'>
        <MessageBar />
        <div className="messagesLine">
          <Message />
          <Message />
          <Message />
          <Message />
       </div>
       <InputChat />
    </div>
  )
}

export default Messages
