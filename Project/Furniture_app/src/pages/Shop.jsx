import React from "react";
import img1 from "../assets/images/couch.png";
import img2 from "../assets/images/product-1.png";
import img3 from "../assets/images/product-2.png";
import img4 from "../assets/images/product-3.png";
import cr1 from "../assets/images/cross.svg";

const Shop = () => {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt z-1">
                <h1>Shop</h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                <p>
                  <a href="" class="btn btn-secondary me-2">
                    Shop Now
                  </a>
                  <a href="#" class="btn btn-white-outline">
                    Explore
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div class="hero-img-wrap">
                <img src={img1} class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {/*  Start Column 1 */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src={img4} className="img-fluid product-thumbnail" />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img src={cr1} className="img-fluid" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src={img2} className="img-fluid product-thumbnail" />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img src={cr1} className="img-fluid" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src={img3} className="img-fluid product-thumbnail" />
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>

                <span className="icon-cross">
                  <img src={cr1} className="img-fluid" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src={img4} className="img-fluid product-thumbnail" />
                <h3 className="product-title">Ergonomic Chair</h3>
                <strong className="product-price">$43.00</strong>

                <span className="icon-cross">
                  <img src={cr1} className="img-fluid" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src={img4} className="img-fluid product-thumbnail" />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img src={cr1} className="img-fluid" />
                </span>
              </a>
            </div>
            {/*  End Column 1 						
					 Start Column 2  */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src={img2} className="img-fluid product-thumbnail" />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>

                <span className="icon-cross">
                  <img src={cr1} className="img-fluid" />
                </span>
              </a>
            </div>
            {/* End Column 2 
					 Start Column 3  */}
            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src={img3} className="img-fluid product-thumbnail" />
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>

                <span className="icon-cross">
                  <img src={cr1} className="img-fluid" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5">
              <a className="product-item" href="#">
                <img src={img4} className="img-fluid product-thumbnail" />
                <h3 className="product-title">Ergonomic Chair</h3>
                <strong className="product-price">$43.00</strong>

                <span className="icon-cross">
                  <img src={cr1} className="img-fluid" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
