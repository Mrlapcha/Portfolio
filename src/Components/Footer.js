import React from 'react';
import { SiGithub } from 'react-icons/si';
import {BiSolidPhoneCall} from 'react-icons/bi'
import {GrMail} from 'react-icons/gr'

// Footer component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto">
        {/* Footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left section of the footer */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">khemrajlapcha14</h2>
            <p className="text-gray-400">A passionate web developer</p>
          </div>

          <div className=" flex flex-row p-2 flex-wrap justify-around">
<a href='https://github.com/Mrlapcha' target='blank' className='text-lg flex flex-row text-violet-300'>
 <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'
 >
  <SiGithub className="text-white"></SiGithub>

 </div>
 
   </a>
</div>

<div className=" flex flex-row p-2 flex-wrap justify-around">
<a href='+9779815055006' target='blank' className='text-lg flex flex-row text-violet-300'>
 <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'
 >
  <BiSolidPhoneCall className="text-white"></BiSolidPhoneCall>

 </div>
 
   </a>
</div>

<div className=" flex flex-row p-2 flex-wrap justify-around">
<a href='khemrajlapcha14@gmail.com' target='blank' className='text-lg flex flex-row text-violet-300'>
 <div className='h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400'
 >
  <GrMail className="text-white"></GrMail>

 </div>
 
   </a>
</div>
          {/* Right section of the footer */}
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Me</h3>
            <ul className="mb-4">
              <li>Email:khemrajlapcha14@gmail.com</li>
              <li>Phone: +977 9815055006</li>
              <li>Address: Buddhashanti-6, Jhapa, Nepal</li>
            </ul>
            <p className="text-gray-400 text-align: center">© 2023 Khemraj Lapcha. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
