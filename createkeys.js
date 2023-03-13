const crypto = require("crypto");
const fs = require("fs");

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
});


const exportedPublicKeyBuffer = publicKey.export({
  type: "pkcs1",
  format: "pem",
});
fs.writeFileSync("public.pem", exportedPublicKeyBuffer, { encoding: "utf-8" });

const exportedPrivateKeyBuffer = privateKey.export({
  type: "pkcs1",
  format: "pem",
});
fs.writeFileSync("private.pem", exportedPrivateKeyBuffer, {
  encoding: "utf-8",
});

