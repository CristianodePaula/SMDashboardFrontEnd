import './sMenuTopLogo.scss'
import smLogo from '../../../../assets/smLogoTemp.png';

const MenuTopLogo = () => {
  return (
    <div className='menuTopLogo'>
        <img src={smLogo} />
        <h1>Social Market Company</h1>
    </div>
  )
}

export default MenuTopLogo
