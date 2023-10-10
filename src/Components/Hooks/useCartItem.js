import { useEffect, useState } from "react";
import { getStoredCart, removeFromDb } from "../Utilitis/FakeDb";

const useCartItem = () => {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);

  const [specificDetail, setSpecificDetail] = useState([]);
  // LOCAL STORE
  useEffect(() => {
    fetch("http://localhost:5000/Admition/admition")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        // console.log(data);
      });
  }, []);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const _id in savedCart) {
        const addedProduct = products.find((product) => product._id === _id);
        if (addedProduct) {
          const quantity = savedCart[_id];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCard(storedCart);
    }
  }, [products]);

  useEffect(() => {
    if (products.length > 0) {
      const matchData = products.filter((p) => p.quantity > 0);
      setSpecificDetail(matchData);
    }
  }, [products]);

  // REMOVE ITEM
  const handleRemove = (_id) => {
    window.location.reload(false);
    console.log("TIK ASE");
    const newItem = products?.filter((p) => p._id !== _id);
    setProducts(newItem);
    removeFromDb(_id);
  };

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
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;

  return {
    totalQuantity,
    grandTotal,
    tax,
    total,

    specificDetail,
    handleRemove,
  };
};

export default useCartItem;
