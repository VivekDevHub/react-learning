import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const About = () => {
  let data = useContext(MyStore);
  console.log(data);

  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;