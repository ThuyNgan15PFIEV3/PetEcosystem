import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Section/Home';
import Shop from './Components/Section/Shop';
import Services from './Components/Section/Services';
import SingleBlog from './Components/SingleComponent/SingleBlog';
import SingleProduct from './Components/SingleComponent/SingleProduct';

import Blog from './Components/Section/Blog';
import Footer from './Components/Footer';


import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/shop" component={Shop}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/blog" component={Blog}/>
        <Route path="/blog/:blogId" component={SingleBlog}/>
        <Route path="/shop/:productId" component={SingleProduct}/>

      </div>
      <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
