import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import image3 from '../assets/image3.avif';
import image4 from '../assets/image4.avif';

const CarouselContainer2 = () => {
  return (
    <Carousel pause='hover' className='px-3 lg:mx-20'>
        <Carousel.Item interval={5000}>
            <img
                className="d-block w-100 hover:cursor-pointer h-[350px] md:h-[400px] lg:[450px] 2xl:h-[500px]"
                src={image3}
                alt="First slide"
            />
            <Carousel.Caption className='mb-10 xl:mb-20 pr-[100px] md:pr-[200px] lg:pr-[250px] xl:pr-[400px] 2xl:pr-[600px]'>
                <div className='text-black text-left'>
                    <h3 className='text-4xl'>Inclusion is Innovation</h3>
                    <p className='lg:my-5'>This Women's History Month, find out how reconnecting with her roots helped Microsoft employee and Cameroonian native Michele Luma spread her wings</p>
                    <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-2 mt-2 mb-3'>Find out more</button>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
            <img
                className="d-block w-100 hover:cursor-pointer h-[350px] md:h-[400px] lg:[450px] 2xl:h-[500px]"
                src={image4}
                alt="Second slide"
            />
            <Carousel.Caption className='mb-10 xl:mb-20 pl-[100px] md:pl-[150px] lg:pl-[250px] xl:pl-[500px] 2xl:pl-[650px]'>
                <div className='text-black text-left pt-10'>
                    <h3 className='text-4xl'>Meet the Feelings Monster</h3>
                    <p className='lg:my-5'>Learn how educators are using a furry character that lives within the Microsoft Reflect app to help students improve their emotional intelligence</p>
                    <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-2 mt-2 mb-3'>Read about Microsoft Reflect</button>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}

export default CarouselContainer2