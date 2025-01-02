import React from "react";

const Product = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto">
        <h1 className="text-3xl text-center font-poppins py-4 text-gray-800">
          PRODUCT DETAILS
        </h1>
      </div>
      <div className="max-w-[1320px] mx-auto grid grid-cols-4 gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-2">
        <div className="text-center text-2xl shadow-lg rounded">
          <div className="overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2020/03/27/15/40/sports-4973973_960_720.jpg"
              className="hover:scale-110"
            />
          </div>
          <h3 className="text-2xl py-2">Sport running shoes</h3>
          <p className="text-xl py-2">Rs 5000/</p>
        </div>
        <div className="text-center text-2xl shadow-lg rounded">
          <div className="overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2020/03/27/15/40/sports-4973973_960_720.jpg"
              className="hover:scale-110"
            />
          </div>
          <h3 className=" text-2xl py-2">Sport running shoes</h3>
          <p className=" text-xl py-2">Rs 5000/</p>
        </div>
        <div className="text-center  shadow-lg rounded">
          <div className="overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2020/03/27/15/40/sports-4973973_960_720.jpg"
              className="hover:scale-110"
            />
          </div>
          <h3 className="text-2xl py-2">Sport running shoes</h3>
          <p className="text-xl py-2">Rs 5000/</p>
        </div>
        <div className="text-center text-2xl shadow-lg rounded">
          <div className="overflow-hidden">
            <img
              src="https://cdn.pixabay.com/photo/2020/03/27/15/40/sports-4973973_960_720.jpg"
              className="hover:scale-110"
            />
          </div>
          <h3 className="text-2xl py-2">Sport running shoes</h3>
          <p className="text-xl py-2">Rs 5000/</p>
        </div>
      </div>
    </>
  );
};

export default Product;
