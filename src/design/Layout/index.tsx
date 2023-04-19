import './sLayout.scss'
import { Outlet } from "react-router-dom";
import MenuTop from '../../components/Menus/MenuTop';
import MenuMobile from '../../components/Menus/MenuMobile';
import MenuLeft from '../../components/Menus/MeuLeft';
import {useContext} from 'react';
import { DarkModeContext } from '../../context/themeMode';

const Layout = () => {

  const { darkMode } = useContext(DarkModeContext);

  console.log(darkMode)

    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <MenuTop />
        <MenuMobile />
        <div className='layout'>
          <MenuLeft />
          <Outlet />
      </div>
    </div>
    )
}
export default Layout