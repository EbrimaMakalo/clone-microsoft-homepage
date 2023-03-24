import React from 'react'
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const FollowMicrosoft = () => {
  return (
    <div className='mt-28 mb-2 flex px-3 lg:mx-20 space-x-7'>
        <p>Follow Microsoft</p>
        <a href=""><FaFacebookF className='text-2xl text-black' /></a>
        <a href=""><BsTwitter className='text-2xl text-black' /></a>
        <a href=""><FaLinkedin className='text-2xl text-black' /></a>
    </div>
  )
}

export default FollowMicrosoft