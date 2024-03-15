import React from 'react'
import AppLayout from './AppLayout'
const AppoinmentPage = () => {
  return (
    // <div className='w-[95%] h-[425px] mx-auto mt-[80px]'>
    //     <h3 className='font-medium text-[24px] text-[#0058FF] w-[160px] '>Appointment</h3>
    //     <div className='w-[81%] mt-[70px] h-[207px] bg-[#adc8ff8e] mx-auto rounded-[12px] flex justify-around items-center'>
    //        <div>
    //         <h3 className='font-normal text-[28px] text-black font-serif'>Date</h3>
    //         <input type='date' className='bg-[#ADC9FF] w-[533px] h-[81px] rounded-[12px] px-4 mt-2 '/>
    //        </div>
    //        <div>
    //         <h3 className='w-[64px] font-normal text-[28px] font-serif'>Hour</h3>
    //         <input type='time' className='bg-[#ADC9FF] w-[351px] h-[81px] rounded-[12px] px-4 mt-2'/>
    //        </div>
    //     </div>
    //     <div className='text-center mt-[43px]'>

    //     <button className='bg-[#1364FF] w-[382px] h-[73px] rounded-[5px] font-semibold text-[24px] text-white '>Make An Appoinment</button>
    //     </div>
    // </div>
    <div className="mt-5">
    <div className="">
      <AppLayout>
        <div className="text-center leading-5 mx-auto pt-4 sm:mx-5 my-5 sm:px-5">
          <div className="sm:text-2xl  text-black">
            <span className="font-medium  sm:text-[40px] text-[30px]">
              Appointment Section
            </span>
          </div>
        </div>

        <div className="py-4  ">
          <div className="mb-4 sm:w-[500px] bg-[#adc8ff8e] rounded-[25px] sm:mx-[20%] sm:px-5 md:mx-[30%] ">
            <div className="py-2 flex ">
              <div className="flex-col gap-40 py-2 px-4">
                <label
                  htmlFor="name"
                  className="block  font-semibold text-black  text-[20px]"
                >
                  Date :
                </label>
                <input
                  type="tel"
                  id="name"
                  name="name"
                
                  className="w-[200px]  mt-2 border-2 rounded-xl py-4 px-2 focus:outline-none focus:border-black-500  text-black"
                  placeholder="Pick a date"
                  required
                />
              </div>

              <div className="flax-col py-2">
                <label
                  htmlFor="name"
                  className="block  font-semibold text-black    text-[20px]"
                >
                  Hour :
                </label>
                <input
                  type="tel"
                  id="name"
                  name="name"
              
                  className="w-[130px]  mt-2 border-2  rounded-xl py-4 px-1 focus:outline-none focus:border-black-500  text-black "
                  placeholder="Select Hour"
                  required
                />
              </div>
            </div>
          </div>
          <div className="w-60   mx-auto  my-4 ">
            <button
              type="button"
              className="bg-[#0058f1]   text-white font-[20px] py-2 px-4 lg;rounded-xl rounded-2xl h-14 lg:w-64 w-64"
              // onClick={handleButtonClick} // Add your click event handler function
            >
              Make An Appoinment
            </button>
          </div>
        </div>
      </AppLayout>
    </div>
  </div>
  )
}

export default AppoinmentPage