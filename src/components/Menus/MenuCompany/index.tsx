import './sMenuCompany.scss'
import { Link } from 'react-router-dom'
import { 
  IoIosEye,
  IoIosCreate
} from "react-icons/io"

const MenuCompany = () => {
  return (
    <div className='menuCompany'>
      <div>
        <Link to='/companyPage'> 
          <span> Home </span> 
        </Link>
        <Link to='/productPage'> 
          <span> Produtos </span> 
        </Link> 
        <Link to='/schedulingPage'>
          <span>Agendamento</span>
        </Link>
      </div>
      <div className='menuCompIcon'>
        <IoIosEye/> <span> Ver </span>
        <IoIosCreate/> <span> Editar </span>
      </div>      
    </div>
  )
}

export default MenuCompany
