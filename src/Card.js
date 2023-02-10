 import React from 'react'
 import "./card.css";
 function Card({image,HomeName}) {
   return (
     <div className="Card">
        <div className="card1">
       <img src={image}></img>
       <h2>{HomeName}</h2>
       </div>
    
     </div>
   )
 }
 
 export default Card;
 