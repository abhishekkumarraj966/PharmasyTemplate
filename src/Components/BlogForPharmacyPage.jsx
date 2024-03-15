import React from "react";
import BlogCard from "./BlogCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";

const BlogForPharmacyPage = () => {
  return (
    <>
      <div className=" w-[98%] mx-auto h-[568px] mt-[50px] flex flex-col justify-around">
        <div className="flex sm:mx-auto md:ml-[150px]">
          <p className="font-normal text-[25px] sm:text-[28px]  text-[#1364FF] mt-5 ">
            Blogs
          </p>
          <div className="md:ml-[150px] sm:ml-[70px] ml-8">
            <h2 className="md:w-[401px] md:ml-10  sm:w-[340px] w-[310px] font-normal text-[28px] md:text-[40px]">
              Blogs on Pharmacy Essentitals
            </h2>
            <p className="md:text-[25px]  md:ml-10  text-[18px] font-normal text-[#7A7A7A]">
              Description
            </p>
          </div>
        </div>
        <div className="flex justify-around items-center gap-[20px]">
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
              <BlogCard />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard />
            </SwiperSlide>
            <SwiperSlide>
              <BlogCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <hr className="w-full h-[2px] mt-[70px] bg-[#A1A3A7] " />
    </>
  );
};

export default BlogForPharmacyPage;
