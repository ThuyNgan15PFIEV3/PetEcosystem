import React, { Component } from 'react';
import axiosInstance from '../../helper/AxiosInstance';
import NavBar from '../Navbar';
import Footer from '../Footer';
import '../../CSS/Form.css';

export default class SingleStore extends Component {
  constructor(props) {
    super(props)
    this.handleAddStore = this.handleAddStore.bind(this)
  }

  componentDidMount() {
    console.log('test');
    var haveStore = localStorage.getItem('haveStore');
    if (haveStore === true) {
      console.log('test')
      this.props.history.push('/shop/' + haveStore);
    }
  }
  handleAddStore(event) {
    event.preventDefault();
    console.log('test');
    const data = new FormData(event.target);
    var body = {
      name: data.get('name'),
      description: data.get('description'),
      address: data.get('address'),
      typeOfStore: data.get('typeOfStore')
    }
    console.log(body)
    axiosInstance.post('/stores', body)
      .then((response) => {
        alert('Bạn đã tạo cửa hàng thành công, hãy thêm sản phẩm vào cửa hàng')
        this.props.history.push('/stores/detail/' + response.data.data._id);
        window.location.reload();
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
            <p>You don't have any store, let create one</p>
            <form onSubmit={this.handleAddStore}>
              <label htmlFor="fname">Tên Cửa Hàng</label>
              <input type="text" name="name" placeholder="Hãy nhập tên cửa hàng ..." required />
              <label htmlFor="lname">Mô Tả</label>
              <input type="text" name="description" placeholder="Hãy nhập mô tả ..." required />
              <label htmlFor="lname">Địa Chỉ</label>
              <input type="text" name="address" placeholder="Hãy nhập địa chỉ cửa hàng ..." required />
              <label for="country">Loại cửa hàng</label>
              <select name="typeOfStore">
                <option value="normal">Cửa Hàng</option>
                <option value="beauty">Trung Tâm Thẩm Mỹ</option>
                <option value="training">Trung Tâm Huấn Luyện</option>
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