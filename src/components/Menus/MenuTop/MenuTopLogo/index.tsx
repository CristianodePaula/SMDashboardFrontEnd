import './sMenuTopLogo.scss'
import smLogo from '../../../../assets/smLogoTemp.png';

const MenuTopLogo = () => {
  return (
    <div className='menuTopLogo'>
        <img src={smLogo} />
        <h1>Social Market</h1>
        <h1>Company</h1>
    </div>
  )
}

export default MenuTopLogo
