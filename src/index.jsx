import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const solve = (requirement, sizes) => {
//   const maxUmbrella = Math.max(...sizes);
//   const reminant = requirement % maxUmbrella;
//   const people = Math.floor(requirement / maxUmbrella);

//   if (reminant >= 1 && sizes.length === 1) {
//     return -1;
//   } else {
//     const remainingUmbrellas = sizes.filter(
//       (umbrella) => umbrella !== maxUmbrella
//     );
//     return reminant !== 0
//       ? solve(reminant, remainingUmbrellas) + people
//       : people;
//   }
// };

// console.log(solve(4, [2, 4]));

// function solve(requirement, sizes) {
//   if (sizes.length == 1) {
//     return requirement % sizes[0] == 0 ? parseInt(requirement / sizes[0]) : -1;
//   }

//   var max = Math.max(...sizes);
//   var quotient = parseInt(requirement / max);
//   var remainingPersons = requirement % max;

//   if (remainingPersons == 0) {
//     return quotient;
//   } else {
//     var remainingUmbrellas = sizes.filter(function (o) {
//       return o != max;
//     });
//     var value = solve(remainingPersons, remainingUmbrellas);

//     return value != -1 ? quotient + value : value;
//   }
// }
