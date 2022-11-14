import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { TbMail } from 'react-icons/tb'


const SocialLinks = () => {

    const links = [

        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
                ),
                href: 'https://www.linkedin.com/in/immanueljaeggi/',
        },
        {
            id: 2,
            child: (
                <>
                Github <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/sniperglass',
        },
        {
            id: 3,
            child: (
                <>
                Instagram <FaInstagram size={30}/>
                </>
            ),
            href: 'https://www.instagram.com/ratheroutnow/',
        },
        {
            id: 4,
            child: (
                <>
                Mail <TbMail size={30} />
                </>
            ),
            href: 'mailto:jaeggi@bluewin.ch',
        }      
    ]

  return (
    <div className='hidden lg:flex flex-col top-[25%] left-0 fixed'>
        <ul>
            {links.map(({id, child, href}) => (
                <li key={id} className='flex justify-between items-center
                    w-40 h-9 px-6 ml-[-100px] rounded-md hover:ml-[-10px] 
                    duration-500 bg-gray-400'> 

                    <a  
                        href={href}
                        className='flex justify-between items-center
                        w-full text-black'
                        target='_blank'
                        rel='noreferrer'  
                        >                      
                        {child}                  
                    </a>
                </li>
            ))}         
        </ul> 
    </div>
  )
}

export default SocialLinks