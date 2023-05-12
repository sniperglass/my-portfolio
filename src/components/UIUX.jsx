import React from 'react';
import iphone from '../assets/mockup.png'
import { FaLongArrowAltRight } from 'react-icons/fa';

const Uiux = () => {


  return (
    <div name='UI/UX' className='w-full h-screen bg-orange-400'>

        <div className='max-w-screen-lg p-7 md:p-4 mx-auto flex
        flex-col w-full justify-center md:h-screen pt-28
          '>

            <div className='xs:mt-20'>           
                <p className='text-3xl md:text-4xl inline font-bold text-white border-b-4 
                border-black'>UI/UX</p>
            </div> 

            

            <div>
                <p className='xs:text-lg mt-8 text-white'>
                    Here's a peek into what I've been doing lately..
                    </p>

                <br />

                <p className='xs:text-2 font-bold flex text-white'>
                    Open Case Study <span className='flex align-middle mx-1 p-1'><FaLongArrowAltRight /></span> 
                </p> 
               
                <div className='hidden md:flex justify-between items-center align-middle
                 h-5  ml-[350px] mb-[150px] md:w-5/6'>
                    <img src={iphone} alt=""/>
                </div>
                     
            </div>                  
        </div>
    </div>
  )
}

export default Uiux
