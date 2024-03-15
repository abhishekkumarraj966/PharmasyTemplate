import React from "react";

const BluePageCard = ({ service }) => {
  return (
    <div className="flex flex-col">
    <div className="md:w-[364px] w-[350px] h-[360px] sm:w-[210px] md:h-[300px] sm:h-[190px] rounded-[15px] bg-[#FFFFFF] relative">
      <div className="absolute sm:right-[18px] ml-[10px] sm:pl-0 top-[18px] sm:w-[40px] md:w-[75px] w-[60px] md:h-[75px] h-[60px] sm:h-[40px] flex justify-center items-center bg-[#1364FF] rounded-full">
        <img src="Arrow 1.png" className="w-[32px] pl-[10px]" />
      </div>
    </div>

   
    
  </div>
  );
};

export default BluePageCard;
