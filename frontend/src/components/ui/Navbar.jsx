import React from "react";
import { NavLink } from "react-router";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <nav className="shadow-md sticky top-0 bg-white z-[999] py-4">
      <section className="container mx-auto flex justify-between items-center p-4">
        <div>
          <NavLink to={"/"} className={"font-bold tracking-wide text-2xl"}>
            {" "}
            arTHERAPY
          </NavLink>
        </div>

        <div className="flex gap-4 text-gray-500 font-medium ">
          <NavLink
            className={
              "hover:text-black transition-colors duration-500 text-lg"
            }
            to={"/products"}
          >
            Market place
          </NavLink>
          <NavLink
            className={
              "hover:text-black relaive transition-colors duration-500"
            }
            to={"/cart"}
          >
            <ShoppingCart strokeWidth={2.5} />
            <p className="rounded-lg text-white absolute top-6 bg-red-500 text-center px-1 text-xs">
              {cartItems.length}
            </p>
          </NavLink>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
