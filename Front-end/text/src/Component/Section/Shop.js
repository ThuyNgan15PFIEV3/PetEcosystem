import React, { Component } from 'react';

class Food extends Component {
    render() {
        return (
          <section id="Shop">
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <div className="left-sidebar">
                    <h2>Mặt Hàng</h2>
                    <div className="panel-group category-products" id="accordian">{/*category-productsr*/}
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                              <span className="badge pull-right"><i className="fa fa-plus" /></span>
                              Thức ăn
                            </a>
                          </h4>
                        </div>
                        <div id="sportswear" className="panel-collapse collapse">
                          <div className="panel-body">
                            <ul>
                              <li><a href>Khô </a></li>
                              <li><a href>Hạt </a></li>
                              <li><a href>Đóng hộp </a></li>
                              <li><a href>Tự chế biến</a></li>
                              <li><a href>Tươi sống </a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                              <span className="badge pull-right"><i className="fa fa-plus" /></span>
                              Trang phục
                            </a>
                          </h4>
                        </div>
                        <div id="mens" className="panel-collapse collapse">
                          <div className="panel-body">
                            <ul>
                              <li><a href>Phụ kiện đi kèm</a></li>
                              <li><a href>Dây đeo</a></li>
                              <li><a href>Áo quần</a></li>
                              <li><a href>Nơ</a></li>
                              <li><a href>Gucci</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                              <span className="badge pull-right"><i className="fa fa-plus" /></span>
                              Phụ kiện
                            </a>
                          </h4>
                        </div>
                        <div id="womens" className="panel-collapse collapse">
                          <div className="panel-body">
                            <ul>
                              <li><a href>Đồ chơi</a></li>
                              <li><a href>Chuồng</a></li>
                              <li><a href>Gối</a></li>
                              <li><a href>Đẹm</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title"><a href="#">Thuốc</a></h4>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title"><a href="#">Dụng cụ vệ sinh</a></h4>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <h4 className="panel-title"><a href="#">Mĩ phẩm làm đẹp</a></h4>
                        </div>
                      </div>
                    </div>{/*/category-productsr*/}

                			
                    <div className="price-range">
                        <h2>Giá</h2>
                        <div className="well">
                          <input type="text" className="span2" defaultValue data-slider-min={0} data-slider-max={600} data-slider-step={5} data-slider-value="[250,450]" id="sl2" /><br />
                          <b>$ 0</b> <b className="pull-right">$ 600</b>
                        </div>
                    </div>
                    {/* Quảng Cáo */}
                    <div className="shipping text-center">{/*shipping*/}
                      <img src="img/home/shipping.jpg" alt />
                    </div>{/*/shipping*/}
                  </div>
                </div>

                {/* Cửa hàng */}
                <div className="col-sm-9 padding-right">
                  <div className="features_items">{/*features_items*/}
                    <h2 className="title text-center">Cửa Hàng</h2>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="img/shop/product12.jpg" alt />
                            <p>Cửa hàng</p>
                            
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Liên hệ cửa hàng</a>
                            <a href="#" class="btn btn-default show-shop"><i class="fa fa-shopping-cart"></i>Xem cửa hàng</a>
                              
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="img/shop/product11.jpg" alt />
                            <p>Cửa hàng</p>
                            
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Liên hệ cửa hàng</a>
                            <a href="#" class="btn btn-default show-shop"><i class="fa fa-shopping-cart"></i>Xem cửa hàng</a>
                              
                              
                            </div>
                          </div>
                        </div>
                     
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="img/shop/product10.jpg" alt />
                            <p>Cửa hàng</p>
                            
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Liên hệ cửa hàng</a>
                            <a href="#" class="btn btn-default show-shop"><i class="fa fa-shopping-cart"></i>Xem cửa hàng</a>
                              
                              
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="img/shop/product9.jpg" alt />
                            <p>Cửa hàng</p>
                            
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Liên hệ cửa hàng</a>
                            <a href="#" class="btn btn-default show-shop"><i class="fa fa-shopping-cart"></i>Xem cửa hàng</a>
                              
                            </div>
                          </div>
                          <img src="img/home/new.png" className="new" alt />
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="img/shop/product8.jpg" alt />
                            <p>Cửa hàng</p>
                            
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Liên hệ cửa hàng</a>
                            <a href="#" class="btn btn-default show-shop"><i class="fa fa-shopping-cart"></i>Xem cửa hàng</a>
                              
                            </div>
                          </div>
                          <img src="img/home/sale.png" className="new" alt />
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="img/shop/product7.jpg" alt />
                            <p>Cửa hàng</p>
                            
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Liên hệ cửa hàng</a>
                            <a href="#" class="btn btn-default show-shop"><i class="fa fa-shopping-cart"></i>Xem cửa hàng</a>
                              
                              
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="img/home/product6.jpg" alt />
                            <p>Cửa hàng</p>
                            
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Liên hệ cửa hàng</a>
                            <a href="#" class="btn btn-default show-shop"><i class="fa fa-shopping-cart"></i>Xem cửa hàng</a>
                              
                              
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="img/home/product5.jpg" alt />
                            <p>Cửa hàng</p>
                            
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Liên hệ cửa hàng</a>
                            <a href="#" class="btn btn-default show-shop"><i class="fa fa-shopping-cart"></i>Xem cửa hàng</a>
                              
                              
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="img/home/product4.jpg" alt />
                            <p>Cửa hàng</p>
                            
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Liên hệ cửa hàng</a>
                            <a href="#" class="btn btn-default show-shop"><i class="fa fa-shopping-cart"></i>Xem cửa hàng</a>
                              
                              
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="img/home/product3.jpg" alt />
                            <p>Cửa hàng</p>
                            
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Liên hệ cửa hàng</a>
                            <a href="#" class="btn btn-default show-shop"><i class="fa fa-shopping-cart"></i>Xem cửa hàng</a>
                              
                              
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="img/home/product2.jpg" alt />
                            <p>Cửa hàng</p>
                            
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Liên hệ cửa hàng</a>
                            <a href="#" class="btn btn-default show-shop"><i class="fa fa-shopping-cart"></i>Xem cửa hàng</a>
                              
                              
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4">
                      <div className="product-image-wrapper">
                        <div className="single-products">
                          <div className="productinfo text-center">
                            <img src="img/home/product1.jpg" alt />
                              
                            
                          </div>
                          <div className="product-overlay">
                            <div className="overlay-content">
                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Liên hệ cửa hàng</a>
                            <a href="#" class="btn btn-default show-shop"><i class="fa fa-shopping-cart"></i>Xem cửa hàng</a>
                              
                              
                            </div>
                          </div>
                        </div>
                        <div className="choose">
                          <ul className="nav nav-pills nav-justified">
                            
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ul className="pagination">
                        <li className="active"><a href="#1">1</a></li>
                        <li><a href="#2">2</a></li>
                        <li><a href="#3">3</a></li>
                        <li><a href="#4">»</a></li>
                      </ul>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
         
        </section>
    );
  }
}

export default Food;