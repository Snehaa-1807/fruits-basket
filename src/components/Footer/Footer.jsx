import React from 'react';
import { FaFacebook, FaWhatsapp, FaInstagram, FaLeaf } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className='bg-orange-100 py-5 mt-15'>
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className='container flex justify-between items-center ml-4'
      >
        {/* Left Side: Logo */}
        <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
          <p className='text-red-600'>Fruit</p>
          <p className='text-orange-400'>Basket</p>
          <FaLeaf className='text-green-500' />
        </div>

        {/* Right Side: Social Icons & Address */}
        <div className='flex flex-col items-end gap-4 '>
          {/* Social Media Icons */}
          <div className='text-3xl flex gap-4 text-gray-700'>
            <FaInstagram />
            <FaFacebook />
            <FaWhatsapp />
          </div>

          {/* Address */}
          <div className='text-black text-sm text-right'>
            <p>Bhopal, Madhya Pradesh</p>
            <p>Contact: 9876543210</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
