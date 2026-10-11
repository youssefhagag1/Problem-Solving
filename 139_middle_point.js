function middle_point(...args) {
    const results = [];
    for(let i = 0 ; i < args.length ; i+=3){
        let current =
          Math.sqrt(args[i] ** 2 + args[i + 1] ** 2 + args[i + 2] ** 2) /
          (Math.abs(args[i]) + Math.abs(args[i + 1]) + Math.abs(args[i + 2]));
        results.push(current)
    }
    const max = results.indexOf(Math.max(...results));
    const min = results.indexOf(Math.min(...results));
    for(let i = 0 ; i < 3 ; i++){
        if(i !== max && i !== min) return i;
    }
}

