import Friends from '../../components/Chat/Friends'
import Message from '../../components/Chat/Messages'
import './sChat.scss'

const Messages = () => {
  return (
    <div className='chat'>
      <div className='chatBox'>
        <Message />
        <Friends /> 
      </div>
    </div>
  )
}

export default Messages
