import React from 'react'

const About = () => {
  return (
    <div name='about' 
        className='w-full h-screen'>

        <div className='max-w-screen-lg p-7 md:p-4 mx-auto flex
        flex-col justify-center w-full mt-8 sm:mb-8 md:h-full xs:mt-20'>

            <div className='xs:text-sm'>           
                <p className='text-3xl md:text-4xl inline font-bold border-b-4 
                border-gray-500'>About</p>
            </div> 

                <p className='text-l mt-8'>
                    Simple. User-friendly. Navigable. That's how I believe digital products should be.
                    </p>
                <br />
                <p className='text-l'>
                    With a background in adult education, I was intrigued by the inner workings of the Web and the action 'under the hood'.
                    This led me to study and explore this hidden world in greater detail,
                    to further strengthen my knowledge and understanding of this fascinating information superhighway.              
                </p>
                <br />
                <p className='text-l'>
                Seriously passionate about UI design and 'web-site make-overs' and psyched by being a 'forever student', eager to build on my present knowledge
                and experiences, and by staying relevant with the everchanging face of our digital world.
                </p>
        </div>
    </div>
  )
}

export default About