import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* Jumbotron */}
        <div className="jumbotron">
          {/* Container */}
          <div className="container">
            <div data-aos="fade-right">
              <h1>best pets theme <span>
                for pet shops &amp; </span>
                <span>veternary owners</span>
              </h1>
              <a className="btn btn-primary btn-lg" href="/shop" role="button">shop now</a>
            </div>
            {/* Row */}
            <div className="row" data-aos="fade-up" data-aos-easing="linear" data-aos-duration={500}>
              {/* 1st col */}
              <div className="col-xs-12 col-md-4 col">
                <a href="product_single.html"><figure className="pete-1" /></a>
                <div className="inner-content">
                  <h2><a href="services.html">Pet Service</a></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
                  <p><a href="services.html">readmore...</a></p>
                </div>
              </div>
              {/* 2st col */}
              <div className="col-xs-12 col-md-4 col">
                <a href="product_single.html"><figure className="pete-2" /></a>
                <div className="inner-content">
                  <h2><a href="services.html">Puppy Care</a></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
                  <p><a href="services.html">readmore...</a></p>
                </div>
              </div>
              {/* 3st col */}
              <div className="col-xs-12 col-md-4 col">
                <a href="product_single.html"><figure className="pete-3" /></a>
                <div className="inner-content">
                  <h2><a href="services.html">Shopping</a></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1500s.</p>
                  <p><a href="services.html">readmore...</a></p>
                </div>
              </div>
            </div>
            {/* Row End */}
          </div>
          {/* Container End*/}
        </div>
        {/* Jumbotron Ended */}
        {/* Staff Section */}
        <section className="staff">
          {/* Container */}
          <div className="container">
            <h2>Discover Pet Sitting with our experiences staff</h2>
            <h5>yea, we have experienced pet sitters who take care of your pets ....</h5>
            {/* Row */}
            <div className="row">
              {/* 1st col */}
              <div className="col-md-6 col" data-aos="fade-right" data-aos-easing="linear" data-aos-duration={500}>
                <video poster="images/vedio-img.jpg" controls>
                  <source src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" type="video/mp4" />
                </video>
              </div>
              {/* 1st col End */}
              {/* 2st col */}
              <div className="col-md-6" data-aos="fade-left" data-aos-easing="linear" data-aos-duration={500}>
                <div className="col-md-12">
                  <h3>Check this video of pet sitting</h3>
                  <h4>Lorem Ipsum is simply dummy text of the</h4>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer a galley of type and scrambled it make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s </p>
                  {/* Buttons */}
                  <div className="btn-group">
                    <a href="#" className="btn btn-warning">book now</a>
                    <a href="#" className="btn btn-success">more info</a>
                  </div>
                  {/* Buttons End*/}
                </div>
              </div>
              {/* 2st col End */}
            </div>
            {/* Row End*/}
          </div>
          {/* Container End */}
        </section>
        {/* Staff Section End*/}
        {/* Product Section Start */}
        <section className="product">
          {/* Container */}
          <div className="container">
            <h2>Featured Products <a className="btn btn-default" href="shop.html" role="button">shop more</a></h2>
            {/* Row */}
            <div className="row" data-aos="fade-up" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={500}>
              {/* 1st col */}
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
              {/* 1st col End*/}
              {/* 2st col */}
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
              {/* 2st col End*/}
              {/* 3st col */}
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
              {/* 3rd col End*/}
              {/* 4rd col */}
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
              {/* 4rd col End*/}
            </div>
            {/* Row End */}
          </div>
          {/* Container End*/}
        </section>
        {/* Product Section End */}
        {/* Client Section Start */}
        <section className="client">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6" data-aos="fade-right" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={500}>
                <div className="col">
                  <div className="quote"><i className="fa fa-quote-right" aria-hidden="true" /></div>
                  <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                    {/* Bottom Carousel Indicators */}
                    <ol className="carousel-indicators">
                      <li data-target="#quote-carousel" data-slide-to={0} className="active" />
                      <li data-target="#quote-carousel" data-slide-to={1} />
                      <li data-target="#quote-carousel" data-slide-to={2} />
                      <li data-target="#quote-carousel" data-slide-to={3} />
                    </ol>
                    {/* Carousel Slides / Quotes */}
                    <div className="carousel-inner">
                      {/* Quote 1 */}
                      <div className="item active">
                        <h3>Client Testimmonials</h3>
                        <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ever since the 1500s, when an unknown printer took a galley of type and....”</p>
                        <h4>Vulputate M., Dolor</h4>
                      </div>
                      {/* Quote 2 */}
                      <div className="item">
                        <h3>Client Testimmonials</h3>
                        <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ever since the 1500s, when an unknown printer took a galley of type and....”</p>
                        <h4>Vulputate M., Dolor</h4>
                      </div>
                      {/* Quote 3 */}
                      <div className="item">
                        <h3>Client Testimmonials</h3>
                        <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ever since the 1500s, when an unknown printer took a galley of type and....”</p>
                        <h4>Vulputate M., Dolor</h4>
                      </div>
                      {/* Quote 4 */}
                      <div className="item">
                        <h3>Client Testimmonials</h3>
                        <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ever since the 1500s, when an unknown printer took a galley of type and....”</p>
                        <h4>Vulputate M., Dolor</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6" data-aos="fade-left" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={500}>
                <div className="col-image">
                  <div className="image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Client Section End */}
        <section className="blog">
          <div className="container">
            <h2>Latest Blog Posts <a className="btn btn-default" href="blog.html" role="button">go to blog</a></h2>
            {/* 1st Row*/}
            <div className="row" data-aos="fade-right" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={500}>
              <div className="col-xs-12 col-sm-6 col-md-5">
                <div className="thumbnail">
                  <div className="caption">
                    <h3><a href="blog_single.html">Man sitting with pet on the rocky beach of california!</a></h3>
                    <p><span><a href="blog_single.html">read more...</a></span></p>
                    <h4><span><a href="blog_single.html">Pets</a> </span> , <span><a href="blog_single.html">Pet</a> </span> , <span><a href="blog_single.html">care</a> </span> , <span><a href="blog_single.html">blog</a> </span></h4>
                  </div>
                  <img src="images/blog-2.jpg" className="img-responsive" alt="post-1" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-7">
                <div className="thumbnail">
                  <div className="caption">
                    <h3><a href="blog_single.html">Man sitting with pet on the rocky beach of california!</a></h3>
                    <p><span><a href="blog_single.html">read more...</a></span></p>
                    <h4><span><a href="blog_single.html">Pets</a> </span> , <span><a href="blog_single.html">Pet</a> </span> , <span><a href="blog_single.html">care</a> </span> , <span><a href="blog_single.html">blog</a> </span></h4>
                  </div>
                  <img src="images/blog-3.jpg" className="img-responsive" alt="post-2" />
                </div>
              </div>
            </div>
            {/* 1st Row End*/}
            {/* 2st Row*/}
            <div className="row" data-aos="fade-left" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={500}>
              <div className="col-xs-12 col-sm-6 col-md-7">
                <div className="thumbnail">
                  <div className="caption">
                    <h3><a href="blog_single.html">Man sitting with pet on the rocky beach of california!</a></h3>
                    <p><span><a href="blog_single.html">read more...</a></span></p>
                    <h4><span><a href="blog_single.html">Pets</a> </span> , <span><a href="blog_single.html">Pet</a> </span> , <span><a href="blog_single.html">care</a> </span> , <span><a href="blog_single.html">blog</a> </span></h4>
                  </div>
                  <img src="images/blog-6.jpg" className="img-responsive" alt="post-3" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-5">
                <div className="thumbnail">
                  <div className="caption">
                    <h3><a href="blog_single.html">Man sitting with pet on the rocky beach of california!</a></h3>
                    <p><span><a href="blog_single.html">read more...</a></span></p>
                    <h4><span><a href="blog_single.html">Pets</a> </span> , <span><a href="blog_single.html">Pet</a> </span> , <span><a href="blog_single.html">care</a> </span> , <span><a href="blog_single.html">blog</a> </span></h4>
                  </div>
                  <img src="images/blog-5.jpg" className="img-responsive" alt="post-4" />
                </div>
              </div>
            </div>
            {/* 2st Row End*/}
          </div>{/* /.container */}
        </section>
      </div>
    );
  }
}