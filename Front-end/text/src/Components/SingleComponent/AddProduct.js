import React, { Component } from 'react';
import axiosInstance from '../../helper/AxiosInstance';
import NavBar from '../Navbar';
import Footer from '../Footer';
import '../../CSS/Form.css';

export default class SingleStore extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    };
    this.handleAddProduct = this.handleAddProduct.bind(this)
  }

  componentDidMount() {
    axiosInstance
      .get('/categories')
      .then((response) => {
        this.setState((prevState, props) => {
          return {
            categories: response.data.data
          }
        })
        console.log(this.state.categories);
      })

      .catch((error) => {
        console.log(error);
      })
  }

  handleAddProduct(event) {
    event.preventDefault();
    console.log('test');
    const data = new FormData(event.target);
    var body = {
      name: data.get('name'),
      description: data.get('description'),
      price: data.get('price'),
      category: data.get('category'),
      image: data.get('image')
    }
    console.log(body)
    axiosInstance.post('/stores/detail/' + localStorage.getItem('myStore') + '/products', body)
      .then((response) => {
        alert('Bạn đã thêm sản phẩm thành công, hãy kiểm tra')
        this.props.history.push('/stores/detail/' + localStorage.getItem('myStore'));
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    var listCategories = this.state.categories.map(category => (
      <option value={category._id}>{category.name}</option>
    ))
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
            <form onSubmit={this.handleAddProduct}>
              <label htmlFor="fname">Tên Sản Phẩm</label>
              <input type="text" name="name" placeholder="Hãy nhập tên sản phẩm ..." required />
              <label htmlFor="lname">Mô Tả</label>
              <input type="text" name="description" placeholder="Hãy nhập mô tả ..." required />
              <label htmlFor="lname">Giá</label>
              <input type="text" name="price" placeholder="Hãy nhập giá sản phẩm ..." required />
              <label for="country">Hình ảnh sản phẩm</label>
              <input type="text" name="image" placeholder="Hãy nhập Link ảnh..." required />
              <label for="country">Phân loại sản phẩm</label>
              <select id="country" name="category">
                {listCategories}
              </select>
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