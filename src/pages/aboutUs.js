import { colors } from "@material-ui/core";
import React from "react";
import AOS from 'aos'



class AboutUs extends React.Component {
  render() {
    return (
      <>
        <nav style={{backgroundColor:'#222327'}} >
          <nav class="navbar navbar-expand-lg bg-body-tertiary"  style={{ left:'55%'}}>
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
export default AboutUs;
