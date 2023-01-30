import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1 id="whoiam">
        {" "}
        <span id="who">Who </span> I am
      </h1>
      <hr id="hr"></hr>
      <img id="aboutimg" src={require("./About1.jpg")} />
      <p id="p1">
        My name's Gaurav Patil and i enjoy creating things that live on the{" "}
        <br /> internet.
      </p>
      <p id="p2">
        I'm a Full-Stack Web Developer with the ability to learn and <br />
        collaborate in rapidly changing environments and compositions.
        <br />
        Worked through 1000+ hours of Bootcamp structure learning <br />
        JavaScript, Node.Js, React.Js, MongoDB, Express, HTML5, and CSS3. <br />{" "}
        <br></br>I am passionate about solving technical problems, researching
        and  <br/>
        developing new sites and technologies. I undertake and challenge <br></br>
        myself to always improve, by being proactive, diligent, responsible, <br></br> 
        and committed to finding the perfect solution to any problem.
      </p>
    </div>
  );
};

export default About;
