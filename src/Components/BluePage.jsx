import React from "react";
import BluePageCard from "./BluePageCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

const BluePage = () => {
  return (
    <>
      <div className="">
        <h1 className="pt-6 font-bold text-center text-[40px]">Service</h1>
      </div>
      <div className="md:h-[700px]  h-[550px] w-full bg-[#0058FF]  mt-[18px] flex">
        {/* <div className='flex ml-[150px] items-center'>
                    <span className='text-[#ADC9FF] font-normal text-[25px] mb-[10px]'>Services</span>
                    <div className='self-end ml-[170px] mt-[96px]'>
                        <h3 className='w-[399px] text-[#FFFFFF] text-[40px] font-medium'>Comprehensive Pharmacy Service</h3>
                        <p className='text-[#A1A3A7] text-[25px] font-normal '>Description</p>
                    </div>
                    <div className='w-[220px] h-[220px] ml-[210px] rounded-full flex justify-center items-center border-[#A1A3A7] border-2 font-sans text-[18px] text-white'>
                    All Services
                    </div>
                </div> */}
        <div className=" flex h-[300px] w-[300px] sm:w-full justify-around mx-auto mt-[80px] md:gap-10 sm:gap-[8px]">
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Autoplay, Pagination, Navigation]}
            className="max-w-[90%] lg:max-w-[80%]"
          >
             <SwiperSlide>
             <BluePageCard service={"01 / Prescription Filling"} />
             </SwiperSlide>
             <SwiperSlide>
             <BluePageCard service={"02 / Home Delivery"} />
             </SwiperSlide>
             <SwiperSlide>
             <BluePageCard service={"03 /Health Consultations"} />
             </SwiperSlide>

          </Swiper>

          
        
          
        </div>
      </div>
    </>
  );
};

export default BluePage;
