import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';


const CheckoutForm = () => {

    const stripe = useStripe();
    const elements = useElements();

    const [processing, setProcessing] = useState(false);
    
const [error, setError] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
 



        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        // setProcessing(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

     if(error){
        setError(error.message);
        
     }
     else{
         setError('')
         console.log(paymentMethod);
     }

    }


    return (
        <div>
          <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />



                
                <div className='text-center bg-red '>


                <button style={{bankground:'red',
                color:'red'}} 
                className='m-1 p-2 round-3 btn-outline-dark ' 
                type="submit">
                    pay
                    </button>
                
                </div>
       
            </form>
         
        
        </div>
    );
};

export default CheckoutForm;