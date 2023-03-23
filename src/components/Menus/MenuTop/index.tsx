import './sMenuTop.scss'
import MenuTopLogo from './MenuTopLogo'
import MenuTopSearch from './MenuTopSearch'
import MenuTopModals from './MenuTopModals'

const MenuTop = () => {
  return (
    <div className='menuTop'>
      <MenuTopLogo />
      <MenuTopSearch />
      <MenuTopModals />
    </div>
  )
}

export default MenuTop
