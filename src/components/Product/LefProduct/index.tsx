import './sLefProduct.scss'
import {useState} from 'react'

const LefProduct = () => {

    const [selectImg, setSelectImg]= useState(0);

    const images = [
        'https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2220315/pexels-photo-2220315.jpeg?auto=compress&cs=tinysrgb&w=600',
        'https://images.pexels.com/photos/2220320/pexels-photo-2220320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]    

  return (
    <div className='leftProduct'>
        <div className='images'>
          <img src={images[0]} onClick={e=> setSelectImg(0)} />
          <img src={images[1]} onClick={e=> setSelectImg(1)} />
          <img src={images[2]} onClick={e=> setSelectImg(2)} />
        </div>
        <div className='mainImg'>
          <img src={images[selectImg]}/>
        </div>
    </div>
  )
}

export default LefProduct
