import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart, MdMenu } from "react-icons/md"; 
import { ResponsiveMenu } from "./ResponsiveMenu";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "#" },
  { id: 3, title: "Products", link: "#" },
  { id: 4, title: "Shop", link: "#" },
  { id: 5, title: "Contacts", link: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false); 

  return (
    <div> 
      <nav className="bg-white shadow-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}  
          transition={{ duration: 0.5, delay: 0.5 }}
          className="container mx-auto flex justify-between items-center py-4 px-6"
        >
          {/* Logo */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase ml-[-80px]">
            <p className="text-red-600">Fruit</p>
            <p className="text-orange-400">Basket</p>
            <FaLeaf className="text-green-500" />
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center gap-7">
            <ul className="flex items-center gap-7">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <a
                    href={menu.link}
                    className="inline-block py-1 px-3 hover:text-red-600 hover:shadow-[0_3px_0_-1px_#ef4444] font-semibold"
                  >
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* Shopping Cart Button */}
            <button className="text-2xl hover:bg-red-600 hover:text-white rounded-full p-2 duration-200">
              <MdOutlineShoppingCart />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>

      {/* Responsive Menu Component */}
      {open && <ResponsiveMenu open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Navbar;
