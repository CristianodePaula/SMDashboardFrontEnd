import './sProductPromotions.scss'

const ProductPromotions = () => {
  return (
    <div 
    className='productPromotions'
    >
        {/* <h1>Promoções</h1> */}
      <div>
        <div className='companyPromotionItem'>
          <img src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          <span>R$ 19,90</span>
        </div>
        <div className='companyPromotionItem'>
          <img src='https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          <span>R$ 14,90</span>
        </div>
        <div className='companyPromotionItem'>
          <img src='https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          <span>R$ 22,90</span>
        </div>
      </div>
    </div>
  )
}

export default ProductPromotions
