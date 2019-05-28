import React, { Component } from 'react';
import axiosInstance from '../../helper/AxiosInstance';
import NavBar from '../Navbar';
import Footer from '../Footer';
import '../../CSS/Form.css';

export default class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      author: "",
      description: "",
      price: "",
      image: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    axiosInstance.put('/products/' + this.props.match.params.productId, {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price
    })
      .then((response) => {
        console.log(response);
        alert("Sửa thành công")
        this.props.history.push('/stores/detail/' + localStorage.getItem('myStore'));
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
  }


  componentDidMount() {
    axiosInstance
      .get('/products/' + this.props.match.params.productId)
      .then((response) => {
        this.setState((prevState, props) => {
          return {
            name: response.data.data.name,
            description: response.data.data.description,
            price: response.data.data.price
          }
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div>
        <NavBar />
        {/* Jumbotron */}
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-sm-12"><h1>My Store</h1></div>
            </div>
          </div>
        </div>
        {/* Jumbotron End */}
        {/* blog_single section Start */}
        <section className="blog_single">
          <div className="container">
            <h2>Nhập Thông Tin Sản Phẩm</h2>
            <br />
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="fname">Tên Sản Phẩm</label>
              <input type="text" name="name" value={this.state.name || ''} onChange={this.handleInputChange} placeholder="Hãy nhập tên sản phẩm ..." required />
              <label htmlFor="lname">Mô Tả</label>
              <input type="text" name="description" value={this.state.description || ''} onChange={this.handleInputChange} placeholder="Hãy nhập mô tả ..." required />
              <label htmlFor="lname">Giá</label>
              <input type="text" name="price" value={this.state.price || ''} onChange={this.handleInputChange} placeholder="Hãy nhập giá sản phẩm ..." required />
              <input type="submit" defaultValue="Submit" />
            </form>

          </div>{/* /.container */}
        </section>
        {/* blog_single section Ended */}

        <Footer />
      </div>
    );
  }
}