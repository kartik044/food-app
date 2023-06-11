import React from 'react'
function Card( props){
    return(
      <>
      
      <div className="cards">
        <div className="card" >
          <img src={props.imglink} alt="mypic"  className='card__img'/>
          <div className='card_info'>
            <span className='class_category'>{props.pfname}</span>
            <h3 className='card_title'>{props.title}</h3>
            <a href={props.link} target='_blank'></a>
            <button>watch now</button>
          </div>
    
    
        </div>
        
      </div> 
      </>
  
    )
  };
  export default Card;
