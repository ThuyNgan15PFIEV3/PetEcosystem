import React, { Component } from 'react';
import '../../CSS/Shop.css';
import axiosInstance from '../../helper/AxiosInstance';
import NavBar from '../Navbar';
import Footer from '../Footer';
export default class Shop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      searchText: "",
      temp: []
    };
  }

  handleSortProductsByCategory(event) {
    var value = event.target.value;
    var { temp } = this.state;
    console.log(temp);
    if (value == 1) {
      this.setState({
        products: temp
      })
    } else {
      var searchProducts = temp.filter(product => product.category === value)
      this.setState({
        products: searchProducts
      })
    }
  }

  handleSearchChange(event) {
    var value = event.target.value;
    this.setState({
      searchText: value
    });
  }

  handleSearch(event) {

    var { searchText, temp } = this.state;
    var searchProducts = temp.filter(function (product) {
      return product.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
    this.setState({
      products: searchProducts
    });
  }

  handleSortProducts(event) {
    var value = event.target.value;
    const { products } = this.state;
    switch (value) {
      case '1':
        products.sort((a, b) => {
          var dateA = new Date(a.createdAt), dateB = new Date(b.createdAt);
          return dateA - dateB;
        }).reverse();
        break;
      case '2':
        products.sort((a, b) => {
          var dateA = new Date(a.createdAt), dateB = new Date(b.createdAt);
          return dateA - dateB;
        });
        break;
      case '3':
        products.sort((a, b) => {
          var priceA = a.price.replace(/\./g, ''), priceB = b.price.replace(/\./g, '');
          console.log(parseInt(priceA, 10));
          return priceA - priceB;
        });
        break;
      case '4':
        products.sort((a, b) => {
          var priceA = a.price.replace(/\./g, ''), priceB = b.price.replace(/\./g, '');
          console.log(parseInt(priceA, 10));
          return priceA - priceB;
        }).reverse();
        break;
      default:
        return
    }
    console.log('test')
    this.setState({ products });
  }


  componentDidMount() {
    axiosInstance
      .get('/products/')
      .then((response) => {
        this.setState((prevState, props) => {
          response.data.data.sort((a, b) => {
            var dateA = new Date(a.createdAt), dateB = new Date(b.createdAt);
            return dateA - dateB;
          }).reverse();
          return {
            products: response.data.data,
            temp: response.data.data
          }
        })
      })
      .catch((error) => {
        console.log(error);
      })
    axiosInstance
      .get('/categories')
      .then((response) => {
        this.setState((prevState, props) => {
          return {
            categories: response.data.data
          }
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    var listcategories = this.state.categories.map(category => (
      <option value={category._id}>{category.name}</option>
    ))
    var listproducts = this.state.products.map(product => (
      <div className="col-sm-6 col-md-3 col">
        <div className="thumbnail">
          <figure className="image one">
            <a href={'/products/' + product._id}><img style={{
              width: "100%",
              height: "200px"
            }} src={product.image || "/images/product-2.jpg"} className="img-responsive" alt="Responsive image" /></a>
          </figure>
          <div className="caption">
            <h3 className="productdisplay"><a title={product.name} href={'/products/' + product._id}>{product.name}</a></h3>
            <p className="productdisplay"> {product.description}</p>
            <div className="box">
              <h3 style={{
                padding: "10px"
              }}>Giá: {product.price}</h3>
            </div>
          </div>
        </div>
      </div>
    ))
    return (
      <div>
        {/* Jumbotron */}
        <NavBar />
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
                      <h6>Filter results:</h6>
                    </div>
                    <div class="filters">
                      <div class="filters__option filters__color">
                        <label for="filters-color" class="filters__label">Category</label>
                        <select onChange={event => this.handleSortProductsByCategory(event)} id="filters-color" class="filters__select" name="select">
                          <option value="1">Select Category</option>
                          {listcategories}
                        </select>
                      </div>
                    </div>

                  </div>
                  <div class="filters__column">

                    <div class="filters__title">

                      <button onClick={event => this.handleSearch(event)} class="fa fa-search">Search <i> </i></button>
                    </div>
                    <input value={this.state.searchText} onChange={event => this.handleSearchChange(event)}
                      type="text" class="searchinput"></input>
                  </div>
                  <div class="filters__column">

                    <div class="filters__title">
                      <h6>Sort results by:</h6>
                    </div>

                    <div class="filters">

                      <div class="filters__option filters__sort">
                        <label for="filters-sort" class="filters__label">Sort by</label>
                        <select onChange={event => this.handleSortProducts(event)} id="filters-sort" class="filters__select" name="select">
                          <option value="1">Newest to Oldest</option>
                          <option value="2">Oldest to Newest</option>
                          <option value="3">Price: Lowest to Highest</option>
                          <option value="4">Price: Highest to Lowest</option>
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
              <h2 style={{ paddingTop: '40px' }}>Latest Products</h2>
              <div className="row" data-aos="fade-up" data-aos-offset={300} data-aos-easing="ease-in-sine" data-aos-duration={500}>
                {listproducts}
                {/* col End */}
              </div>
            </div>
            {/* Inner-content End */}
          </div>
          {/* Container End */}
        </section>
        {/* Product Section End */}
        <Footer />
      </div>
    );
  }
}