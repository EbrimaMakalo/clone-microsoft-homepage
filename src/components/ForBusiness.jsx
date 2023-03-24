import React from 'react'
import imagecard5 from '../assets/imagecard5.webp';
import imagecard6 from '../assets/imagecard6.webp';
import imagecard7 from '../assets/imagecard7.jpg';
import imagecard8 from '../assets/imagecard8.webp';

import { FaChevronRight } from "react-icons/fa";

const ForBusiness = () => {
  return (
    <div className='mb-10'>
        <h1 className='px-3 lg:mx-20 mb-3'>For business</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-3 lg:mx-20'>
            <div>
                <img src={imagecard5} alt="/" />
                <button className='bg-[#FFB900] px-3 mt-3 font-bold hover:cursor-text'>New</button>
                <h2 className='pt-2 pb-2 text-3xl'>Surface Pro 9 for Business</h2>
                <p>Empower flexible, all-day impact with tablet portability and laptop performance. Questions? Book an online consultation.</p>
                <div className='flex'>
                    <a href="" className='no-underline hover:underline'><p className='flex'><span className='hover:mr-1'>Shop now</span><FaChevronRight className='mt-1 ml-1' /></p></a>
                    <a href="" className='no-underline hover:underline ml-10'><p className='flex'><span className='hover:mr-1'>Book a consultation</span><FaChevronRight className='mt-1 ml-1' /></p></a>
                </div>
            </div>
            <div>
                <img src={imagecard6} alt="/" />
                <h2 className='pt-5 pb-2 text-3xl'>Microsoft 365 Copilot</h2>
                <p>Discover a new way to work with next-gen AI embedded in the Microsoft 365 apps you use every day.</p>
                <a href="" className='no-underline hover:underline'><p className='flex'><span className='hover:mr-1'>Learn more about Microsoft 365 Copilot</span><FaChevronRight className='mt-1 ml-1' /></p></a>
                <a href="" className='no-underline hover:underline'><p className='flex'><span className='hover:mr-1'>Explore Microsoft 365 for Business</span><FaChevronRight className='mt-1 ml-1' /></p></a>            
            </div>
            <div>
                <img src={imagecard7} alt="/" />
                <h2 className='pt-5 pb-2 text-3xl'>Join the era of AI</h2>
                <p>Create, communicate, and code with the latest Microsoft AI solutions.</p>
                <a href="" className='no-underline hover:underline'><p className='flex'><span className='hover:mr-1'>Explore AI solutions</span><FaChevronRight className='mt-1 ml-1' /></p></a>            
            </div>
            <div>
                <img src={imagecard8} alt="/" />
                <h2 className='pt-5 pb-2 text-[28px]'>Grow your small business</h2>
                <p>Learn how digital transformation helps drive business progress, results, and innovation.</p>
                <a href="" className=' no-underline hover:underline'><p className='flex'><span className='hover:mr-1'>Learn more</span><FaChevronRight className='mt-1 ml-1' /></p></a>                
            </div>
        </div>
    </div>
  )
}

export default ForBusiness;