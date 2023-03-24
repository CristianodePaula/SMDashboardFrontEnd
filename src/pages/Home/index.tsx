import './sHome.scss'
import Widget from '../../components/Widget'
import BarChartNoPadding from '../../components/Charts/BarChartNoPadding'
import SimpleAreaChart from '../../components/Charts/SimpleAreaChart'
import SimpleLineChart from '../../components/Charts/SimpleLineChart'

const Home = () => {
  return (
    <div className='home'>
      <div>
        <Widget type="Usuários"/>
        <Widget type="Ordens"/>
        <Widget type="Compras"/>
        <Widget type="Balanço"/>
      </div>
      <div className='homeCharts'>
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <BarChartNoPadding />
        <SimpleAreaChart />
        </div>
          <SimpleLineChart />
      </div>
    </div>
  )
}

export default Home 
