import React from 'react';
import Profile from "../assets/profile.jpg";
import Resume from "../assets/Resume.pdf";
import Style, { Styles } from "../utils/Style";
import { TiArrowDownOutline } from "react-icons/ti";
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mt-10 p-10" id="Home">
      <div className='flex-1 py-4'>
        <motion.span
          className={Styles.heroHeadText}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I'm{' '}
          <motion.span
            className='text-blue-600'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            KHEMRAJ
          </motion.span>
          <br />
          <motion.span
            className={Styles.heroSubText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I am Frontend Developer & <br /> Web designer
          </motion.span>
        </motion.span>

        <br />
        <br />
        <div className='w-[14rem]'>
          <a href={Resume} download="Resume" target='_blank' rel="noreferrer">
            <div className ='p-4 mt-2 w-[13rem] rounded-full text-brown-300 bg-blue-300 flex justify-center border-2 border-blue-500 hover:border-violet-500 shadow-lg hover:shadow-orange transition duration-300'>
              <TiArrowDownOutline className="text-lg mr-3 text-orange"></TiArrowDownOutline> Resume
            </div>
          </a>
        </div>
      </div>

      <div className="flex flex-wrap flex-1 justify-center items-center">
        <img 
          src={Profile} 
          alt="Profile" 
          className="element object-contain p-4" 
          style={{ width: '500px', height: '600px', boxShadow: '0px 0px 10px pink' }} 
        />
      </div>
    </div>
  )
}

export default About;
