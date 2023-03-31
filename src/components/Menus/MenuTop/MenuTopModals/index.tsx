import { useState } from "react";
import './sMenuTopModals.scss'
import {
  IoIosNotifications,
  IoMdSettings
} from "react-icons/io";
import Modal from "../../../Modal";
import ModalNotifications from "../../../Modals/ModalNotifications";
import ModalSettings from "../../../Modal/ModalSettings";


const MenuTopModals = () => {

    const [openModal1, setOpenModal1] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);

  return (
    <div className="menuTopModals">
        <div>
          <IoIosNotifications onClick={()=> setOpenModal1(!openModal1)}/>
        </div>
        <Modal
          isOpen={openModal1} onClose={()=> setOpenModal1(false)}
          title='Notificações'
        >
          <ModalNotifications />
        </Modal>
        <div>
          <IoMdSettings onClick={()=> setOpenModal2(!openModal2)}/> 
        </div>
        <Modal
          isOpen={openModal2} onClose={()=> setOpenModal2(false)}
          title='Notificações'
        >
          <ModalSettings />
        </Modal>
      </div>
    )
}

export default MenuTopModals

