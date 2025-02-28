import React from 'react'
import { Spotlight } from './ui/spotlight-new'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import ShimmerButton from './ui/ShimmerButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { LampContainer } from './ui/lamp'
import { motion } from "framer-motion";
import { HeroHighlight } from './ui/hero-highlight'

const Hero = () => {
    return (
        <div className='pb-20 pt-36'>

            {/* <LampContainer> */}





            <div>
                <Spotlight
                    gradientFirst="radial-gradient(70% 70% at 50% 30%, hsla(270, 100%, 85%, 0.10) 0%, hsla(270, 100%, 65%, 0.04) 50%, hsla(270, 100%, 50%, 0) 80%)"
                    gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(270, 100%, 80%, 0.08) 0%, hsla(270, 100%, 60%, 0.03) 80%, transparent 100%)"
                    gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(270, 100%, 75%, 0.06) 0%, hsla(270, 100%, 55%, 0.02) 80%, transparent 100%)"
                />

            </div>
            {/* <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center ">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            </div> */}

            {/* Black Dot Background */}
            <div className="h-[50rem] w-full   dark:bg-dot-white/[0.18] bg-dot-black/[0.2] flex items-center justify-center absolute top-0 left-0">

                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>



            <div className='fex justify-center relative my-20 z-20'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>

                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 '>
                        Building Scalable, Secure & Intelligent Digital Experiences
                    </h2>
                    <TextGenerateEffect
                        className='text-center text-[40px] 
                        md:text-5xl lg:text-6xl'
                        duration={.6}
                        words='Turning Complex Ideas into Scalable Digital Realities'
                    />
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        Hi, I'm Kishan – A Full-Stack & Blockchain Developer Passionate About Innovation, Web3, and AI-powered Solutions.
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

            {/* </LampContainer> */}
        </div>
    )
}

export default Hero
