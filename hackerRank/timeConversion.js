const timeConversion = (str) => {
  const sunPart = str.slice(-2);
  const timePart = str.slice(0, str.length - 2);

  let [hour, minute, second] = timePart.split(":").map(Number);

  if (sunPart === "AM" && hour === 12) hour = 0;

  if (sunPart === "PM" && hour != 12) hour = hour + 12;

  return `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
};

console.log(timeConversion("09:45:12PM"));
