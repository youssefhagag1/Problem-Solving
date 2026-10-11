function solution(str) {
    let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let start = 0;
    let end = 0;
    let prevIndex = alpha.indexOf(str[0]);

    for (let i = 1; i < str.length; i++) {
        let currentIndex = alpha.indexOf(str[i]);

        if (currentIndex === prevIndex + 1) {
            end++;
        } else {
            let sub = str.slice(start, end + 1).split("").reverse().join("");
            str = str.slice(0, start) + sub + str.slice(end + 1);

            start = i;
            end = i;
        }

        prevIndex = currentIndex;
    }

    let sub = str.slice(start, end + 1).split("").reverse().join("");
    str = str.slice(0, start) + sub + str.slice(end + 1);

    return str;
}

console.log(solution("abcxdef")); // cbaxfed

