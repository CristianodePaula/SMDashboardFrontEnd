// import { useState } from "react";
import './sMenuTopModals.scss'
import {
  IoIosNotifications,
  IoMdSettings,
  IoIosCart
} from "react-icons/io";
// import Modal from "../../../Modal";
// import ModalNotifications from "../../../Modal/ModalNotifications";
// import ModalSettings from "../../../Modal/ModalSettings";
// import ModalCart from "../../../Modal/ModalCart";

const MenuTopModals = () => {

    // const [openModal1, setOpenModal1] = useState(false);
    // const [openModal2, setOpenModal2] = useState(false);
    // const [openModal3, setOpenModal3] = useState(false);
  
  return (
    <div className="menuTopModals">
      <div>
        <IoIosNotifications />
      </div>
      <div>
        <IoMdSettings />
      </div>
    </div>  
    )
}

export default MenuTopModals



        {/* <div>
          <IoIosCart onClick={()=> setOpenModal1(!openModal1)}/>
        </div>
        <Modal 
          isOpen={openModal1} onClose={()=> setOpenModal1(false)}
          title='Carrinho'
        >
          <ModalCart />
        </Modal>
        <div>
          <IoIosNotifications onClick={()=> setOpenModal2(!openModal2)}/>
        </div>
        <Modal 
          isOpen={openModal2} onClose={()=> setOpenModal2(false)}
          title='Notificações'
        >
          <ModalNotifications />
        </Modal>
        <div>
          <IoMdSettings onClick={()=> setOpenModal3(!openModal3)}/> 
        </div>
        <Modal 
        isOpen={openModal3} onClose={()=> setOpenModal3(false)}
          title='Configurações'
        >
          <ModalSettings />
        </Modal> */}