import React from 'react'
import Link from 'next/link'
import { FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty, } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi";


function Navbar() {
  return (
    <div className='bg-white text-black w-100% h-[100px] flex justify-between pr-[30px]'>
      {/* left side */}
      <div className='flex w-[430] h-[24px] gap-[75px] relative left-[505px] pt-[38px] font-semibold'>
        <Link href="/">Home</Link>
        <Link  href="/Shop">Shop</Link>
        <Link  href="/About">About</Link>
        <Link  href="/Contact">Contact</Link>
    </div >
    {/* // right Side */}
    <div className="flex w-[247px] h-[28px] gap-[45px] pt-[36px]">
    <FaRegUser size={24} />

    <CiSearch size={24}/>
    <IoIosHeartEmpty size={24}/>
    <HiOutlineShoppingCart size={24}/>
    </div>

    </div>

  )
}

export default Navbar
