import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard.jsx";
import "./categories.css";
function Categories() {
  const items = [
    {
      heading: "Art & Design",
      courses: "30 Courses",
      icons: "bi bi-palette-fill",
    },
    {
      heading: "Development",
      courses: "40 Courses",
      icons: "bi bi-code",
    },
    {
      heading: "Communication",
      courses: "35 Courses",
      icons: "bi bi-broadcast",
    },
    {
      heading: "Science",
      courses: "32 Courses",
      icons: "bi bi-mortarboard-fill",
    },
    {
      heading: "Languages",
      courses: "23 Courses",
      icons: "bi bi-translate",
    },
    {
      heading: "Business",
      courses: "18 Courses",
      icons: "bi bi-briefcase-fill",
    },
    {
      heading: "Network",
      courses: "12 Courses",
      icons: "bi bi-wifi",
    },
    {
      heading: "Finance",
      courses: "18 Courses",
      icons: "bi bi-cash-stack",
    },
    {
      heading: "Commerce",
      courses: "11 Courses",
      icons: "bi bi-bag-check-fill",
    },
    {
      heading: "Marketing",
      courses: "15 Courses",
      icons: "bi bi-graph-up-arrow",
    },
  ];
  return (
    <div>
      <div className="row text-light">
        <div className="header">
          <h2 className="text-primary">All Categories</h2>
          <h6>Explore our popular categories</h6>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {items.map((item) => (
          <CategoryCard
            heading={item.heading}
            courses={item.courses}
            icons={item.icons}
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
