import Table from '../../components/Table'
import './sCustomers.scss'
import { dbTableBody } from "../../data";
import { dbTableHeader } from "../../data";

const Customers = () => {
  return (
    <div className='customers'>
           <Table theadData={dbTableHeader} tbodyData={dbTableBody} />
    </div>
  )
}

export default Customers
