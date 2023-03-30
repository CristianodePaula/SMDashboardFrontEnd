import './sMessageBar.scss'
import { 
    IoMdVideocam,
    IoIosPeople, 
    IoIosMore,
    IoIosPersonAdd
} from "react-icons/io";

const MessageBar = () => {
  return (
    <div className='messageBar'>
        <div>
          <span>Fulano</span>
        </div>
        <div>
          <IoMdVideocam />
          <IoIosPersonAdd />
          <IoIosMore />
        </div>
    </div>
  )
}

export default MessageBar
