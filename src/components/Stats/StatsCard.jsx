import React from "react";

function StatsCard(props) {
  return (
    <div className="card rounded-4 p-5">
      <div className="card-body text-primary fw-bold d-flex flex-column gap-2 justify-content-center align-items-center text-center">
        <h1>{props.stat}</h1>
        <h4 className="text-dark">{props.description}</h4>
      </div>
    </div>
  );
}

export default StatsCard;
