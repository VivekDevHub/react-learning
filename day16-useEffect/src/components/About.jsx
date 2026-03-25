import React, { useEffect, useState } from "react";

const About = () => {
  console.log("About rendering...");

  const [toggle, setToggle] = useState(true);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
      console.log("hello");
    }, 1000);

    return () => {
      console.log("me jaa raha");
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default About;