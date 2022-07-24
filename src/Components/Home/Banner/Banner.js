import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import './Banner.css';


const Banner = () => {



    return (
        <div className='marg'>
            {/* <!-- home section starts  --> */}

<section className="home " id="home " >



   <div id="carouselExampleControls"  className="swiper  carousel slide  home-slider" data-bs-ride="carousel">

<div className="swiper-wrapper carousel-inner">   


<div className='carousel-item active '>
    
    
<div className="swiper-slide slide " style={{background:'url(https://media.istockphoto.com/photos/birds-eye-view-of-kabul-city-picture-id1386846681?b=1&k=20&m=1386846681&s=170667a&w=0&h=YmHJ6yZGUP0-rN0dhazr_7qPJzqKaqIUwR_4zRWSOsM=)no-repeat',backgroundSize:'auto'}}>
     <div className="content">
        <span>JALALABAD</span>
        <h3 style={{textShadow: ' 0 0 3px #FF0000, 0 0 5px #0000FF'}}>ISLAMIC SITE </h3>

        <a href="#" className="btn">get started</a>
     </div>
  </div>
</div>

<div className='carousel-item '>
<div className="swiper-slide slide " style={{background:'url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Cbl9RzQQu_Vy32Xgrimq8wHaE1%26pid%3DApi&f=1)no-repeat',backgroundSize:'auto%'}}>
     <div className="content">
        <span>JALALABAD</span>
        <h3>ISLAMIC SITE</h3>
        <a href="#" className="btn">get started</a>
     </div>
  </div>
</div>
 



<div className='carousel-item '>
<div className="swiper-slide slide" style={{background:'url(https://media.istockphoto.com/photos/kabul-picture-id836128658?k=20&m=836128658&s=612x612&w=0&h=2IAjBKSbWHFvH9gAagK0wGWIVfe4WmSEz1mOQ2zPmaQ=)no-repeat',backgroundSize:'auto%'}}>
     <div className="content">
        <span>JALALABAD</span>
        <h3>ISLAMIC SITE</h3>
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