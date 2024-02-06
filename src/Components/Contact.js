import React from 'react';
import { Styles } from '../utils/Style';  // Adjust the path based on your project structure
// import contact from '../assets/contact.jpg';

const Contact = () => {
  return (
    <div>
      <div className="flex-row items-center pl-s justify-center pt-3" id="Contact">
        <span className={Styles.sectionHeadText}>
          Contact
        </span>
        <hr className='w-[35%]'></hr>
      </div>
    <div className='mt-5'>
      <div className='flex flex-wrap flex-row justufy-around'>
        <div className='lg:w-[40%]'>
          <form className='m-5 flex flex-col gap-3'>
            <label className='flex flex-col gap-3'>
               <span className='text-violet-700 font-medium mb-2'>
                Your Name:
               </span>
               <input 
                 type='text'
                  name='name'
                   placeholder="What is your good name?"
                   className="bg-green-200 py-4 px placeholder:text-secondary text-orange-500  rounded-lg
                   outline-none border-none font-medium ">

                   </input>
            </label>

            <label className='flex flex-col gap-3'>
               <span className='text-violet-700 font-medium mb-2'>
              Your Email:
               </span>
               <input 
                 type='email'
                  name='email'
                   placeholder="Whats your web address?"
                   className="bg-green-200 py-4 px placeholder:text-secondary text-orange-500  rounded-lg
                   outline-none border-none font-medium ">
                    
                   </input>
            </label>

            <label className='flex flex-col gap-3'>
               <span className='text-violet-700 font-medium mb-2'>
                Your message:
               </span>
               <textarea 
               
                  row={5}
                  name='name'
                   placeholder="What do u want to say?"
                   className="bg-green-200 py-4 px placeholder:text-secondary text-orange-500  rounded-lg
                   outline-none border-none font-medium ">
                    
                   </textarea>
            </label>

            <button
             type='submit'
             className='bg-slate-100 hover: shadow-orange-300 py-3 px-8 mb-4 m-4 rounded-xl outline-none w-fit
             text-black font-bold shadow-md shadow-md shadow-primary'
             >
              Submit
             </button>
          </form>

        </div>
        {/* <div className='lg:w-[50%]'>
          <img src={contact} alt='any img' width ='600' length='600' />
        </div> */}

      </div>
    </div>
    </div>
  );
}

export default Contact;
