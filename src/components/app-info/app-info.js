import React from "react";
import "./app-info.css";

const AppInfo = ({ allMovies, favouriteMovieCount }) => {
  return (
    <div className="app-info">
      <p className="fs-3 text-uppercse">barcha kinolar soni: {allMovies}</p>
      <p className="fs-3 text-uppercse">sevimli film: {favouriteMovieCount}</p>
    </div>
  );
};

export default AppInfo;
