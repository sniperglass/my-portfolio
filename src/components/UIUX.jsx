import React from 'react';
import iphone from '../assets/iphone-mockup.png'
import Casestudy from './Casestudy';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Uiux = () => {

  return (
    <div name='UIUX' className='w-full h-screen bg-gradient-to-b
    from-orange-50 to-orange-300'>

        <div className='max-w-screen-lg p-7 md:p-4 mx-auto flex
        flex-col w-full justify-center md:h-screen pt-28
          '>

            <div className='xs:mt-20'>           
                <p className='text-3xl md:text-4xl inline font-bold text-black border-b-4 
                border-black'>UI/UX</p>
            </div> 

            <div>
                  <p className='xs:text-lg mt-8 text-black'>
                      Here's a peek into what I've been doing lately...
                  </p>

                  <br />

                  <div>               
                    <h1             
                      className='xs:text-2 font-bold flex text-black cursor-pointer 
                      hover:scale-90 duration-300'>

                    <Link to={ Casestudy }>Open Case Study </Link> 
                    <span className='flex align-middle mx-1 p-1'> <FaLongArrowAltRight /></span>         
                    </h1>       

                    <div className='cursor-pointer'>
                      <a href='/casestudy'>
                        <img src={iphone} alt="an iphone with landing page"
                        className='sm:flex flex-row justify-between items-center align-middle
                        mx-auto my-auto w-1/3 pt-10 md:w-1/3 
                        '/>
                      </a>
                    </div>
                  </div>               
            </div>                  
        </div>
    </div>
  )
}

export default Uiux

