import React from 'react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './Banner.css';


const Banner = () => {



    return (
        <div>
            {/* <!-- home section starts  --> */}

<section className="home " id="home " >



   <div id="carouselExampleControls"  className="swiper  carousel slide  home-slider" data-bs-ride="carousel">

<div className="swiper-wrapper carousel-inner">   


<div className='carousel-item active'>
    
    
<div className="swiper-slide slide " style={{background:'url(https://i.ibb.co/wMNNfn7/53803542-2305865692777836-4500170577020977152-n.jpg)no-repeat'}}>
     <div className="content">
        <span>JALALABAD</span>
        <h3>INTERNATIONAL MADRASHA </h3>

        <a href="#" className="btn">get started</a>
     </div>
  </div>
</div>

<div className='carousel-item '>
<div className="swiper-slide slide " style={{background:'url(https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.6435-9/57649160_2371994326164972_599088585638936576_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHczi3V2hK8Zlpq3ddgCi6J57Y_4diDhbDntj_h2IOFsKlvpj27X0c4froVEocSjaql3Gt9FaLJzmEoV0K7UaUk&_nc_ohc=3fogtwUoXD8AX9TJkBl&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT9mJZMSvI1i9_LjHCkvTslHFX3gASWZN7YfpG8TA2NhsQ&oe=621FE9F0)no-repeat'}}>
     <div className="content">
        <span>JALALABAD</span>
        <h3>INTERNATIONAL MADRASHA </h3>
        <a href="#" className="btn">get started</a>
     </div>
  </div>
</div>
 



<div className='carousel-item '>
<div className="swiper-slide slide" style={{background:'url(https://scontent.fzyl1-1.fna.fbcdn.net/v/t1.6435-9/58373350_2381949405169464_667049571150462976_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeEfgmY74cNEPIYyMamTT7KNo86QzAoFlQKjzpDMCgWVAm8dOAe9SDIf1U238X_lgDLVxKbRmvEILX8ab2nk6GQM&_nc_ohc=bNSki14WvusAX9e9cve&_nc_ht=scontent.fzyl1-1.fna&oh=00_AT_zKBZQPjZPskTC5L3kmE2iFN45Cg--ztk1No8VVk7SVw&oe=6220EF24)no-repeat'}}>
     <div className="content">
        <span>JALALABAD</span>
        <h3>weekly orientation class</h3>
        <a href="#" className="btn">get started</a>
     </div>
  </div>
</div>


</div>






 {/* <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div> */}
 


<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon swiper-button-prev" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon swiper-button-next" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
   </div>

</section>
        </div>
    );
};

export default Banner;