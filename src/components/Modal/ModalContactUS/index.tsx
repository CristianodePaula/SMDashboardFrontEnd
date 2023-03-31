import './sModalContactUS.scss'
import { 
  IoIosHelpCircle, 
  IoMdBulb, 
  IoMdMailUnread 
} from "react-icons/io";

const ModalContactUs = () => {
  return (
    <div className='modalContactUS'>
        <div className='modalContUBox'>
            <div className='modalContUItens'>
              <div>
                < IoIosHelpCircle />
                <span>Dúvidas</span>  
              </div>
                <input type="text" placeholder='Qual é sua dúvida?'/>
                <button>Eviar</button>
            </div>
            <div className='modalContUItens'>
              <div>
                <IoMdBulb  />
                <span>Sugestões</span>
              </div>              
                <input type="text" placeholder='Envie uma sugestão!'/>
                <button>Eviar</button>
            </div>
            <div className='modalContUItens'>
              <div>
                <IoMdMailUnread/>
                <span>Enviar Feedback</span>
              </div>
                <input type="text" placeholder='No que podemos melhorar?'/>       
                <button>Eviar</button> 
            </div>
            </div>
    </div>
  )
}

export default ModalContactUs