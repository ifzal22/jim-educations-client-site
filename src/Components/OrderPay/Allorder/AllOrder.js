import React, { useEffect, useState } from 'react';
import Header from '../../Home/Header/Header';
import { getStoredCart, removeFromDb } from '../../Utilitis/FakeDb';
import AllOrder2 from '../AllOrder2';
import './AllOrder.css';

const AllOrder = () => {
   
    const [products, setProducts] = useState([]);

  
    const [card , setCard] =useState([]);

    const [specificDetail, setSpecificDetail]=useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/admition')
        .then(res=>res.json())
        .then(data =>{
            
     
            setProducts(data);
// console.log(data);
         } )},[])

// local storage 
useEffect(() => {
    if (products.length) {

        const savedCart = getStoredCart();
        // console.log(savedCart);
        const storedCart = [];
        for (const _id in savedCart) {
            const addedProduct = products.find(product => product._id === _id);
            
            if (addedProduct) {
                const quantity = savedCart[_id];
                addedProduct.quantity = quantity;
                storedCart.push(addedProduct);
            }
        }
        setCard(storedCart);
    }






}, [products])
// console.log(products);


// FILTER ITEM

useEffect(()=>{
    if(products.length >0){


        const matchData = products.filter(p=> p.quantity > 0 )
        setSpecificDetail(matchData)
        
       /*  if( products.quantity > 0){
            
           

const matchData = products.filter(p =>p.quantity === 1)



        } */
      
    }
},[products])

// REMOVE ITEM
const handleRemove = _id =>{
    window.location.reload(false);
  console.log('TIK ASE');
    const newItem = products.filter(p => p._id !== _id);
    setProducts(newItem)
    removeFromDb(_id)

 
}

// const _id = products._id;


let totalQuantity = 0;
let total = 0;

for (const product of card) {
    // console.log(product);

    if (!product.quantity) {
        product.quantity = 1;
    }
    // price =product.admition.price  ;
    total = total + product.admition.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
    // console.log(totalQuantity);

}

const shipping = total > 0 ? 15 : 0;
const tax = (total + shipping) * 0.10;
const grandTotal = total + shipping + tax;

    return (
        <div className=''>
        <Header></Header>

        {
            products.length === 0 ?
            <div style={{marginTop:'200px'}} className='mx-auto mt-8'> <h1 className='text-center m-5 mt-20'>Looding....</h1></div>
       
        
        :
     <AllOrder2 
     grandTotal={grandTotal}
     shipping={shipping}
     specificDetail={specificDetail}
     tax={tax}
     products={products}
     total={total}
     totalQuantity={totalQuantity}
     handleRemove={handleRemove}
     _id={specificDetail._id}
     
     ></AllOrder2>
         
        }
       
       
      
       </div>
    );
};

export default AllOrder;