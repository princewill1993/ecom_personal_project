import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import { serverUrl } from "../../utils/helper";
import moment from "moment";

const OrderDetail = () => {
  const params = useParams();
  const [orderInformation, setOrderInformation] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  async function getOrderDetails() {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${serverUrl}/order/order-info/${params.order_id}`
      );
      setOrderInformation(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    getOrderDetails();
  }, []);

  if (isLoading === true) {
    return (
      <div className="text-center py-60 animate-pulse text-gray-500 text-5xl tracking-wider">
        <h1>Loading order details...</h1>
      </div>
    );
  }

  //   console.log(orderInformation);

  return (
    <div className="max-w-[1100px] mx-auto p-4 py-16 bg-green-50 my-5 rounded-md">
      <p className="text-2xl font-medium mb-3 ">
        {moment(new Date(orderInformation.createdAt)).format(
          "MMMM Do YYYY, h:mm:ss a"
        )}
      </p>
      <h3 className="bg-green-800 text-white w-fit p-2 rounded-md">
        {orderInformation.orderStatus}
      </h3>

      <div>
        <h2>Transaction details</h2>
        <p>
          <strong>Paystack transactionId: </strong>
          {orderInformation.reference.trxref}
        </p>
        <p>
          <strong> Transaction status: </strong>
          {orderInformation.reference.status}
        </p>
        <p>
          <strong> Payment: </strong>
          {orderInformation.reference.message}
        </p>
      </div>

      <div>
        <h2>Customer information</h2>
        <p>
          <strong>Name: </strong>
          {orderInformation.customerDeliveryInfo.customerName}
        </p>
        <p>
          <strong>Email: </strong>
          {orderInformation.customerDeliveryInfo.email}
        </p>
        <p>
          <strong>Phone Number: </strong>
          {orderInformation.customerDeliveryInfo.phoneNumber}
        </p>
        <p>
          <strong>Customer Delivery: </strong>
          {orderInformation.customerDeliveryInfo.deliveryAddress}
        </p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product id</th>
            <th>Product image</th>
            <th>Product name</th>
            <th>Product price</th>
            <th>Product quantity</th>
          </tr>
        </thead>

        <tbody>
          {orderInformation.cartItems.map((item) => (
            <tr key={item._id}>
              <td>{item.product_id}</td>
              <td>
                <div>
                  <img src={item.product_image} alt={item.product_name} />
                </div>
              </td>
              <td>{item.product_name}</td>
              <td>{item.product_price}</td>
              <td>{item.product_quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderDetail;
