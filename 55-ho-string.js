// Ho string - recursive function that builds "Ho Ho Ho!" string
function ho() {
  return ho.arguments[0]
    ? [].concat("Ho", ho.arguments[0]).join(" ")
    : "Ho!";
}

console.log(ho(ho(ho())));