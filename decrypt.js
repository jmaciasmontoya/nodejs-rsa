const crypto = require("crypto");
const fs = require("fs");

const encryptedData = fs.readFileSync("datos_encriptados.txt", {
  encoding: "utf-8",
});
const privateKey = fs.readFileSync("private.pem", { encoding: "utf-8" });

const decryptedData = crypto.privateDecrypt(
  {
    key: privateKey,
    padding: constants.RSA_NO_PADDING,
    //padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
  },
  Buffer.from(encryptedData, "base64")
);

fs.writeFileSync("datos_desencriptados.txt", decryptedData.toString("utf-8"), {
  encoding: "utf-8",
});
