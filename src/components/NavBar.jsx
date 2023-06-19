import React from 'react'
import { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const NavBar = () => {

    const [nav, setNav] = useState(false);


    const links = [
        {
            id: 1,
            link: 'home',
            href: '/'
          
        },
        {
            id: 2,
            link: 'about',
            href: '/about'
        },
        {
            id: 3,
            link: 'portfolio',
            href: '/portfolio'
        },
        {
            id: 4,
            link: 'experience',
            href: '/experience'
        },
        {
            id: 5,
            link: 'UIUX',
            href: '/uiux'
        },
        {
            id: 6,
            link: 'contact',
            href: '/contact'
        }
    ]

    const homeLink = [

        {
            id: 1,
            link: 'home',
            href: '/'
        }
    ]


  return (
    <div className='flex justify-between items-center
    w-full h-20 px-4 text-white bg-black fixed z-10'>

        <div className='cursor-pointer hover:scale-105 duration-200'>      
            {homeLink.map(({ id, link, href }) => (
                <Link to={ href }>
                <h1 
                key={id}
                className='text-3xl font-signature ml-3'
                >
                    
                        <a href={link} smooth duration={500}>immanuel.</a>    
                         
                </h1>
                </Link> 
             ))}
        </div>

        <ul className='hidden md:flex'>
            {links.map(({ id, link, href}) => (
                <Link to={ href }>
                 <li 
                 key={id} 
                 className='px-3 cursor-pointer font-medium text-gray-400 hover:scale-110 
                 duration-200'
                 >
                   
                     <a href={href} smooth duration={500}>{link}</a>
                
                </li>
                </Link>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center
            absolute top-0 left-0 w-full h-screen bg-gradient-to-b
            from-black to-gray-500 text-gray-500'>
    
                {links.map(({ id, link }) => (   
                     <li 
                     key={id} 
                     className='px-4 cursor-pointer py-5 text-3xl'
                     >
                       <Link onClick={() => setNav(!nav)}
                       to={link} smooth duration={500}>{link}</Link>
                    </li>
                ))} 
            </ul>
        )}
        
    </div>
    
  );
};

export default NavBar;