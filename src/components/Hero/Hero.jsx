import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import NumberCounter from 'number-counter'

import {motion} from 'framer-motion'

const Hero = () => {

    const transition = {type: 'spring', duration: 3}
    const mobile = window.innerWidth<=768 ? true : false;


  return (
    <div className="hero" id='home'>
        <div className="blur hero-blur"></div>
        <div className="left-h">
            <Header />
            {/* the best ad animation  */}
            <div className="the-best-ad">
                <motion.div
                initial={{left: mobile? "178px":"238px"}}
                whileInView={{left: '8px'}}
                transition={{...transition, type:'tween'}}
                >
                </motion.div>
                <span>the best Printing Press in the town</span>
            </div>
            {/* hero heading  */}
            <div className="hero-text">
                <div>
                    <span className='stroke-text'>Make</span>
                    <span> Your</span>
                </div>
                <div>
                    <span>Ideal Design</span>
                </div>
                <div>
                    <span>In here We will help You to Shape and Build Your dream design and life to your Brand</span>
                </div>
            </div>
            
            {/* figures and buttons secondary position  */}

        </div>

        {/* right side  */}
        <div className="right-h">
            <button className="btn">Join Now</button>

            {/* heart rate  */}
            <motion.div
            initial={{right: '37rem'}}
            whileInView={{right: '30rem'}}
            transition={transition}
            className="heart-rate">
                <img src={Heart} alt="" />
                <span>Variety</span><span>100+</span>
            </motion.div>
            
            {/* hero image  */}
            <img src={hero_image} className="hero-image" alt="" />
            <motion.img
            initial={{right: '10rem'}}
            whileInView={{right: '18rem'}}
            transition={transition}
            src={hero_image_back} className="hero-image-back" alt="" />


            {/* calories  */}
            <motion.div
            initial={{right: '16rem'}}
            whileInView={{right: '8rem'}}
            transition={transition}
            className="calories">
                <img src={Calories} alt="" />
                <div>
                    <span>Quality Product</span>
                    <span>100 %</span>
                </div>
            </motion.div>

        </div>
    </div>
  )
}

export default Hero