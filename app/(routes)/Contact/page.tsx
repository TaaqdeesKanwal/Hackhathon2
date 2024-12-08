import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-64" style={{ backgroundImage: 'url("/images/shop.png")' }}>
        <div className="absolute inset-0 bg-opacity-90"></div>
        <div className="relative flex items-center justify-center h-full text-black">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Contact</h1>
            <p className="mt-2 text-sm">Home &gt; Contact</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-center p-3">Get In Touch With Us</h2>
              <p className="mt-2 text-gray-500">
                For more information about our products & services, please feel free to drop us an email.
                Our staff is always here to help you out. Do not hesitate!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
              <FaLocationDot className='h-6 w-6 mt-1'/>
                <div>
                  <h4 className="font-bold text-black py-2">Address</h4>
                  <p className="text-gray-500">236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
              <FaPhoneAlt className='h-6 w-6 mt-1'/>
                <div>
                  <h4 className="font-bold text-black py-2">Phone</h4>
                  <p className="text-gray-500">Mobile: +(84) 546-6789</p>
                  <p className="text-gray-500">Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
              <MdAccessTimeFilled  className='h-6 w-6 mt-1'/>
                <div>
                  <h4 className=" font-bold text-black py-2">Working Time</h4>
                  <p className="text-black ">Monday-Friday: 9:00 - 22:00</p>
                  <p className="text-gray-500">Saturday-Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Abc"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Abc@def.com"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="This is an optional"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Hi! I'd like to ask about..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-black py-2 px-4 rounded-md shadow-sm border-black border-spacing-6 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
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

export default ContactPage;

