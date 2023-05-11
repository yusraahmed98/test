import { colors } from "@material-ui/core";
import React from "react";
class Portfolio extends React.Component {
  render() {
    return (
      <>
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
                  <a class="nav-link" href="#" style={{ color: "white" }}>
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
export default Portfolio;
