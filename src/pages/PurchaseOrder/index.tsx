import Table from '../../components/Table'
import './sPurchaseOrder.scss'
import { dbTableBody } from "../../data";
import { dbTableHeader } from "../../data";

const PurchaseOrder = () => {
  return (
    <div className='purchaseOrder'>
           <Table theadData={dbTableHeader} tbodyData={dbTableBody} />
    </div>
  )
}

export default PurchaseOrder
