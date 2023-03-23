import './sMenuTopSearch.scss'
import {
  IoMdSearch
} from "react-icons/io";

const MenuTopSearch = () => {
  return (
    <div className='menuTopSearch '>
        <div className="search">
            <div>
                <IoMdSearch />
            </div>
            <input type="text" placeholder="Busca" />
        </div>      
    </div>
  )
}

export default MenuTopSearch
