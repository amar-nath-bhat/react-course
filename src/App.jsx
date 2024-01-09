import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Courses from "./components/Courses/Courses.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black">
        <Navbar />
        <Hero />
        <Categories />
        <Courses />
      </div>
    </>
  );
}

export default App;
