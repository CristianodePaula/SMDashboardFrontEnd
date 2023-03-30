import DescriptionProduct from '../../../components/Product/DescriptionProduct'
import LefProduct from '../../../components/Product/LefProduct'
import RightProduct from '../../../components/Product/RightProduct'
import './sViewProduct.scss'

const ViewProduct = () => {
  return (
    <div className='viewProduct'>
      <div className='viewProdTop'>
        <LefProduct />
        <RightProduct />
      </div>
      <div>
      <DescriptionProduct />
      </div>
    
   </div>
  )
}

export default ViewProduct
