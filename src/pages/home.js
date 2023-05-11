import { colors } from "@material-ui/core";
import React from "react";
import BasicSlider from "./BasicSlider";
import { Carousel } from "bootstrap";
/* import two from '/assets/images/two.png'; */

var Link = require("react-router").Link;
class Home extends React.Component {
  render() {
    const path = window.location.pathname;
    return (
      <>
   




{/* carousel */}
{/* <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="assets/images/one.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>This is the first slide!</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="assets/images/two.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="assets/images/three.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel> */}


{/* <img src={two} alt="Image" /> */}
{/* <BasicSlider/> */}

        <nav class="navbar bg-dark" data-bs-theme="dark">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"></a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/"
                    style={{ color: "white" }}
                  >
                    Home
                  </a>
                  <a
                    class="nav-link"
                    href="/portfolio"
                    style={{ color: "white" }}
                  >
                    Portfolio
                  </a>
                  <a class="nav-link" href="" style={{ color: "white" }}>
                    Our People
                  </a>
                  <a class="nav-link" href="/careers" style={{ color: "white" }}>
                    Careers
                  </a>
                  <a class="nav-link" href="/contactUs" style={{ color: "white" }}>
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </nav>

        <section class="intro">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 wow" data-splitting>
                <h4>ABOUT US</h4>
                <h3 class="section-title">
                  HOW WE MAKE <br></br>
                  USER EXPERIENCES
                </h3>
              </div>

              <div class="col-lg-7 wow" data-splitting>
                <p>
                  You can't use up creativity. The more you use, the more you
                  have in your signifant mind.
                </p>
                <h6>Salvador Dali</h6>
                <small>Digital Artisit</small> <b>25</b>
                <h4>
                  YEARS OF<br></br>
                  DIGITAL EXPERIENCE
                </h4>
              </div>
            </div>
          </div>
        </section>

        <section class="icon-content-block">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-12 wow" data-splitting>
                <h3 class="section-title">
                  THE THINGS<br></br>
                  WE ARE ABLE TO DO
                </h3>
              </div>

              <div class="col-lg-3 col-md-4 wow" data-splitting>
                <div class="content-block">
                  <figure>
                    {" "}
                    <img src="assets/images/icon01.png" alt="Image" />{" "}
                  </figure>
                  <h6>DIGITAL PRODUCTS</h6>
                  <ul>
                    <li>Digital Branding</li>
                    <li>Web & Mobile Sites</li>
                    <li>User Interface Design</li>
                    <li>Responsive Techs</li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 wow" data-splitting>
                <div class="content-block">
                  <figure>
                    {" "}
                    <img src="assets/images/icon02.png" alt="Image" />{" "}
                  </figure>
                  <h6>UI-UX DESIGN</h6>
                  <ul>
                    <li>Digital Strategy</li>
                    <li>User Experience Design</li>
                    <li>User Interface Design</li>
                    <li>Mobile Sites</li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 wow" data-splitting>
                <div class="content-block">
                  <figure>
                    {" "}
                    <img src="assets/images/icon03.png" alt="Image" />{" "}
                  </figure>
                  <h6>WEB DEVELOPMENT</h6>
                  <ul>
                    <li>Custom Platform</li>
                    <li>Back-End Executions</li>
                    <li>Interface Apps</li>
                    <li>Mobile Systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="clients">
          <div class="container">
            <div class="row">
              {" "}
              <div class="col-lg-5 wow" data-splitting>
                <h3 class="section-title">
                  AGENSY PROUD<br></br>
                  IS QUALITY OF<br></br>
                  PARTNERS
                </h3>
              </div>
              <div class="col-lg-7">
                <ul>
                  <li class="reveal-effect masker wow">
                    {" "}
                    <img src="assets/images/logo01.png" alt="Image" />{" "}
                  </li>
                  <li class="reveal-effect masker wow">
                    {" "}
                    <img src="assets/images/logo02.png" alt="Image" />{" "}
                  </li>
                  <li class="reveal-effect masker wow">
                    {" "}
                    <img src="assets/images/logo03.png" alt="Image" />{" "}
                  </li>
                  <li class="reveal-effect masker wow">
                    {" "}
                    <img src="assets/images/logo04.png" alt="Image" />{" "}
                  </li>
                  <li class="reveal-effect masker wow">
                    {" "}
                    <img src="assets/images/logo05.png" alt="Image" />{" "}
                  </li>
                  <li class="reveal-effect masker wow">
                    {" "}
                    <img src="assets/images/logo06.png" alt="Image" />{" "}
                  </li>
                  <li class="reveal-effect masker wow">
                    {" "}
                    <img src="assets/images/logo07.png" alt="Image" />{" "}
                  </li>
                  <li class="reveal-effect masker wow">
                    {" "}
                    <img src="assets/images/logo08.png" alt="Image" />{" "}
                  </li>
                  <li class="reveal-effect masker wow">
                    {" "}
                    <img src="assets/images/logo09.png" alt="Image" />{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/swiper.min.js"></script>
        <script src="assets/js/wow.min.js"></script>
        <script src="assets/js/splitting.min.js"></script>
        <script src="assets/js/odometer.min.js"></script>
        <script src="assets/js/fancybox.min.js"></script>
        <script src="assets/js/scripts.js"></script>
      </>
    );
  }
}

export default Home;
