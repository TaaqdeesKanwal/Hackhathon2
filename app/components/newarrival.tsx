import Image from 'next/image';
import React from 'react';

const NewArrwa: React.FC = () => {
  return (
    <section className="bg-[#F8F5DC] py-12">
      <div className="container mx-auto px-4 md:px-16 grid grid-cols-2 md:grid-cols-2 items-center gap-20 justify-around">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/images/Asgaard sofa 1.png"
            width={1060}
            height={1080}
            alt="Asgaard Sofa"
            className="w-full object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left ">
          <p className="text-lg text-black px-14 font-semibold">New Arrivals</p>
          <h2 className="text-4xl font-extrabold text-gray-800 w-[331px] h-[108px] py-5">Asgaard Sofa</h2>
          <a
            href="#"
            className="inline-block bg-[#F8F5DC] border border-black text-black font-medium px-6 py-5 mt-3 transition w-[255px] h-[64px] text-center"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrwa;
