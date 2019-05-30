import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Product.css';

export default class Navbar extends Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout(event) {
    event.preventDefault();
    try {
      localStorage.clear();
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    const isLoggedIn = localStorage.getItem('token');
    console.log(isLoggedIn);
    let order;
    let logout;
    let username;
    if (isLoggedIn) {
      username = 'Chào ' + localStorage.getItem('username');
      order = <li><a title="Bạn có thể kiểm tra đơn đặt hàng ở đây" href="/order">
        <i className="fa fa-cart-arrow-down" aria-hidden="true" />
      </a>
      </li>
      logout = <li><a href="/login" onClick={(event) => (this.handleLogout(event))}>Thoát</a></li>
    }
    else {
      logout = <li><a href="/login" >Đăng nhập</a></li>
    }
    let adminpage;
    const isAdmin = localStorage.getItem('role') === 'admin';

    if (isAdmin) {
      adminpage = <li><a href="/admin">Admin</a></li>
    }


    return (
      <div>
        <header className="header">
          {/* nav */}
          <nav style={{ height: "70px" }} className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="/">pet<span>z</span></a>
              </div>
              {/* Collect the nav links and other content for toggling */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <p > {username}</p>
                  </li>
                  <li><a href="/"><i className="fa fa-home" aria-hidden="true" /> <span className="sr-only">(current)</span></a></li>
                  {adminpage}
                  <li><a title="Xem thông tin các sản phẩm mới tại đây" href="/shop">Sản phẩm </a></li>
                  <li><a title="Xem thông tin các cửa hàng tại đây" href="/stores">Cửa hàng </a></li>
                  <li><a title="Xem các bài viết hữu ích tại đây" href="/blog">Cộng đồng </a></li>
                  <li><a title="Quản lý cửa hàng của bạn tại đây" href="/mystore">My store </a></li>
                  {logout}
                  {order}

                </ul>
              </div>{/* /.navbar-collapse */}
            </div>{/* /.container*/}
          </nav>
          {/* nav End*/}
        </header>
      </div>
    );
  }
}