import './sCustomers.scss'
import TableFinal from '../../components/TableFinal';
import { dataTeste } from '../../data';
import Table from '../../components/Table';

const Customers = () => {
  return (
    <div className='customers'>
      {/* {dataTeste.map(teste => 
        <TableFinal 
          name={teste} 
          email={teste}
          imgURL={teste}
        />
      )} */}
    <Table />
  </div>
  )
}

export default Customers