import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Section/Home';
import Shop from './Components/Section/Shop';
import SingleBlog from './Components/SingleComponent/SingleBlog';
import SingleProduct from './Components/SingleComponent/SingleProduct';
import SingleStore from './Components/SingleComponent/SingleStore';

import Blog from './Components/Section/Blog';
import Login from './Components/Section/Login';
import Signup from './Components/Section/Signup';
import AllStores from './Components/Section/AllStores';
import Stores from './Components/Section/Stores';
import AdminStores from './Components/Admin/AdminStores';
import MyStore from './Components/Section/MyStore';
import AddProduct from './Components/SingleComponent/AddProduct';

import './App.css';
import Users from './Components/Admin/Users';
import AdminProducts from './Components/Admin/AdminProducts';
import AdminPosts from './Components/Admin/AdminPosts';
import AdminComments from './Components/Admin/AdminComments';
import Admin from './Components/Admin/Admin';
import EditProduct from './Components/SingleComponent/EditProduct';
import AdminCategory from './Components/Admin/AdminCategory';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/stores" component={Stores} />
          <Route exact path="/stores/:typeOfStore" component={AllStores} />
          <Route exact path="/stores/detail/:storeId" component={SingleStore} />

          <Route exact path="/blog" component={Blog} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/mystore" component={MyStore} />

          <Route path="/blog/:blogId" component={SingleBlog} />
          <Route path="/products/:productId" component={SingleProduct} />
          <Route path="/addproduct" component={AddProduct} />
          <Route path="/editproduct/:productId" component={EditProduct} />

          <Route exact path="/admin/users" component={Users} />
          <Route exact path="/admin/stores" component={AdminStores} />
          <Route exact path="/admin/products" component={AdminProducts} />
          <Route exact path="/admin/posts" component={AdminPosts} />
          <Route exact path="/admin/comments" component={AdminComments} />
          <Route exact path="/admin/category" component={AdminCategory} />

          <Route exact path="/admin" component={Admin} />

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
