import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Courses from "./components/Courses/Courses.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Stats from "./components/Stats/Stats.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black abcd">
        <Navbar />
        <Hero />
        <Categories />
        <Courses />
        {/* <Banner /> */}
        <Stats />
        <Footer />
      </div>
    </>
  );
}

export default App;
