function evilTwin(obj) {
    const newObj = Object.create(obj , {y : {value : 5}});
    newObj.hasGoatee = true;
    return newObj;
}

console.log(evilTwin({x : 5}))

