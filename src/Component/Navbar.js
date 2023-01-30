import React, { useState } from "react";
import About from "./About";
import { useRef } from "react";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";
import Teckstack from "./Teckstack";
import { Skills } from "./Skills";
// import Scroll from "./Scroll";
import { createContext } from "react";
export const globalinfo = createContext();
const Navbar = () => {
  const refabout = useRef(null);
  const refcon = useRef(null);
  const ref1 = useRef(null);
  const refproject = useRef(null);

  const refteckstack = useRef(null);
  const refskills = useRef(null);
  const handlehome = () => {
    ref1.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleabout = () => {
    refabout.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleproject = () => {
    refproject.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handle1 = () => {
    refcon.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleteckstack = () => {
    refteckstack.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleskills = () => {
    refskills.current?.scrollIntoView({ behavior: "smooth" });
  };

  const resume = () => {};
  const darkmode = () => {};

  // js of scroll

// const [col,setcol] = useState('blue')
const bb ='18px dashed green'
  return (
    <div>
      <div id="navbar">
        <h1 className="h1">G <span className="gaurav">AURAV</span> P  <span className="patil"> ATIL </span></h1>
        <div className="flex">
          <a onClick={handlehome}>HOME</a>
        </div>
        <div className="flex1">
          <a onClick={handleabout}>ABOUT</a>
        </div>

        <div className="flex2">
          <a onClick={handle1}>CONTACT</a>
        </div>

        <div className="flexproject">
          <a onClick={handleproject}> PROJECT </a>
        </div>

        <div className="flexteckstack">
          <a onClick={handleteckstack}>TECKSTACK</a>
        </div>
        <div className="flexskills">
          <a onClick={handleskills}>SKILLS</a>
        </div>

        <div className="flexresume">
          <a onClick={resume}>RESUME</a>
        </div>
        <div className="flexdarkmode">
          <a onClick={darkmode}><i class="fa-solid fa-moon"></i>D</a>
        </div>
        {/* header content end here .. */}
        {/* <div>Home Content ...</div> */}
      </div>
      {/* Home  */}
      <div style={{ height: "1rem" }} />

      <div ref={ref1} className="scrollhome">
    
        <Home />
      </div>

      <div style={{ height: "2rem" }} />

      {/* About ... */}
      <div style={{ height: "100rem" }} />
      {/* height : 100rem */}
      <div ref={refabout} className="scrollabout">
        <About />
      </div>

      <div style={{ height: "2rem" }} />
      {/* Contact */}
      <div style={{ height: "200rem" }} />
      <div ref={refcon}>
        <Contact />
      </div>
      <div style={{ height: "28rem" }} />

      {/* Project */}
      <div style={{ height: "100rem" }} />
      <div ref={refproject} className="scrollProject">
        <Project />
      </div>
      <div style={{ height: "33rem" }} />
      {/* Teckstack */}

      <div style={{ height: "100rem" }} />
      <div ref={refteckstack} className="scrollProject">
        <Teckstack />
      </div>
      <div style={{ height: "33rem" }} />
      {/* skills */}
      <div style={{ height: "100rem" }} />
      <div ref={refskills} className="scrollProject">
      <globalinfo.Provider value = {{skillcolor:bb}}>
        <Skills />
        </globalinfo.Provider>
       
      </div>
      <div style={{ height: "33rem" }} />

      {/* <Scroll /> */}
    </div>
  );
};

export default Navbar;
