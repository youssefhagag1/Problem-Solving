// Proofread - fix "ie" to "ei" and capitalize after periods
function proofread(str) {
  str = str.toLowerCase();
  str = str.replace(/ie/g, "ei");
  str = str.replace(/\.\s(.)/g, (match, p1) => `. ${p1.toUpperCase()}`);
  return str[0].toUpperCase() + str.slice(1);
}
console.log(proofread("He haD iEght ShOTs of CAffIEne. cc. xx."));