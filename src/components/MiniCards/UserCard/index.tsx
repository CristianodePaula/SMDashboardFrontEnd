import './sUserCard.scss'

const UserCard = () => {
  return (
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
  )
}

export default UserCard
