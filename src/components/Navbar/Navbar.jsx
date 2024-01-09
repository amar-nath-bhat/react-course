import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark navbar-expand-lg bg-black border-bottom border-body fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand mx-3" href="/">
            <img
              src="src/assets/reign_resized.png"
              alt="Reign"
              id="reignlogo"
            />
          </a>

          <button
            className="navbar-toggler align-items-center justify-content-center me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse container-fluid bg-black"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end">
              <li className="nav-item mx-md-2 mb-2 mb-md-0">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item mx-md-2 mb-2 mb-md-0">
                <a className="nav-link" href="/">
                  Courses
                </a>
              </li>

              <li className="nav-item mx-md-2 mb-3 mb-md-0">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search for Courses, Instructors...."
                    aria-label="Search"
                  />
                  <button
                    className="btn btn-outline-primary text-light mx-1"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </li>
              <li className="nav-item mx-md-5 mb-2 mb-md-0">
                <a className="btn btn-outline-primary text-light" href="/">
                  Login/Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
