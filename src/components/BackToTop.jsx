import React from 'react';
import { useEffect, useState } from 'react';
import { HiArrowUp } from "react-icons/hi";

const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 750) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return <div>

    {backToTop && (
        <p className='sm:fixed flex top-[92%] mx-3 right-3 bg-[#D9D9D9] hover:cursor-pointer justify-center py-2 sm:p-2 font-bold hover:bg-white hover:shadow' onClick = {scrollUp}><HiArrowUp className='mt-1 mr-1'/>Back to top</p>
    )}

  </div>
}

export default BackToTop;