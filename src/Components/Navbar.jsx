import React from 'react'
const Navbar = () => {
  return (
    <div className='bg-[#a1a3a7b0] w-full md:h-[164px] sm:h-[100px] h-[50px] flex justify-around items-center'>
          <div className='font-bold md:text-[48px] sm:text-[38px] text-[20px] text-[#0164AB]'>Pharmacy</div>
          <ul className='list-none flex md:gap-[116px] sm:gap-[30px] gap-[10px]  font-normal md:text-[25px] sm:text-[20px] text-[15px] pt-2 sm:pt-0 text-[#000000] '>
            <li className='cursor-pointer hover:underline' >Home</li>
            <li className='cursor-pointer hover:underline'>About</li>
            <li className='cursor-pointer hover:underline'>Blog</li>
            <li className='cursor-pointer hover:underline'>Gallery</li>
            <li className='cursor-pointer hover:underline'>Contact</li>
          </ul>
    </div>
  )
}

export default Navbar