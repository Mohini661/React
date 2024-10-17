import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <div className="navbar flex justify-between items-center w-full bg-gray-800 text-white p-5 max-lg:flex-col ">
      <div className="logo flex justify-center items-center gap-5 text-yellow-300 p-2 text-2xl">
        <FaBars className="menu hidden max-sm:block text-xl " />
        <h2 className="font-poppins font-extrabold">Fashion Mart</h2>
      </div>
      <ul className="list flex gap-10 text-md max-lg:hidden">
        <li>
          <a href="" className="hover:text-yellow-300">
            Home
          </a>
        </li>
        {/* <li>
          
          <a href="" className="hover:text-yellow-300">
            Categories
        
          </a>
        </li> */}
        <li>
          <a href="" className="hover:text-yellow-300">
            About us
          </a>
        </li>
        <li>
          <a href="" className="hover:text-yellow-300">
            Contact us
          </a>
        </li>
      </ul>
      <div className="cart flex justify-center items-center gap-5 ">
        <div className="search flex justify-normal items-center w-80  p-1 rounded-md bg-white">
          <span className="text-xl text-gray-700 px-2">
            <CiSearch />
          </span>
          <input
            type="text"
            placeholder="Search for products.."
            className="outline-none rounded-sm p-1 w-80 text-gray-700"
          />
        </div>
        <a href="" className="text-xl hover:text-yellow-300 max-lg:hidden ">
          <FaRegUser />
        </a>
        <a href="" className="text-xl hover:text-yellow-300 max-lg:hidden">
          <PiShoppingCartSimpleBold />
        </a>
      </div>
    </div>
  );
};

export default Header;
