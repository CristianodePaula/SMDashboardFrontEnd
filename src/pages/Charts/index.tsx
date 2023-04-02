import './sCharts.scss'
import Widget from '../../components/Widget'
import BarChartNoPadding from '../../components/Charts/BarChartNoPadding'
import SimpleAreaChart from '../../components/Charts/SimpleAreaChart'
import SimpleLineChart from '../../components/Charts/SimpleLineChart'

const Charts = () => {
  return (
    <div className='charts'>
      <div className='chartsWidget'>
        <Widget title="Usuários"/>
        <Widget title="Ordens"/>
        <Widget title="Compras"/>
        <Widget title="Balanço"/>
      </div>
      <div className='chartsBox'>
        <div>
          <BarChartNoPadding />
          <SimpleAreaChart />
        </div>
        <div>
          <SimpleLineChart />
        </div>
      </div>
    </div>
  )
}

export default Charts
