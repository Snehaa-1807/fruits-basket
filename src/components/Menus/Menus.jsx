import React from "react";
import Img1 from "../../assets/apple.png";
import Img2 from "../../assets/orange.png";
import Img3 from "../../assets/mango.png";
import Img4 from "../../assets/strawberry.png";
import Img5 from "../../assets/cherry.png";
import Img6 from "../../assets/pineapple.png";
import Img7 from "../../assets/Bananas.png";
import Img8 from "../../assets/kiwi.png";
import { motion } from "framer-motion";
import  animations  from "../../utility/animation";
const {FadeLeft}=animations

const MenusData = [
  {
    id: 1,
    title: "Fresh Apples",
    link: "/",
    price: "Rs.150/kg",
    img: Img1,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Fresh Oranges",
    link: "/",
    price: "Rs.100/kg",
    img: Img2,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fresh Mangoes",
    link: "/",
    price: "Rs.180/kg",
    img: Img3,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Fresh Strawberries",
    link: "/",
    price: "Rs.200/kg",
    img: Img4,
    delay: 1.2,
  },
  {
    id: 5,
    title: "Fresh cherries",
    link: "/",
    price: "Rs.250/kg",
    img: Img5,
    delay: 1.2,
  },
  {
    id: 6,
    title: "Fresh Pineapple",
    link: "/",
    price: "Rs.100/kg",
    img: Img6,
    delay: 1.2,
  },
  {
    id: 7,
    title: "Fresh Bananas",
    link: "/",
    price: "Rs.80/kg",
    img: Img7,
    delay: 1.2,
  },
  {
    id: 8,
    title: "Fresh Kiwis",
    link: "/",
    price: "Rs.500/kg",
    img: Img8,
    delay: 1.2,
  },
];

const Menus = () => {
  return (
    <section>
      <div className="container pt-12 pb-20 p-3 ml-[50px]">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-bold text-left pb-10 uppercase"
        ><div className="container  p-3 ml-[-30px]"> 
           Our Menu
           </div>
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ml-4">
          {MenusData.map((menu) => (
            <motion.div
              key={menu.id} 
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              className="bg-white rounded-3xl px-4 py-4 shadow-md flex flex-col items-center"
            >
              <img
                src={menu.img}
                alt={menu.title}
                className="w-[80px] mb-4 transform transition-transform scale-110"
              />
              <div className="text-center">
                <h1 className="text-lg font-semibold">{menu.title}</h1>
                <p className="text-lg font-semibold text-orange-400">
                  {menu.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
