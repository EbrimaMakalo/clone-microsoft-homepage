import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/image1.avif';
import image2 from '../assets/image2.avif';

const CarouselContainer = () => {
    return (
        <Carousel pause='hover'>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 hover:cursor-pointer h-[350px] md:h-[400px] lg:[450px] 2xl:h-[500px]"
              src={image1}
              alt="First slide"
            />
            <Carousel.Caption className='lg:mb-10 lg:pr-[250px] xl:pr-[400px] 2xl:pr-[600px]'>
              <button className='text-black bg-white p-4 text-left'>
                  <h3 className='text-2xl md:text-4xl'>Save up to $250 on new Surface Pro 9</h3>
                  <p className='lg:my-4'>The tablet flexibility you want and the laptop performance you need—all in one ultra-portable device. Offer ends 3/26.</p>
                  <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-2 mt-2 mb-3'>Shop Surface Pro 9</button>
              </button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              className="d-block w-100 hover:cursor-pointer h-[350px] md:h-[400px] lg:[450px] 2xl:h-[500px]"
              src={image2}
              alt="Second slide"
            />
            <Carousel.Caption className='xl:mb-20 pr-[100px] md:pr-[200px] lg:pr-[250px] xl:pr-[400px] 2xl:pr-[600px]'>
              <div className='text-black text-left'>
                <h3 className='text-3xl md:text-4xl'>Microsoft 365</h3>
                <p className='lg:my-4'>Turn your ideas into reality, stay safer online and off, and focus on what matters most with Microsoft 365 apps</p>
                <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-2 mt-2 mb-3'>Choose your Microsoft 365</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
}

export default CarouselContainer;