import Table from '../../components/Table'
import './sServices.scss'
import { dbTableBody } from "../../data";
import { dbTableHeader } from "../../data";


const Services = () => {
  return (
    <div className='services'>
             <Table theadData={dbTableHeader} tbodyData={dbTableBody} />
    </div>
  )
}

export default Services


{/* <div className='servicesBox'>
        <form>
          <img src="" alt="background-services" />
          <input type="text" placeholder='Agendar Novo Serviço'/>
          <div>
            Serviços Agendados
          </div>
          <input type="text" placeholder='' />
          <input type="text" placeholder='' />
          <input type="text" placeholder='' />
          <button>Enviar</button>
        </form>
      </div> */}