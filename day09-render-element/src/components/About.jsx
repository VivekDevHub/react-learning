import React from "react";

const About = ({ setToggle }) => {
  return (
    <div>
      <h1>About</h1>
      <input type="text" placeholder="Something..." />
      <button onClick={() => setToggle((prev) => !prev)}>Go to Contact</button>
    </div>
  );
};

export default About;