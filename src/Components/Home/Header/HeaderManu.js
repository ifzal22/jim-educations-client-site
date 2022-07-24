import React from "react";
import { items } from "./ManuItem";
import "./ProfileRouteHeader.css";
 

function  Manu({ isOpen, onChange }) {
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