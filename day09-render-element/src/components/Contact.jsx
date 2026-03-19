
import React from "react";

const Contact = ({ setToggle }) => {
  return (
    <div>
      <h1>Contact</h1>
      <input type="text" placeholder="Contact something.." />
      <button onClick={() => setToggle((prev) => !prev)}>Go to About</button>
    </div>
  );
};

export default Contact;
