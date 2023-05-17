import React from 'react'
import spice from '../assets/spice.jpg'
import spice2 from '../assets/spice2.jpg'
import spice3 from '../assets/spice3.jpg'

const About = () => {
  return (
    <div className='about'>
      <div className='content'>
        <div className='page-title'>
          About
        </div>
        <p className='about-text'>
          We source our herbs and spices from reputable suppliers who share our values of sustainability and ethical practices. Our products are carefully packaged to preserve their freshness and potency, ensuring that our customers receive the highest quality ingredients. 
          <br></br>
          <br></br>
          We also offer a range of blends and seasonings that are expertly crafted to enhance the flavor of any dish while providing added health benefits. 
          <br></br>
          <br></br>
          Whether you are a seasoned cook or just starting out, we are here to support your culinary adventures and help you achieve optimal health through the use of herbs and spices.
        </p>
        <div className='red-element1'></div>
        <div className='red-element2'></div>
        <div className='red-element3'></div>
      </div>
      <div className='images'>
        <img src={spice} alt="spice" className='spice-img' />
        <div className='twoother'>
          <img src={spice2} alt="spice2" className='spice2-img'/>
          <img src={spice3} alt="spice3" className='spice3-img'/>
        </div>
      </div>
    </div>
  )
}

export default About