const fs = require('fs-extra')

const certData = fs.readJsonSync('./https.option.json')

Object.keys(certData).forEach((type) => {
  certData[type] = Buffer.from(certData[type].data)
})

module.exports = {
  devServer: {
    port: 3000,
    https: certData,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
