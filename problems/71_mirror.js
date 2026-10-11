function mirror(text) {
    text = text.split(" ")
    let maxLength = Math.max(...text.map((word) => word.length));
    let stars = "*".repeat(maxLength + 4);
    let result = stars +"\n";
    for(let i = 0 ; i<text.length ; i++){
        text[i] = text[i].padStart(maxLength , " ")
        let current =
           text[i].slice(1).split("").reverse().join("");
        result += "*" + " " + current + " " + "*" + "\n";
    }
    result += stars;
    return result;
}

console.log(mirror("bjs kknmyxr uaslahnb ukxzg geurffw fimm"));

