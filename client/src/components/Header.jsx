import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import{motion} from "framer-motion"

import{AppContext}from '../context/AppContext'
import {useNavigate} from 'react-router-dom'

export const Header = () => {


  const{user,setShowLogin}=useContext(AppContext)
  const navigate=useNavigate()

  const onClickHandler = ()=>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }
  return (
    <motion.div  className="flex flex-col justify-center items-center
     text-center my-20 px-4 overflow-x-hidden "
     
     initial={{opacity:0.2,y:100}}
     transition={{duration:1}}
     whileInView={{opacity:1, y:0}}
     viewport={{once:true}}
     >

      {/* Top tag */}
      <motion.div className="text-stone-500 inline-flex items-center gap-2 bg-white px-6 py-1 
      rounded-full border border-neutral-500"
      initial={{opacity:0,y:-20}}
     animate={{opacity:1, y:0}}
     transition={{delay:0.2,duration:0.8}}>
        <p>Best text to image generator</p>
        <img src={assets.star_icon} alt="star" className="h-5 w-5" />
      </motion.div>

      {/* Heading */}
      <motion.h1 className="text-4xl sm:text-7xl max-w-xs sm:max-w-2xl mt-10 text-center leading-tight">
        Turn text to <span className="text-blue-600"
         initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.4,duration:2}}> image</span>, in seconds
      </motion.h1>

      {/* Subtext */}
      <motion.p className="text-center max-w-xl mx-auto mt-5 text-neutral-600 text-base sm:text-lg"
       initial={{opacity:0,y:20}}
     animate={{opacity:1, y:0}}
     transition={{delay:0.6,duration:0.8}}>
        Unleash your creativity with AI. Turn your imagination into visual art in seconds — just type, and watch the magic happen.
      </motion.p>

      {/* Button */}
      <motion.button
      onClick={onClickHandler} className="sm:text-lg text-white bg-black mt-8 px-10 py-3 flex items-center gap-2 rounded-full hover:opacity-90 transition"
          whileHover={{scale:1.05}}
          whileTap={{scale:0.95}}
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{delay:0.2,duration:0.8}}>
        Generate Images 
        <img className="h-6 w-6" src={assets.star_group} alt="generate" />
      </motion.button>

      {/* Sample Images */}
      <motion.div
       initial={{opacity:0}}
        animate={{opacity:1}}
       transition={{delay:1,duration:1}} className="flex flex-wrap justify-center mt-16 gap-3">
        {Array(6).fill('').map((_, index) => (
          <img
            key={index}
            src={index % 2 === 0 ? assets.red : assets.solo}
            alt=""
            className="rounded hover:scale-105 transition-transform duration-300 cursor-pointer w-[60px] sm:w-[70px]"
          />
        ))}
      </motion.div>

      {/* Caption */}
      <motion.p 
       initial={{opacity:0}}
        animate={{opacity:1}}
       transition={{delay:1.2,duration:0.8}}
      className="mt-4 text-neutral-600 text-sm">Generated images from imagify</motion.p>
    </motion.div>
  )
}
