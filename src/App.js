import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Meals from "./components/Meals";

const App = () =>  {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
      <Meals />
    </div>
  );
}

export default App;
