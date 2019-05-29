import React, { Component } from 'react';
import axiosInstance from '../../helper/AxiosInstance';
import NavBar from '../Navbar';
import Footer from '../Footer';
import '../../CSS/Order.css';
export default class SingleBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axiosInstance
      .get('/orders/detail/' + localStorage.getItem('userId'))
      .then((response) => {
        this.setState((prevState, props) => {
          return {
            data: response.data.data
          }
        })
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    var listOrders = this.state.data.map(order => (
      <tr>
        <td className="invert">{order.productId.name}</td>
        <td className="invert-image">
          <a href={'/products/' + order.productId._id}><img src={order.productId.image || "/images/product-2.jpg"} alt="Responsive image" /></a>
        </td>
        <td className="invert">{order.storeId.name}</td>
        <td className="invert">{order.productId.price}</td>
        <td className="invert">{order.state}</td>
      </tr>

    ));
    return (
      <div>
        <NavBar />
        {/* Jumbotron */}
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-sm-12"><h1>Đơn Hàng Của Bạn</h1></div>
            </div>
          </div>
        </div>
        {/* Jumbotron End */}
        {/* blog_single section Start */}
        <section className="blog_single">
          <div className="container">
            <div className="privacy about">
              <div className="checkout-right">
                <br />
                <br />
                <br />
                <h4>Your shopping cart contains:
                <span>{this.state.data.length} Products</span>
                </h4>
                <br />
                <table className="timetable_sub table-responsive">
                  <thead>
                    <tr>
                      <th>Tên sản phẩm</th>
                      <th>Hình ảnh sản phẩm </th>
                      <th>Tên cửa hàng</th>
                      <th>Giá sản phẩm</th>
                      <th>Tình trạng đơn hàng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listOrders}
                  </tbody>
                </table>
              </div>
            </div>
          </div>{/* /.container */}
        </section>
        {/* blog_single section Ended */}
        <Footer />
      </div>
    );
  }
}