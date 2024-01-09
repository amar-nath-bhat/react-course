import React from "react";
import "./courses.css";
import CoursesCard from "../CoursesCard/CoursesCard";
function Courses() {
  const items = [
    {
      tag: "Engineering",
      img: "src/assets/art.png",
      author: "Ashok Sharma",
      coursename: "Computer Science Engineering",
      duration: "3 Months",
      students: "150",
      iprice: "$59.99",
      fprice: "$49.99",
    },
    {
      tag: "Data Science",
      img: "src/assets/art.png",
      author: "Vishal Singh",
      coursename: "Data Science - Crash Course",
      duration: "20 Hours",
      students: "190",
      iprice: "$39.99",
      fprice: "$29.99",
    },
    {
      tag: "Development",
      img: "src/assets/art.png",
      author: "Vidya D.",
      coursename: "Introduction to Web Development",
      duration: "1 Month",
      students: "120",
      iprice: "$20.00",
      fprice: "$15.99",
    },
  ];
  return (
    <div className="d-flex flex-column gap-3">
      <div className="row text-light">
        <div className="header">
          <div className="d-flex gap-5">
            <h2 className="text-primary">Featured Courses</h2>
            <button
              href="/"
              className="coursesbtn btn btn-outline-warning d-none d-md-block"
            >
              All Courses
            </button>
          </div>
          <h6>Explore our popular courses</h6>
          <button
            href="/"
            className="coursesbtn btn btn-outline-warning d-block d-md-none"
          >
            All Courses
          </button>
        </div>
      </div>

      <div className="course-section row justify-content-between gap-3 ">
        {items.map((item) => (
          <CoursesCard
            tag={item.tag}
            img={item.img}
            author={item.author}
            coursename={item.coursename}
            duration={item.duration}
            students={item.students}
            iprice={item.iprice}
            fprice={item.fprice}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
