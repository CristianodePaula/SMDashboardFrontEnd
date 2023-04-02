import './sMenuMobile.scss'
import {
  IoMdHome, 
  IoMdStats,
  IoIosClipboard,
  IoIosGlobe,
  IoMdShirt,
  IoMdLaptop,
  IoMdPeople,   
  IoIosPeople,
  IoIosListBox,
  IoIosChatboxes,
}  from  "react-icons/io";
import { Link } from 'react-router-dom'

const MenuMobile = () => {
  return (
    <div className='menuMobile'>
        <Link to='/'>
          <span>
            <IoMdHome />
          </span>
        </Link>
        <Link to='/charts'>
          <span>
          < IoMdStats /> 
          </span>  
        </Link>
        <Link to='/clipboard'>
          <span>
          < IoIosClipboard />  
          </span>  
        </Link>
        <Link to='/purchaseOrder'>
          <span>
            <IoIosListBox />
          </span>  
        </Link>
        <Link to='/services'>
          <span>
            <IoMdLaptop />    
          </span>  
        </Link>
        <Link to='/products'>
          <span>
            <IoMdShirt />   
          </span>  
        </Link>
        <Link to='/customers'>
          <span>
          <IoMdPeople />  
          </span>  
        </Link>
        <Link to='/followers'>
          <span>
          <IoIosPeople /> 
          </span>  
        </Link>
        <Link to='/messages'>
          <span>
          <IoIosChatboxes />   
          </span>  
        </Link>
        <Link to='/companyPage'>
          <span>
          <IoIosGlobe />          
          </span>  
        </Link>
    </div>
  )
}

export default MenuMobile 