import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Section/Home';
import Shop from './Components/Section/Shop';
import SingleBlog from './Components/SingleComponent/SingleBlog';
import SingleProduct from './Components/SingleComponent/SingleProduct';
import SingleStore from './Components/SingleComponent/SingleStore';

import Blog from './Components/Section/Blog';
import Footer from './Components/Footer';
import Login from './Components/Section/Login';
import Signup from './Components/Section/Signup';
import AllStores from './Components/Section/AllStores';
import Stores from './Components/Section/Stores';


import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/stores" component={Stores} />
          <Route exact path="/stores/:typeOfStore" component={AllStores} />
          <Route exact path="/stores/detail/:storeId" component={SingleStore} />

          <Route exact path="/blog" component={Blog} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup}/>

          <Route path="/blog/:blogId" component={SingleBlog} />
          <Route path="/products/:productId" component={SingleProduct} />

        </div>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
