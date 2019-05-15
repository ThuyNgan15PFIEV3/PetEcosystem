import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class TopMenu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav" style={{ background: 'black' }}>
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">Pet Shop</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                            <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link js-scroll-trigger " >Cửa Hàng</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/feed" className="nav-link js-scroll-trigger" >Thú Nuôi</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#Care">Chăm sóc thú y</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#Veterinary">Thú ý</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link js-scroll-trigger">Giới thiệu</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#Login">Đăng nhập</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

