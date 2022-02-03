import React from 'react';
import './Branch.css';

const Branch = () => {
    return (
        <div className=' mx-auto BGC'>
          <section className="icons-container w-100 container">

<div className="icons">
<i class="fas fa-school"></i>
    <div className="content">
        <h3>3+</h3>
        <p>branches</p>
    </div>
</div>

<div className="icons">
<i class="far fa-address-card"></i>
    <div className="content">
        <h3>100+</h3>
        <p>class</p>
    </div>
</div>

<div className="icons">
    <i className="fas fa-users"></i>
    <div className="content">
        <h3>320+</h3>
        <p>happy students</p>
    </div>
</div>



</section>

        </div>
    );
};

export default Branch;