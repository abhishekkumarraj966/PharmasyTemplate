import React from "react";
import AppLayout from "./AppLayout";
const FooterPage = () => {
  return (
    <footer className="w-full bg-[#0058ff] text-white h-auto">
    <AppLayout>
      <div className="flex flex-row sm:mx-[90px] px-2">
        <div className="mt-8 grid grid-cols-3 sm:gap-10 gap-2 ">
          <div className="mb-2 pt-[25px] mt-10 sm:ml-[40px] ">
            <ul className="flex flex-col space-y-1   text-white">
              <h1 className="text-[#fff] font-medium sm:text-[24px] cursor-pointer hover:underline">Blogs</h1>

              

              <h1 className="text-[#fff] font-medium sm:text-[20px] cursor-pointer hover:underline">
                TERMS & CONDITIONS
              </h1>
              <h1 className="text-[#fff] font-medium sm:text-[20px] cursor-pointer hover:underline">
                PRIVACY POLICY
              </h1>
            </ul>
          </div>
          <div className="mb-2 lg:mb-0 mt-10 lg:mt-10 sm:ml-7">
            <ul className="flex flex-col ">
             <img src="https://s3-alpha-sig.figma.com/img/5a7d/0214/bdd3d9de2cb78b0a3e001fed5bec74ab?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o4zFGIAIu1jW8-8uSGHJs0NxXs2ric5wHyHeNUavjOjlSZ-w3SFDzmJqMTE6H4z3UlG4U~FE~zN93UmTEgbNS6SQkZD-BHTeqwL59Cvb~kSKLbRHpNEaTZIPy1tvJ2H-ARd1gNo0GnLyIitunsZiUoFe~oxXnEifn-CipgPBTc5FNxihnOXQL7LjOJhnLPSXtGwLMxnyQeHdg9rkP8bsKD6V6mJrkPb-WuvPoRFtLJ0xzW3pQe3ayJe4lpyiN4GvFi3DhdRNXntvDTaXEdWQR-kFXWrHtIxMivH7wxMTVNIRhZI0fU~rJVz60R3IyqEWiD8VB7Vux5ExsoXl0tmRyg__"
             
             alt="QR"
             className="sm:h-[200px] h-[150px] w-[200px] pt-10 sm:py-5" 
             />
            </ul>
          </div>
          <div className="mb-8 lg:mb-0 mt-10 lg:mt-10 sm:ml-12">
            <p className="mb-4 sm:text-[21px] sm:font-semibold text-[#fff] pt-12 ">
            CONNECT WITH US
            </p>
            <ul className="flex flex-col space-y-4 text-[14px] font-medium text-white">
              <span className="flex flex-row gap-3 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-3 mt-2">
                <img
                  src="images/Vector (4).png"
                  alt="facebook logo"
                  className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px]"
                />
                <img
                  src="images/Vector (3).png"
                  alt=""
                  className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px]"
                />
                <img
                  src="images/Vector (2).png"
                  alt="XXX logo"
                  className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px]"
                />
                <img
                  src="images/Vector (5).png"
                  alt="XXX logo"
                  className="w-[18px] lg:w-[32px] h-[18px] lg:h-[32px]"
                />
              </span>
            </ul>
          </div>
        </div>
      </div>
      <div className="sm:mx-[35%] mx-[10%]  my-5 items-center justify-between mb-5  ">
        <div className="mt-4 md:mt-0">
          <p className="text-md font-medium text-white">
            © 2023 DevUI. All rights anyintech.
          </p>
        </div>
      </div>
    </AppLayout>
  </footer>
  );
};

export default FooterPage;



