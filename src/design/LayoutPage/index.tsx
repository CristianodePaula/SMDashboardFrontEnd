import './sLayout.scss'
import '../theme/theme.scss'
import { DarkModeContext } from '../../context/themeMode';
import {useContext} from 'react';
import { Outlet } from "react-router-dom";
import MenuTop from '../../components/Menus/MenuTop';
import MenuMobile from '../../components/Menus/MenuMobile';
import MenuLeft from '../../components/Menus/MeuLeft';
import Tips from '../../components/Tips';


const LayoutPage = () => {

  const { darkMode } = useContext(DarkModeContext);

  console.log(darkMode)

    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`}>
        <MenuTop />
        {/* <MenuMobile />  */}
        <div className='layout1' style={{ display: 'flex'}}>
          <MenuLeft />
          <Outlet />
          <Tips />
        </div>
      </div>
    )
}
export default LayoutPage