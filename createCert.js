const fs = require('fs-extra')
// eslint-disable-next-line import/no-extraneous-dependencies
const devCerts = require('office-addin-dev-certs')

async function exec() {
  const httpsOptions = await devCerts.getHttpsServerOptions()
  fs.writeJson('./https.option.json', httpsOptions)
}

exec()
