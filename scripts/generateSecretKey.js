const crypto = require("crypto");

function generateRandomString(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
}

const secretKey = generateRandomString(32);
console.log("Secret key:", secretKey);
