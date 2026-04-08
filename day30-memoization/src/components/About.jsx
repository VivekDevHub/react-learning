import React from "react";

const About = ({ greet }) => {
  console.log("About rendering...");

  return (
    <div>
      <h1>About - </h1>
    </div>
  );
};

export default React.memo(About);