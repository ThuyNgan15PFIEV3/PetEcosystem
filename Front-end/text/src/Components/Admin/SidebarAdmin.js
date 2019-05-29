import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SidebarAdmin extends Component {



  render() {
    return (
      <div className="sidenav">
        <a href="/admin/users">Users</a>
        <a href="/admin/stores">Stores</a>
        <a href="/admin/products">Products</a>
        <a href="/admin/posts">Posts</a>
        <a href="/admin/comments">Comments</a>
        <a href="/admin/category">Categories</a>
        <a href="/admin/orders">Orders</a>
        <a href="/">Back To shop</a>

      </div>
    );
  }
}