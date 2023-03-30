import './sAddCompForm.scss'
import { FaPlus } from 'react-icons/fa'

const AddCompForm = () => {
  return (
    <form>
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
    <input type="textArea" placeholder='Descrição Longa'/>
    <button> Salvar </button>
  </form>
  )
}

export default AddCompForm
