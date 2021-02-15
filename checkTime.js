export const checkTime = (time) =>
  time > 12 ? (time = time - 12) : time === 0 ? (time = 12) : time;
