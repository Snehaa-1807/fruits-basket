import React from 'react'
import Banner3png from "../../assets/fruit-basket.png"
import { motion } from "framer-motion"
import animations from "../../utility/animation"

const { FadeLeft } = animations

const Banner3 = () => {
  return (
    <section className='container mb-12'> 
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 py-14 pr-11 rounded-3xl">
        {/* Left Side: Text Content */}
        <div className='flex flex-col justify-center space-y-4 text-center md:text-left lg:max-w-[450px] text-black ml-4'> 
          <motion.h1
            variants={FadeLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className='text-3xl lg:text-6xl font-bold uppercase'
          >
            Get Fresh Fruits Today
          </motion.h1>
          <motion.p
            variants={FadeLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            At Fruit Basket, freshness is our promise! We bring you the juiciest, ripest, and most flavorful fruits straight from the farm to your table. Our selection includes a variety of seasonal and exotic fruits, carefully sourced from trusted farmers who prioritize quality and sustainability. Every fruit is handpicked to ensure it reaches you at peak freshness, free from artificial preservatives and harmful chemicals. Whether you’re craving a refreshing watermelon on a hot day, a crunchy apple for a quick snack, or a nutritious mix of berries for your breakfast bowl, we’ve got it all. Enjoy the taste of nature, packed with vitamins and goodness, delivered fresh to your doorstep. Elevate your health and indulge in the pure delight of farm-fresh fruits—only at Fruit Basket!
          </motion.p>
          <motion.div
            variants={FadeLeft(0.9)}
            initial="hidden"
            whileInView="visible"
            className='flex justify-center md:justify-start'
          >
            <button className='primary-btn'>
              Order Now
            </button>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center md:justify-end mr-4 ">
          <motion.img
            initial={{ opacity: 0, rotate: 75, x: 200 }}
            whileInView={{ opacity: 1, rotate: 0, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            src={Banner3png}
            alt="Fruit Basket"
            className='w-[400px] md:w-[500px] h-auto object-cover drop-shadow-2xl ml-30'
          />
        </div>
      </div>
    </section>
  )
}

export default Banner3
