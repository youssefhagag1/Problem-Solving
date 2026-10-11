function leaderboardSort(leaderboard, changes) {
  for (let i = 0; i < changes.length; i++) {
    const name = changes[i].split(" ")[0];
    let val = Number(changes[i].split(" ")[1]);
    let index = leaderboard.indexOf(name);
    while (val > 0 && index > 0) {
      [leaderboard[index], leaderboard[index - 1]] = [
        leaderboard[index - 1],
        leaderboard[index],
      ];
      val--;
      index--;
    }
    while (val < 0 && index < leaderboard.length - 1) {
      [leaderboard[index], leaderboard[index + 1]] = [
        leaderboard[index + 1],
        leaderboard[index],
      ];
      val++;
      index++;
    }
  }
  return leaderboard;
}

console.log(
  leaderboardSort(
    ["John", "Brian", "Jim", "Dave", "Fred"],
    ["Dave +1", "Fred +4", "Brian -1"],
  ),
  ["Fred", "John", "Dave", "Brian", "Jim"],
);
console.log(
  leaderboardSort(
    ["Bob", "Larry", "Kevin", "Jack", "Max"],
    ["Max +3", "Kevin -1", "Kevin +3"],
  ),
  ["Bob", "Kevin", "Max", "Larry", "Jack"],
);

const removeParentheses = s => {
    const stack = [];
    for(let i = 0 ; i <s.length ; i++){
        const current = s[i];
        if(current === ")"){
            while(stack.pop() !== "("){}
        }else{
            stack.push(current)
        }
    }
    return stack.join("")
}

console.log(
  removeParentheses("example(unwanted thing)example")
); // "exampleexample"

console.log(
  removeParentheses("example (unwanted thing) example")
); // "example  example"

console.log(
  removeParentheses("a (bc d)e")
); // "a e"

console.log(
  removeParentheses("a(b(c))")
); // "a"

console.log(
  removeParentheses("hello example (words(more words) here) something")
); // "hello example  something"

console.log(
  removeParentheses("(first group) (second group) (third group)")
); // "  "
f=w=>[1, 2, 3, 4].map(x=>([...w].reduce((a,c)=>a+c.charCodeAt(),0)*x)%256);

