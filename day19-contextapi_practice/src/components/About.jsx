import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";

const About = () => {
  console.log("about rendering..");

  let data = useContext(MyStore);
  console.log(data)

  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;