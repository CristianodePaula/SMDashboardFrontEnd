import ProdImgCard from '../../../components/Cards/ProdImgCard'
import AddCompForm from '../../../components/Forms/AddCompForm'
import './sNewProduct.scss'

const NewProduct = () => {
  return (
    <div className='newProduct'>
      <div className='div'>
        <AddCompForm />
        <ProdImgCard />
      </div>    
    </div>
  )
}

export default NewProduct
 
