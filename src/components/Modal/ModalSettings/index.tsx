import './sModalSettings.scss'
import {
  IoIosMegaphone,
  IoIosRainy,
  IoIosMan
}  from  "react-icons/io";
import { DarkModeContext } from "../../../context/themeMode";
import { IoInvertModeOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import Modal from '../../Modal';
import ModalConfigUser from '../ModalConfigUser';
import ModalContactUs from '../ModalContactUS';
import ModalIssue from '../ModalIssue';

const ModalSettings = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  
  // redux junto com navMenu
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);

  return (
    <>
    <div className='modalSettings'>

      <div >
        <>    
          {darkMode ? (
           <span
           > <IoInvertModeOutline onClick={toggle} /></span> 
            ) : (
          <span>  
            <IoInvertModeOutline onClick={toggle} /></span>  
          )}
         <h5>Modo Claro/Escuro</h5>
         </>       
      </div> 

      <div onClick={()=> setOpenModal1(!openModal1)}>
        <span>
          <IoIosMan />
        </span>
        <h5>Alterar Dados Pessoais</h5>
      </div>   
      <div onClick={()=> setOpenModal2(!openModal2)}> 
        <span>
          <IoIosMegaphone/> 
        </span>
        <h5>Fale Conosco</h5>
      </div>   
      <div onClick={()=> setOpenModal3(!openModal3)}>
        <span>
          <IoIosRainy  />
        </span>
        <h5>Relatar Problema</h5>
      </div>   
      <button>Sair da Conta</button>
    </div>
    <Modal 
      isOpen={openModal1} onClose={()=> setOpenModal1(false)}
      title='Dados Pessoais'
    >
      <ModalConfigUser />
    </Modal>
    <Modal 
      isOpen={openModal2} onClose={()=> setOpenModal2(false)}
      title='Fale Conosco'
    >
      <ModalContactUs />
    </Modal>
    <Modal 
      isOpen={openModal3} onClose={()=> setOpenModal3(false)}
      title='Relatar Problema'
    >
      <ModalIssue />
    </Modal>
    </>
  )
}

export default ModalSettings