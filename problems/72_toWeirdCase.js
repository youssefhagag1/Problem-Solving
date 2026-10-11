function toWeirdCase(string) {
  return string
    .split(" ")
    .map(word =>
      word
        .split("")
        .map((ch, index) =>
          index % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase(),
        )
        .join(""),
    )
    .join(" ");
}

