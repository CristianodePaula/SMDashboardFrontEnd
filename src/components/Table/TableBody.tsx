import { Link } from 'react-router-dom'
import { 
  IoIosCreate,
  IoIosTrash,
  IoIosEye,
 } from "react-icons/io";

const TableBody = ({imgURL, name, email, desc, price}) => {
    return (
        <tr>
            <td>
              <div>
                <img src={imgURL.imgURL}/>
                <td>{name.name}</td>
              </div>
            </td>
            <td>{email.email}</td>
            <td>{desc.desc}</td>
            <td>{price.price}</td>
            <td>
              <div style={{justifyContent: 'center'}} >
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
              <Link to=''>
                <button> 
                  <IoIosTrash />
                </button>
              </Link>
              </div>
            </td>
        </tr>
    );
};

export default TableBody;


// const TableBody = ({ data }) => {
//     return (
//         <tr>
//             {data.map((item) => {
//                 return <td key={item}>{item}</td>;
//             })}
//         </tr>
//     );
//   };
  
//   export default TableBody;