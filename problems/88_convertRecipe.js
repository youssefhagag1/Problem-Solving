function convertRecipe(recipe) {
 return recipe.replace(/(\d+\/*\d*\s(tbsp|tsp))/g, (q) => {
    let value = null;
    if (q.includes("/")) {
      const matcher = q.match(/\d+\/*\d*/);
      value = matcher[0].split("/")[0] / matcher[0].split("/")[1];
    }else{
      value = parseFloat(q)
    }
    if (q.includes("tbsp")) {
      console.log(q)
      return `${q} (${Math.ceil(value * 15)}g)`
    }
    return `${q} (${Math.ceil(value * 5)}g)`
  });
}

console.log(
  convertRecipe(
    "Add to the mixing bowl and coat well with 1 tbsp of olive oil & 1/2 tbsp of dried dill",
  ),
);

var uniqueInOrder = iterable => [...iterable].filter((e , i) => e !== iterable[i+1])
console.log(uniqueInOrder([1, 2, 2, 3, 3]));

