import React, { Component } from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
export default class Home extends Component {
  render() {
    return (
      <div>
        {/* Jumbotron */}
        <NavBar />
        <div className="jumbotron">
          {/* Container */}
          <div className="container">
            <div data-aos="fade-right">
              <h1>Thú Cưng Luôn<span>
                Được Yêu Thương &amp; </span>
                <span>Chăm Sóc</span>
              </h1>
              <a className="btn btn-primary btn-lg" href="/shop" role="button">Khám phá cửa hàng</a>
            </div>
            {/* Row */}
            <div className="row" data-aos="fade-up" data-aos-easing="linear" data-aos-duration={500}>
              {/* 1st col */}
              <div className="col-xs-12 col-md-4 col">
                <a href="/stores/training"><figure className="pete-1" /></a>
                <div className="inner-content">
                  <h2><a href="/stores/training">Trung tâm Huấn luyện</a></h2>
                  <p>Các trung tâm huấn luyện thú cưng</p>
                  <p><a href="/stores/training">readmore...</a></p>
                </div>
              </div>
              {/* 2st col */}
              <div className="col-xs-12 col-md-4 col">
                <a href="/stores/beauty"><figure className="pete-2" /></a>
                <div className="inner-content">
                  <h2><a href="/stores/beauty">Trung tâm làm đẹp</a></h2>
                  <p>Các trung tâm làm đẹp cho thú cưng của bạn</p>
                  <p><a href="/stores/beauty">readmore...</a></p>
                </div>
              </div>
              {/* 3st col */}
              <div className="col-xs-12 col-md-4 col">
                <a href="/stores/normal"><figure className="pete-3" /></a>
                <div className="inner-content">
                  <h2><a href="/stores/normal">Cửa hàng</a></h2>
                  <p>Các cửa hàng bán thú cưng</p>
                  <p><a href="/stores/normal">readmore...</a></p>
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
            <h2>Khám phá cộng đồng yêu thú cưng xung quanh bạn</h2>
            
            {/* Row */}
            <div className="row">
              {/* 1st col */}
              <div className="col-md-6 col" data-aos="fade-right" data-aos-easing="linear" data-aos-duration={500}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QRc-LhOwqjM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="col-md-6 col" data-aos="fade-right" data-aos-easing="linear" data-aos-duration={500}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/k_LLTMjkyUk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              {/* 1st col End */}
              {/* 2st col */}
              <div className="col-md-6" data-aos="fade-left" data-aos-easing="linear" data-aos-duration={500}>
                <div className="col-md-12">

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
                        <h3>Ý Kiến Của Khách Hàng</h3>
                        <p>Mình đã tìm được cửa hàng phù hợp cho thú cưng của mình, hiện tại nó rất khỏe mạnh</p>
                        <h4>N.T.Long</h4>
                      </div>
                      {/* Quote 2 */}
                      <div className="item">
                        <h3>Ý Kiến Của Khách Hàng</h3>
                        <p> Sản phẩm tốt như hình ảnh, mình rất vừa ý</p>
                        <h4>P.T.Thành</h4>
                      </div>
                      {/* Quote 3 */}
                      <div className="item">
                        <h3>Ý Kiến Của Khách Hàng</h3>
                        <p>Mặt hàng rất đa dạng, giao hàng nhanh, giá rẻ, rất phù hợp với mình</p>
                        <h4>Đ.H.Nguyên</h4>
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
        <Footer />
      </div>
    );
  }
}