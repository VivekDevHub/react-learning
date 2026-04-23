import React from "react";

const Logo = ({ color = "white", className = "" }) => {
  const resolvedColor = color === "green" ? "#1DB954" : "#FFFFFF";

  return (
    <svg
      role="img"
      aria-label="Spotify"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Spotify</title>
      <path
        fill={resolvedColor}
        d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm5.504 17.307a.746.746 0 0 1-1.026.247c-2.81-1.716-6.342-2.106-10.497-1.16a.745.745 0 1 1-.33-1.453c4.548-1.037 8.453-.592 11.607 1.333a.746.746 0 0 1 .246 1.033zm1.465-3.258a.934.934 0 0 1-1.285.31c-3.216-1.977-8.122-2.55-11.925-1.396a.934.934 0 0 1-.542-1.786c4.345-1.316 9.75-.678 13.446 1.595a.934.934 0 0 1 .306 1.277zm.126-3.392c-3.856-2.291-10.221-2.503-13.903-1.287a1.119 1.119 0 1 1-.702-2.125c4.225-1.399 11.25-1.129 15.747 1.54a1.119 1.119 0 0 1-1.142 1.872z"
      />
    </svg>
  );
};

export default Logo;
