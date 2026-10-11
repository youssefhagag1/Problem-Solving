function timeConversion(s) {
  const unit = s.slice(-2);
  let time = s.slice(0, -2);
  if (unit === "AM" && time.slice(0, 2) === "12") {
    time = "00" + time.slice(2);
  } else if (unit === "PM" && time.slice(0, 2) !== "12") {
    time = +time.slice(0, 2) + 12 + time.slice(2);
  }

  return time;
}

console.log(timeConversion("06:40:03AM"));

