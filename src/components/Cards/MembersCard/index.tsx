import UserCard from '../UserCard'
import './sLastMembersCard.scss'
import '../UserCard/sUserCard.scss'

const MembersCard = () => {
  return (
    <div className='lastMembersCard'>
      <h1> Gestores </h1>
      <div>   
        <UserCard  />
        <UserCard  />
        <UserCard  />
        <UserCard  />
      </div>
    </div>
  )
}

export default MembersCard
