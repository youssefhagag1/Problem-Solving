function sumTarget(nums , target){
    const remaining = {};
    for(let num of nums){
        remaining[num] = target - num;
    }
    for(let num in remaining){
        if (remaining[String(num)] in remaining) return true;
    }
    return false
}

console.log(sumTarget([2 , 7 , 15 , 18] , 13))

