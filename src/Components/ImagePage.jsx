import React from "react";

const ImagePage = () => {
  return (
    <div className="">
    <div className="w-full md:h-[604px] sm:h-[410px] h-[300px]  bg-[#0058FF] flex justify-around items-center rounded-2xl sm:rounded ">
      <div>
        <img src="images/MedicineImage.png" className="md:w-[605px] sm:w-[400px] md:h-[600px] h-[200px]  w-[220px] sm:h-[400px] " />
      </div>
      <div className="md:h-[456px] h-[250px] sm:h-[400px] md:w-[506px] w-full sm:w-[400px] relative ">
        <img src="images/tablet.png" />
        <div className="absolute top-[65px] sm:left-[28px]">
          <h2 className="sm:w-[319px] w-[180px] sm:h-[144px] text-[#FFFFFF] sm:text-[48px] text-[25px]  font-bold text-center ">
            We are open 24 x 7
          </h2>
          <p className="sm:w-[375px] w-[250px] sm:text-[32px] text-[22px] font-normal text-center ml-[-30px] md:mt-[105px] sm:mt-auto text-white">
            Happy to help you Anytime :)
          </p>
        </div>
      </div>
    </div>
    <div className="sm:pb-10"></div>
    </div>
  );
};

export default ImagePage;
