import React from "react";
import "./AllOrder2.css";
import OrderPyment from "./OrderPlace/Orderpyment";

const AllOrder2 = (props) => {
  const {
    totalQuantity,
    shipping,
    tax,
    total,
    grandTotal,
    specificDetail,
    handleRemove,
  } = props;

  return (
    <div className="d-flex justify-content-center ">
      <div className="marg container mx-auto row justify-content-between mx-auto">
        <h1 className="text-center ">ALL ORDER Summary</h1>
        <div className="col-md-6">
          <h3>Items orders: {totalQuantity}</h3>

          <p>Shipping: {shipping}</p>
          <p>Tex: {tax?.toFixed(2)}</p>
          <p>Total:$ {total.toFixed(2)}</p>
          <h2 style={{ color: "red" }}>Grand Total: {grandTotal.toFixed(2)}</h2>

          {/* Products Image show */}
        </div>
        <div className="col-md-6 mx-auto">
          {specificDetail.map((p) => (
            <>
              <div className="mt-4">
                <span className="QUAN">Quantity:{p.quantity}</span>

                <img
                  style={{ width: "100px" }}
                  src={`data:image/jpeg;base64,${p?.image}`}
                  alt=""
                />

                {/* REMOVE ITEm */}
                <button onClick={() => handleRemove(p._id)} className="BUT">
                  {" "}
                  <span style={{ fontSize: "20px" }}>x</span>{" "}
                </button>
              </div>
              <span className="BUT">Price:{p.admition.price} </span>
            </>
          ))}
        </div>

        {/* ADDRESSS  details*/}

        <div className="ADDRESS mx-auto h-100">
          <h3 className="text-center text-warning"> Enter Details</h3>


          <OrderPyment></OrderPyment>

          {/*   <button className='btn' type="submit">confrom order</button> */}
        </div>
        {/* ----------------------------- */}
      </div>
    </div>
  );
};

export default AllOrder2;
