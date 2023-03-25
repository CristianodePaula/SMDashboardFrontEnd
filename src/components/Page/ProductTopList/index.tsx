import './sProductTopList.scss'

const ProductTopList = () => {
  return (
    <div className='productTopList'>
      {/* <h1>Mais Visitados</h1> */}
      <div>
        <div className='companyBestSellersItem'>
          <img src='https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          <span>Kit Woman 200</span>
        </div>

        <div className='companyBestSellersItem'>
          <img src='https://images.pexels.com/photos/1667088/pexels-photo-1667088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          <span>Creme Alfa 5</span>
        </div>

        <div className='companyBestSellersItem'>
          <img src='https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          <span>Isqueiro ProFire</span>
        </div>
  
        <div className='companyBestSellersItem'>
          <img src='https://images.pexels.com/photos/341523/pexels-photo-341523.jpeg?auto=compress&cs=tinysrgb&w=600'/>
          <span>Smarphones View</span>
        </div>

      </div>
    </div>
  )
}

export default ProductTopList
