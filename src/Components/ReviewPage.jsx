import React from 'react'

const ReviewPage = () => {
  return (
    <>
    {/* <div className='w-[90%] h-[785px] flex flex-col items-center mx-auto'>
         <div className='flex ml-[0px] mx-auto sm:mx-auto mt-[43px] items-center'>
                <span className='text-[#1364FF] font-normal sm:text-[25px] text-[20px] mb-[10px] sm:mt-[-82px] '>Review</span>
                <div className='  ml-4 md:ml-[160px]'>
                    <h3 className='sm:w-[308px] w-auto text-[#000000] sm:text-[40px] text-[30px] font-medium'> Reviews That Inspire Us</h3>
                    <p className='text-[#7A7A7A] text-[25px] font-normal '>Description</p>
                </div>
                
            </div>

            <div className='flex gap-[111px] mt-[80px]'>
                <div className='w-[93px] h-[93px] rounded-full bg-black'></div>
                <div>
                    <div className='w-[50px] h-[50px] rounded-full border-[2px] border-[#BCBCBC] flex justify-center items-center'><img src='images/quote.png'/></div>
                    <p className='font-medium text-[24px] w-[548px] text-[#202020]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <p className='font-medium text-[20px] text-[#0D0D0D] '>Theresa J. Jones</p>
                    <p className='font-medium text-[20px] text-[#7A7A7A] '>24 years old</p>
                </div>
            </div>
    </div> */}
      <h1 className=" text-center font-bold text-[34px] text-[#4B4B4B] mb-10">
        Reviews
      </h1>
      <div className="mb-5 pb-5 ">
        <div className="px-2  sm:ml-[18%]  md:ml[28%] lg:ml-[30%] my-10">
          <div class="relative flex w-[350px]  bg-[#E8E8E8] sm:w-[500px]  flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
            <div class="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
              <img
                src=""
                alt="EMG"
                class="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center"
              />
              <div class="flex w-full flex-col gap-0.5">
                <div class="flex items-center justify-between">
                  <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Abhishek Raj
                  </h5>
                  {/* <div class="flex items-center gap-0 5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5 text-yellow-700"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div> */}
                </div>
                {/* <p class="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                  Frontend Dev.
                </p> */}
              </div>
            </div>
            <div class="p-0  px-2 mb-6">
              <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                “ It is a long established fact that a reader will be tracked
                distracted by the readable content of a page is when looking at
                its layout. The point of using Lorem of distribution it look
                like readable English “
              </p>
            </div>
            {/* <div className="flex gap-2 sm:gap-10 mb-5">
              <button className="bg-[#B8FC83] text-black px-4 py-1.5 rounded-md  focus:outline-none focus:ring focus:border-green-700 flex w-[125px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/ef4a/1cc7/2134ddd358055a91181134472101c884?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XkgdqZIjJOsB10~jqfJUd0NK0eezT~MDVsBjvkPKuGt~l1ULHEjW0k1CHrcuX6qujcj294WpDR7xF~d-~KUWVRsuG9n-F4w~H8LrZrbo~NYboJLHuWeun2xsX7bKLZVo20cvdFDB4yoO-BfnDVk7G9obPNf-1LBFKHsYjuDx5InTp~8LdaVMY9MG-ljJM4DhHM8RCZy3ikcUDbXtfHJGijvLFuql0J4WuZZ~cl0I-0BbcqvcbIixAE7cDdUT2IfcjykfXpUaqXdNvAbOnGVSCDHrCHSESD0klbMGBIyLB4OXbKRIRqly5hhh-g8nEGeV7y4CUqftcuRQS~rou1YwLg__"
                  alt=""
                  className="h-[30px] w-[30px] pr-2"
                />
                <span className="font-medium text-[18px] "> Food</span>
              </button>
              <button className="bg-[#B8FC83] text-black px-6 py-1.5 rounded-md  focus:outline-none focus:ring focus:border-green-700 flex w-[157px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/ef4a/1cc7/2134ddd358055a91181134472101c884?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XkgdqZIjJOsB10~jqfJUd0NK0eezT~MDVsBjvkPKuGt~l1ULHEjW0k1CHrcuX6qujcj294WpDR7xF~d-~KUWVRsuG9n-F4w~H8LrZrbo~NYboJLHuWeun2xsX7bKLZVo20cvdFDB4yoO-BfnDVk7G9obPNf-1LBFKHsYjuDx5InTp~8LdaVMY9MG-ljJM4DhHM8RCZy3ikcUDbXtfHJGijvLFuql0J4WuZZ~cl0I-0BbcqvcbIixAE7cDdUT2IfcjykfXpUaqXdNvAbOnGVSCDHrCHSESD0klbMGBIyLB4OXbKRIRqly5hhh-g8nEGeV7y4CUqftcuRQS~rou1YwLg__"
                  alt=""
                  className="h-[30px] w-[30px] pr-2"
                />
                <span className="font-medium text-[18px] "> Quality</span>
              </button>
              <button className="bg-[#B8FC83] text-black px-4 py-1.5 rounded-md  focus:outline-none focus:ring focus:border-green-700 flex w-[134px]">
                <img
                  src="https://s3-alpha-sig.figma.com/img/ef4a/1cc7/2134ddd358055a91181134472101c884?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XkgdqZIjJOsB10~jqfJUd0NK0eezT~MDVsBjvkPKuGt~l1ULHEjW0k1CHrcuX6qujcj294WpDR7xF~d-~KUWVRsuG9n-F4w~H8LrZrbo~NYboJLHuWeun2xsX7bKLZVo20cvdFDB4yoO-BfnDVk7G9obPNf-1LBFKHsYjuDx5InTp~8LdaVMY9MG-ljJM4DhHM8RCZy3ikcUDbXtfHJGijvLFuql0J4WuZZ~cl0I-0BbcqvcbIixAE7cDdUT2IfcjykfXpUaqXdNvAbOnGVSCDHrCHSESD0klbMGBIyLB4OXbKRIRqly5hhh-g8nEGeV7y4CUqftcuRQS~rou1YwLg__"
                  alt=""
                  className="h-[30px] w-[30px] pr-2"
                />
                <span className="font-medium text-[18px] "> Taste</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    <hr className=' border-0 h-[1px] mb-[34px] w-full bg-[#A1A3A7]  '/>

    </>
  )
}

export default ReviewPage