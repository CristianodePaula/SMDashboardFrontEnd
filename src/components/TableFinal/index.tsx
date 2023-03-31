import { dataTabProd } from '../../data'
import './sTableFinal.scss'
import { Link } from 'react-router-dom'
import { 
  IoIosCreate,
  IoIosTrash,
  IoIosEye,
 } from "react-icons/io";

const TableFinal = ({name, email, imgURL}) => {
  return (
    <table>
      <tbody>
          <tr>
            <th>Imagem</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
          <tr>
            <td>
              <img src={imgURL.imgURL}/>
            </td>
            <td>{name.name}</td>
            <td>{email.email}</td>
            <td> 
            <Link to='/viewProduct'>
              <button>
                <IoIosEye />
              </button>
            </Link>
            <Link to='/newProduct'>
              <button> 
                <IoIosCreate />
              </button>
            </Link>
              <button> 
                <IoIosTrash />
              </button>
            </td>
          </tr>
      </tbody>
    </table>
  )
}

export default TableFinal