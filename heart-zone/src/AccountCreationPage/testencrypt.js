const { AES, enc } = require('crypto-js');

let password = 'meow1234';

const encryptWithAES = (password) => {
  const passphrase = 'DakotaandBeriSmellBad';
  return AES.encrypt(password, passphrase).toString();
};

const encryptedPassword = encryptWithAES('password', 'DakotaandBeriSmellBad');

const decryptWithAES = (ciphertext) => {
  const passphrase = 'DakotaandBeriSmellBad';
  const bytes = AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(enc.Utf8);
  return originalText;
};

console.log (password)
console.log('Encrypted Password:', encryptedPassword);