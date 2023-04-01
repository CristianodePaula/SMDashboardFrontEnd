import { Link } from 'react-router-dom'
import { 
  IoIosCreate,
  IoIosTrash,
  IoIosEye,
 } from "react-icons/io";

const TableBody = ({name, email, imgURL}) => {
    return (
        <tr>
            <td style={{display: 'flex', alignItems: 'center'}}>
              <img src={imgURL.imgURL}/>
              <td>{name.name}</td>
            </td>
            <td>{email.email}</td>
            <td> 
            <Link to='/viewProduct'>
              <button>
                <IoIosEye />
              </button>
            </Link>
            <Link to='/newProduct'>
              <button> 
                <IoIosCreate />
              </button>
            </Link>
              <button> 
                <IoIosTrash />
              </button>
            </td>
          </tr>
    );
};

export default TableBody;