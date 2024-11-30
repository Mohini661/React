import React from "react";
import cat1 from "../assets/img/cat-1.jpg";
import cat2 from "../assets/img/cat-2.jpg";
import cat3 from "../assets/img/cat-3.jpg";
import cat4 from "../assets/img/cat-4.jpg";
import cat5 from "../assets/img/cat-5.jpg";
import cat6 from "../assets/img/cat-6.jpg";

const Categories = () => {
  return (
    <div class="container-fluid pt-5">
      <div class="row px-xl-5 pb-3">
        <div class="col-lg-4 col-md-6 pb-1">
          <div
            class="cat-item d-flex flex-column border mb-4"
            style={{ padding: "30px" }}
          >
            <p class="text-right">15 Products</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
              <img class="img-fluid" src={cat1} alt="" />
            </a>
            <h5 class="font-weight-semi-bold m-0">Men's dresses</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 pb-1">
          <div
            class="cat-item d-flex flex-column border mb-4"
            style={{ padding: "30px" }}
          >
            <p class="text-right">15 Products</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
              <img class="img-fluid" src={cat2} alt="" />
            </a>
            <h5 class="font-weight-semi-bold m-0">Women's dresses</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 pb-1">
          <div
            class="cat-item d-flex flex-column border mb-4"
            style={{ padding: "30px" }}
          >
            <p class="text-right">15 Products</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
              <img class="img-fluid" src={cat3} alt="" />
            </a>
            <h5 class="font-weight-semi-bold m-0">Baby's dresses</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 pb-1">
          <div
            class="cat-item d-flex flex-column border mb-4"
            style={{ padding: "30px" }}
          >
            <p class="text-right">15 Products</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
              <img class="img-fluid" src={cat4} alt="" />
            </a>
            <h5 class="font-weight-semi-bold m-0">Accerssories</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 pb-1">
          <div
            class="cat-item d-flex flex-column border mb-4"
            style={{ padding: "30px" }}
          >
            <p class="text-right">15 Products</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
              <img class="img-fluid" src={cat5} alt="" />
            </a>
            <h5 class="font-weight-semi-bold m-0">Bags</h5>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 pb-1">
          <div
            class="cat-item d-flex flex-column border mb-4"
            style={{ padding: "30px" }}
          >
            <p class="text-right">15 Products</p>
            <a href="" class="cat-img position-relative overflow-hidden mb-3">
              <img class="img-fluid" src={cat6} alt="" />
            </a>
            <h5 class="font-weight-semi-bold m-0">Shoes</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
