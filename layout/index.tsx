import './sLayout.scss'
import { Outlet } from "react-router-dom";
import MenuTop from '../src/components/Menus/MenuTop';
import MenuMobile from '../src/components/Menus/MenuMobile';
import MenuLeft from '../src/components/Menus/MeuLeft';

const Layout = () => {

    return (
      <div>
        <MenuTop />
        {/* <MenuMobile /> */}
        <div className='layout' style={{display: 'flex'}}>
          <MenuLeft />
          <Outlet />
      </div>
    </div>
    )
}
export default Layout