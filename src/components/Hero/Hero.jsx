import HeroPng from '../../assets/Fruit.png'
import LeafPng from '../../assets/Leaf.png'
import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import {motion} from 'framer-motion'
import animations from '../../utility/animation'
const Hero = () => {

    const {FadeRight}=animations
  return (
    <section>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative ml-4'>
        <div className='flex flex-col justify-center py-14 md:py-0 relative z-10'>
        <div className='text-center md:text-left space-y-6 lg:max-w-[400px'>
            <motion.h1
            variant = {FadeRight(0.6)}
            initial="hidden"
            animate="visible"
            className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia'>
                Healthy
            <br />
            Fresh <span className='text-orange-400'>
                Fruits!
            </span>
            </motion.h1>
            <motion.p
            variant = {FadeRight(0.9)}
            initial="hidden"
            animate="visible"
            className='text-2xl tracking-wide'>
                Order Now for Freshness in Your Life
            </motion.p>
            <motion.p 
            variant = {FadeRight(1.2)}
            initial="hidden"
            animate="visible"
            className='text-gray-400'> 
            Enjoy farm-fresh fruits, handpicked for quality and taste. From juicy mangoes to crisp apples, we bring nature’s best to your home. Order now and experience the freshest flavors! 
            </motion.p>
            <motion.div
            variant = {FadeRight(1.5)}
            initial="hidden"
            animate="visible" className='flex justify-center md:justify-start'>
                <button className='primary-btn flex items-center gap-2'>
                    <span>
                        <IoBagHandleOutline/>
                    </span>
                    Oreder Now
                </button>
            </motion.div>
            </div>
        </div>
<div className='flex justify-center items-center'>
    <motion.img 
    variant = {FadeRight(0.6)}
    initial={{opacity: 0, y: 200, rotate: 75}}
    animate={{opacity: 1, y: 0, rotate: 0}}
    transition = {{duration:1 , delay:0.2}}
    src={HeroPng} alt="" className='w-[350px] md:w-[550px] drop-shadow-none mr-[-100px] ' />
</div>
<div  className='absolute top-14 md:top-0 right-1/2 blur-sm opacity-80 rotate-[4deg]'>
    <motion.img
    initial={{opacity: 0, y: -200, rotate: 75}}
    animate={{opacity: 1, y: 0, rotate: 0}}
    transition={{duration:1, delay:1.5}}
    src={LeafPng} alt="" className='w-full md:max-w-[300px]' />
</div>
</div>
    </section>

  )
}

export default Hero