import './sLayoutBase.scss'
import { Outlet } from "react-router-dom";
import MenuTop from '../../components/Menus/MenuTop';
// import MenuMobile from '../../components/Menus/MenuMobile';
import MenuLeft from '../../components/Menus/MeuLeft';
import Tips from '../../components/Tips';

const LayoutBase = () => {

    return (
      <div>
        <MenuTop />
        {/* <MenuMobile /> */}
        <div className='layoutBase'>
          <MenuLeft />
          <Outlet />
          {/* <Tips /> */}
      </div>
    </div>
    )
}
export default LayoutBase