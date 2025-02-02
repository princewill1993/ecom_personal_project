import { Minus, Plus } from "lucide-react";
import React from "react";
import { formatCurrency } from "../../utils/helper";
import {
  removeItemFromCart,
  increaseCartQuantity,
  decreaseCartQuantity,
} from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItemCard = ({
  product_name,
  product_image,
  product_quantity,
  product_id,
  product_price,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 bg-gray-100 p-2 items-center">
      <div className="w-28">
        <img src={product_image} alt={product_name} />
      </div>

      <div>
        <div>
          <h3 className="text-base lg:text-lg font-medium">{product_name}</h3>
          <p className="text-gray-500 font-light ml-2">
            <span className="mr-2">
              {formatCurrency(product_price)}
              <span className="ml-2"> X </span>
              {product_quantity}
            </span>
          </p>
        </div>
        <div className="flex justify-between mt-2 gap-6">
          <div className="flex items-center text-gray-600px border gap-4 p-2 bg-white ">
            <button onClick={() => dispatch(decreaseCartQuantity(product_id))}>
              <Minus className="cursor-pointer" />
            </button>
            <span>{product_quantity}</span>
            <button onClick={() => dispatch(increaseCartQuantity(product_id))}>
              <Plus className="cursor-pointer" />
            </button>
          </div>
          <button
            onClick={() => dispatch(removeItemFromCart(product_id))}
            className="underline-offset-[10px] underline text-gray-500 font-medium hover:text-black cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
