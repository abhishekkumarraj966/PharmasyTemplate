import React from "react";
import Navbar from "./Navbar";
// import FeatureCard from './FeatureCard'

const Header = () => {
  return (
    <header>
      <div className="w-full sm:h-[550px] h-[200px] md:h-[958px] backgroundimage ">
        <Navbar />
      </div>
      {/* <div className='md:w-[81%]  h-[50px] sm:h-[72px] mx-4 md:mx-auto my-[40px] sm:my-[60px] flex justify-between'>
                <FeatureCard Heading={"Free Shipping"} img="truck.png" text="Order Over ₹600"/>
                <FeatureCard Heading={"Quick Payment"} img="credit-card.png" text="100% Secure" />
                <FeatureCard Heading={"Big Cashback"} img="gift.png" text="Over 50% Cashback" />
                <FeatureCard Heading={"24/7 Support"} img="users.png" text="Ready for You" />

            </div> */}
      <div className="md:w-[87%] w-full sm:h-[329px] h-full mx-auto ">
        <div className="flex md:gap-[80px] sm:gap-[10px] gap-[4px] items-center sm:py-10 py-2 sm:px-5 px-2">
          <img
            src="/images/image 5.png"
            className="md:w-[312px] sm:w-[280px] w-[150px] md:h-[312px] sm:h-[280px] h-[150px] rounded-[112.5px]"
          />
          <div className="sm:pt-14 pt-2 md:p-0">
            <p className="md:h-[167px]  pt-[10px] h-[90px]  md:text-[32px] sm:text-[24px] text-[14px] font-normal">
              “It is a long established fact that a reader will be tracked
              distracted by the readable content of a page is when looking at
              its layout. The point of using Lorem of distribution it look like
              readable English “
            </p>

            <div className=" sm:mt-8 pt-16 flex md:ml-[250px] md:mt-[33px]  sm:pt-[110px] md:pt-0 items-center md:gap-[21px] s:gap-[20px] gap-[5px]">
              <a href="https://wa.me/8969171781">
                <img
                  src="/images/WhatsApp.png"
                  className="md:w-[60px] w-[30px] md:h-[30px]  h-[28px] sm:h-[40px]"
                />
              </a>
              <a href="https://instagram.com">
                <img
                  src="/images/instagram.png"
                  className="md:w-[60px] w-[30px] md:h-[30px]  h-[35px] sm:h-[40px]"
                />
              </a>
              <a href="https://facebook.com">
                <img
                  src="/images/Facebook.png"
                  className="md:w-[60px] w-[30px] md:h-[30px]  h-[35px] sm:h-[40px]"
                />
              </a>
              <a href="https://goolge.com">
                <img
                  src="/images/Location Update.png"
                  className="md:w-[60px] w-[30px] md:h-[30px]  h-[35px] sm:h-[40px]"
                />
              </a>
              <a
                href=""
                className="md:w-[190px] sm:w-[150px] w-[100px] md:h-[70px] sm:h-[50px] h-[30px] md:rounded-[25px] rounded-[10px] sm:bg-[#ADC9FF] bg-[#335AD1] flex justify-center items-center md:text-[32px] sm:text-[20px] text-[14px] mt-2 shadow-xl font-normal font-serif md:ml-[50px]  ml-1 sm:ml-[10px]"
              >
                Let’s Talk
              </a>
            </div>
          </div>
        </div>
      </div>


      <hr className="w-full h-[1px] border-0 bg-[#A1A3A7] md:mt-[50px] sm:mt-[80px] mt-4" />
    </header>
  );
};

export default Header;
