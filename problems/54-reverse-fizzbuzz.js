// Reverse FizzBuzz - find the Fizz and Buzz positions from the pattern
function reverseFizzBuzz(array = []) {
  let fizz = array.indexOf("Fizz");
  let buzz = array.indexOf("Buzz");
  let fizz_buzz = array.indexOf("FizzBuzz");
  if (fizz === -1 || fizz > fizz_buzz) fizz = fizz_buzz;
  if (buzz === -1 || buzz > fizz_buzz) buzz = fizz_buzz;

  return [fizz + 1, buzz + 1];
}

console.log(
  reverseFizzBuzz([
    "Fizz",
    "Fizz",
    "Fizz",
    "Fizz",
    "Fizz",
    "FizzBuzz",
  ])
);