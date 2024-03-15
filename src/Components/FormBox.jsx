import React, { useState } from 'react'
import AppLayout from './AppLayout'

const FormBox = () => {
    //   const [name,setName]=useState('');
    //   const [email,setEmail]=useState('');
    //   const [message,setMessage]=useState('');
    //   const [phone,setPhone]=useState('');
    //    let handleSubmit=(e)=>{
    //     e.preventDefault();
    //     alert(name,email,message,phone);
    //     //call your api heere

    //    }
    //    let handleClear=(e)=>{
    //        e.preventDefault();
    //        setName("")
    //        setEmail("");
    //        setMessage("");
    //        setPhone("")
    //    }
    return (
        // <div className='w-[1284px] h-[699px] mx-auto mt-[60px] '>
        //     <header className='h-[153px] bg-[#ADC9FF] rounded-tl-[22px] rounded-tr-[22px] flex justify-center items-center'>
        //         <p className='font-normal font-serif w-[234px] text-[32px] text-center  text-[#888888]'>GET IN TOUCH
        //             with US</p>
        //     </header>
        //     <div className='flex '>
        //         <div className='w-[420px] rounded-bl-[22px] h-[540px] mt-[3px] bg-[#ADC9FF] flex flex-col justify-center items-center'>
        //             <div className='flex flex-col items-center'>
        //                 <div className='w-[70px] h-[70px] rounded-full border-[1px] border-white flex justify-center items-center'>
        //                     <img src='images/Location.png' className='w-[50px] h-[50px]' />
        //                 </div>
        //                 <p className='font-normal text-[20px] text-center w-[320px] text-white mt-[22px]'>Pharmacy Store, nr joyal bakers,
        //                     Ahmedabad 382330</p>
        //             </div>
        //             <div className='mt-[35px] flex flex-col items-center'>
        //                 <div className='w-[70px] h-[70px] rounded-full border-[1px] border-white flex justify-center items-center'>
        //                     <img src='images/Phone.png' className='w-[50px] h-[50px]' />
        //                 </div>
        //                 <p className='font-normal text-[20px] text-center w-[320px] text-white mt-[22px]'>1-800-123-9999</p>
        //             </div>
        //             <div className='mt-[35px] flex flex-col items-center'>
        //                 <div className='w-[70px] h-[70px] rounded-full border-[1px] border-white flex justify-center items-center'>
        //                     <img src='images/Mail.png' className='w-[50px] h-[50px]' />
        //                 </div>
        //                 <p className='font-normal text-[20px] text-center w-[320px] text-white mt-[22px]'>pharmacystore@gmail.com</p>
        //             </div>
        //         </div>
        //         <div className='bg-[#adc8ff96] w-full h-[543px] rounded-br-[22px]'>
        //             <form className='ml-[16px]'>
        //                 <div className='flex h-[85px] items-center'>
        //                     <label htmlFor='name' className='font-normal text-[20px] text-[#00000098] w-[52px]'>Name</label>
        //                     <input type='text' value={name} onChange={(e)=>setName(e.target.value)} id='name' className='outline-none border-0 bg-[#adc8ff04] shadow-none font-bold text-[30px] ml-5' />
        //                 </div>
        //                 <hr className='w-[787px] h-[3px] bg-[#D9D9D9] ' />
        //                 <div className='flex h-[85px] items-center mt-[20px]'>
        //                     <label htmlFor='email' className='font-normal text-[20px] text-[#00000098] w-[72px]'>E-mail</label>
        //                     <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} id="email" className='outline-none border-0 bg-[#adc8ff04] shadow-none font-bold text-[30px] ml-5' />
        //                 </div>
        //                 <hr className='w-[787px] h-[3px] bg-[#D9D9D9] ' />
        //                 <div className='flex h-[85px] items-center mt-[20px]'>
        //                     <label htmlFor='phone' className='font-normal text-[20px] text-[#00000098] w-[52px]'>Phone</label>
        //                     <input id='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} type='text' className='outline-none border-0 bg-[#adc8ff04] shadow-none font-bold text-[30px] ml-5' />
        //                 </div>
        //                 <hr className='w-[787px] h-[3px] bg-[#D9D9D9] ' />
        //                 <div className='flex h-[85px] items-center mt-[20px]'>
        //                     <label htmlFor='message' className='font-normal text-[20px] text-[#00000098] w-[62px]'>Message</label>
        //                     <input type='text' value={message} onChange={(e)=>setMessage(e.target.value)} id='message' className='outline-none border-0 bg-[#adc8ff04] shadow-none font-bold text-[30px] ml-5' />
        //                 </div>
        //                 <hr className='w-[787px] h-[3px] bg-[#D9D9D9] ' />

        //                 <div className='mt-[42px] flex justify-between w-[787px]'>

        //                     <button type='submit' onClick={handleSubmit} className='font-normal text-[20px] text-white w-[168px] h-[58px] rounded-[6px] bg-[#1364FF] hover:bg-[#1366ffde] flex justify-center items-center'>Submit</button>
        //                     <button onClick={handleClear} className='text-[#888888] font-normal text-[20px] '>Clear form</button>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>


     <AppLayout>
        <div class="grid sm:grid-cols-2  grid-cols-1 gap-4 sm:bg-[#E34765] rounded-[30px] mt-20">
          <div class="col-span-1 text-white bg-[#E34765]  rounded-2xl" >
            <h1 className="text-center mt-10 mb-4  font-bold text-[34px]">
              Contact Us
            </h1>
            <div className="text-white  py-2  px-8  md:py-4 md:px-16  lg:pl-20  lg:py-4  items-center">
              <div className="grid-cols-2 flex flex-row gap-2 pl-3 rounded-full border-2 border-slate-50  h-[80px] w-[340px]  lg:w-[500px] mb-5 pt-3">
                <div className="col-span-1 md:pl-4">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/2acf/f2bc/39d8b9dcd643238b24048783ddc4a715?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dg0bNWpnFYdITQMozK-BACRCdzj28Ty5gxol~b5ROCNXIw2pNsPk0F5GBm4tD~RJxPuBZXWX9Ky~~Wb1QxpD5AAPpYDSfU8keZIdWphgAICGK9b-M2KTLTUPeNvnZv4OgShGnhl8sbKp6a2twVhvmrkTzeQaI8jcdhFpc6xi5U0xN~fyaj~LuigbTUpnajbwdMFCnO1HP8Jj9X8VWGHCWRDf5SJR2bSXLbzAxYpED~cAl6lNPO4UxvwIBXDHYBKqrBFTxiGre3J3yLtda19kzyS7H8~MvhLp8EXLaRvJerJaeiSexX5xUpXQSq4u2v-tpQPt3DIVQ5Cm-talR7iO~A__"
                    alt=""
                    className="h-[50px] w-[50px]"
                  />
                </div>
                <div className="col-span-1 px-1  ">
                  <h6
                    className="text-[22px] font-mono tracking-wide justify-center "
                  >
                    Location
                  </h6>
                  <p className="font-mono tracking-wide  text-[19px]  justify-center">S G Highway, Ahmedabad</p>
                </div>
              </div>
  
              <div className="grid-cols-2 flex flex-row gap-2 pl-3 rounded-full border-2 border-slate-50  h-[80px] w-[340px] lg:w-[500px] mb-5 pt-3">
                <div className="col-span-1 md:pl-4">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/86b1/007f/1982dabe194a6bd17cc4a3ae1f1d7641?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BSw9pDNv07O1Ud8TwQjadImzkA2pGEVrO1rnOQyxko7TW4TotGXffF-Y3iNj4I7d8Pz8oO0unD04NX8U230nb8PmY5ZaTd4pOdikjE-Z94OYvAhkHMD5wLhtdG1o8Vv7T2XfLy1R6hcZQoV7STBQNBSAI1k8aC-TYXaLeRSCCOSFu8qFeFLfRbMONLuPA6n98K4WjpAUXANjQ4Yh72zh7zvrKW6TDo7sxfg6Dl1T6401dgtREk~FLd7kSyEKO2PgoOVSPzwiA3xs0MujBFrllIJoV~oKTGm94NpKnB1I9HiLAN6-MWLi0hvxPUREj3gDZCISPA72bttaDYGq5Mqvdg__"
                    alt=""
                    className="h-[50px] w-[50px]"
                  />
                </div>
                <div className="col-span-1 px-4 ">
                  <h6
                   className="text-[22px] font-mono tracking-wide justify-center "
                  >
                    Contact
                  </h6>
                  <p className="font-mono tracking-wide  text-[19px]  justify-center">1-800-123-9999</p>
                </div>
              </div>
              <div className="grid-cols-2 flex flex-row gap-2 pl-3 rounded-full border-2 border-slate-50  h-[80px] w-[340px] lg:w-[500px] mb-5 pt-3">
                <div className="col-span-1 md:pl-4">
                  <img
                    src="https://s3-alpha-sig.figma.com/img/d162/e3b4/e7e259800110e0ba4d53dfd9a0454a34?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Iog~uHEhsXIOVFu89kGMSzk8Q88U9jm77sHsTrDyCSfNIkkP27YAXthuVLqrd4~-lneH9z4O0j3g17K5IXgkdkUk4V4jzofQCVg4-Owi2x~z3yr5e2rvsYv~oofGcUlFuPtLXNONyiEYX~zqaPMtIo3V6YmMFiT0Sh8mRf~m2pneGZ1M4N-VnDJ0QAkbLqZj7~fy0DuKxzqlCDD5YPAvPACpKGFk7jIeTTX6pvf0TidIOJbPIwh6TSrbXeTDEBygD7UG6ASNx-FEXaVLv7FTsV5J8hV~mOLi9OApkTyOIq0W4uUvxZvfWwBF4y8Oq9f8DeYVgbaOH7iSAN5TfO75uQ__"
                    alt=""
                    className="h-[50px] w-[50px]"
                  />
                </div>
                <div className="col-span-1 px-4 ">
                  <h6
                   className="text-[22px] font-mono tracking-wide justify-center "
                  >
                   Mail
                  </h6>
                  <p className="font-mono tracking-wide  text-[19px]  justify-center">foodielove@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
  
          <div class="col-span-1  bg-[#f1f1f1] sm:bg-[#E12B4D]   rounded-2xl">
            <div className="">
              <img src="https://s3-alpha-sig.figma.com/img/2164/7980/2b91f8f2aa570c2e0231197409353fe1?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VKKl2TckOBDaC~kjiWoJ-BssY82W97oH8tKqeRoZX9JL6msCD0er3zSkCqyGSGLGjR85vQuiSvtNODAKzaN0XGHCxLWNbOCIyYFHicpYphCqTguzCO01AiQBIbzO26bhFoyIK7XqmMysuiSeQUIplDDLYSTHRepalYv456tV0a2RD8LIp6OZFjT5q7nsoeIYWNFmbyoFygdd5P6ZXBQb~zt74NqR1UvYMj2prEldQRrd05cWp7ie88fRiRaI9DbcQLcdXrrPJDgioUBPp6hk3kJsL0~D2rr5gxglsF2tsykw-YfE5xwA0r6ZSODAt3bufMI29bGm3jw8rMybyRW5Dw__" 
              alt=""
            //   style={{
            //     WebkitBoxShadow: "10px 10px 22px 22px rgba(0,0,0,0.75)",
            //     MozBoxShadow: "10px 10px 22px 22px rgba(0,0,0,0.75)",
            //     boxShadow: "10px 10px 22px 22px rgba(0,0,0,0.75)",
            // }}
              className="h-[556px] w-[488px]  sm:mt-[-110px] "
              />
            </div>
          </div>
        </div>
        </AppLayout>

    )
}

export default FormBox