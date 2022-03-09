import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Home/Header/Header';
import useCart from '../../Hooks/UseCart';
import { addToDb } from '../../Utilitis/FakeDb';


const AdmitionsDetails = () => {

    const {booking} = useParams();
    const [singleData, setSingleData] = useState({});
const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart(products);

    useEffect(() => {
        fetch(`http://localhost:5000/admition/${booking}`)
            .then(res => res.json())
            .then(data =>{
                setProducts(data);
                console.log(data);
                setSingleData(data)
            })
    }, [])



const modal = ()=>{
    alert(` ${singleData?.admition?.title} This Booking ADD`);
    handleAddToCart(singleData)
}


const handleAddToCart = (product) => {

        
    console.log(product)
    const exists = cart.find(pd => pd._id === product._id);
    let newCart = [];
    if (exists) {
        const rest = cart.filter(pd => pd._id !== product._id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, product];
    }
    else {
        product.quantity = 1;
        newCart = [...cart, product];
    }
    setCart(newCart);
    // save to local storage (for now)
    addToDb(product._id);

}

    return (
<>
        <Header></Header>
        <div className='marg '>
                    <div className='BOOK mt-8 pt-5 mx-auto'>
                   
             
                   
                   
                   <section className="vehicles container " id="vehicles">
                   
                   <h1 style={{color:'white' , textShadow: '2px 2px 4px #000000'}} className="heading ">   <span style={{color:'yellow'}}>{singleData?.admition?.title} </span> </h1>
                   
                   <div className="swiper vehicles-slider align-content-center ">
                   
                       <div className="swiper-wrapper row p-3 BG justify-content-center align-content-center">
        
                           <div className='col-md-6 mx-auto p-2 '>
                        <img style={{width:'50%',borderRadius:'10px'}} src={`data:image/jpeg;base64,${singleData?.image}`}  alt=""/>
                           </div>
                           <div className='col-md-6 container'>
                        <div>
                        <h1 style={{color:'yellow' , textShadow: '2px 2px 4px #000000'}}>{singleData?.admition?.title} </h1>
                           <p>{singleData?.admition?.about}</p>
                        </div>
                     <button onClick={modal} className='btn'>Booking</button>

{/* <!-- Modal --> */}

                           </div>
                   
                   
                    
                       
        
                       
                       
                   
                   
                         
                   
                       </div>
                   
                     
                   
                   </div>
                   
                   </section>
                   
                   
                   
                   
                                
                             
                           </div>
                </div></>
    );
};

export default AdmitionsDetails;