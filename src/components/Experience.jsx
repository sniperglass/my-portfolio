import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/js.png'
import react from '../assets/react.png'
import tailwind from '../assets/tw.png'
import figma from '../assets/figma.png'
import sql from '../assets/sql.png'
import github from '../assets/github.png'


const Experience = () => {

    const tech = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JAVASCRIPT',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'REACTJS',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            src: tailwind,
            title: 'TAILWIND',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: figma,
            title: 'FIGMA',
            style: 'shadow-purple-400'
        },
        {
            id: 7,
            src: sql,
            title: 'MYSQL',
            style: 'shadow-gray-400'
        },
        {
            id: 8,
            src: github,
            title: 'GITHUB',
            style: 'shadow-white-400'
        }
    ]

    

  return (
    <div name='experience' className='text-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto xs:p-7 p-4 flex flex-col
            justify-center w-full h-screen xs:mt-20 xs:pb-20'>

            <div className='xs:pb-0 xs:mt-10 pt-6'>
                <p className='text-4xl font-bold border-b-4 inline'>Experience</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3
                gap-8 text-center py-6 px-12 sm:px-0 xs:py-14'>

                    {
                        tech.map(({id, src, title, style}) => (
                            <div 
                                key={id} 
                                className={`shadow-md hover:scale-110 duration-500
                                py-2 rounded-lg ${style}`}
                                >
                                <img src={src} alt="" className='w-20 mx-auto'/>
                                <p className=''>{title}</p>
                            </div>
                        ))
                    }
            </div>
        </div>
    </div>
  )
}

export default Experience