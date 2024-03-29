import React from 'react'
import MyPhoto from '../assets/mainpage.png'
import CV from '../assets/CV.pdf'


const Home = () => {
  return (
    <div name='home'

        className='h-screen w-full bg-gradient-to-b
        from-black to-gray-500'>

        <div className='max-w-screen-lg mx-auto flex flex-col
        items-center justify-center h-full px-4 md:flex-row'>

            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-6xl pt-20 font-bold text-white'>
                    I'm a Frontend Developer
                    in Zurich, Switzerland.
                </h2>
                <p className='text-gray-400 py-4 max-w-md mt-5'>I have 3+ years of experience building
                    and designing software for digital experiences.
                </p>

                <div>
                    <a href={CV} title='' download>
                        <button className='text-white w-fit px-6
                        py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                        cursor-pointer border-4 hover:scale-125 duration-500 
                        border-orange-400'>
                        More about me
                        </button> 
                    </a>
                </div>
            </div>

            <div>
                <img src={MyPhoto} alt='my profile' className='
                flex flex-col items-center rounded-full
                md:rounded-2xl
                mx-auto w-1/2 mb-10 md:w-full drop-shadow-2xl'/>
            </div>
        </div>
        </div>
   
  )
}

export default Home