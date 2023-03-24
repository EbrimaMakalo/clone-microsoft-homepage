import React from 'react';
import imagecard1 from '../assets/imagecard1.webp';
import imagecard2 from '../assets/imagecard2.webp';
import imagecard3 from '../assets/imagecard3.avif';
import imagecard4 from '../assets/imagecard4.webp';

import { FaChevronRight } from "react-icons/fa";

const CardText = () => {
  return (
    <div className='mt-5'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-10 sm:px-3 lg:mx-20'>
            <div>
                <a href="" className='no-underline text-black'>
                    <img src={imagecard1} alt="/" />
                    <h2 className='pt-3 pb-2 text-3xl'>Save up to $300 on Surface Laptop 5</h2>
                    <p>Sophisticated style and multitasking speed powered by 12th Gen Intel® Core. Offer ends 3/26.</p>
                    <a href="" className='no-underline hover:underline'><p className='flex'><span className='hover:mr-1'>Shop Surface Laptop 5</span><FaChevronRight className='mt-1 ml-1' /></p></a>
                </a>
            </div>
            <div>
                <a href="" className='no-underline text-black'>
                    <img src={imagecard2} alt="/" />
                    <h2 className='pt-3 pb-2 text-3xl'>Up to $400 off select Surface Laptop Studio</h2>
                    <p>Flex your creative muscle with a touchscreen device that seamlessly transitions from laptop to portable creative canvas. Offer ends 4/2.</p>
                    <a href="" className='no-underline hover:underline'><p className='flex'><span className='hover:mr-1'>Shop Surface Laptop 5</span><FaChevronRight className='mt-1 ml-1' /></p></a>
                </a>            
            </div>
            <div>
                <a href="" className='no-underline text-black'>
                    <img src={imagecard3} alt="/" />
                    <h2 className='pt-3 pb-2 text-3xl'>Power your adventure</h2>
                    <p>Get an Xbox Series X and Forza Horizon 5 Premium Edition.</p>
                    <a href="" className='no-underline hover:underline'><p className='flex'><span className='hover:mr-1'>Shop Surface Laptop 5</span><FaChevronRight className='mt-1 ml-1' /></p></a>            
                </a>
            </div>
            <div>
                <a href="" className='no-underline text-black'>
                    <img src={imagecard4} alt="/" />
                    <h2 className='pt-3 pb-2 text-3xl'>Xbox Series S</h2>
                    <p>Next-gen performance in the smallest Xbox ever.</p>
                    <a href="" className=' no-underline hover:underline'><p className='flex'><span className='hover:mr-1'>Shop now</span><FaChevronRight className='mt-1 ml-1' /></p></a>                
                </a>
            </div>
        </div>
    </div>
  )
}

export default CardText