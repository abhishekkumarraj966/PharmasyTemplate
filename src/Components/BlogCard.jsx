import React from 'react'

const BlogCard = () => {
  return (
    <div className='md:w-[325px] w-[280px] sm:w-[200px]  h-[280px] md:h-[325px] sm:h-[200px] rounded-full flex flex-col justify-center items-center gap-[30px] border-[2px] border-black relative'>
        <div className='absolute right-[102px] mx-auto top-7 md:top-7 sm:top-[5px] w-[13px] md:w-[13px] sm:w-[8px] h-[13px] md:h-[13px] sm:h-[8px] rounded-full bg-[#A1A3A7]'></div>
        <div className='absolute right-[85px]  md:right-[85px]  sm:right-[80px]  md:top-[32px]  top-[20px] sm:top-[5px] w-[13px] md:w-[13px] h-[13px] md:h-[13px] sm:h-[8px]  sm:w-[8px] rounded-full bg-[#1364FF]'></div>
        <div className='absolute right-[91px] top-[47px] md:top-[47px] sm:top-[5px] w-[13px] h-[13px] rounded-full sm:h-[8px]  sm:w-[8px]  bg-[#A1A3A7]'></div>
        <h3 className='font-semibold text-[24px] sm:text-[14px] md:text-[24px] sm:pt-[30px] md:pt-[0px] text-[#000000] text-center pt-[15px]'>Pain Relievers</h3>
        <p className='font-medium text-[13px] sm:text-[10px] md:text-[13px] text-[#7A7A7A] text-center '> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <a href='' className='font-medium text-[18px] sm:text-[14px] md:text-[18px] text-[#0164AB]'>Explore</a>
    </div>
  )
}

export default BlogCard