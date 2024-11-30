import React from "react";
import "./app-filter.css";

const AppFilter = ({ updateFilterHandler, filter }) => {
  return (
    <div className="btn-group">
      {btnArr.map((item) => (
        <button
          key={item.name}
          className={`btn ${
            filter === item.name ? "btn-dark" : "btn-outline-dark"
          }`}
          type="button"
          onClick={() => updateFilterHandler(item.name)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};
const btnArr = [
  { name: "all", label: "Barcha Kinolar" },
  { name: "popular", label: "Mashhur Kinolar" },
  { name: "mostViewers", label: "Eng Ko'p Ko'rilgan Kinolar" },
];

export default AppFilter;
