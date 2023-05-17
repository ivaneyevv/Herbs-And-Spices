import React from 'react'
import { Link } from 'react-router-dom'
import oregano from '../assets/dried_oregano.png'

const Product = () => {
    return (
        <div className='wrap'>
            <div className='product'>
                <div className='product__content'>
                    <img src={oregano} alt="oregano" className='product__content-image'/>
                    <div className='product__content-text'>
                        <h3 className='text__title'>Dried Onion</h3>
                        <p className='text__cost'>1.99 $</p>
                        <p className='text__weight'>100 gr</p>   
                    </div>
                </div>
                <div className='product__buttons'>
                    <Link to={'./product'}><button className='more'>more</button></Link>
                    <Link to={'./bag'}><button className='tobag'>buy</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Product