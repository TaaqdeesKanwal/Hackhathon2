import React from 'react';

import { FiFilter } from "react-icons/fi"; // For the Filter Icon
import { BsGrid3X3, BsList } from "react-icons/bs"; // For grid and list icons
import Image from 'next/image';


import { Poppins } from 'next/font/google'
const poppins = Poppins({
    weight: '600', 
    subsets: ['latin'],
})


    const products = [
      {
        id: 1,
        name: "Trenton modular sofa_3",
    
        price: "Rs. 25,000.00",
        image: "/images/singlesofa.jpg"
      },
      {
        id: 2,
        name: "Granite dining table with dining chair",
   
        price: "Rs. 25,000.00",
        image: "/images/offwhite-chair-table.jpg",
        
      },
      {
        id: 3,
        name: "Outdoor bar table and stool",
  
        price: "Rs. 25,000.00",
        image: "/images/outdoor-chairtable.jpg",
      },
      {
        id: 4,
        name: "Plain console with teak mirror",
      
        price: "Rs. 25,000.00",
        image: "/images/table2.jpg",
      
      },
      {
        id: 5,
        name: "Grain coffee table",
      
        price: "Rs. 15,000.00",
        image: "/images/Grain coffee table 1.png", 
    
      },
      {
        id: 6,
        name: "Kent coffee table",
       
        price: "Rs. 225,000.00",
        image: "/images/Kent coffee table 1.png", 
      
      },
      {
        id: 7,
        name: "Round coffee table_color 2",
        
        price: "Rs. 251,000.00",
        image: "/images/Round coffee table_color 2.png", 
        
      },
      {
        id: 8,
        name: "Reclaimed teak coffee table",
      
        price: "Rs. 25,200.00",
        image: "/images/Reclaimed teak coffee table 1.png", 
        
      },
      {
        id: 9,
        name: "Plain console_",
      
        price: "Rs. 258,200.00",
        image: "/images/Plain console.png", 
      
      },
      {
        id: 10,
        name: "Reclaimed teak Sideboard",
        
        price: "Rs. 20,000.00",
        image: "/images/Reclaimed teak Sideboard 1.png", 
        
      },
      {
        id: 11,
        name: "SJP_0825",
        
        price: "Rs. 200,000.00",
        image: "/images/SJP_0825.png", 
        
      },
      {
        id: 12,
        name: "Bella chair and table",
        
        price: "Rs. 100,000.00",
        image: "/images/Bella chair and table.png", 
      
      },
      {
        id: 13,
        name: "Granite square side table",
      
        price: "Rs. 258,800.00",
        image: "/images/table.jpg", 
       
      },
      {
        id: 14,
        name: "Asgaard sofa",
     
        price: "Rs. 250,000.00",
        image: "/images/Asgaard sofa.png", 
      
      },
      {
        id: 15,
        name: "Maya sofa three seater",
     
        price: "Rs. 115,000.00",
        image: "/images/sofa.jpg", 
  
      },
      {
        id: 16,
        name: "Outdoor sofa set",
        price: "Rs. 244,000.00",
        image: "/images/Outdoor sofa set.png", 
       
      },
];

const Shop = () => {
  return (
  <div>
    <div className="relative bg-gray-100">
        {/* 1st section shop Background */}
      {/* Background Image */}
      <div className="absolute inset-0">
          <Image
            src="/images/shop.png"
            alt="Background"
            height={316}
            width={1440}
            className="w-full h-full object-cover opacity-90"
          />
        </div>

      {/* Overlay Content */}
      <div className={`${poppins.className} relative flex flex-col items-center justify-center h-48`}>
        <h1 className="text-3xl font-bold text-black">Shop</h1>
        <p className="text-sm text-black mt-2">
          <a href="/" className="hover:underline text-black">Home</a> &gt; Shop
        </p>
      </div>
      </div>
    {/* 2nd component */}
    <div className="flex items-center justify-between bg-[#FAF4F4] px-4 py-2 border-b border-gray-200 mt-6">
      {/* Left Section: Filter and Layout Toggle */}
      <div className="flex items-center space-x-4">
        {/* Filter Button */}
        <button className="flex items-center space-x-1 text-black hover:text-black">
          <FiFilter className="text-lg" />
          <span className="text-sm font-medium">Filter</span>
        </button>

        {/* Layout Toggle */}
        <div className="flex items-center space-x-2">
          <button className="p-1 text-black hover:text-black">
            <BsGrid3X3 className="text-lg" />
          </button>
          <button className="p-1 text-black hover:text-black">
            <BsList className="text-lg" />
          </button>
        </div>
      </div>

      {/* Middle Section: Result Count */}
      <div className="text-sm text-black">
        Showing 1–16 of 32 results
      </div>

      {/* Right Section: Items per Page and Sort By */}
      <div className="flex items-center space-x-4">
        {/* Show Items Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-black">Show</span>
          <input
            type="number"
            className="w-12 text-center border rounded-md bg-gray-50 text-gray-600 border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue="16"
          />
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-black">Sort by</span>
          <select
            className="px-2 py-1 bg-gray-50 border border-gray-300 rounded-md text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            defaultValue="Default"
          >
            <option value="Default">Default</option>
           
          </select>
        </div>
    </div>
    </div>
{/* 3rd section  */}

{/* Product Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white border rounded-lg shadow-sm hover:shadow-md transition"
          >
        
            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              height={287}
              width={287}
              className="w-full h-48 object-cover roundedt-t-lg"
            />
            {/* Product Info */}
            <div className="p-4 text-center">
              <h3 className="text-sm font-semibold text-gray-800 ">{product.name}</h3>
             
              <p className="text-sm font-medium text-gray-900 my-4 ">{product.price}</p>
            </div>
            {/* Hover Actions */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition">
              <button className="text-sm text-black bg-[#FBEBB5] px-4 py-2 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2 mt-6 mb-10">
        <button className="px-3 py-1 bg-[#FBEBB5] text-black rounded hover:bg-gray-300">1</button>
        <button className="px-3 py-1 bg-[#FFF9E5] text-gray-700 rounded hover:bg-gray-800">2</button>
        <button className="px-3 py-1 bg-[#FFF9E5] text-gray-700 rounded hover:bg-gray-800">3</button>
        <button className="px-3 py-1 bg-[#FFF9E5] text-gray-700 rounded hover:bg-gray-800">
          Next
        </button>
      </div>
{/* 4th section */}
<div className="bg-[#FAF4F4] p-8  h-[300px] w-full">
      <div className="max-w-5xl mx-10 ml-96 flex flex-col sm:flex-row justify-around items-center gap-5 text-center sm:text-left">
        <div>
          <h3 className="text-2xl font-light text-gray-black mt-20 py-1">Free Delivery</h3>
          <p className="text-sm text-gray-400">
            For all orders over $30, consectetur adipiscing elit.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-light text-black mt-20 py-1">90 Days Return</h3>
          <p className="text-sm text-gray-400">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-light text-black mt-20 py-1">Secure Payment</h3>
          <p className="text-sm text-gray-400">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Shop;