// components/PopularExercises.js
import React from "react";
import cyclingImage from "../images/Cycling_event1_700_opt.jpg";
import teamImage from "../images/TeamImages.jpg";
import trackFinderImage from "../images/TrackFinder.jpg";
import challengeImage from "../images/Challenge.jpg";
import liftingImage from "../images/Weights-banner.webp";
import pushupImage from "../images/pushup.jpg";
import "../styles/PopularExercises.css"
function PopularExercises() {
  return (
    <div className="popular-exercises">
      <h2>Popular Exercises</h2>
      <div className="exercise-cards">
        <div className="card" id="evnts">
          <img src={cyclingImage} alt="Exercise 1" />
          <a href="#">Events</a>
        </div>
        <div className="card">
          <img src={teamImage} alt="Exercise 2" />
          <a href="#">Create Teams</a>
        </div>
        <div className="card" id="ft">
          <img src={trackFinderImage} alt="Exercise 3" />
          <a href="#">Find Track</a>
        </div>
        <div className="card">
          <img src={challengeImage} alt="Exercise 4" />
          <a href="#">Challenges</a>
        </div>
        <div className="card">
          <img src={liftingImage} alt="Exercise 5" />
          <a href="#">Lifting</a>
        </div>
        <div className="card">
          <img src={pushupImage} alt="Exercise 6" />
          <a href="#">PushUp</a>
        </div>
      </div>
    </div>
  );
}

export default PopularExercises;
