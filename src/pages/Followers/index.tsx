import Table from '../../components/Table'
import './sFollowers.scss'
import { dbTableBody } from "../../data";
import { dbTableHeader } from "../../data";

const Followers = () => {
  return (
    <div className='followers'>
           <Table theadData={dbTableHeader} tbodyData={dbTableBody} />
    </div>
  )
}

export default Followers
