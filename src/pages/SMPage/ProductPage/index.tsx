import MenuCompany from '../../../components/Menus/MenuCompany'
import ProductBar from '../../../components/Page/ProductBar'
import ProductHeader from '../../../components/Page/ProductHeader'
import ProductPromotions from '../../../components/Page/ProductPromotions'
import ProductTopList from '../../../components/Page/ProductTopList'
import './sProductPage.scss'

const ProductPage = () => {
  return (
    <div  className='productPage'>
      <div className='productPageBox'>
        <MenuCompany />     
        <ProductBar /> 
        <ProductHeader /> 
        <ProductPromotions /> 
        <ProductTopList />
      </div>
    </div>
  )
}

export default ProductPage