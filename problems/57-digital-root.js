// Digital root - recursively sum digits until single digit
function digitalRoot(n) {
  n = String(n);
  if (n.length === 1) return Number(n);
  return digitalRoot(Number(n[0]) + digitalRoot(n.slice(1)));
}

console.log(digitalRoot(493193));