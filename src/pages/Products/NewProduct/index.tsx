import './sNewProduct.scss'
import { FaPlus } from 'react-icons/fa'

const NewProduct = () => {
  return (
    <div className='newProduct'>
      <div>
        <label htmlFor="fileInput">
          <FaPlus /> Adicionar imagens
        </label>
        <input
          className='newProdImgInput'
          type='file'
          id='fileInput'
        />
        <input type="text" placeholder='Nome do Produto'/>
        <input type="text" placeholder='Preço'/>
        <input type="text" placeholder='Descrição Curta'/>
        <input type="text" placeholder='Descrição Longa'/>
        <button> Salvar </button>
      </div>
    </div>
  )
}

export default NewProduct
