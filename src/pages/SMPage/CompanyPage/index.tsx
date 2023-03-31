import './sCompanyPage.scss'
import MenuCompany from '../../../components/Menus/MenuCompany';
import CompanyAbout from '../../../components/Page/CompanyAbout';
import CompanyLocation from '../../../components/Page/CompanyLocation';

const CompanyPage = () => {
  return (
    <div className='companyPage'>
     <div className='companyPageBox'>
        <MenuCompany />
        <img src='https://images.pexels.com/photos/273250/pexels-photo-273250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <CompanyAbout />
        <CompanyLocation />
     </div>
    </div>
  )
}

export default CompanyPage
