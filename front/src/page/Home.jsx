import React from 'react'
import Product from '../components/Product.jsx';
import Categories from '../components/Categories.jsx';

import '../scss/categories.scss';
import '../scss/product-component.scss'

const Home = () => {
  return (
    <div className='page-title'>
      Home
      <Categories />
      <div className='wrap'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default Home