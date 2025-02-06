import axios from "axios";
import React from "react";
import { formatCurrency, serverUrl } from "../../utils/helper";
import moment from "moment";
import { Link } from "react-router";

const AllCustomerOrder = () => {
  const [customerOrder, setCustomerOrder] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const allCustomerOrder = async () => {
    try {
      const response = await axios.get(
        `${serverUrl}/order/all-customer-orders/`
      );
      setCustomerOrder(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(customerOrder);

  React.useEffect(() => {
    allCustomerOrder();
  }, []);

  return (
    <section className="max-w-[1100px] mx-auto py-16 px-4">
      <table className="w-full text-left">
        <thead>
          <tr className=" text-green-800 text-lg">
            <th>Date</th>
            <th>Name</th>
            <th>Email</th>
            <th>Total Amount</th>
            <th>Total Items</th>
            <th>Order status</th>
            <th>Details</th>
          </tr>
        </thead>

        <tbody>
          {customerOrder.map((item) => {
            return (
              <tr
                className="text-gray-500 hover: bg-gray-50 hover:text-black cursor-pointer"
                key={item._id}
              >
                <td className="py-3">
                  {moment(new Date(item.createdAt)).format(
                    "MMMM Do YYYY, h:mm:ss a"
                  )}
                </td>
                <td className="py-3">
                  {item.customerDeliveryInfo.customerName}
                </td>
                <td className="py-3">{item.customerDeliveryInfo.email}</td>
                <td className="py-3">{item.orderStatus}</td>
                <td className="py-3">{item.userCartSummary.totalCartItems}</td>
                <td className="py-3">
                  {formatCurrency(item.userCartSummary.totalAmount)}
                </td>
                <td className="py-3">
                  <Link to={`/admin/${item._id}`}>View</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default AllCustomerOrder;
