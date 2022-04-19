import React from "react";
import ReactDOM from "react-dom";

function App() {
  const date = new Date();
  const hours = date.getHours() % 12;
  let timeOfDay;

  if (hours < 11) {
    timeOfDay = "morning";
  } else if (hours >= 11 && hours < 13) {
    timeOfDay = "noon";
  } else if (hours >= 13 && hours < 17) {
    timeOfDay = "afternoon";
  } else if (hours >= 17 && hours < 21) {
    timeOfDay = "evening";
  } else {
    timeOfDay = "night";
  }

  return <h1>Good {timeOfDay}!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
