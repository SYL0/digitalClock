export const convertFormat = (time) => {
  let format = "AM";

  if (time >= 12) {
    format = "PM";
  }
  return format;
};
