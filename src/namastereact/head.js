import React from 'react'
import reactDom from 'react-dom'
import img1 from "./index.png";





function Head() {
 
 return (
      <>
        <div className="head">
          <img src={img1} alt="" className="logo" />
          <ul>
            <li>Home </li>
            <li>About us </li>
            <li>Contact us </li>
            <li>Near You </li>
          
          </ul>
        </div>
       
        
       
      </>
    );
  }
  export default Head;
  