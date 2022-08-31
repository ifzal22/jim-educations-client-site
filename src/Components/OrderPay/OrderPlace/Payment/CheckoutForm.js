import { CircularProgress } from "@mui/material";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useCartItem from "../../../Hooks/useCartItem";

const CheckoutForm = () => {
  const { grandTotal, specificDetail } = useCartItem();

  console.log(specificDetail);

  const _id = specificDetail._id;

  const price = grandTotal;
  const stripe = useStripe();
  const elements = useElements();

  const [processing, setProcessing] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const [loginData, setLoginData] = useState({});
  console.log(loginData);

  // console.log(loginData.email,);
  useEffect(() => {
    fetch("https://education-web-2.herokuapp.com/Order/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  // SELECT COUNTRY

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field)
    const newLoginData = { ...loginData };

    newLoginData[field] = value;

    setLoginData(newLoginData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    setProcessing(true);

    // setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess("");
    } else {
      setError("");
      console.log(paymentMethod);
    }

    // payment intent
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: loginData.name,
            email: loginData.email,
            address: loginData.address,
          },
        },
      });

    if (intentError) {
      setError(intentError.message);
      setSuccess("");
    } else {
      setError("");
      setSuccess("Your payment processed successfully");
      console.log(paymentIntent);
      setProcessing(false);
      // save to database

      const payment = {
        amount: paymentIntent.amount,
        created: paymentIntent.created,
        last4: paymentMethod.card.last4,
        transaction: paymentIntent.client_secret.slice("_secret")[0],
      };
      const url = `https://education-web-2.herokuapp.com/Admition/admitCollection/${_id}`;
      axios.put(url, payment).then((res) => {
        if (res.data.insertedId) {
          console.log(res.data);
          alert("successfully");
        }
      });
    }
    this.mainInput.value = "";
  };

  return (
    <div className="text-center  " style={{ fontSize: "150%" }}>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleOnChange}
          name="email"
          type="email"
          placeholder="email"
          className="box1"
          required
        />

        <input
          onChange={handleOnChange}
          name="name"
          type="name"
          placeholder="Enter Your Name"
          className="box1"
          required
        />

        <input
          onChange={handleOnChange}
          name="address"
          type="text"
          placeholder="Enter Your Address"
          className="box1"
          required
        />

        <select
          className="selectpicker countrypicker"
          data-flag="true"
        ></select>

        <CardElement
          className="box1 text-center   mx-auto"
          style={{ fontSize: "150%" }}
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className="text-center bg-red ">
          {processing ? (
            <CircularProgress></CircularProgress>
          ) : (
            <button
              style={{ bankground: "red", color: "red" }}
              className="m-1 p-2 round-3 btn btn-outline-dark "
              type="submit"
              disabled={!stripe || success}
            >
              pay {grandTotal}TK
            </button>
          )}
        </div>
      </form>

      {error && <p style={{ color: "red" }}>{error} </p>}
      {success && <p style={{ color: "aqua" }}>{success} </p>}
    </div>
  );
};

export default CheckoutForm;
