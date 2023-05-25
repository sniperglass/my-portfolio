import React from 'react';
import iphone from '../assets/iphone-mockup.png'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Link } from 'react-scroll'



const Uiux = () => {


  const link = [
      {
          id: 1,
          link: 'Casestudy'
      }
    ]  


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
                    Here's a peek into what I've been doing lately...
                    </p>

                <br />


                  <div>
                  {link.map(({ id, link }) => (
                    <h1 
                      key={id}
                      className='xs:text-2 font-bold flex text-white cursor-pointer 
                      hover:scale-90 duration-300'>

                    <Link to={link} smooth duration={500}>Open Case Study </Link> 
                    <span className='flex align-middle mx-1 p-1'> <FaLongArrowAltRight /></span>         
                    </h1>
                    
                    ))}
                    
                    
                
              
                   </div>
               
               
                <div className='hidden md:flex justify-between items-center align-middle
                 h-5  ml-[550px] mb-[150px] md:w-5/6 my-auto'>
                    <img src={iphone} alt="an iphone with landing page"/>
                </div>                    
            </div>                  
        </div>
    </div>
  )
}

export default Uiux
