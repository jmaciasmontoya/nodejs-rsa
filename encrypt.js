const fs = require("fs");
const crypto = require("crypto");

const dataToEncrypt = fs.readFileSync("datos.txt", {
  encoding: "utf-8",
});

const publicKey = Buffer.from(
  fs.readFileSync("public.pem", { encoding: "utf-8" })
);

const encryptedData = crypto.publicEncrypt(
  {
    key: publicKey,
    padding: crypto.constants.RSA_NO_PADDING,
    //padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
  },
  Buffer.from(dataToEncrypt)
);

fs.writeFileSync("datos_encriptados.txt", encryptedData.toString("base64"), {
  encoding: "utf-8",
});
