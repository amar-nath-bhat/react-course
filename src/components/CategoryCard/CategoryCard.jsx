import React from "react";
import "./categorycard.css";
function CategoryCard(props) {
  const icons = props.icons;
  return (
    <div
      className="card m-3 p-5 bg-dark text-white border border-warning rounded-4 align-content-center text-center"
      href="/"
    >
      <div className="card-body">
        <div className="icons mb-3">
          <i className={icons} id="icons"></i>
        </div>
        <h4 className="card-title">{props.heading}</h4>
        <h5 className="card-subtitle mb-2 text-light">{props.courses}</h5>
      </div>
    </div>
  );
}

export default CategoryCard;
