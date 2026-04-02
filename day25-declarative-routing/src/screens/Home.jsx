import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  let data = [
    {
      name: "poppy",
    },
    {
      name: "Rahul",
    },
    {
      name: "Sumit",
    },
  ];

  return (
    <div className="flex gap-10 text-xl">
      {data.map((elem, index) => (
        <h1 key={index} onClick={() => navigate(`/names/${elem.name}`)}>
          {elem.name}
        </h1>
      ))}
    </div>
  );
};

export default Home;
