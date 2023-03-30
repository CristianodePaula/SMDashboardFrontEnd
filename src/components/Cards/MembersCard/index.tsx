import UserCard from '../UserCard'
import './sLastMembersCard.scss'
import '../UserCard/sUserCard.scss'

const MembersCard = () => {
  return (
    <div className='lastMembersCard'>
      <h1> Gestores </h1>
      {/* <div>   
        <UserCard  />
        <UserCard  />
        <UserCard  />
        <UserCard  />
      </div> */}
        
        {/* gambiarra para visualização
        com 
        */}

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr'
      }}>
      <div className='userCard'>
      <img src='https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg' />
      <div className='userCardBox'>
        <div>
          <span style={{fontWeight: '800'}}>Nome:</span>
          <span>Fulano</span>  
        </div>
        <div>
          <span style={{fontWeight: '800'}}>Cargo:</span>
          <span>CEO</span>
        </div>
        <div>
          <span style={{fontWeight: '800'}}>Permissão:</span>
          <span>Total</span>   
        </div>
      </div>
    </div>

    <div className='userCard'>
      <img src='https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      <div className='userCardBox'>
        <div>
          <span style={{fontWeight: '800'}}>Nome:</span>
          <span>Sandra</span>  
        </div>
        <div>
          <span style={{fontWeight: '800'}}>Cargo:</span>
          <span>RH</span>
        </div>
        <div>
          <span style={{fontWeight: '800'}}>Permissão:</span>
          <span>Medio</span>   
        </div>
      </div>
    </div>

    <div className='userCard'>
      <img src='https://images.pexels.com/photos/920377/pexels-photo-920377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      <div className='userCardBox'>
        <div>
          <span style={{fontWeight: '800'}}>Nome:</span>
          <span>Jessie</span>  
        </div>
        <div>
          <span style={{fontWeight: '800'}}>Cargo:</span>
          <span>CEO-2</span>
        </div>
        <div>
          <span style={{fontWeight: '800'}}>Permissão:</span>
          <span>Total</span>   
        </div>
      </div>
    </div>


    <div className='userCard'>
      <img src='https://images.pexels.com/photos/762527/pexels-photo-762527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      <div className='userCardBox'>
        <div>
          <span style={{fontWeight: '800'}}>Nome:</span>
          <span>Joanan</span>  
        </div>
        <div>
          <span style={{fontWeight: '800'}}>Cargo:</span>
          <span>Estagiário</span>
        </div>
        <div>
          <span style={{fontWeight: '800'}}>Permissão:</span>
          <span>Mínimo</span>   
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default MembersCard
