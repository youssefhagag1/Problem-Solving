// Detect brute force - detect IPs with 3+ consecutive login failures
function detectBruteForce(logs) {
  let s_ips = new Set();
  for (let i = 0; i < logs.length; i++) {
    if (logs[i].includes("LOGIN_FAIL")) {
      let current_ip = logs[i].split(" ")[0];
      let count = 1;
      for (let j = i + 1; j < logs.length; j++) {
        let checker_ip = logs[j].split(" ")[0];
        if (current_ip === checker_ip) {
          if (logs[j].includes("LOGIN_FAIL")) {
            count++;
          } else {
            break;
          }
        }
      }
      if (count >= 3) {
        s_ips.add(current_ip);
      }
    }
  }
  return [...s_ips].sort();
}