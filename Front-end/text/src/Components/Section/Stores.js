import React, { Component } from 'react';
import NavBar from '../Navbar';
import Footer from '../Footer';
export default class Stores extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {/* Jumbotron */}
        <div className="banner">
          <div className="container">
            <div>
              <h1>Bạn có thể tìm các cửa hàng theo mục sau</h1>
            </div>
          </div>
        </div>
        {/* Jumbotron End */}
        {/* services section Start */}
        <section id="services">
          <div className="container">
            <div className="inner-content">
              <div className="part-1">
                <div className="row" data-aos="fade-up" data-aos-duration={1000}>
                  <div className="col-md-12 heading">
                    <a href="/stores/normal"><h3>Cửa Hàng</h3></a>
                  </div>
                  <div className="col-md-3">
                    <a href="/stores/normal">
                      <figure>
                        <img src="http://channel.mediacdn.vn/2019/1/15/photo-1-1547529262903164594827.jpg" alt="Web Design" width="100%" />
                      </figure>
                    </a>
                  </div>
                  <div className="col-md-9">
                    <p>Rất nhiều nghiên cứu đã chỉ ra rằng: Những người nuôi thú cưng thường khỏe mạnh, chu đáo và hướng ngoại so với những người khác. Đó là lý do mà rất nhiều gia đình hiện nay đều nuôi một vài thú cưng để giúp không khí gia đình trở nên ấm cúng và vui nhộn hơn. Tuy nhiên, việc chọn được địa điểm mua đồ dùng, quần áo, thức ăn.. cho thú cưng, chó mèo ở đâu vừa đảm bảo chất lượng mà giá cả hợp lý thì không phải dễ dàng.
                     </p><p>Bạn có thể tìm kiếm các cửa hàng phụ hợp với thú cưng của mình tại đây</p>
                  </div>
                </div>
              </div>
              <div className="part-2">
                <div className="row" data-aos="fade-up" data-aos-duration={1000}>
                  <div className="col-md-12 heading">
                    <a href="/stores/beauty">
                      <h3>Trung Tâm Thẩm Mỹ</h3>
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="/stores/beauty">
                      <figure>
                        <img src="https://www.dkn.tv/wp-content/uploads/2018/02/0506_tialongthucung2-1-680x366.jpg" alt="Web Design" width="100%" />
                      </figure>
                    </a>

                  </div>
                  <div className="col-md-9">
                    <p>Giữ cho thú cưng luôn sạch sẽ cũng quan trọng như giữ cho chúng khỏe mạnh. Dịch vụ tắm, cắt tỉa lông mang lại nhiều điều hơn là giúp thú cưng có ngoại hình đẹp và thơm tho.</p>
                    <p>Bạn có thể tìm kiếm các trung tâm thẩm mỹ phụ hợp với thú cưng của mình tại đây</p>
                  </div>
                </div>
              </div>
              <div className="part-2">
                <div className="row" data-aos="fade-up" data-aos-duration={1000}>
                  <div className="col-md-12 heading">
                    <a href="/stores/training">
                      <h3>Trung Tâm Huấn Luyện</h3>
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="/stores/training">
                      <figure>
                        <img src="https://thehappypuppysite.com/wp-content/uploads/2016/01/event-marker.jpg" alt="Web Design" width="100%" />
                      </figure>
                    </a>
                  </div>
                  <div className="col-md-9">
                    <p>
                      Những chú chó biết nghe lời luôn là niềm ao ước của nhiều hộ gia đình khi thấy những chú cún cưng của mình không những biết trông nhà mà còn rất giỏi nghiệp vụ.
                    </p>
                    <p>Bạn có thể tìm kiếm các trung tâm huấn luyện phụ hợp với thú cưng của mình tại đây</p>
                  </div>
                </div>
              </div>
              <div className="part-2">
                <div className="row" data-aos="fade-up" data-aos-duration={1000}>
                  <div className="col-md-12 heading">
                    <a href="/stores/care">
                      <h3>Trung Tâm Chăm Sóc</h3>
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="/stores/care">
                      <figure>
                        <img src="data:image/jpeg;base64,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" alt="Web Design" width="100%" />
                      </figure>
                    </a>
                  </div>
                  <div className="col-md-9">
                    <p>
                      Thú cưng hiện nay đang được nuôi rất nhiều tại các gia đình Việt, nó như những người bạn thân thiết thực sự bên cạnh con người những lúc vui hay buồn. Tuy chúng không biết nói nhưng nếu ai đã từng chăm sóc cho chúng sẽ thấy những tình cảm nó dành cho con người là sâu sắc, đặc biệt. Tuy nhiên, các bạn luôn cần chú ý đảm bảo về sức khỏe cũng như vệ sinh cho chúng, đối với rất nhiều người bận công việc thì các dịch vụ chăm sóc cho thú cưng là rất phù hợp
                    </p>
                    <p>Bạn có thể tìm kiếm các trung tâm chăm sóc phụ hợp với thú cưng của mình tại đây</p>
                  </div>
                </div>
              </div>
              <div className="part-2">
                <div className="row" data-aos="fade-up" data-aos-duration={1000}>
                  <div className="col-md-12 heading">
                    <a href="/stores/vet">
                      <h3>Trung Tâm Thú Y</h3>
                    </a>
                  </div>
                  <div className="col-md-3">
                    <a href="/stores/vet">
                      <figure>
                        <img src="https://wakevetandurgentcare.com/wp-content/uploads/2013/07/home-slider-1024x449.jpg" alt="Web Design" width="100%" />
                      </figure>
                    </a>s
                  </div>
                  <div className="col-md-9">
                    <p>Thú cưng giờ đang được nuôi rất nhiều tại các gia đình Việt, nó như những người bạn thân thiết thực sự bên cạnh ta những lúc vui hay buồn. Tuy chúng không biết nói nhưng các bạn nếu ai đã từng chăm sóc cho chúng sẽ thấy những tình cảm nó dành cho con người là sâu sắc, đặc biệt. Nhưng không phải lúc nào nó cũng mãi khỏe mạnh để vui đùa cùng các bạn được sẽ có những lúc ốm yếu đổ bệnh,
                      </p><p> Bạn có thể tìm kiếm các trung tâm y tế phù hợp tại đây</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* services section Ended */}
        <Footer />
      </div>
    );
  }
}