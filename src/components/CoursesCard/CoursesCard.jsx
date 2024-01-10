import React from "react";
import "./coursescard.css";
function CoursesCard(props) {
  return (
    <div className="coursecard p-0 card bg-black text-white border border-warning rounded-4 align-content-center text-center position-relative">
      <div className="cardbtn btn btn-light position-absolute m-3">
        {props.tag}
      </div>
      <img src={props.img} className="w-100 h-100" />
      <div className="card-body">
        <h6 className="text-start">by {props.author}</h6>

        <h3>{props.coursename}</h3>

        <div className="cardbase d-flex justify-content-around">
          <div className="clock d-flex gap-2">
            <i className="bi bi-clock-fill"></i>
            <span>{props.duration}</span>
          </div>
          <div className="students d-flex gap-2">
            <i className="bi bi-people-fill"></i>
            <span>{props.students} Students</span>
          </div>
        </div>
        <hr className="text-warning" />
        <div className="d-flex justify-content-evenly ">
          <div>
            <s className="me-2">{props.iprice}</s>
            <span className="text-success fw-bolder me-3">{props.fprice}</span>
          </div>
          <a className="text-end" href="/loginpage">
            View More
          </a>
        </div>
      </div>
    </div>
  );
}

export default CoursesCard;
