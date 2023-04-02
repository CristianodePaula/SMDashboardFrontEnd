import './sTable.scss'
import { Link } from "react-router-dom";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

const Table = ({ theadData, tbodyData, customClass }) => {
    return (
        <div className='table'>
        <Link to='/newProduct'>
          <button>Criar</button>
        </Link>
        <table className={customClass}>
            <thead>
                <tr>
                    {theadData.map((h) => {
                        return <TableHead key={h} item={h} />;
                    })}
                </tr>
            </thead>    
            <tbody>
              {tbodyData.map(tbody => 
                <TableBody 
                name={tbody} 
                email={tbody}
                imgURL={tbody}
                desc={tbody}
                price={tbody}
            />
            )}  
            </tbody>
        </table>
        </div>    
    );
};

export default Table;

// {tbodyData.map((item) => {
//     return <TableBody key={item.id} data={item.items} />;
// })}
