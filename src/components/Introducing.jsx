import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import introducingbg from '../assets/introducing-bg.jpg';

const Introducing = () => {
  return (
    <div className='mt-20 mb-60 lg:mb-24 px-3 lg:mx-20'>
        <div className='bg-[url("https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Multi-Canvas-Bing-AI-No-Text:VP5-1596x600")] h-[200px] lg:h-[545px] bg-cover bg-center lg:pl-[80px] xl:pl-[117px] pt-80 lg:pt-36 lg:pr-[550px] xl:pr-[570px] 2xl:pr-[755px]'>
            <div className='text-black '>
                <h1 className='text-[37px] lg:text-white'>Introducing the new Bing</h1>
                <p className='my-3 lg:text-white'>Your AI-powered copilot for the web. Ask questions. Chat to refine results. Get comprehensive answers and creative inspiration.</p>
                <button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold p-2 mt-2 mb-3'>Join the Bing preview</button>
                <a href="" className='no-underline hover:underline text-white'><p className='flex'><span className='hover:mr-1'>Learn about the new Bing in Windows</span><FaChevronRight className='mt-1 ml-1' /></p></a>
            </div>
        </div>
    </div>
  )
}

export default Introducing;