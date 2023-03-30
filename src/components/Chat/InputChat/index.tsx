import './sInputChat.scss'
import { 
    IoIosImage,
    IoIosMic,
    IoMdAttach
} from "react-icons/io";

const InputChat = () => {
  return (
    <div className='inputChat'>
        <input placeholder='Escreva sua Mensagem'/>
        <div>
            <IoIosImage />
            <IoIosMic />
            <IoMdAttach/>
            <button>Enviar</button>
        </div>
    </div>
  )
}

export default InputChat
