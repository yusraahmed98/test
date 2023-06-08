import react, { useEffect } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import { colors } from "@material-ui/core";
import BasicSlider from "./BasicSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Link, animateScroll as scroll } from "react-scroll";

import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

function Home() {
  const path = window.location.pathname;
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
 

  return (
    <>
      <div>
        <div style={{ backgroundColor: "black" }}>
          <nav style={{ backgroundColor: "black" }}>
            <nav
              class="navbar navbar-expand-lg bg-body-tertiary"
              style={{ left: "55%" }}
            >
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
                    <a
                      class="nav-link"
                      href="/ourpeople"
                      style={{ color: "white" }}
                    >
                      Our People
                    </a>
                    <a
                      class="nav-link"
                      href="/careers"
                      style={{ color: "white" }}
                    >
                      Careers
                    </a>
                    <a
                      class="nav-link"
                      href="/contactUs"
                      style={{ color: "white" }}
                    >
                      Contact us
                    </a>
                    <a
                      class="nav-link"
                      href="/AboutUs"
                      style={{ color: "white" }}
                    >
                      About us
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </nav>
          <img
            src="assets/images/neon logo1.png"
            style={{
              display: "inline",
              scale: "0.75",
              width: "20%",
              height: "auto",
              backgroundColor: "black",
              display: "block",

            
            }}
          />
        </div>

        <section class="intro">
          <div class="container">
            <div class="row">
              <div class="col-lg-5 wow" data-splitting data-aos="fade-up">
                <h4>ABOUT US</h4>
                <h3 class="section-title">
                  HOW WE MAKE <br></br>
                  USER EXPERIENCES
                </h3>
              </div>

              <div class="col-lg-7 wow" data-splitting data-aos="fade-up">
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
              <div class="col-12 wow" data-splitting data-aos="fade-up">
                <h3 class="section-title">
                  THE THINGS<br></br>
                  WE ARE ABLE TO DO
                </h3>
              </div>

              <div
                class="col-lg-3 col-md-4 wow"
                data-splitting
                data-aos="zoom-in"
              >
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

              <div
                class="col-lg-3 col-md-4 wow"
                data-splitting
                data-aos="zoom-in"
              >
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

              <div
                class="col-lg-3 col-md-4 wow"
                data-splitting
                data-aos="zoom-in"
              >
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

          <BasicSlider />
        </section>

        <section class="clients">
          <div class="container">
            <div class="row">
              {" "}
              <div class="col-lg-5 wow" data-splitting data-aos="zoom-in">
                <h3 class="section-title">
                  AGENSY PROUD<br></br>
                  IS QUALITY OF<br></br>
                  PARTNERS
                </h3>
              </div>
              <div class="col-lg-7">
                <ul>
                  <li class="reveal-effect masker wow" data-aos="fade-up">
                    {" "}
                    <img src="assets/images/logo01.png" alt="Image" />{" "}
                  </li>
                  <li class="reveal-effect masker wow" data-aos="fade-up">
                    {" "}
                    <img src="assets/images/logo02.png" alt="Image" />{" "}
                  </li>
                  <li class="reveal-effect masker wow" data-aos="fade-up">
                    {" "}
                    <img src="assets/images/logo03.png" alt="Image" />{" "}
                  </li>
                  <li class="reveal-effect masker wow" data-aos="fade-up">
                    {" "}
                    <img src="assets/images/logo04.png" alt="Image" />{" "}
                  </li>
                  <li class="reveal-effect masker wow" data-aos="fade-up">
                    {" "}
                    <img src="assets/images/logo05.png" alt="Image" />{" "}
                  </li>
                  <li class="reveal-effect masker wow" data-aos="fade-up">
                    {" "}
                    <img src="assets/images/logo06.png" alt="Image" />{" "}
                  </li>
                  <li class="reveal-effect masker wow" data-aos="fade-up">
                    {" "}
                    <img src="assets/images/logo07.png" alt="Image" />{" "}
                  </li>
                  <li class="reveal-effect masker wow" data-aos="fade-up">
                    {" "}
                    <img src="assets/images/logo08.png" alt="Image" />{" "}
                  </li>
                  <li class="reveal-effect masker wow" data-aos="fade-up">
                    {" "}
                    <img src="assets/images/logo09.png" alt="Image" />{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer class="bg-dark text-center text-white">
          <div class="container p-4 pb-0">
            <section class="mb-4">
              <h1>Need more information?</h1>
              <small>Get in Touch</small>
              <br></br>
              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i class="fab fa-facebook-f"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i class="fab fa-twitter"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i class="fab fa-google"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i class="fab fa-instagram"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>

              <a
                class="btn btn-outline-light btn-floating m-1"
                href="#!"
                role="button"
              >
                <i class="fab fa-github"></i>
              </a>
            </section>
          </div>

          <div class="text-center p-3" style={{ backgroundColor: "#262625" }}>
            <a class="text-white" href="/">
              Neon.com
            </a>
          </div>
        </footer>

        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/swiper.min.js"></script>
        <script src="assets/js/wow.min.js"></script>
        <script src="assets/js/splitting.min.js"></script>
        <script src="assets/js/odometer.min.js"></script>
        <script src="assets/js/fancybox.min.js"></script>
        <script src="assets/js/scripts.js"></script>
      </div>
    </>
  );
}

export default Home;
