import './sSchedulingInput.scss'
import {
    RiServiceFill, 
    RiMapPin2Fill,
    RiCalendarCheckFill, 
    RiTimeFill,
    RiMoneyDollarCircleFill
} from "react-icons/ri";

const SchedulingInput = () => {
  return (
    <div className='schedulingInput '>
        <h3>Agendamento</h3>   
        <div className='companySchedulingService'> 
            <div>
                <RiServiceFill />
                <span> Serviço </span>
            </div>
            <div>
                <RiMapPin2Fill />
                <span> Local </span>
            </div>
            <div>
                <RiCalendarCheckFill />
                <span> Data </span>
            </div>
            <div>
                <RiTimeFill />
                <span> Horário </span>
            </div>
            <div>
                <RiMoneyDollarCircleFill />
                <span> Valor </span>
            </div>
            <button>Agendar</button>
        </div>
    </div>
  )
}

export default SchedulingInput
