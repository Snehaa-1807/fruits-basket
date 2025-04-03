import React from 'react'
import BannerPng from "../../assets/Fruit-splash.png"
import { motion } from "framer-motion"
import animations from "../../utility/animation"

const { FadeUp } = animations

const Banner = () => {
  return (
    <section className='bg-white'> 
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 ml-4">
        <div className='flex flex-col justify-center'>
          <div className='text-center md:text-left space-y-4 lg:max-w-[400px] text-black'> 
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              className='text-3xl lg:text-6xl font-bold uppercase'
            >
              Brand Info
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
            >
              At FruitBasket, we bring you the freshest, juiciest, and most organic fruits straight from the farm to your doorstep. Enjoy nature’s sweetness with our wide range of seasonal and exotic fruits.
            </motion.p>
            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
            >
              Fresh & Organic, No artificial preservatives, just pure goodness. 
              Direct from Farms: Supporting local farmers & sustainable agriculture.
              Fast & Hassle-Free Delivery: Get fresh fruits within hours.
              Affordable Prices: Premium quality at budget-friendly rates.
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              whileInView="visible"
              className='flex justify-center md:justify-start'
            >
              <button className='primary-btn'>
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
        <div>
          <motion.img
            initial={{ opacity: 0, rotate: 75, x:200 }}
            whileInView={{ opacity: 1, rotate: 0, x:0 }}
            transition={{ duration:1, delay: 0.2 }}
            viewport={{ once: true }}
            src={BannerPng}
            alt="Fruit Basket"
            className='w-[600px] md:max-w-[500px] h-full object-cover drop-shadow-2xl ml-40'
          />
        </div>
      </div>
    </section>
  )
}

export default Banner
