import './sSchedulingContact.scss'
import googleMap from '../../../assets/GoogleMap.webp';

const SchedulingContact = () => {
  return (
    <div className='schedulingContact'>
        <h3>Resumo</h3>
        <div className='compShedContactBox'>
            <div>
              <span> 
                Serviço de dentista, marcado para o consultório na rua
                Fulano Beltrano 500, as 17 horas, dia 15/08/2023 no valor
                de $ 200. 
              </span>
              <button>Concluir</button>         
            </div>
            <img src={googleMap} />
        </div>  
    </div>
  )
}

export default SchedulingContact 
