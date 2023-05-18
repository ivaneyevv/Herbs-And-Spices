import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

import App from './App';
import Home from './page/Home.jsx'
import About from './page/About.jsx';
import Contact from './page/Contact.jsx';
import Login from './page/Login.jsx';
import Signup from './page/Signup.jsx';
import Product from './page/Product.jsx';
import Bag from './page/Bag.jsx';
import NewProduct from './page/NewProduct.jsx'
import Account from './page/Account.jsx'

import { store } from './redux/storeData.js';
import { Provider } from 'react-redux';



const router = createBrowserRouter(
  createRoutesFromElements(
      
        <Route path='/' element={<App/>}>
          
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='product' element={<Product/>}/>
            <Route path='bag' element={<Bag/>}/>
            <Route path='account' element={<Account/>}/>
            <Route path='newproduct' element={<NewProduct/>}/>
        </Route>
      
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
