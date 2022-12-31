import React from 'react'
import './Banner.css'
import BannerImg from '../../assets/banner-img.png'

const Banner = () => {
  return (
    <div className="banner">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="left-b">
            <img src={BannerImg} alt="" />
        </div>
        <div className="right-b">
            <div>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, optio.</span>
            </div>
            <h2>We do things differently</h2>
            <div>
                <span>Envex is a design agency founded in London. Nowadays, we've grown and expanded our services.</span>
            </div>
            <button className="btn btn-b">Join Now</button>
        </div>
    </div>
  )
}

export default Banner