import React from 'react'
import { Spotlight } from './ui/Spolight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import ShimmerButton from './ui/ShimmerButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full  h-[80vh]' fill='purple' />
                <Spotlight className='top-28 left-80  h-[80vh] w-[50vw]' fill='blue' />
            </div>
            {/* <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center ">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            </div> */}

            <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.18] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>

            <div className='fex justify-center relative my-20 z-20'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 '>
                        Crafting Scalable & Interactive Digital Solutions
                    </h2>
                    <TextGenerateEffect
                        className='text-center text-[40px] 
                        md:text-5xl lg:text-6xl'
                        duration={.6}
                        words='Turning Ideas into Reality with Code'
                    />
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl'>
                    Hi, I'm Kishan - A Full-Stack Developer Crafting Scalable & Innovative Digital Solutions.
                    </p>
                    <a href="#about" className='mt-4'>
                        <ShimmerButton
                            title='Explore My Work'
                            icon={<FaLocationArrow />}
                            position='right'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero
