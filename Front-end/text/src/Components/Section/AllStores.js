import React, { Component } from 'react';
import axiosInstance from '../../helper/AxiosInstance';
import NavBar from '../Navbar';
import Footer from '../Footer';
export default class AllShop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axiosInstance
      .get('/stores/' + this.props.match.params.typeOfStore)
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
    var listStores = this.state.data.map(store => (
      <div className="part-1">
        <div className="row">
          <div className="col-md-12 heading">
            <h3>{store.name}</h3>
          </div>
          <div className="col-md-3">
            <figure>
              <img href={'/stores/' + this.props.match.params.typeOfStore + '/' + store._id} src={ store.image || "/images/pete-3.jpg"} alt="Web Design" width="100%" />
            </figure>
          </div>
          <div className="col-md-9">
            <p>Mô Tả: {store.description}</p>
          </div>
          <div className="col-md-9">
            <p>Địa Chỉ: {store.address}</p>
          </div>
          <button><a href={'/stores/detail/' + store._id}> xem chi tiết</a></button>
        </div>
      </div>
    ))
    return (
      <div>
        <NavBar />

        {/* Jumbotron */}
        <div className="banner">
          <div className="container">
            <div>
              <h1>{this.props.match.params.typeOfStore} Stores</h1>
            </div>
          </div>
        </div>
        {/* Jumbotron End */}
        {/* services section Start */}
        <section id="services">
          <div className="container">
            <div className="inner-content">
              {listStores}
            </div>
          </div>
        </section>
        {/* services section Ended */}
        <Footer />
      </div>
    );
  }
}