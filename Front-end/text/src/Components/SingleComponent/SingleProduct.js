import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <div>
        {/* Jumbotron */}
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-sm-12"><h1>Our Blog</h1></div>
            </div>
          </div>
        </div>
        {/* Jumbotron End */}
        {/* Blog-single Section Start */}
        <section className="single">
          <div className="container">
            <div className="inner-content">
              <h2 className="myh2">Featured Products</h2>
              <div className="row">
                <div className="col-sm-12 col-md-8 slider-sec" data-aos="fade-up">
                  {/* main slider carousel */}
                  <div id="myCarousel" className="carousel slide">
                    {/* main slider carousel items */}
                    <div className="carousel-inner">
                      <div className="item carousel-item active" data-slide-number={0}>
                        <img src="/images/blog-img1%20(1).jpg" alt="image" className="img-thumbnail img-responsive img-fluid w549" />
                      </div>
                      <div className="item carousel-item" data-slide-number={1}>
                        <img src="/images/blog-img1%20(2).jpg" alt="image" className="img-thumbnail img-responsive img-fluid w549" />
                      </div>
                      <div className="item carousel-item" data-slide-number={2}>
                        <img src="/images/blog-img1%20(3).jpg" alt="image" className="img-thumbnail img-responsive img-fluid w549" />
                      </div>
                      <div className="item carousel-item" data-slide-number={3}>
                        <img src="/images/blog-img1%20(4).jpg" alt="image" className="img-thumbnail img-responsive img-fluid w549" />
                      </div>
                    </div>
                    {/* main slider carousel nav controls */}
                    <ul className="carousel-indicators list-inline">
                      <li className="list-inline-item active">
                        <a id="carousel-selector-0" className="selected" data-slide-to={0} data-target="#myCarousel">
                          <img src="/images/blog-img1%20(1).jpg" alt="image" className="img-thumbnail img-responsive w98" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a id="carousel-selector-1" data-slide-to={1} data-target="#myCarousel">
                          <img src="/images/blog-img1%20(2).jpg" alt="image" className="img-thumbnail img-responsive w98" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a id="carousel-selector-2" data-slide-to={2} data-target="#myCarousel">
                          <img src="/images/blog-img1%20(3).jpg" alt="image" className="img-thumbnail img-responsive w98" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a id="carousel-selector-3" data-slide-to={3} data-target="#myCarousel">
                          <img src="/images/blog-img1%20(4).jpg" alt="image" className="img-thumbnail img-responsive w98" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*/main slider carousel*/}
                </div>
                <div className="col-sm-12 col-md-4 slider-content">
                  <p className="myp" data-aos="fade-up">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  </p>
                  <div className="row myrow">
                    <div className="col-sm-12" data-aos="fade-up" data-aos-duration={1000}>
                      <ul>
                        <li className="mylist">
                          <span className="myspan">Price</span>
                          <span className="myspan">:</span>
                          <span className="myspan">$34</span>
                        </li>
                        <li className="mylist1">
                          <span className="myspan1">Now</span>&nbsp;&nbsp;
                          <span className="myspan1">:</span>&nbsp;&nbsp;
                          <span className="myspan1">$30</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-12">
                      <div className="cart" data-aos="fade-up" data-aos-duration={1500}>
                        <a href="#" className="btn btn-info" role="button">ADD TO CART</a>
                        <a href="#" className="btn btn-primary" role="button">BUY NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Blog-single Section End */}
        {/* Product Section Start */}
        <section id="product" className="product">
          <div className="container">
            <h2>Featured Products</h2>
            <div className="row">
              <div className="col-sm-6 col-md-3 col" data-aos="fade-left" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={500}>
                <div className="thumbnail">
                  <figure className="image one">
                    <a href="blog_single.html"><img src="images/product-2.jpg" className="img-responsive" alt="Responsive image" /></a>
                  </figure>
                  <div className="caption">
                    <h3><a href="product_single.html">Black Dog Belt</a></h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    <div className="box">
                      <p><span>$ 23 </span> Only</p>
                      <span className="cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col" data-aos="fade-left" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={800}>
                <div className="thumbnail">
                  <figure className="image one">
                    <a href="product_single.html"><img src="images/product-3.jpg" className="img-responsive" alt="Responsive image" /></a>
                  </figure>
                  <div className="caption">
                    <h3><a href="product_single.html">Black Dog Belt</a></h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    <div className="box">
                      <p><span>$ 23 </span> Only</p>
                      <span className="cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col" data-aos="fade-left" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={1000}>
                <div className="thumbnail">
                  <figure className="image one">
                    <a href="product_single.html"><img src="images/product-1.jpg" className="img-responsive" height="auto" alt="Responsive image" /></a>
                  </figure>
                  <div className="caption">
                    <h3><a href="product_single.html">Black Dog Belt</a></h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    <div className="box">
                      <p><span>$ 23 </span> Only</p>
                      <span className="cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3 col" data-aos="fade-left" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={1200}>
                <div className="thumbnail">
                  <figure className="image one">
                    <a href="product_single.html"><img src="images/product-4.jpg" className="img-responsive" alt="Responsive image" /></a>
                  </figure>
                  <div className="caption">
                    <h3><a href="product_single.html">Black Dog Belt</a></h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                    <div className="box">
                      <p><span>$ 23 </span> Only</p>
                      <span className="cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Product Section End */}
      </div>
    );
  }
}