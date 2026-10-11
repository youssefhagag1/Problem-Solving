function presentationAgenda(friendList) {
  const result = []
  const counts = {};
  for (let i = 0; i < friendList.length; i++) {
    let current = friendList[i].dest;
    for (let j = 0; j < current.length; j++) {
      if (counts[current[j]]) {
        counts[current[j]]++;
      } else {
        counts[current[j]] = 1;
      }
    }
  }
  for (let i = 0; i < friendList.length; i++) {
    let current = friendList[i].dest;
    let needed = [];
    for (let j = 0; j < current.length; j++) {
      if(counts[current[j]] === 1){
        needed.push(current[j]);
      }
    }
    if(needed.length){
      result.push({ ...friendList[i] , dest : needed});
    }
  }

  return result

}

var friend1 = { person: "Abe", dest: ["London", "Dubai"] };
var friend2 = { person: "Bond", dest: ["Melbourne", "Dubai"] };
var friend3 = { person: "Carrie", dest: ["Melbourne"] };
var friend4 = { person: "Damu", dest: ["Melbourne", "Dubai", "Paris"] };

var agenda = presentationAgenda([friend1, friend2, friend3, friend4]);

console.log(agenda);

