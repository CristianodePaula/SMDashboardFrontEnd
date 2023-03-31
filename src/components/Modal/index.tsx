import './sModal.scss'
import { IoIosClose } from "react-icons/io";

const Modal = ( {children, isOpen, onClose, title }) => {

  return ( isOpen && (
    <div className='modal' 
      // onClick={onClose} // corrigir
      >
      <div className='modalContent'>
        <div className='modalTop'>
          <h3>{title}</h3>  
          <p onClick={onClose}> <IoIosClose /> </p> 
        </div>
          {children}
      </div>
    </div>
  ))
}

export default Modal
