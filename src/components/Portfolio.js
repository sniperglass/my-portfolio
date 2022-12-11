import React from 'react'
import Pool from '../assets/pool.png'
import Comp from '../assets/comp.png'
import Camera from '../assets/camera.png'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: Pool,
      href: 'https://www.millenniumpools.in/',
      text: 'Luxury Pools',
    }, 
    {
      id: 2,
      src: Comp,
      href: 'http://conectateac.com/mx',
      text: 'Commercial',
    }, 
    {
      id: 3,
      src: Camera,
      href: 'https://www.aymeeceleste.com/',
      text: 'Photography',
    }, 
    {
      id: 4,
      src: Camera,
      href: '',
      text: 'Coming soon',
    }
    
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b
    from-black to-gray-800 w-full text-white
    md:h-screen'>

      <div className='max-w-screen-lg p-7 mx-auto flex 
      flex-col justify-center w-full h-auto xs:mt-20 mt-10 pt-20'>
       
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4
           border-gray-500'>
            Portfolio
            </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3
            gap-10 px-4 sm:px-0'>

          {
            portfolios.map(({id, src, href, text}) => (

                <div key={id}
                       
                >
                  
                  <div className='flex items-center justify-center
                  px-6 py-3 m-4
                  '>
                    <a
                      href={href}
                      target='_blank'
                      rel='noreferrer'>

                      <img src={src} alt='' width={220} height={220} className='rounded-md 
                      duration-300 hover:scale-110 cursor-pointer shadow-md shadow-gray-500
                        '/>

                      <div
                          className='xs:px-8 px-12 md:px-10 m-4 duration-300 hover:scale-110' 
                      >               
                        {text}    
                      </div>
                    </a>
                  </div>       
                </div>
             ))
          }
        </div>
      
      </div>
    </div>
  )
}

export default Portfolio