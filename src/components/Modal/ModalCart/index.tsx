import './sModalCart.scss'
import { IoMdTrash } from "react-icons/io";
import PurchaseBar from '../../Bars/PurchaseBar';


const ModalCart = () => {
  return (
    <div className='modalCart'>
     <div>
        <img src='https://images.pexels.com/photos/12845850/pexels-photo-12845850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <div>
          <span>Camisa Preta</span>
          <span>Camisa preta de linho</span>
          <span>R$ 39,90</span>
        </div>
        <IoMdTrash />
      </div>

      <div>
        <img src='https://images.pexels.com/photos/12845850/pexels-photo-12845850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <div>
          <span>Camisa Preta</span>
          <span>Camisa preta de linho</span>
          <span>R$ 39,90</span>
        </div>
        <IoMdTrash />
      </div>


      <div>
        <img src='https://images.pexels.com/photos/12845850/pexels-photo-12845850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <div>
          <span>Camisa Preta</span>
          <span>Camisa preta de linho</span>
          <span>R$ 39,90</span>
        </div>
        <IoMdTrash />
      </div>

    <PurchaseBar />
     
    </div>
  )
}

export default ModalCart
