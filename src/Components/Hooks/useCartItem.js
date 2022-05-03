import { useEffect, useState } from 'react';
import { getStoredCart } from '../Utilitis/FakeDb';

const useCartItem = () => {

    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([]);


  // LOCAL STORE
  useEffect(() => {
    fetch('http://localhost:5000/admition')
        .then(res => res.json())
        .then(data => {


            setProducts(data);
            // console.log(data);
        })
}, [])


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





    return {
        totalQuantity,
        grandTotal,
        tax,
        total

        
    }
};

export default useCartItem;