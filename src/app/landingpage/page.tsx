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
import { IoMdHome } from "react-icons/io";
import { FaUserLarge } from "react-icons/fa6";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
// If the image is in the public folder, no need to import. Use "/rwanda.jpg" directly.

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-gray-100 bg-opacity-90 h-screen w-screen">
        {/* header section */}
      <header className="flex flex-row px-14 h-10  items-center justify-between text-gray-500">
        {/* Left content of the header */}
        <div className="flex flex-row gap-6">
          {/* KiKUU Home Section */}
          <div className="flex flex-row gap-2">
            <IoMdHome className="h-6" />
            <p>KiKUU Home</p>
          </div>
          {/* Header Login and Register */}
          <div className="flex flex-row gap-2">
            <FaUserLarge className="h-6" />
            <p>Login|Register</p>
          </div>
        </div>

        {/* Right side of the header */}
        <div className="flex flex-row gap-4">
          <div className="flex flex-row gap-2">
            <MdOutlinePhoneAndroid className="h-6" />
            <p>Save big on our App</p>
          </div>
          <div className="flex flex-row gap-2">
            <p>Language</p>
            <IoIosArrowDown className="h-6" />
          </div>
          <div className="flex flex-row gap-2">
            <Image
              src="/rwanda.jpg" // Use public folder path directly
              alt="Rwanda"
              width={24}
              height={24}
              className="rounded-full"
            />
            <p>Rwanda</p>
            <IoIosArrowDown className="h-6" />
          </div>
        </div>
      </header>
      {/* lower section to header */}
      <div className="flex flex-col bg-white h-24 w-screen">

      </div>
    </div>
  );
};

export default LandingPage;
