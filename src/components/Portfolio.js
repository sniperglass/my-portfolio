import React from 'react'
import Pool from '../assets/pool.png'
import Comp from '../assets/comp.png'
import Camera from '../assets/camera.png'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: Pool,
      href: 'https://www.millenniumpools.com/',
    }, 
    {
      id: 2,
      src: Comp,
      href: 'http://conectateac.com/mx',
    }, 
    {
      id: 3,
      src: Camera,
      href: 'https://www.linkedin.com/in/immanueljaeggi/',
    }, 
    {
      id: 4,
      src: Camera,
      href: '',
    }
    
  ]

  return (
    <div name='portfolio' className='bg-gradient-to-b
    from-black to-gray-800 w-full text-white 
    h-full'>

      <div className='max-w-screen-lg p-4 mx-auto flex 
      flex-col justify-center w-full h-full'>
        <div className='pb-6'>
          <p className='text-4xl font-bold inline border-b-4
           border-gray-500'>
            Portfolio
            </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3
            gap-10 px-12 sm:px-0'>

          {
            portfolios.map(({id, src, href}) => (

                <div key={id} className='shadow-md shadow-gray-500'>
                  <img src={src} alt='' className='rounded-md 
                  duration-300 hover:scale-110'/>

                  <div className='flex items-center justify-center'>
                    <a
                      href={href}
                      target='_blank'
                      rel='noreferrer'>
                      <button
                          className='w1/2 px-6 py-3 m-4 
                          duration-200 hover:scale-110' 
                      >
                        View Website
                      </button>
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