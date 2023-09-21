import React from "react";
import Header from "../../Home/Header/Header";
import useCartItem from "../../Hooks/useCartItem";
import AllOrder2 from "../AllOrder2";
import "./AllOrder.css";
const AllOrder = () => {
  const {
    totalQuantity,
    grandTotal,
    tax,
    total,
    handleRemove,
    specificDetail,
  } = useCartItem();
  // const [products, setProducts] = useState([]);

  // const [card, setCard] = useState([]);

  // const [specificDetail, setSpecificDetail] = useState([]);

  // useEffect(() => {
  //   fetch("https://jim-education-751w.onrender.com/Admition/admition")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data.slice(0, 2));
  //       // console.log(data);
  //     });
  // }, []);

  // // local storage
  // useEffect(() => {
  //   if (products?.length) {
  //     const savedCart = getStoredCart();
  //     // console.log(savedCart);
  //     const storedCart = [];
  //     for (const _id in savedCart) {
  //       const addedProduct = products?.find((product) => product._id === _id);

  //       if (addedProduct) {
  //         const quantity = savedCart[_id];
  //         addedProduct.quantity = quantity;
  //         storedCart.push(addedProduct);
  //       }
  //     }
  //     setCard(storedCart);
  //   }
  // }, [products]);
  // // console.log(products);

  // // FILTER ITEM

  // useEffect(() => {
  //   if (products?.length > 0) {
  //     const matchData = products?.filter((p) => p.quantity > 0);
  //     setSpecificDetail(matchData);
  //   }
  // }, [products]);

  // // REMOVE ITEM
  // const handleRemove = (_id) => {
  //   window.location.reload(false);
  //   console.log("TIK ASE");
  //   const newItem = products?.filter((p) => p._id !== _id);
  //   setProducts(newItem);
  //   removeFromDb(_id);
  // };

  // const _id = products._id;

  // let totalQuantity = 0;
  // let total = 0;

  // for (const product of card) {
  //   // console.log(product);

  //   if (!product.quantity) {
  //     product.quantity = 1;
  //   }
  //   // price =product.admition.price  ;
  //   total = total + product.admition.price * product.quantity;
  //   totalQuantity = totalQuantity + product.quantity;
  //   // console.log(totalQuantity);
  // }

  // const shipping = total > 0 ? 15 : 0;
  // const tax = (total + shipping) * 0.1;
  // const grandTotal = total + shipping + tax;

  return (
    <div className="h-100">
      <Header></Header>

      <AllOrder2
        key={specificDetail?._id}
        grandTotal={grandTotal}
        // shipping={shipping}
        specificDetail={specificDetail}
        tax={tax}
        // products={products}
        total={total}
        totalQuantity={totalQuantity}
        handleRemove={handleRemove}
        // _id={specificDetail?._id}
      ></AllOrder2>
    </div>
  );
};

export default AllOrder;
