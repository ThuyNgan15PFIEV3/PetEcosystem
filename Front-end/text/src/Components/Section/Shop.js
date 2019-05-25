import React, { Component } from 'react';
import '../../CSS/Shop.css';
export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* Jumbotron */}
        <div className="banner">
          <div className="container">
            <div>
              <h1>shop</h1>
            </div>
          </div>
        </div>
        {/* Jumbotron End */}
        {/* Product Section Start */}
        <section id="product">
          <div className="container">
            <div className="inner-content">
              <div class="filters__outer">

                <div class="filters__inner">

                  <div class="filters__column">

                    <div class="filters__title">
                      <h6>Filter results by:</h6>
                    </div>

                    <div class="filters">

                      <div class="filters__option filters__color">
                        <label for="filters-color" class="filters__label">Colors</label>
                        <select id="filters-color" class="filters__select" name="select">
                          <option value="1">Colors</option>
                          <option value="2">White</option>
                          <option value="3">Black</option>
                          <option value="4">Tan</option>
                          <option value="5">Yellow</option>
                          <option value="6">Orange</option>
                          <option value="7">Red</option>
                          <option value="8">Purple</option>
                          <option value="9">Blue</option>
                          <option value="10">Green</option>
                          <option value="11">Pink</option>
                        </select>
                      </div>


                    </div>

                  </div>
                  <div class="filters__column">

                    <div class="filters__title">
                      <h6>Search:</h6>
                    </div>
                    <input type="text" class="searchinput"></input>
                    <button class="fa fa-search"></button>
                  </div>


                  <div class="filters__column">

                    <div class="filters__title">
                      <h6>Sort results by:</h6>
                    </div>

                    <div class="filters">

                      <div class="filters__option filters__sort">
                        <label for="filters-sort" class="filters__label">Sort by</label>
                        <select id="filters-sort" class="filters__select" name="select">
                          <option value="1">Sort by:</option>
                          <option value="2">Customer Rating</option>
                          <option value="3">Price: Lowest to Highest</option>
                          <option value="4">Price: Highest to Lowest</option>
                          <option value="5">Newest to Oldest</option>
                          <option value="6">Oldest to Newest</option>
                        </select>
                      </div>

                    </div>

                  </div>

                </div>

              </div>
              <br />
              <br />
              <br />
              <br />

              <h2>Featured Products</h2>
              <div className="row" data-aos="fade-up" data-aos-duration={500}>
                <div className="col-sm-6 col-md-3 col">
                  <div className="thumbnail">
                    <figure className="image one">
                      <a href="product_single.html"><img src="images/product-2.jpg" className="img-responsive" alt="Responsive image" /></a>
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
                {/* col End */}
                <div className="col-sm-6 col-md-3 col">
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
                {/* col End */}
                <div className="col-sm-6 col-md-3 col">
                  <div className="thumbnail">
                    <figure className="image one">
                      <a href="product_single.html"><img src="images/product-1.jpg" className="img-responsive" alt="Responsive image" /></a>
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
                {/* col End */}
                <div className="col-sm-6 col-md-3 col">
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
                {/* col End */}
              </div>
              {/* 1st Row End */}
              <h2 style={{ paddingTop: '40px' }}>Latest Products</h2>
              <div className="row" data-aos="fade-up" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={500}>
                <div className="col-sm-6 col-md-3 col">
                  <div className="thumbnail">
                    <figure className="image one">
                      <a href="product_single.html"><img src="images/product-2.jpg" className="img-responsive" alt="Responsive image" /></a>
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
                {/* col End */}
                <div className="col-sm-6 col-md-3 col">
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
                {/* col End */}
                <div className="col-sm-6 col-md-3 col">
                  <div className="thumbnail">
                    <figure className="image one">
                      <a href="product_single.html"><img src="images/product-1.jpg" className="img-responsive" alt="Responsive image" /></a>
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
                {/* col End */}
                <div className="col-sm-6 col-md-3 col">
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
                {/* col End */}
              </div>
              {/* 2nd Row End */}
              <div className="row" data-aos="fade-up" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={500}>
                <div className="col-sm-6 col-md-3 col">
                  <div className="thumbnail">
                    <figure className="image one">
                      <a href="product_single.html"><img src="images/product-2.jpg" className="img-responsive" alt="Responsive image" /></a>
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
                {/* col End */}
                <div className="col-sm-6 col-md-3 col">
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
                {/* col End */}
                <div className="col-sm-6 col-md-3 col">
                  <div className="thumbnail">
                    <figure className="image one">
                      <a href="product_single.html"><img src="images/product-1.jpg" className="img-responsive" alt="Responsive image" /></a>
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
                {/* col End */}
                <div className="col-sm-6 col-md-3 col">
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
                {/* col End */}
              </div>
              {/* 3rd Row End */}
              <div className="row" data-aos="fade-up" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={500}>
                <div className="col-sm-6 col-md-3 col">
                  <div className="thumbnail">
                    <figure className="image one">
                      <a href="product_single.html"><img src="images/product-2.jpg" className="img-responsive" alt="Responsive image" /></a>
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
                {/* col End */}
                <div className="col-sm-6 col-md-3 col">
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
                {/* col End */}
                <div className="col-sm-6 col-md-3 col">
                  <div className="thumbnail">
                    <figure className="image one">
                      <a href="product_single.html"><img src="images/product-1.jpg" className="img-responsive" alt="Responsive image" /></a>
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
                {/* col End */}
                <div className="col-sm-6 col-md-3 col">
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
                {/* col End */}
              </div>
              {/* 4th Row End */}
              <div className="products-display">
                <a href="#" className="previous">Previous</a>
                <a href="#" className="next">Next</a>
              </div>
            </div>
            {/* Inner-content End */}
          </div>
          {/* Container End */}
        </section>
        {/* Product Section End */}
      </div>
    );
  }
}