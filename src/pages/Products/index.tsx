import Table from '../../components/Table'
import './sProducts.scss'
import { dbTableBody } from "../../data";
import { dbTableHeader } from "../../data";

const Products = () => {
  return (
    <div className='products'>
        <Table theadData={dbTableHeader} tbodyData={dbTableBody} />
    </div>
  )
}

export default Products
