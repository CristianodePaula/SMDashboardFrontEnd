import './sModalIssue.scss'
import { IoMdThunderstorm, IoMdHand} from "react-icons/io";

const ModalIssue = () => {
  return (
    <div className='modalIssue'>
        <div className='modalIssueItens'>
            <div>
                <IoMdThunderstorm />
                <span>Relatar Problema</span>  
            </div>
                <input type="text" placeholder='Qual seu problema?'/>
                <button>Eviar</button>
        </div>
        <div className='modalIssueItens'>
            <div>
                <IoMdHand />
                <span>Denunciar Abuso</span>  
            </div>
                <input type="text" placeholder='id usuário' style={{height: '30px'}}/>
                <input type="text" placeholder='Motivo da denúncia:'/>
                <button>Eviar</button>
        </div>
    </div>
  )
}

export default ModalIssue
