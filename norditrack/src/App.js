// App.js
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PopularExercises from "./components/PopularExercises";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <HeroSection />
        <PopularExercises />
      </main>
      <Footer />
    </div>
  );
}

export default App;
