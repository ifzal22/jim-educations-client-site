import React, { useState } from 'react';
import Manu from './Manu';
import './ProfileRoute.css';

const ProfileRoute = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
    {/* MANU */}
<div className='m-5' >

<span className="material-icons menu-btn fas fa-bars p-4" id="menu-btn" onClick={() => setIsOpen(true)}>
       <span className='p-4'>MENU</span>
      </span>

      <Manu isOpen={isOpen} onChange={setIsOpen}></Manu>
</div>







<h1>IFZA</h1>
</>
    );
};

export default ProfileRoute;