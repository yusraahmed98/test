import React from "react";
import axios from 'axios';
class ContactUs extends React.Component {
state={
    name:'',
    email:'',
    phone:'',
    subject:'',
    companyName:'',
    message:''

}
   
  handleSubmit=event=>{
    event.preventDefault();
    const user ={
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        subject: this.state.subject,
        companyName: this.state.companyName,
        message: this.state.message
    }
    axios.post("https://neon-9o9l.onrender.com/contactUs/add",{user})
    .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleChangename= event =>{
    this.setState({name: event.target.value});
  };
  handleChangeemail= event =>{
    this.setState({email: event.target.value});
  };
  handleChangephone= event =>{
    this.setState({phone: event.target.value});
  };
  handleChangesubject= event =>{
    this.setState({subject: event.target.value});
  };
  handleChangeCN= event =>{
    this.setState({companyName: event.target.value});
  };
  handleChangemessage= event =>{
    this.setState({message: event.target.value});
  };

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
        <header class="page-header">
        <div class="inner">
  	<div class="container">
  		<h1>CONTACT US</h1>
  		<p>We provide a free day to experience our benefits of digital world</p>
  	</div>
  	
  </div>
  </header>
  <section class="contact">
    <div class="container">
    	<div class="row">
    	<div class="col-lg-5">
    		<h3 class="section-title">SAY HELLO <br></br>TO REACH US</h3>
    	</div>
    	
    	<div class="col-lg-4 col-md-6">
    		<h6>HEAD OFFICE</h6>
    		<address>
    			Boryssa Himry 124 B Block Pozniaky<br></br>
Kiev - UKRAINE
    		</address>
    	</div>
    	
    	<div class="col-lg-3 col-md-6">
    		<h6>REACH US</h6>
    		<address>
    			<p>+38 02 237 24 21</p>
    			<a href="#">hello@tourog.com.ua</a>
    		</address>
    	</div>
    	
    	<div class="col-lg-5">
    		 <div class="map">
    			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325518.68780316407!2d30.252511957059642!3d50.4016990487754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf4ee15a4505%3A0x764931d2170146fe!2z0JrQuNGX0LIsINCj0LrRgNCw0ZfQvdCwLCAwMjAwMA!5e0!3m2!1suk!2str!4v1555663203384!5m2!1suk!2str"></iframe>
    		</div>
    	
    	</div>
    	
    	<div class="col-lg-7">
    		<div class="contact-form">
			 <form id="contact" name="contact" method="post">
          <div class="form-group">
            <input type="text" name="name" id="name" autocomplete="off" required onChange={this.handleChangename}/>
             <span>Name</span>
          </div>
         
          <div class="form-group"> 
            <input type="text" name="email" id="email" autocomplete="off" required onChange={this.handleChangeemail}/>
            <span>E-mail</span>
          </div>
          <div class="form-group"> 
            <input type="text" name="subject" id="phone" autocomplete="off" required onChange={this.handleChangephone}/>
            <span>Phone Number</span>
          </div>
          
          <div class="form-group"> 
            <input type="text" name="subject" id="subject" autocomplete="off" required onChange={this.handleChangesubject}/>
            <span>Subject</span>
          </div>
          
          <div class="form-group"> 
            <input type="text" id="companyName" autocomplete="off" onChange={this.handleChangeCN}></input>
            <span>Company Name</span>
          </div>
          <div class="form-group"> 
            <textarea name="message" id="message" autocomplete="off" required onChange={this.handleChangemessage}></textarea>
            <span>Message</span>
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
export default  ContactUs;
