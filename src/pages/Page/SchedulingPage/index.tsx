import MenuCompany from '../../../components/Menus/MenuCompany'
import SchedulingContact from '../../../components/Page/SchedulingContact'
import SchedulingHeader from '../../../components/Page/SchedulingHeader'
import SchedulingInput from '../../../components/Page/SchedulingInput'
import SchedulingList from '../../../components/Page/SchedulingList'
import SchedulingService from '../../../components/Page/SchedulingService'
import './sSchedulingPage.scss'

const SchedulingPage = () => {
  return (
    <div className='schedulingPage'>
      <MenuCompany />
      <SchedulingHeader />
      <SchedulingService />
      <SchedulingInput />
      <SchedulingList />
      <SchedulingContact />
    </div>
  )
}

export default SchedulingPage