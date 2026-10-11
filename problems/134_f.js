function f(n, m) {
  let result;
  if (n >= m) {
    result = (m * (m - 1)) / 2;
    for (let i = m + 1; i <= n; i++) {
      result += i % m;
    }
  } else {
    result = (n * (n + 1)) / 2;
  }
  return result;
}

