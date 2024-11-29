import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="m-4 p-4 static">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-xl font-bold">
          <a href="/">Assignment</a>
        </div>

        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block text-white py-2 px-4 bg-blue-600 border-b-2 rounded-md"
                : "block text-black py-2 px-4 hover:bg-blue-600 rounded-md"
            }
          >
            Stocks
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "block text-white py-2 px-4 bg-blue-600 border-b-2 rounded-md"
                : "block text-black py-2 px-4 hover:bg-blue-600 rounded-md"
            }
          >
            Products
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
