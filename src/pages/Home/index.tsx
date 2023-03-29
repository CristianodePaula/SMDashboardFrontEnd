import './sHome.scss'
import Welcome from '../../components/Cards/Welcome'
import LastMembersCard from '../../components/Cards/LastMembersCard'
import NewUsersCard from '../../components/Cards/NewUserCard'
import CommentsCard from '../../components/Cards/CommentsCard'


const Home = () => {
  return (
    <div className='home'>
      <div className='homeUsers'>
        <Welcome />
        <LastMembersCard />
      </div>
      <div className='homeSocial'>   
        <NewUsersCard title='Novos Clientes'/>
        <NewUsersCard title='Novos Seguidores'/>
        <CommentsCard />
      </div>
    </div>
  )
}

export default Home
