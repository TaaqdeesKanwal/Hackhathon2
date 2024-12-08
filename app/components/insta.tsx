import Image from "next/image";
export default function InstagramSection() {
    return (
      <div className="relative bg-[#FAF4F4] flex justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/insta.jpg" 
            alt="Background"
            height={100}
            width={100}
            className="w-full h-full object-cover opacity-70"
          />
        </div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col items-start max-w-4xl mx-auto px-6 py-16 justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Instagram</h2>
          <p className="text-gray-600 mb-4">
            Follow our store on Instagram
          </p>
          <button className="bg-[#FAF4F4] text-black font-medium px-6 py-2 rounded-full shadow-lg whover:shadow-lg p-6 ml-7">
            Follow Us
          </button>
        </div>
      </div>
    );
  }