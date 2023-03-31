import './sCompanyLocation.scss'
import googleMap from '../../../assets/GoogleMap.webp';
import { 
  MdPhoneInTalk, 
  MdEmail, 
  MdStreetview, 
  MdOutlineAvTimer 
} from "react-icons/md";

const CompanyLocation = () => {
  return (
    <div  className='companyLocation'>
        <div>
            <h1>Onde nos encontrar</h1>
            <div className='companyLocationIcons'>
              <div>
               <MdPhoneInTalk /> 
              <span> 31 98461 16579 </span>
              </div>
              <div>
                <MdEmail />   
                <span> fulanodetal@gmail.com </span>
              </div>
              <div>
                <MdStreetview />
                <span> Av Olimpia 1520 - MT / Grécia </span>
              </div>
              <div>
                <MdOutlineAvTimer /> 
                <span>  Horario: 12 as 22horas </span>
              </div>
           </div>

          </div>
          
        <div>
          <img src={googleMap} />
        </div>
    </div>
  )
}

export default CompanyLocation
