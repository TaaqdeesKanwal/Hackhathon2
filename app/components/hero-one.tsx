import React from "react";
import Image from "next/image";

const HeroOne: React.FC = () => {
  // Mock data for products (replace this with your actual data or API)
  const products = [
    {
      id: 1,
      image: "/images/table.jpg",
      name: "Side Table",
      link: "/product/1",
    },
    {
      id: 2,
      image: "/images/sofa.jpg",
      name: "Side Table",
      link: "/product/2",
    },
  ];

  return (
    <section className="bg-[#FAF4F4] py-12">
      <div className="container mx-auto px-4 md:px-12 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center text-center space-y-4"
            >
              {/* Product Image */}
              <div className="w-full max-w-sm">
                <Image
                  src={product.image}
                  width={100}
                  height={100}
                  alt={product.name}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Product Name */}
              <h2 className="text-2xl font-medium text-gray-800">
                {product.name}
              </h2>

              {/* View More Link */}
              <a
                href={product.link}
                className="text-black font-medium underline hover:no-underline hover:text-gray-800 transition"
              >
                View More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroOne;
