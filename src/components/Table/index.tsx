import { dataTabProd } from '../../data'
import './sTable.scss'
import { Link } from 'react-router-dom'
import { 
  IoIosCreate,
  IoIosTrash,
  IoIosEye,
 } from "react-icons/io";

const Table = () => {
  return (
    <div className='table'>
      <Link to='/newProduct'>
        <button>Criar</button>
      </Link>
      <table>
      <tbody>
        <tr>
          <th>Imagem</th>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
        {dataTabProd.map((item) => (
          <tr key={item.id}>
            <td style={{ 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '90%'}}>
              <img src={item.imgProd} />
            </td>
            <td>{item.name}</td>
            <td>{item.desc}</td>
            <td>R${item.price},00</td>
            <td>
            <Link to='/viewProduct'>
              <button>
                <IoIosEye />
              </button>
            </Link>
            <Link to='/editProduct'>
              <button> 
                <IoIosCreate />
              </button>
            </Link>
              <button> 
                <IoIosTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Table