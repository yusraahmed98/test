import React from "react";
class Careers extends React.Component {

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
        <header class="page-header" style={{}}>
        <div class="inner">
  	<div class="container">
  		<h1>CAREERS</h1>
  		<p>Send us your CV to be considered for future job opportunities</p>
  	</div>
  	
  </div>
  </header>
  <section class="contact" style={{left: '-90px', top: '80px'}}>
    <div class="container">
    	<div class="row">
    	<div class="col-lg-5">
    		
    	</div>
    	
    	<div class="col-lg-4 col-md-6">
    		
    	</div>
    	
    	<div class="col-lg-3 col-md-6">
    		
    	</div>
    	
    	<div class="col-lg-5">
    		 
    	
    	</div>
          	
    	<div class="col-lg-7">
    		<div class="contact-form">
			 <form id="contact" name="contact" method="post">
          <div class="form-group">
            <input type="text" name="name" id="name" autocomplete="off" required/>
             <span>Your name</span>
          </div>
         
          <div class="form-group"> 
            <input type="text" name="email" id="email" autocomplete="off" required/>
            <span>Your e-mail</span>
          </div>
          <div class="form-group"> 
            <input type="text" name="subject" id="phone" autocomplete="off" required/>
            <span>Phone Number</span>
          </div>
          
          <div class="form-group"> 
            <input type="text" name="subject" id="subject" autocomplete="off" required/>
            <span>Subject</span>
          </div>
          
          
          <div class="form-group"> 
            <textarea name="message" id="message" autocomplete="off"></textarea>
            <span>Cover Letter</span>
          </div>
          <div class="form-group"> 
           
          <input
          type="file"
          name="cv"
         
          
        />
            <span  style={{top: '-50px', left:'-20px'}}>Upload Your CV</span>
          </div>
          <div class="form-group">
            <button id="submit" type="submit" name="submit">
<strong>Submit Now<b></b> <i></i></strong>
         </button>
          </div>
      
        </form>
       
         <div class="form-group">
          <div id="success" class="alert alert-success" role="alert"> Your message was sent successfully! We will be in touch as soon as we can. </div>
   
        <div id="error" class="alert alert-danger" role="alert"> Something went wrong, try refreshing and submitting the form again. </div>
        
        </div>
        
        </div>
       
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
export default  Careers;

