import React from 'react';
import { Styles } from '../utils/Style';
import { projects } from '../Constant/index';
import Tilt from 'react-parallax-tilt';
import {SiGithub} from 'react-icons/si'
import {SiNetlify} from 'react-icons/si'

const Project = () => {
  return (
    <div>
      <div className="flex-col items-center pl-s justify-center  pt-3" id="Projects">
       <div className="text-center">
         <span className={Styles.sectionHeadText}>
          Projects
        </span>
        </div>
        <hr className=' items-center mr-6 ml-6 text-slate-600' ></hr>
        <div className="text-center font-serif text-slate-600 p-6 mr-20 ml-20 ">
          Explore a collection of my diverse web development projects that showcase my skills and creativity. From crafting seamless e-commerce platforms to designing intuitive task management apps, each project reflects my commitment to delivering innovative solutions. Currently, I'm working on exciting endeavors, including a machine learning dashboard and a community forum platform, pushing the boundaries of web development. Stay tuned for more updates as I continue to bring ideas to life in the digital realm.
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center">
        {projects.map((project) => (
          <Tilt key={project.name} className='w-[300px] h-[500px] flex-col flex justify-evenly shadow-2xl m-10 items-center hover:shadow-2xl hover:shadow-violet-400 shadow-pink-300 p-3 rounded-xl border-2 border-violet-900'>
            {/* Add content and details of each project here */}
            <img src={project.image} alt={project.name} className="h-[100px] w-[100px] mb-4" />
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>

            <div>
                <div className='flex justify-center items-center mb-3'>
                      <div className=' h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500
                      flex justify-center items-center'>
                        <a href={project.source_deploy_link} target='blank' >
                            <SiNetlify className="text-3xl font-bold text-violet-600"></SiNetlify>

                        </a>

                      </div>
                      <div className=' h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500
                      flex justify-center items-center'>
                        <a href={project.source_code_link} target='blank' >
                            <SiGithub className="text-3xl font-bold text-violet-600"></SiGithub>

                        </a>

                      </div>
                </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Project;
