import React from "react";
class Blog extends React.Component {
  render() {
    return (
      <>
      <nav class="navbar bg-dark" data-bs-theme="dark" style={{backgroundcolor: 'white'}} >
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
                <a class="nav-link active" aria-current="page" href="#" style={{color: 'white'}} >
                  Home
                </a>
                <a class="nav-link" href="#" style={{color: 'white'}}>
                  Portfolio
                </a>
                <a class="nav-link" href="#" style={{color: 'white'}}>
                  Services
                </a>
                <a class="nav-link" href="#" style={{color: 'white'}}>
                  Our People
                </a>
                <a class="nav-link" href="#" style={{color: 'white'}}>
                  Careers
                </a>
                <a class="nav-link" href="#" style={{color: 'white'}}>
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </nav>
</nav>
        {/* END NAVBAR */}

        <header class="page-header">
          <div class="inner">
            <div class="container">
              <h1>BLOG</h1>
              <p>
                We provide a free day to experience our benefits of digital
                world
              </p>
            </div>
          </div>





        </header>
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
export default Blog;
