import './sProductBar.scss'

const ProductBar = () => {
  return (
    <div className='productBar'>
      <img
          src='https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
          alt='logo'
          />
        <input placeholder='Busque na empresa'/> 
        <div></div>
    </div>
  )
}

export default ProductBar
