import './sCompanyContact.scss'

const CompanyContact = () => {
  return (
    <div className='companyContact'>
      <div>
        <h1>Contato pela SM</h1>
        <img src='https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      </div>
      <div>
        <input placeholder='Nome' />
        <input type='email' placeholder='Email'/>    
        <input type='textarea' placeholder='Escreva sua mensagem'/>           
        <button>Enviar</button>
      </div>
    </div>
   
  )
}

export default CompanyContact

