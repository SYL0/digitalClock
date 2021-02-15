import { convertFormat } from "./convertFormat.js";
import { checkTime } from "./checkTime.js";
import { addZero } from "./addZero.js";

export const showTime = () => {
  let date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let formatHours = convertFormat(hours);

  hours = checkTime(hours);

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  document.getElementById(
    "clock"
  ).innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`;
};
