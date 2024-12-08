import React from 'react';
import Image from 'next/image';
import { GoClock } from "react-icons/go";
import { MdDateRange } from "react-icons/md";

const BlogSection: React.FC = () => {
  const blogs = [
    {
      id: 1,
      title: 'Going all-in with millennial design',
      image: '/images/blog1.jpg', 
      date: '12th Oct 2022',
    },
    {
      id: 2,
      title: 'Going all-in with millennial design',
      image: '/images/blog2.jpg', 
      readTime: '5 min',
      date: '12th Oct 2022',
    },
    {
      id: 3,
      title: 'Going all-in with millennial design',
      image: '/images/blog3.jpg', 
      readTime: '5 min',
      date: '12th Oct 2022',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Our Blogs</h2>
          <p className="text-[#9F9F9F] mt-2">
            Find a bright idea to suit your taste with our great selection
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Blog Image */}
              <div className="relative h-[393px] w-[393px]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={393}
                  height={393}
                
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-medium text-black">{blog.title}</h3>
                <a
                  href="#"
                  className="text-black font-bold text-left mt-2 inline-block underline underline-offset-4 transition  "
                >
                  Read More
                </a>
                <div className="flex items-center justify-center text-gray-500 text-sm mt-4 space-x-4">
                  <span className="flex items-center">
                  <GoClock />

                    <i className="ri-time-line mr-1"></i> {blog.readTime}
                  </span>
                  <span className="flex items-center">
                  <MdDateRange />
                    <i className="ri-calendar-line mr-1"></i> {blog.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Posts */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="text-black font-medium border-b-2 border-transparent underline underline-offset-4 transition"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
