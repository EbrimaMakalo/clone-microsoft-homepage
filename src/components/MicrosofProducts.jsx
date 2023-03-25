import React from 'react';
import imagecategory1 from '../assets/category-image1.webp';
import imagecategory2 from '../assets/category-image2.webp';
import imagecategory3 from '../assets/category-image3.webp';
import imagecategory4 from '../assets/category-image4.webp';
import imagecategory5 from '../assets/category-image5.webp';


const MicrosofProducts = () => {
  return (
    <div className='mt-32 mb-16 md:mx-10 lg:mx-20 2xl:mx-36'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 text-center text-[15px] justify-between'>
            <div className='mb-3 sm:mb-0'>
                <img src={imagecategory1} className='pl-52 sm:pl-40 md:pl-24' alt="" />
                <p><a href="">Shop Surface devices</a></p>
            </div>
            <div className='mb-3 sm:mb-0'>
                <img src={imagecategory2} className='pl-52 sm:pl-40 md:pl-24' alt="" />
                <a href=""><p>Choose your Microsoft 365</p></a>            
            </div>
            <div className='mb-3 sm:mb-0'>
                <img src={imagecategory3} className='pl-52 sm:pl-40 md:pl-24' alt="" />
                <a href=""><p>Buy Xbox games and consoles</p></a>            
            </div>
            <div className='mb-3 sm:mb-0'>
                <img src={imagecategory2} className='pl-52 sm:pl-40 md:pl-24' alt="" />
                <a href=""><p>Get Windows 11</p></a>            
            </div>
            <div className='mb-3 sm:mb-0'>
                <img src={imagecategory4} className='pl-52 sm:pl-40 md:pl-24' alt="" />
                <a href=""><p>Shop for accessories</p></a>            
            </div>
            <div>
                <img src={imagecategory5} className='pl-52 sm:pl-40 md:pl-24' alt="" />
                <a href=""><p>Shop Business</p></a>            
            </div>
        </div>
    </div>
  )
}

export default MicrosofProducts