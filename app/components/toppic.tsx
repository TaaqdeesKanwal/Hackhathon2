import React from 'react';
import Image from 'next/image';
import { toppicks, Product } from '../TopPickData';

const TopPicks: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black">Top Picks For You</h2>
          <p className="text-black mt-2">
            Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {toppicks.map((product: Product) => (
            <div
              key={product.id}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={100}
                className="w-full max-w-xs h-auto object-contain"
              />

              {/* Product Name */}
              <h3 className="text-lg font-medium text-black">{product.name}</h3>

              {/* Product Price */}
              <p className="text-lg font-semibold text-black">{product.price}</p>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block text-black font-medium underline hover:no-underline hover:text-gray-800 transition"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopPicks;