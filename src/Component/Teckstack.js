import React from "react";

const Teckstack = () => {
  return (
    <div className="teckstack">
      {/* Teckstack */}
      {/* html */}
      <div id="htmljpgdiv">
        <span id="spanhtml"> HTML</span>
      </div>
      <img id="htmljpg" src={require("./newhtml.png")}></img>
      {/* css */}
      <div id="cssjpgdiv">
        <span id="spancss"> CSS</span>
      </div>
      <img id="cssjpg" src={require("./newcss.png")}></img>
      {/* java stript */}
      <div id="jsjpgdiv">
        <span id="spanjs"> JAVA SCRIPT</span>
      </div>
      <img id="jsjpg" src={require("./javascript.jpg")}></img>
      {/* bootstrap */}
      <div id="btjpgdiv">
        <span id="spanbt"> BOOTSTRAP</span>
      </div>
      <img id="btjpg" src={require("./b.jpeg")}></img>
      {/*  react*/}
      <div id="rtjpgdiv">
        <span id="spanrt"> REACT JS </span>
      </div>
      <img id="rtjpg" src={require("./react.jpg")}></img>
{/* node */}
<div id="nojpgdiv">
        <span id="spanno"> NODE JS</span>
      </div>
      <img id="nojpg" src={require("./node.png")}></img>
      {/* express */}
      <div id="exjpgdiv">
        <span id="spanex"> EXPRESS JS</span>
      </div>
      <img id="exjpg" src={require("./ex.png")}></img>
      {/* redux */}
            <div id="redjpgdiv">
        <span id="spanred"> MONGODB</span>
      </div>
      <img id="redjpg" src={require("./mongodb.jpeg")}></img>
      {/* redux */}
      <div id="reduxjpgdiv">
        <span id="spanredux"> REDUX</span>
      </div>
      <img id="reduxjpg" src={require("./redux.jpg")}></img>
      {/*  */}
    </div>
   
  );
};

export default Teckstack;
