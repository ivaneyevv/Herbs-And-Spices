import React, { useEffect } from 'react'
import Header from './components/Header.jsx';
import './scss/style.scss';
import './scss/reset.scss';  
import './scss/signup.scss';
import './scss/login.scss';
import './scss/about.scss';

import { useDispatch, useSelector } from 'react-redux';


import { Outlet } from 'react-router-dom';
import { setDataProduct } from "./redux/productSlide";


function App() {

  const dispatch = useDispatch()
  const productData = useSelector((state)=>state.product)
 
  

  return (
    <div className='container'>
      <Header />
      <main>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
