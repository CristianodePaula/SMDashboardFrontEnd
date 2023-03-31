import MenuCompany from '../../../components/Menus/MenuCompany'
import SchedulingHeader from '../../../components/Page/SchedulingHeader'
import SchedulingInput from '../../../components/Page/SchedulingInput'
import SchedulingList from '../../../components/Page/SchedulingList'
import './sSchedulingPage.scss'

const SchedulingPage = () => {
  return (
    <div className='schedulingPage'>
      <div  className='schedulingPageBox'>
        <MenuCompany />
        <SchedulingHeader />
        <SchedulingInput />
        <SchedulingList />
      </div>
    </div>
  )
}

export default SchedulingPage