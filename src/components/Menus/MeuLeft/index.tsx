import './sMenuLeft.scss'
import { Link } from 'react-router-dom'
import {
  IoMdHome, 
  IoIosGlobe,
  IoMdShirt,
  IoMdLaptop,
  IoMdPeople,   
  IoIosListBox,
  IoIosChatboxes
}  from  "react-icons/io";

const MenuLeft = () => {

  return (
    <div className='menuLeft'>
        <Link className='Link' to='/'>
            <div>
              <div className='icon'>
                <IoMdHome />          
              </div>
              <span>Home</span>
            </div>
          </Link>
          <Link className='Link' to='/page'>
            <div>
              <div className='icon'>
                <IoIosGlobe />          
              </div>
              <span>Página</span>
            </div>
          </Link>
          <Link className='Link' to='/product'>
            <div>
              <div className='icon'>
                <IoMdShirt />          
              </div>
              <span>Produto</span>
            </div>
          </Link>
          <Link className='Link' to='/services'>
            <div>
              <div className='icon'>
                <IoMdLaptop />          
              </div>
              <span>Serviços</span>
            </div>
          </Link>
          <Link className='Link' to='/customers'>
            <div>
              <div className='icon'>
                <IoMdPeople  />          
              </div>
              <span>Clientes</span>
            </div>
          </Link>
          <Link className='Link' to='/purchaseOrder'>
            <div>
              <div className='icon'>
                <IoIosListBox />          
              </div>
              <span>Ordens</span>
            </div>
          </Link>
          <Link className='Link' to='/messages'>
            <div>
              <div className='icon'>
                <IoIosChatboxes />          
              </div>
              <span>Mensagens</span>
            </div>
          </Link>
    </div>
  )
}

export default MenuLeft