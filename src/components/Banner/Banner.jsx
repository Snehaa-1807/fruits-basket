import React from 'react'
import BannerPng from "../../assets/Fruit-splash.png"
import {motion} from "framer-motion"
import animations from "../../utility/animation"
const {FadeUp} =animations

const Banner = () => {
  return (
    <section className='bg-'>
     <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14">
        <div>
            <motion.img 
            initial={{opacity:0, scale: 0.5}}
            whileInView={{opacity:1, scale:1}}
            transition={{type: "spring", stiffness:100, delay:0.2}}
            viewport={{once:true}}
            src={BannerPng} alt="" className='w-[300px] md:max-w-[400px] h-full object-cover' />
        </div>
        <div className='flex flex-col justify-center'>
            <div className='text-center md:text-left space-y-4 lg:max-w-[400px]'>
            <motion.h1
            variants={FadeUp(0.5)}
            initial= "hidden"
            whileInView={{once: true}}
             className='text-3xl lg:text-6xl text-black font-bold uppercase'>Brand Info</motion.h1>
            <motion.p
            variants={FadeUp(0.7)}
            initial= "hidden"
            whileInView={{once: true}}
            >At FruitBasket, we bring you the freshest, juiciest, and most organic fruits straight from the farm to your doorstep. Enjoy nature’s sweetness with our wide range of seasonal and exotic fruits.</motion.p>
            <motion.p
            variants={FadeUp(0.9)}
            initial= "hidden"
            whileInView={{once: true}}
            >
            Fresh & Organic – No artificial preservatives, just pure goodness.
 Direct from Farms – Supporting local farmers & sustainable agriculture.
 Fast & Hassle-Free Delivery – Get fresh fruits within hours.
Affordable Prices – Premium quality at budget-friendly rates.
            </motion.p>
             <motion.div
                        variant = {FadeUp(1.1)}
                        initial="hidden"
                        animate="visible" className='flex justify-center md:justify-start'>
                            <button className='primary-btn '>
                                
                                Learn More
                            </button>
                        </motion.div>
        </div>
        </div>
        </div>   
    </section>
  )
}

export default Banner