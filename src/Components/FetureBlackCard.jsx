import React from "react";

const FetureBlackCard = ({ name, deletePrice, price }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-[364px] md:w-[364px] sm:w-[200px] h-[356px] sm:h-[280px] md:h-[356px] rounded-[15px] bg-black relative">
          <div className="absolute sm:right-[18px]   ml-[10px] sm:pl-0 top-[18px]  sm:w-[40px] md:w-[75px] w-[60px]  md:h-[75px] h-[60px] sm:h-[40px] flex justify-center items-center bg-[#1364FF] rounded-full">
            <img src="Arrow 1.png" className="w-[32px] pl-[10px]" />
          </div>
        </div>
        <p className="font-normal md:text-[36px] text-[28px] text-[#000000] ml-2 ">{name}</p>
        <div className="ml-4">
          <span className="md:text-[24px] text-[14px] font-normal text-[#7A7A7A]">
            {deletePrice}
          </span>{" "}
          <span className="text-[#1364FF] font-normal md:text-[24px] text-[14px] ml-[27px]">
            {price}
          </span>
        </div>
      </div>
    </>
  );
};

export default FetureBlackCard;
