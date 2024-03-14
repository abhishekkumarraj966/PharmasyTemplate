import React from "react";
import FetureBlackCard from "./FetureBlackCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

const FeaturePage = () => {
  return (
    <>
      <div className="md:h-[800px] sm:h-[550px] h-[500] w-full md:mt-[43px] mt-10 mb-6">
        <div className="flex ml-[10px] sm:mx-[80px] md:ml-[150px] items-center">
          <span className="text-[#1364FF] font-normal md:text-[25px] sm:text-[25px] text-[16px] md:mb-[10px] mb-[8px]">
            Product
          </span>
          <div className="self-end ml-[50px] sm:ml-[100px] md:ml-[170px] ">
            <h3 className="md:w-[399px] w-[180px] text-[#000000] md:text-[40px] sm:text-[20px] text-[20px] sm:font-medium  font-[14px]">
              Featured Pharmacy Essentials{" "}
            </h3>
            <p className="text-[#7A7A7A] sm:text-[25px] text-[14px] font-normal ">
              Description
            </p>
          </div>
          {/* <div className="md:w-[220px]  sm:w-[100px] w-[60px] h-[60px] sm:h-[100px] md:h-[220px] md:ml-[210px]   sm:ml-[100px] rounded-full flex justify-center items-center border-[#A1A3A7] border-2 md:text-[18px] sm:text-[10px] text-[6px]">
            All Products
          </div> */}
        </div>
        <div className="flex   md:w-[90%] justify-around mx-auto mt-[60px] gap-y-5 ">
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
              <FetureBlackCard
                name={"Pills"}
                deletePrice={"₹ 18.00"}
                price={"₹ 12.00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <FetureBlackCard
                name={"Syrup"}
                deletePrice={"₹ 18.00"}
                price={"₹ 12.00"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <FetureBlackCard
                name={"Vitamin"}
                deletePrice={"₹ 18.00"}
                price={"₹ 12.00"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <hr className=" border-0 h-[1px] w-full bg-[#A1A3A7]  " />
    </>
  );
};

export default FeaturePage;
