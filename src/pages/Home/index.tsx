import Widget from '../../components/Widget'
import './sHome.scss'

const Home = () => {
  return (
    <div className='home '>
      <div>
        <Widget type="Usuários"/>
        <Widget type="Ordens"/>
        <Widget type="Compras"/>
        <Widget type="Balanço"/>
      </div>
    </div>
  )
}

export default Home 
