import './sLayoutBase.scss'
import { Outlet } from "react-router-dom";
import MenuTop from '../../components/Menus/MenuTop';
import MenuMobile from '../../components/Menus/MenuMobile';
import MenuLeft from '../../components/Menus/MeuLeft';
import {useContext} from 'react';
import { DarkModeContext } from '../../context/themeMode';

const LayoutBase = () => {

  const { darkMode } = useContext(DarkModeContext);

  console.log(darkMode)

    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <MenuTop />
        <MenuMobile />
        <div className='layoutBase'>
          <MenuLeft />
          <Outlet />
      </div>
    </div>
    )
}
export default LayoutBase