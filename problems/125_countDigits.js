function countDigits(num){
    let count = 1;
    num = Math.abs(num);
    while(num > 9){
        num = Math.floor(num / 10);
        count++;
    }
    return count
}

