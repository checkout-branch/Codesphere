
import  {  useRef, useState } from "react";
import {  useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom"; // Use react-router for routing

// import axios from "axios";
// import { MainImageAPI } from "../API/API";
import React from 'react'

export const HeroParallax = () => {

 console.log(setProducts);

const [products,setProducts] =useState([ {
  "id": 1,
  "title": "Cursor",
  "link": "https://cursor.so",
  "thumbnail": "https://i.ytimg.com/vi/i9t8gdaBsTg/maxresdefault.jpg"
},
{
  "id": 2,
  "title": "Cursor",
  "link": "https://cursor.so",
  "thumbnail": "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624"
},
{
  "id": 3,
  "title": "Cursor",
  "link": "https://cursor.so",
  "thumbnail": "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624"
},
{
  "id": 4,
  "title": "Cursor",
  "link": "https://cursor.so",
  "thumbnail": "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624"
},
{
  "id": 5,
  "title": "Cursor",
  "link": "https://cursor.so",
  "thumbnail": "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624"
},
{
  "id": 6,
  "title": "Cursor",
  "link": "https://cursor.so",
  "thumbnail": "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624"
},
{
  "id": 7,
  "title": "Cursor",
  "link": "https://cursor.so",
  "thumbnail": "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624"
},
{
  "id": 8,
  "title": "Cursor",
  "link": "https://cursor.so",
  "thumbnail": "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624"
},
{
  "id": 9,
  "title": "Cursor",
  "link": "https://cursor.so",
  "thumbnail": "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624"
},
{
  "id": 10,
  "title": "Cursor",
  "link": "https://cursor.so",
  "thumbnail": "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624"
},
{
  "id": 11,
  "title": "Cursor",
  "link": "https://cursor.so",
  "thumbnail": "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624"
},
{
  "id": 12,
  "title": "Cursor",
  "link": "https://cursor.so",
  "thumbnail": "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624"
},
{
  "id": 13,
  "title": "Cursor",
  "link": "https://cursor.so",
  "thumbnail": "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624"
},{
  "id": 14,
  "title": "Cursor",
  "link": "https://cursor.so",
  "thumbnail": "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624"
},
{
  "id": 15,
  "title": "Cursor",
  "link": "https://cursor.so",
  "thumbnail": "https://cdn.shopify.com/s/files/1/0533/2089/files/img-url-filter.jpg?v=1515074624"
}])


  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
    id="about"
     data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product,i) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={i}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product,i) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={i}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product,i) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={i}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="max-w-7xl grid md:grid-cols-2 gap-10 relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
    
    <div 
   data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
    className="flex justify-center items-center">
    <img src="../../../public/main-top.png" className="h-[300px] rounded-full  object-cover"/>
    </div>
     <div
     
      className="flex justify-center items-center"
      
       >
     <div
     data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"
     className="max-w-2xl text-base md:text-xl mt-8 text-primary-text  z-30 text-white font-bold ">
     lorem jnasfkj akdnfkajsk  aksjfnkva fbksjf vks fbjskfdbs 
     lorem jnasfkj akdnfkajsk  aksjfnkva fbksjf vks fbjskfdbs 
     lorem jnasfkj akdnfkajsk  aksjfnkva fbksjf vks fbjskfdbs 
     lorem jnasfkj akdnfkajsk  aksjfnkva fbksjf vks fbjskfdbs 
     lorem jnasfkj akdnfkajsk  aksjfnkva fbksjf vks fbjskfdbs 
     lorem jnasfkj akdnfkajsk  aksjfnkva fbksjf vks fbjskfdbs 
     lorem jnasfkj akdnfkajsk  aksjfnkva fbksjf vks fbjskfdbs 

      </div>
     </div>
    
    </div>
  );
};


const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}

      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link

        to={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <img
         
          src={product.thumbnail}
     
          alt={product.title}
          className="object-cover object-left-top absolute h-full w-full inset-0"
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
 
       {product.title}
      </h2>
    </motion.div>
  );
};