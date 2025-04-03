import React from 'react'
import Banner2Png from "../../assets/fruit-plate.png"
import { motion } from "framer-motion"
import animations from "../../utility/animation"

const { FadeUp } = animations

const Banner2 = () => {
  return (
    <section className='bg-orange-300'> 
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-6 py-14 md:py-24">
      
        {/* Left Side: Image  */}
        <div className="flex justify-center md:justify-start md:order-1">
          <motion.img 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            viewport={{ once: true }}
            src={Banner2Png}
            alt="Fruit Plate"
            className='w-[500px] md:w-[900px] h-full object-cover drop-shadow-2xl ml-4'
          />
        </div>

        {/* Right Side: Text Content  */}
        <div className='flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px] text-black mx-auto md:order-2'>
          <motion.h1
            variants={FadeUp(0.5)}
            initial="hidden"
            whileInView="visible"
            className='text-3xl lg:text-6xl font-bold uppercase ml-20'
          >
            Online Fruit Store
          </motion.h1>
          <motion.p
            variants={FadeUp(0.7)}
            initial="hidden"
            whileInView="visible"
            className='ml-20'
          >
At Fruit Basket, we believe that everyone deserves the freshest and most delicious fruits, no matter where they are. That’s why we bring nature’s best produce straight from the farm to your doorstep. Our wide range of seasonal and exotic fruits is carefully selected to ensure premium quality, natural ripeness, and unmatched taste. Whether you’re looking for juicy mangoes, crisp apples, or nutrient-rich berries, we’ve got you covered. With our commitment to organic farming and sustainable sourcing, we guarantee that every bite is pure, healthy, and free from artificial preservatives. 
         </motion.p>
          <motion.p
            variants={FadeUp(0.9)}
            initial="hidden"
            whileInView="visible"
            className='ml-20'
          >Enjoy the convenience of shopping online and get fresh fruits delivered to your home with just a few clicks. Experience the perfect blend of taste, health, and affordability—only at Fruit Basket! 
          </motion.p>
          <motion.div
            variants={FadeUp(1.1)}
            initial="hidden"
            whileInView="visible"
            className='flex justify-center md:justify-start ml-20'
          >
            <button className='primary-btn'>
              Contact
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Banner2
