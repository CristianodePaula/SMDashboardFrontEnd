import './sMenuLeft.scss'
import { Link } from 'react-router-dom'
import {
  IoMdHome, 
  IoMdStats,
  IoIosGlobe,
  IoMdShirt,
  IoMdLaptop,
  IoMdPeople,   
  IoIosPeople,
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
          <Link className='Link' to='/charts'>
            <div>
              <div className='icon'>
                < IoMdStats />          
              </div>
              <span>Gráficos</span>
            </div>
          </Link>
         
          <Link className='Link' to='/products'>
            <div>
              <div className='icon'>
                <IoMdShirt />          
              </div>
              <span>Produtos</span>
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
                <IoMdPeople />          
              </div>
              <span>Clientes</span>
            </div>
          </Link>
          <Link className='Link' to='/followers'>
            <div>
              <div className='icon'>
                <IoIosPeople />          
              </div>
              <span>Seguidores</span>
            </div>
          </Link>
          {/* <Link className='Link' to='/charts'>
            <div>
              <div className='icon'>
                <IoIosListBox />          
              </div>
              <span>Pedidos</span>
            </div>
          </Link> */}
          <Link className='Link' to='/messages'>
            <div>
              <div className='icon'>
                <IoIosChatboxes />          
              </div>
              <span>Mensagens</span>
            </div>
          </Link>
          <Link className='Link' to='/productPage'>
            <div>
              <div className='icon'>
                <IoIosGlobe />          
              </div>
              <span>Página</span>
            </div>
          </Link>
    </div>
  )
}

export default MenuLeft