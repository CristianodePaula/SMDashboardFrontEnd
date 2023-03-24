import MenuCompany from '../../../components/Menus/MenuCompany'
import ProductBar from '../../../components/Page/ProductBar'
import ProductHeader from '../../../components/Page/ProductHeader'
import './sProductPage.scss'

const ProductPage = () => {
  return (
    <div className='productPage'>
      <MenuCompany />    
      <ProductBar />
      <ProductHeader />
      {/* <Promotions />
      <BestSellers />  
      <ProductList /> */}
    </div>
  )
}

export default ProductPage