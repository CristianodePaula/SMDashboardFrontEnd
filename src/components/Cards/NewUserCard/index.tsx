import './sNewUsersCard.scss'

const NewUsersCard = ({title}) => {
  return (
 <div className='newUsersCard'>
    <h5>{title}</h5>
      <div>
        <img src='https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <span>Jessy Oliver</span>
      </div>
      <div>
        <img src='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <span>Paul Sebatian</span>
      </div>
      <div>
        <img src='https://images.pexels.com/photos/762527/pexels-photo-762527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <span>Hulk Over</span>
      </div>
    
      <div>
        <img src='https://images.pexels.com/photos/762527/pexels-photo-762527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <span>Hulk Over</span>
      </div>      
      {/* <h3>Ver todos</h3> */}
  </div>
    )
}

export default NewUsersCard
