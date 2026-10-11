// function shiftedDiff(first, second) {
//   if (first === second) return 0;
//   const firstArr = [...first];
//   for (let i = 0; i < firstArr.length; i++) {
//     firstArr.unshift(firstArr.pop());
//     console.log(firstArr)
//     if (firstArr.join("") === second) return i + 1;
//   }
//   return -1;
// }
// console.log(shiftedDiff("eecoff", "coffee"));

// function solveSimultaneous(arr) {
//   const [fun1, fun2] = [arr[0], arr[1]];
//   const [coffX1, coffX2] = [fun1[0], fun2[0]];
//   for (let i = 0; i < 3; i++) {
//     fun1[i] *= coffX2;
//     fun2[i] *= coffX1;
//   }
//   const y = (fun1[2] - fun2[2]) / (fun1[1] - fun2[1]);
//   const x = (fun1[2] - fun1[1] * y) / fun1[0];
//   return [x, y];
// }
// sc = (o) => {
//   for(let i in o){
//     for(let e in o[i]){
//       if(o[i][e] ==="B") return [i , e]
//     }
//   }
// }

// console.log(
//   sc(
//     [["A", "A", "A", "A", "A"],
//     ["A", "A", "A", "A", "A"],
//     ["A", "A", "A", "A", "A"],
//     ["A", "A", "A", "A", "A"],
//     ["A", "B", "A", "A", "A"],]
//   ),
// );

// function reducePyramid(base, current = []) {
//   if (base.length === 1) return base[0];
//   for (let i = 0 ; i < base.length - 1 ; i++) {
//     current.push(base[i] + base[i + 1]);
//   }
//   return reducePyramid(current, []);
// }

// console.log(reducePyramid([5n, 6n, 7n, 8n]));
