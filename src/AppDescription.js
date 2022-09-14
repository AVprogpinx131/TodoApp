import React from "react";

function AppDescription() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[new Date().getDay()];

  return (
    <div>
      <h1>Plan your activities</h1>
      <p className="days">{`Write your todos for ${day}`}</p>
    </div>
  );
}

export default AppDescription;
