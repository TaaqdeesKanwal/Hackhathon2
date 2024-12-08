import React from "react";

const Footer = () => {
  return (
    <footer className='bg-white py-10 border-t border-gray-200'>
      <div className="container mx-auto px-4 lg:px-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Information */}
          <div>
            
            <br/>
            <br/>
            <address className="text-black not-italic">
              400 University Drive Suite 200 Coral  <br/> Gables, <br/> FL 33134 USA
            </address>
          </div>

          {/* Links and Help */}
          <div className="flex justify-between">
            {/* Links Section */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-500">Links</h3>
              <ul className="space-y-2 text-black font-semibold py-2">
                <li className="py-3">Home</li>
                <li className="py-3">Shop</li>
                <li className="py-3">About</li>
                <li className="py-3">Contact</li>
              </ul>
            </div>
            {/* Help Section */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-500">Help</h3>
              <ul className="space-y-2 text-black font-semibold">
                <li className="py-3">Payment Options</li>
                <li className="py-3">Returns</li>
                <li className="py-3">Privacy Policies</li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-500">Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <button className="bg-white text-black font-bold px-6 rounded-r-lg">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-sm text-black">
          <p>2023 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;