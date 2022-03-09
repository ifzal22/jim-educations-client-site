import React, { useEffect, useState } from 'react';
import Header from '../../Home/Header/Header';
import { getStoredCart } from '../../Utilitis/FakeDb';

const AllOrder = () => {
   
    const [products, setProducts] = useState([]);
   
    const [card , setCard] =useState([]);
console.log(card);
    useEffect(()=>{
        fetch('http://localhost:5000/admition')
        .then(res=>res.json())
        .then(data =>{
            
     
            setProducts(data);
console.log(data);
         } )},[])

// local storage 
useEffect(() => {
    if (products.length) {

        const savedCart = getStoredCart();
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



let totalQuantity = 0;
let total = 0;
let price = 0
for (const product of card) {
    console.log(product);

    if (!product.quantity) {
        product.quantity = 1;
    }
    price =product.admition.price  ;
    total = total + product.admition.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
}

const shipping = total > 0 ? 15 : 0;
const tax = (total + shipping) * 0.10;
const grandTotal = total + shipping + tax;

    return (
        <>
        <Header></Header>
        <div className='marg container mx-auto d-flex justify-content-between'>
       <div className=''>
       <h1 className='text-center '>ALL ORDER Summary</h1>
            <h3>Items orders:  {totalQuantity}</h3>

            <p>Shipping: {shipping}</p>
                   <p>Tex: {tax.toFixed(2)}</p>
                   <p>Total:$ {total.toFixed(2)}</p>
                   <h2 style={{color:'red'}}>Grand Total: {grandTotal.toFixed(2)}</h2>

       </div>
       <div>
           {
               products.map(p=><>
<div className='mt-4' ><img style={{width:'100px'}} src={`data:image/jpeg;base64,${p?.image}`}  alt=""/>
<span className='m-4 text-warning'>$/{p.admition.price} </span>
</div>

               </> )
           }
    
       </div>


        </div>
        <div className='mx-auto container'>  <button className='btn'>Confrom Order</button> </div>
       </>
    );
};

export default AllOrder;