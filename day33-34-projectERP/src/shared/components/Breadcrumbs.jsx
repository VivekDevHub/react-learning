import React from "react";
import { Link, useLocation } from "react-router";

const Breadcrumbs = () => {
  let { pathname } = useLocation();

  let pathNames = pathname.split("/").filter((elem) => elem);

  return (
    <div className="flex gap-3">
      {pathNames.map((elem) => {
        return (
          <Link className="text-blue-600" to={`/${elem}`}>
            {elem.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
