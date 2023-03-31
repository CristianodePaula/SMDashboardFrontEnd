import './sModalConfigUser.scss'

const ModalConfigUser = () => {
  return (
    <div className='modalConfigUser'>
        <input placeholder='Nome de Usuário'/>  
        <input placeholder='Email'/>
        <input placeholder='Senha'/>
        <button>Alterar</button>
    </div>
  )
}

export default ModalConfigUser
