import React from 'react';
import './Contact.css';

const Contach = () => {
    return (
        <div className='mt-5'>
            
<section className="contact container" id="contact">

<h1 className="heading"><span>contact</span> us</h1>

<div className="row">


<iframe className='map' title="This is a unique title" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14475.703608204256!2d91.9150362!3d24.900509!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x115fd11a9c8cbfcb!2sJalalabad%20International%20Madrasah!5e0!3m2!1sen!2sbd!4v1643797395789!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>


 <form  action="">
        <h3>get in touch</h3>
        <input type="text" placeholder="your name" className="box"/>
        <input type="email" placeholder="your email" className="box"/>
        <input type="tel" placeholder="subject" className="box"/>
        <textarea placeholder="your message" className="box" cols="30" rows="10"></textarea>
        <input type="submit" value="send message" className="btn"/>
    </form>


</div>

</section>
        </div>
    );
};

export default Contach;