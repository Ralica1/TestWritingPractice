function caesarCipher(string, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let shiftedString = "";

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (/[a-zA-Z]/.test(char)) {
      let charCode = char.charCodeAt();
      if (charCode >= 65 && charCode <= 90) {
        char = String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
        char = String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      }
    }
    shiftedString += char;
  }
  return shiftedString;
}

module.exports = caesarCipher;
