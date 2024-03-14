import React from 'react'

const FeatureCard = ({Heading,img,text}) => {
    return (
        <div className='sm:w-[224px] w-[180px] h-[72px] '>
            <div className='flex sm:gap-3 gap-2'>
                <img src={`/images/${img}`} alt='truck' className='sm:w-[44px] w-[20px] h-[20px] sm:h-[44px]  pl-2 '/>
                <p className='sm:text-[24px] text-[12px] sm:font-semibold font-[14px]'>{Heading}</p>
                </div>
            <p className='text-[#7A7A7A] sm:text-[16px] text-[10px] sm:font-medium  font-normal sm:ml-[64px] pl-[5px] '>{text}</p>
        </div>
    )
}

export default FeatureCard