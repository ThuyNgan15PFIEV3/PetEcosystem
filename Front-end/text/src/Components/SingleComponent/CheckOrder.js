import React, { Component } from 'react';
import axiosInstance from '../../helper/AxiosInstance';
import NavBar from '../Navbar';
import Footer from '../Footer';
import '../../CSS/Order.css';
export default class CheckOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id, event) {
    axiosInstance.put('/orders/' + id, {
      state: event.target.value
    })
      .then((response) => {
        alert('Bạn đã thay đổi thành công');
        this.componentDidMount();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  componentDidMount() {
    axiosInstance
      .get('/stores/' + localStorage.getItem('myStore') + '/orders')
      .then((response) => {
        this.setState((prevState, props) => {
          return {
            data: response.data.data
          }
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {

    var listOrders = this.state.data.map(order => {
      let username
      let address
      if(order.userId) {
        username = order.userId.username;
        address = order.userId.address;
      } else {
        username= 'Anonymous';
        address= 'No where';
      }
      return(
        <tr>
          <td className="invert">{order.productId.name}</td>
          <td className="invert-image">
            <a href={'/products/' + order.productId._id}><img src={order.productId.image || "/images/product-2.jpg"} alt="Responsive image" /></a>
          </td>
          <td className="invert">{username}</td>
          <td className="invert">{address}</td>
          <td className="invert">
            <select value={order.state} name="state" onChange={event => this.handleChange(order._id, event)}>
              <option value="wait">Đang xử lý</option>
              <option value="process">Đang gửi hàng</option>
              <option value="destroy">Hủy đơn hàng</option>
              <option value="complete">Hoàn thành đơn hàng</option>
            </select>
          </td>
        </tr>

      )
    });
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
                <h4>Cửa hàng của bạn hiện tại có
                <span>{' ' + this.state.data.length} đơn hàng</span>
                </h4>
                <br />
                <table className="timetable_sub table-responsive">
                  <thead>
                    <tr>
                      <th>Tên sản phẩm</th>
                      <th>Hình ảnh sản phẩm </th>
                      <th>Tên người mua</th>
                      <th>Địa chỉ người mua</th>
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