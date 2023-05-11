import React from "react";
import HeroSlider, {Slide} from 'hero-slider';
const img1="assets/images/one.jpg";
const img2="assets/images/two.jpg";
const img3="assets/images/three.jpg";


const App=()=>{
return(
 <HeroSlider
 slidingAnimation="left_to_right"
 orientation="horizontal"
 initialSlide={1}
 onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange",previousSlide, nextSlide)}
 onChange={nextSlide => console.log("onChange",nextSlide)}
 onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
 style={{
  backgroundColor:"rgba(0,0,0,0.33"
 }}
 settings={{
  slidingDuration: 250,
  slidingDelay:100,
  shouldAutoplay: true,
  shouldDisplayButtons: true,
  autoplayDuration:5000,
  height: "100vh"
 }}

 >
  <Slide
  background={{
    backgroundImage: img1,
    backgroundAttachment: "fixed"
  }}
  
  
  />
    <Slide
  background={{
    backgroundImage: img2,
    backgroundAttachment: "fixed"
  }}
  
  
  />  <Slide
  background={{
    backgroundImage: img3,
    backgroundAttachment: "fixed"
  }}
  
  
  />  
 </HeroSlider>
)
}

  
  export default App;