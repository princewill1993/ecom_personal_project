import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { productData } from "../../constant/products";
import { Button, message } from "antd";
import { formatCurrency } from "../../utils/helper";
import { addItemsToCart } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../ui/bttons/BackButton";

const ProductInfo = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const [messageAPI, contextHolder] = message.useMessage();

  console.log(params);
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    const product = productData.find((item) => {
      return item.product_id === params.product_id;
    });
    setSingleProduct(product);
  }, []);

  if (singleProduct === null) {
    return (
      <div>
        <h1 className="text-4xl text-gray-500 animate-pulse p-4">
          Loading product info ...
        </h1>
      </div>
    );
  }

  function handleAddItemToCart() {
    // check if a single product already in cart
    const productInCart = cartItems.find((item) => {
      return item.product_id === singleProduct.product_id;
    });

    if (productInCart === undefined) {
      dispatch(addItemsToCart(singleProduct));
      messageAPI.success("Product added to cart successfully");
    } else {
      messageAPI.error("Product already in cart ");
    }
  }

  return (
    <section>
      {contextHolder}
      <BackButton />

      <div className="flex flex-col gap-4 border bg-gray-500 rounded-md p-4 text-white max-w-[600px]">
        <img
          className="w-[600px] mx-auto"
          src={singleProduct.product_image}
          alt={singleProduct.product_name}
        />
        <h1 className="text-4xl font-bold">{singleProduct.product_name}</h1>
        <p className="text-lg">{singleProduct.product_description}</p>
        <p className="text-2xl font-medium">
          {formatCurrency(singleProduct.product_price)}
        </p>

        <Button onClick={handleAddItemToCart} block size="large" type="primary">
          Add to cart
        </Button>
      </div>
    </section>
  );
};

export default ProductInfo;
