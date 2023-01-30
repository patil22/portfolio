import React from "react";

const Home = () => {
  // let imgStyle = {
  //   width: "468px",
  //   margin: "10px auto",
  //   position: "absolute",
  //   top: "10px",
  //   left: "100px",
  //   border: "2px solid red",
  // };
  return (
    <div id="ho">
      {/* <h6>aaa</h6> */}
      <h1 className="home1">Hi ,I am </h1>
      <br />
      <br />
      <h1 className="home2" >GAURAV PATIL</h1>   {/* className="home" */}
     <h1 className="full">Full Stack Web Developer  </h1>
     <button id="btn">RESUME</button>
      <img  id = "img"  src={require('./gaurav.jpg')}  /> 

      {/* style={imgStyle} */}
    </div>
  );
};

export default Home;
