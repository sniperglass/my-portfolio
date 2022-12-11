import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'
import { BsInstagram } from 'react-icons/bs'


const contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b
    from-black to-gray-600 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg
        mx-auto h-full xs:mt-15'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4
                border-gray-500'>
                    Contact
                </p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/c74fe0d3-c09e-42e1-88cc-583d1ce76444' method='POST' className='flex flex-col w-full 
                md:w-1/2'>
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='name' 
                        className='p-2 bg-transparent border-2 rounded-md 
                        focus:outline-none'/>

                    <input 
                        type='text' 
                        name='email' 
                        placeholder='Enter your email' 
                        className='my-4 p-2 bg-transparent border-2 rounded-md 
                        focus:outline-none'/>

                    <textarea 
                        name="message" rows="10"
                        placeholder='Enter your message'
                        className='p-2 bg-transparent border-2 rounded-md
                        focus:outline-none'></textarea>   

                    <button className='px-6 py-3 my-8 flex mx-auto items-center
                     bg-gradient-to-r cursor-pointer rounded-md border-4 
                     hover:scale-110 duration-500 border-orange-400'>Let's connect</button> 
                </form>
            </div>

            
            <div className='lg:hidden flex flex-row justify-center mx-auto space-x-4'> 

               <a href='https://github.com/sniperglass' target='_blank' rel='noreferrer'>           
                <FaGithub size={30}/>
               </a>

               <a href='https://www.linkedin.com/in/immanueljaeggi/' target='_blank' rel='noreferrer'>
                <SiLinkedin size={30}/>
               </a> 

               <a href='https://www.instagram.com/ratheroutnow/' target='_blank' rel='noreferrer'>
                 <BsInstagram size={30}/>
               </a>  
            </div>   
        </div>        
    </div>
  )
}

export default contact