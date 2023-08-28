"use strict";

window.addEventListener("load", start);

import { events } from "./data.js";

function start() {
  showEvents();
}

function showEvents() {
  events.sort((a, b) => {
    if (a.date < b.date) return -1;
    return 1;
  });
  const date = new Date();
  const currentDate = `${date.getFullYear()}-0${
    date.getMonth() + 1
  }-${date.getDate()}`;
  console.log(currentDate);
  for (const event of events) {
    if (event.date > currentDate) {
      document.querySelector("#events-list").insertAdjacentHTML(
        "beforeend",
        /* html */ `
        <li>${event.date} - ${event.title}: ${event.description}</li>
      `
      );
    }
  }
}
