import './sCommentsCard.scss'

const CommentsCard = () => {
  return (
<div className='commentsCard'>
    <h5>Comentários Recentes</h5>
       <div className='modalNotUser'>
        <img src='https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <div>
          <span>Camila</span>
          <span> Voce sabe o que está...</span>
          <span>2 horas atrás</span>
        </div>
      </div>
      <div className='modalNotUser'>
        <img src='https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <div>
          <span>Luiz e Lara</span>
          <span> Vendeu um novo produto </span>
          <span>2 horas atrás</span>
        </div>   
      </div>
    </div>
    )
}

export default CommentsCard