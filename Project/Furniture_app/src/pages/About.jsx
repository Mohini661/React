import React from "react";
import img1 from "../assets/images/couch.png";

const About = () => {
  return (
    <div>
      <div class="hero">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-lg-5">
              <div class="intro-excerpt z-1">
                <h1>About Us</h1>

                <p class="mb-4">
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
            <div class="col-lg-7">
              <div class="hero-img-wrap">
                <img src={img1} class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="untree_co-section">
        <div class="container">
          <div class="row mb-5">
            <div class="col-lg-5 mx-auto text-center">
              <h2 class="section-title">Our Team</h2>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src="images/person_1.jpg" class="img-fluid mb-5" />
              <h3 clas>
                <a href="#">
                  <span class="">Lawson</span> Arnold
                </a>
              </h3>
              <span class="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <p class="mb-0">
                <a href="#" class="more dark">
                  Learn More <span class="icon-arrow_forward"></span>
                </a>
              </p>
            </div>

            <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src="images/person_2.jpg" class="img-fluid mb-5" />

              <h3 clas>
                <a href="#">
                  <span class="">Jeremy</span> Walker
                </a>
              </h3>
              <span class="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <p class="mb-0">
                <a href="#" class="more dark">
                  Learn More <span class="icon-arrow_forward"></span>
                </a>
              </p>
            </div>

            <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src="images/person_3.jpg" class="img-fluid mb-5" />
              <h3 clas>
                <a href="#">
                  <span class="">Patrik</span> White
                </a>
              </h3>
              <span class="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <p class="mb-0">
                <a href="#" class="more dark">
                  Learn More <span class="icon-arrow_forward"></span>
                </a>
              </p>
            </div>

            <div class="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
              <img src="images/person_4.jpg" class="img-fluid mb-5" />

              <h3 clas>
                <a href="#">
                  <span class="">Kathryn</span> Ryan
                </a>
              </h3>
              <span class="d-block position mb-4">CEO, Founder, Atty.</span>
              <p>
                Separated they live in. Separated they live in Bookmarksgrove
                right at the coast of the Semantics, a large language ocean.
              </p>
              <p class="mb-0">
                <a href="#" class="more dark">
                  Learn More <span class="icon-arrow_forward"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Start Testimonial Slider  */}
      <div class="testimonial-section before-footer-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 mx-auto text-center">
              <h2 class="section-title">Testimonials</h2>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-12">
              <div class="testimonial-slider-wrap text-center">
                <div id="testimonial-nav">
                  <span class="prev" data-controls="prev">
                    <span class="fa fa-chevron-left"></span>
                  </span>
                  <span class="next" data-controls="next">
                    <span class="fa fa-chevron-right"></span>
                  </span>
                </div>

                <div class="testimonial-slider">
                  <div class="item">
                    <div class="row justify-content-center">
                      <div class="col-lg-8 mx-auto">
                        <div class="testimonial-block text-center">
                          <blockquote class="mb-5">
                            <p>
                              &ldquo;Donec facilisis quam ut purus rutrum
                              lobortis. Donec vitae odio quis nisl dapibus
                              malesuada. Nullam ac aliquet velit. Aliquam
                              vulputate velit imperdiet dolor tempor tristique.
                              Pellentesque habitant morbi tristique senectus et
                              netus et malesuada fames ac turpis egestas.
                              Integer convallis volutpat dui quis
                              scelerisque.&rdquo;
                            </p>
                          </blockquote>

                          <div class="author-info">
                            <div class="author-pic">
                              <img
                                src="images/person-1.png"
                                alt="Maria Jones"
                                class="img-fluid"
                              />
                            </div>
                            <h3 class="font-weight-bold">Maria Jones</h3>
                            <span class="position d-block mb-3">
                              CEO, Co-Founder, XYZ Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="item">
                    <div class="row justify-content-center">
                      <div class="col-lg-8 mx-auto">
                        <div class="testimonial-block text-center">
                          <blockquote class="mb-5">
                            <p>
                              &ldquo;Donec facilisis quam ut purus rutrum
                              lobortis. Donec vitae odio quis nisl dapibus
                              malesuada. Nullam ac aliquet velit. Aliquam
                              vulputate velit imperdiet dolor tempor tristique.
                              Pellentesque habitant morbi tristique senectus et
                              netus et malesuada fames ac turpis egestas.
                              Integer convallis volutpat dui quis
                              scelerisque.&rdquo;
                            </p>
                          </blockquote>

                          <div class="author-info">
                            <div class="author-pic">
                              <img
                                src="images/person-1.png"
                                alt="Maria Jones"
                                class="img-fluid"
                              />
                            </div>
                            <h3 class="font-weight-bold">Maria Jones</h3>
                            <span class="position d-block mb-3">
                              CEO, Co-Founder, XYZ Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="item">
                    <div class="row justify-content-center">
                      <div class="col-lg-8 mx-auto">
                        <div class="testimonial-block text-center">
                          <blockquote class="mb-5">
                            <p>
                              &ldquo;Donec facilisis quam ut purus rutrum
                              lobortis. Donec vitae odio quis nisl dapibus
                              malesuada. Nullam ac aliquet velit. Aliquam
                              vulputate velit imperdiet dolor tempor tristique.
                              Pellentesque habitant morbi tristique senectus et
                              netus et malesuada fames ac turpis egestas.
                              Integer convallis volutpat dui quis
                              scelerisque.&rdquo;
                            </p>
                          </blockquote>

                          <div class="author-info">
                            <div class="author-pic">
                              <img
                                src="images/person-1.png"
                                alt="Maria Jones"
                                class="img-fluid"
                              />
                            </div>
                            <h3 class="font-weight-bold">Maria Jones</h3>
                            <span class="position d-block mb-3">
                              CEO, Co-Founder, XYZ Inc.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  End Testimonial Slider  */}
    </div>
  );
};

export default About;
