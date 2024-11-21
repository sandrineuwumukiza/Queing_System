// "use client"
// import React from "react";
// import Image from "next/image";
// import { IoMdHome } from "react-icons/io";
// import { FaUserLarge } from "react-icons/fa6";
// import { MdOutlinePhoneAndroid } from "react-icons/md";
// import { IoIosArrowDown } from "react-icons/io";
// import rwanda from "/public/rwanda.jpg"


// const LandingPage = () =>{
//     return (
//         <div className="flex flex-col bg-gray-50 bg-opacity-90 h-screen w-screen">
//             <header className="flex flex-row  px-14 h-10 bg-red-600 items-center justify-between  text-gray-500">
//                 {/* this is the left content of the header */}
//                 <div className="flex flex-row gap-6">

//                  {/* kikku home section */}
//                  <div className="flex flex-row gap-2">
//                  <IoMdHome className="h-6" />
//                  <p>KiKUU Home</p>
//                  </div>
//                  {/* header login and register  */}
//                  <div className="flex flex-row gap-2">
//                     <FaUserLarge className="h-6" />
//                     <p>Login|Register</p>
//                  </div>

//                 <div>
              

//                 </div>
//                  <div>

//                  </div>


//                 </div>
                      
//                     {/* the right side of the header */}
//                 <div className="flex flex-row gap-4">
//                     <div className="flex flex-row gap-2">
//                     <MdOutlinePhoneAndroid className="h-6"/>
//                     <p>Save big on our App</p>
//                     </div>
//                     <div className="flex flex-row gap-2">
//                         <p>Language</p>
//                         <IoIosArrowDown className="h-6" />
//                     </div>

//                     <div className="flex flex-row gap-2">
//                         <img src={rwanda} />
//                         <p>Rwanda</p>
//                         <IoIosArrowDown className="h-6" />
//                     </div>

//                 </div>
//             </header>


//         </div>
//     )
// }



// export default LandingPage;


"use client";
import React from "react";
import Image from "next/image";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidCart } from "react-icons/bi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
// If the image is in the public folder, no need to import. Use "/rwanda.jpg" directly.

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-gray-100 bg-opacity-90 h-screen w-screen">
        {/* header section */}
      <header className="flex flex-row px-14 h-10  py-2 items-center justify-between text-gray-500">
        {/* Left content of the header */}
        <div className="flex flex-row gap-6  ">
          {/* KiKUU Home Section */}
          <div className="flex flex-row gap-2 hover:cursor-pointer hover:text-red-400">
            <IoMdHome className="h-6" />
            <p>KiKUU Home</p>
          </div>
          {/* Header Login and Register */}
          <div className="flex flex-row gap-2">
            <FaUserLarge className="h-6" />
            <div className="flex flex-row gap-1">
                <p className="hover:text-red-400 hover:cursor-pointer">Login</p>
               <span >|</span>
               <p className="hover:text-red-400 hover:cursor-pointer ">Register</p>
            </div>
          </div>
        </div>

        {/* Right side of the header */}
        <div className="flex flex-row gap-4">
          <div className="flex flex-row gap-2 hover:cursor-pointer hover:text-red-400">
            <MdOutlinePhoneAndroid className="h-6" />
            <p>Save big on our App</p>
          </div>
          <div className="flex flex-row gap-2 hover:cursor-pointer hover:text-red-400  ">
            <p>Language</p>
            <IoIosArrowDown className="h-6" />
          </div>
          <div className="flex flex-row gap-2 hover:text-red-400 hover:cursor-pointer">
            <Image
              src="/rwanda.jpg" 
              alt="Rwanda"
              width={24}
              height={24}
              className="rounded-full"
            />
            <p >Rwanda</p>
            <IoIosArrowDown className="h-6" />
          </div>
        </div>
      </header>
      {/* lower section to header */}
      <div className="flex flex-row items-center bg-white h-24 w-screen pl-14 pr-4">
            <Image
            src= "/kikkusho.webp"
            alt="Kikkusho"
            width = {240}
            height={280}
            />
            {/* middle search bar  */}
            <div className="flex flex-row justify-between border-red-400 border-2 rounded-3xl h-10 ml-10" style={{width:"530px"}}>
            <div className="flex flex-row gap-2 pl-4 items-center ">
            <IoSearchSharp  className="h-16 text-red-400 font-extrabold"/>
            <input type="text" placeholder="What are you looking for??" className="focus:outline-none text-black" />
            </div>
            
            <p className="bg-red-400 text-white font-extrabold rounded-tr-3xl rounded-br-3xl text-xl px-4">search</p>
            </div>
          {/* cart on the right */}
          <div className="flex flex-row gap-2 border-2 border-red-400 rounded-xl items-center h-10">
            <BiSolidCart className="h-10 text-red-400" />
            <p className="text-red-400 font-extrabold">Cart</p>
            <MdOutlineKeyboardArrowRight />
           </div> 
      </div>
    </div>
  );
};

export default LandingPage;
