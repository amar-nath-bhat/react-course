import React from "react";
import "./banner.css";
function Banner() {
  return (
    <>
      <div className="container">
        <img
          src="src/assets/banner.png"
          alt="Banner"
          className="img"
          id="bannerimg"
        />
        <div className="overlay">
          <img
            src="src/assets/student.png"
            alt="Student"
            className=""
            id="student"
          />
          <p className="fw-bolder display-3 text-black ">Begin Your Reign</p>
          <div className="btns ">
            <a className="btn btn-primary rounded-4 fs-3 " href="/">
              I'm a Student
            </a>
            <a className="btn btn-primary rounded-4 fs-3 " href="/">
              I'm an Instructor
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
