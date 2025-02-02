import { Button } from "antd";
import React from "react";
import { Link } from "react-router";
import { formatCurrency } from "../../utils/helper";

const ProductCard = ({
  product_name,
  product_image,
  product_id,
  product_price,
}) => {
  return (
    <div className="border p-1 rounded-md hover:shadow-2xl transition-all duration-500">
      <img
        className="w-[600px] h-[350px]"
        src={product_image}
        alt={product_name}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{product_name}</h3>
        <p>{formatCurrency(product_price)}</p>

        <Link to={`/products/${product_id}`}>
          <Button block type="primary">
            View item
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
