import React, {useState} from 'react';
import microsoft from '../assets/microsoft.png';
import { FaAngleDown } from "react-icons/fa";
import { VscSearch } from "react-icons/vsc";
import { BsCart3 } from 'react-icons/bs';
import { AiOutlineUserAdd } from 'react-icons/ai';

import { HiMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='w-full'>
        <div className='px-2 lg:mx-10 xl:ml-[50px] xl:mr-[80px]'>
            <div className='text-sm py-3 flex md:block'>
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <HiMenu className="h-6 w-6  text-black/60" /> : <HiOutlineX className="h-6 w-6 text-black/60" />}            
                </div>
                <ul className='float-left flex sm:space-x-5'>
                    <li><a href="" className='text-black no-underline hover:border-b-2 hover:border-b-black'><img src={microsoft} className='h-[23px]' alt="/" /></a></li>
                    <li><a href="" className='text-black no-underline hover:border-b-2 hover:border-b-black hidden md:block'>Microsoft 365</a></li>
                    <li><a href="" className='text-black no-underline hover:border-b-2 hover:border-b-black hidden md:block'>Teams</a></li>
                    <li><a href="" className='text-black no-underline hover:border-b-2 hover:border-b-black hidden md:block'>Windows</a></li>
                    <li><a href="" className='text-black no-underline hover:border-b-2 hover:border-b-black hidden md:block'>Surface</a></li>
                    <li><a href="" className='text-black no-underline hover:border-b-2 hover:border-b-black hidden md:block'>Xbox</a></li>
                    <li><a href="" className='text-black no-underline hover:border-b-2 hover:border-b-black hidden md:block'>Deals</a></li>
                    <li><a href="" className='text-black no-underline hover:border-b-2 hover:border-b-black hidden md:block'>Small Business</a></li>
                    <li><a href="" className='text-black no-underline hover:border-b-2 hover:border-b-black hidden md:block'>Support</a></li>
                </ul>
                <ul className='float-right flex space-x-5'>
                    <li><a href="" className='flex text-black no-underline'><span className='hover:border-b-2 hover:border-b-black hidden md:block'>All Microsoft</span><FaAngleDown className="text-sm ml-1 mt-1 hidden md:block text-black/40" /></a></li>
                    <li><a href="" className='flex text-black no-underline'><span className='hover:border-b-2 hover:border-b-black hidden xl:block'>Search</span><VscSearch className='text-[16px] ml-1 mt-1' /></a></li>
                    <li><a href="" className='flex text-black no-underline'><span className='hover:border-b-2 hover:border-b-black hidden xl:block'>Cart</span><BsCart3 className='text-[16px] ml-2' /></a></li>
                    <li><a href="" className='flex text-black no-underline'><span className=' hidden xl:block'>Sign in</span><AiOutlineUserAdd className='text-[27px] p-1 ml-3 border-[1px] border-black rounded-full ' /></a></li>
                </ul>
            </div>
        </div>
        <ul className={!nav ? "hidden" : "bg-[#F2F2F2] w-screen h-screen px-3"}>
            <a href="" className='text-black no-underline'><li className="border-b-[1px] border-gray-300 w-full py-[12px]">Microsoft 360</li></a>
            <a href="" className='text-black no-underline'><li className="border-b-[1px] border-gray-300 w-full py-[12px]">Teams</li></a>
            <a href="" className='text-black no-underline'><li className="border-b-[1px] border-gray-300 w-full py-[12px]">Windows</li></a>
            <a href="" className='text-black no-underline'><li className="border-b-[1px] border-gray-300 w-full py-[12px]">Surface</li></a>
            <a href="" className='text-black no-underline'><li className="border-b-[1px] border-gray-300 w-full py-[12px]">Xbox</li></a>
            <a href="" className='text-black no-underline'><li className="border-b-[1px] border-gray-300 w-full py-[12px]">Deals</li></a>
            <a href="" className='text-black no-underline'><li className="border-b-[1px] border-gray-300 w-full py-[12px]">Small Business</li></a>
            <a href="" className='text-black no-underline'><li className="border-b-[1px] border-gray-300 w-full py-[12px]">Support</li></a>
            <a href="" className='text-black no-underline'><li className="border-b-[1px] border-gray-300 w-full py-[12px]">Software<FaAngleDown className="text-sm mt-1 float-right text-black/40" /></li></a>
            <a href="" className='text-black no-underline'><li className="border-b-[1px] border-gray-300 w-full py-[12px]">PCs and Devices<FaAngleDown className="text-sm mt-1 float-right text-black/40" /></li></a>
            <a href="" className='text-black no-underline'><li className="border-b-[1px] border-gray-300 w-full py-[12px]">Entertainment<FaAngleDown className="text-sm mt-1 float-right text-black/40" /></li></a>
            <a href="" className='text-black no-underline'><li className="border-b-[1px] border-gray-300 w-full py-[12px]">Business<FaAngleDown className="text-sm mt-1 float-right text-black/40" /></li></a>
            <a href="" className='text-black no-underline'><li className="border-b-[1px] border-gray-300 w-full py-[12px]">Developer & IT<FaAngleDown className="text-sm mt-1 float-right text-black/40" /></li></a>
            <a href="" className='text-black no-underline'><li className="border-b-[1px] border-gray-300 w-full py-[12px]">Other<FaAngleDown className="text-sm mt-1 float-right text-black/40" /></li></a>
            <a href="" className='text-black no-underline'><li className="border-b-[1px] border-gray-300 w-full py-[12px]">View Sitemap</li></a>
        </ul>
    </div>
  )
}

export default Navbar;