import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import useCartItem from '../../../Hooks/useCartItem';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51KsNElLEpoE3BrKFJi9gEi4zN1f1x2AbJDAvJootyPFSfhFs1yFg17xEFITbNCd9FUjFPGeW9Scf3paeDsCz6yEL00JOE6iK6q');



const PaymentStripe = () => {
    const { totalQuantity,grandTotal} = useCartItem();
    return (
        <div style={{marginTop:'20px'}} className='mt-8'>
       
         <Elements stripe={stripePromise}>
             <p> {grandTotal}</p>
                <CheckoutForm
                   
                />
              
            </Elements>
        </div>
    );
};

export default PaymentStripe;