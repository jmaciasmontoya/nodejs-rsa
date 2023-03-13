const fs = require('fs')
const crypto = require('crypto')

const dataToEncrypt = crypto.randomBytes(32)
fs.writeFileSync('datos.txt', dataToEncrypt.toString('hex'), { encoding: 'utf-8' })
