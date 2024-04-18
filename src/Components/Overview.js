import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Styles } from '../utils/Style';
import { technologies, services } from '../Constant/index';
import './style.css';

const Overview = () => {
  return (
    <div>
      <div className="flex-row items-center pl-s justify-center pt-3" id="Overview">
       <div className="text-center">
        <span className={Styles.sectionHeadText}>
          Introduction
        </span>
        </div>
        <hr className='text-center mr-6 ml-6 text-slate-600'></hr>
        <div className="text-center font-serif text-slate-600 p-6 mr-20 ml-20">
          Hello! I'm a skilled web developer specializing in JavaScript, HTML, CSS, and React. With a focus on creating dynamic and visually appealing web applications, I bring a wealth of experience to the table. From crafting interactive interfaces to optimizing performance, I'm dedicated to delivering high-quality code. Let's turn your ideas into captivating online experiences!
        </div>
      </div>

      <div className="flex items-center justify-center parallax-effect-wrapper">
  {services.map((service) => (
    <Tilt
      key={service.icon}
      className="parallax-effect-flare-scale service-box"
      perspective={500}
      glareColor="fed7aa"
      flareEnable={true}
      glareMaxOpacity={0.50}
      scale={1.02}
      gyroscope={false}
    >
      <div className="p-3 m-3 flex flex-col items-center">
        <img className="h-[100px] w-[100px]" src={service.icon} alt={service.title} />
        <div className="mt-2 text-violet-500">
          {service.title}
        </div>
      </div>
    </Tilt>
  ))}
</div>

      
      <div className="flex flex-wrap justify-center items-center">
        {technologies.map((technology) => (
          <div
            key={technology.name}
            className='technology-item m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-2 border-violet-400 hover:shadow-orange-300'>
            <img className='p-2' src={technology.icon} alt={technology.name} />
            <div className='text-violet-600 justify-center flex'>
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;
