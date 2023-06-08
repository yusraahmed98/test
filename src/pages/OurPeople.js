import { colors } from "@material-ui/core";
import React from "react";
import AOS from 'aos'



class OurPeople extends React.Component {
  render() {
    return (
      <>
        <nav style={{backgroundColor:'#222327'}} >
          <nav class="navbar navbar-expand-lg bg-body-tertiary"  style={{ left:'55%' }}>
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
                  <a class="nav-link" href="/ourpeople" style={{ color: "white" }}>
                    Our People
                  </a>
                  <a class="nav-link" href="/careers" style={{ color: "white" }}>
                    Careers
                  </a>
                  <a class="nav-link" href="/contactUs" style={{ color: "white" }}>
                    Contact us
                  </a>
                  <a class="nav-link" href="/AboutUs" style={{ color: "white" }}>
                    About us
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </nav>
        <section class="works">
          <ul>
            <li>
              <figure class="reveal-effect masker wow">
                {" "}
                <a href="images/works01.jpg" data-fancybox>
                  <img src="assets/images/works01.jpg" alt="Image" />
                </a>{" "}
              </figure>
              <div class="caption wow" data-splitting>
                <h3>Darkness Vehicle</h3>
                <small>DIGITAL, PRINT, DEVELOPMENT</small>{" "}
              </div>
            </li>
            <li>
              <figure class="reveal-effect masker wow">
                {" "}
                <a href="images/works02.jpg" data-fancybox>
                  <img src="assets/images/works02.jpg" alt="Image" />
                </a>{" "}
              </figure>
              <div class="caption wow" data-splitting>
                <h3>Goddes Cover Art</h3>
                <small>PRINT, DIGITAL, DEVELOPMENT</small>
              </div>
            </li>
            <li>
              <figure class="reveal-effect masker wow">
                {" "}
                <a href="images/works03.jpg" data-fancybox>
                  <img src="assets/images/works03.jpg" alt="Image" />
                </a>{" "}
              </figure>
              <div class="caption wow" data-splitting>
                <h3>Hard Employee</h3>
                <small>WEB, DIGITAL, DEVELOPMENT</small>{" "}
              </div>
            </li>
            <li>
              <figure class="reveal-effect masker wow">
                {" "}
                <a href="images/works04.jpg" data-fancybox>
                  <img src="assets/images/works04.jpg" alt="Image" />
                </a>{" "}
              </figure>
              <div class="caption wow" data-splitting>
                <h3>Sweet Berry Pie</h3>
                <small>DIGITAL, PRINT, DEVELOPMENT</small>{" "}
              </div>
            </li>
            <li>
              <figure class="reveal-effect masker wow">
                {" "}
                <a href="images/works05.jpg" data-fancybox>
                  <img src="assets/images/works05.jpg" alt="Image" />
                </a>{" "}
              </figure>
              <div class="caption wow" data-splitting>
                <h3>King of Roosters</h3>
                <small>PRINT, DIGITAL, DEVELOPMENT</small>{" "}
              </div>
            </li>
            <li>
              <figure class="reveal-effect masker wow">
                {" "}
                <a href="images/works06.jpg" data-fancybox>
                  <img src="assets/images/works06.jpg" alt="Image" />{" "}
                </a>
              </figure>
              <div class="caption wow" data-splitting>
                <h3>Primero Car</h3>
                <small>WEB, DIGITAL, DEVELOPMENT</small>{" "}
              </div>
            </li>
          </ul>
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
      </>
    );
  }
}
export default OurPeople;
