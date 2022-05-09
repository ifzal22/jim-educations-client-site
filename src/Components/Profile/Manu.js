import React from "react";
import { items } from "./ManuItem";
import "./ProfileRoute.css";


function Manu({ isOpen, onChange }) {
  return (
      <>
    <div className={`Menu ${isOpen && "open"}`} >
      <span
    style={{marginTop:'0px'}}
      id="close-login-form" 
        className="material-icons  fas fa-times"
        onClick={() => onChange(false)}
      >
        close
      </span>
      
      <div 
      style={{marginTop:'-100px'}}
      className="Menu-items" id="header">

          <div class="user">
           <img src="https://i.ibb.co/cJH2Xyv/programming-1.jpg" alt="" />
           <h3 class="name">shaikh anas</h3>
        <p class="post">front end developer</p>
          </div>



        {items.map((item, index) => (
          <a href={item.itemLink} key={index}>
            {item.itemText}
          </a>
        ))}
      </div>
    </div></>
  );
}

export default Manu;