import './sRightProduct.scss'
import {useState} from 'react'
import { 
  IoIosAddCircle, 
  IoIosHeartEmpty,
  IoMdGitCompare
} from "react-icons/io";

const RightProduct = () => {

  const [quantity, setQuantity] = useState(1);

  return (
    <div className='rightProduct'>
      <div><h1>Camisa B T-Shirt</h1>
      <h3>R$ 19,90</h3>
      <p>Loren Ipsum da Descrição do Produto</p>
    </div>
      <div className='quantity'>
        <button onClick={()=>setQuantity((prev)=> (prev === 1 ? 1 : prev-1))}>-</button>
        {quantity}
        <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
      </div>  
      <button className='add'>
        <IoIosAddCircle /> Adicione ao Carrinho
      </button>
      <div className='links'>
      <div className='item'>
        <IoIosHeartEmpty /> Favorito
      </div>
      <div className='item'>
        <IoMdGitCompare /> Compare
      </div>
      </div>
    </div>
  )
}

export default RightProduct
